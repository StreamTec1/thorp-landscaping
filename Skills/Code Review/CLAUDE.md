# StreamTec Platform — CLAUDE.md

This file governs all Claude Code sessions and automated code review for the StreamTec platform.
Read this fully before making any changes to the codebase.

---

## Project Overview

**Product:** StreamTec — AI chatbot SaaS for local service businesses (HVAC, plumbing, electrical, landscaping, property management)  
**Core agent:** Beck  
**Stack:** Node.js/Express (backend), React/Vite (frontend), Supabase (PostgreSQL + pgvector), OpenAI GPT-4o-mini, Twilio, Vapi, Stripe, DigitalOcean (Nginx + PM2)  
**Production URL:** https://app.streamtecservices.com  
**Server IP:** 165.227.183.189  
**PM2 process name:** streamtec-platform  
**Supabase project ID:** ufsjrpbbvatbzzgjvorr  

---

## 🔴 CRITICAL RULES — Never Violate These

### Environment Variables

- **Never hardcode secrets, keys, or credentials anywhere in the codebase.** All secrets must live in `.env` and be accessed via `process.env`.
- **Always check that a required env var exists before using it.** If it is undefined, throw a descriptive startup error rather than letting the app silently fail downstream.
- **Never commit `.env` to git.** Confirm `.env` is in `.gitignore` before any commit that touches config.
- Any new env var added to the code **must also be documented** in `.env.example` with a placeholder value and a comment explaining what it does.
- When adding a new integration (Twilio, Vapi, Stripe, Supabase, OpenAI), **list every required env var at the top of that module** as a comment block.

```js
// Required env vars for this module:
// TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_PHONE_NUMBER
```

### PM2 & Deployment

- **Never deploy without verifying the build succeeds locally first.**
- After any `pm2 restart streamtec-platform` or `pm2 reload`, always run `pm2 logs streamtec-platform --lines 50` immediately and confirm there are no startup errors before considering the deploy done.
- **Any change to environment variables requires a full PM2 restart** (`pm2 restart`), not just a reload. Reloads do not pick up new env vars.
- Never remove or rename a PM2 process without updating the ecosystem config file.
- If the server crashes on startup, the first place to check is always missing or malformed env vars.
- **Never run `pm2 delete` on `streamtec-platform` without explicitly confirming with the user.**

### Supabase & Database

- **Never write a query without confirming the table has RLS enabled** before deploying to production.
- Always use parameterized queries. Never construct SQL strings by concatenating user input.
- Any new table must have RLS policies defined before it is used in production routes.
- When using `supabase.from(...).select()`, always handle the `{ data, error }` destructure — never assume success.
- Never expose the Supabase `service_role` key to the frontend under any circumstances.
- The `anon` key is safe for client-side use only when RLS is properly configured.

---

## Admin Portal

### Known Issue: "No client selected" Error

The admin config pages (client settings, Beck configuration, integrations) depend on a `selectedClient` value being present in state or context. This is a recurring source of blank/broken admin pages.

**Rules:**
- Every admin config page component **must** check for a valid `selectedClient` before rendering any client-specific UI.
- If `selectedClient` is null or undefined, render a clear fallback UI (a dropdown to select a client, or a message) — never a blank page or an uncaught error.
- The client selection state must be initialized from the URL param, localStorage, or the first client in the list — never left undefined on mount.
- When fetching client-specific data, always guard the fetch with a `if (!selectedClient) return` before the API call.

```js
// Always do this pattern in admin config pages
if (!selectedClient) {
  return <ClientSelector />;  // or similar fallback
}
```

- Any route that is client-scoped must redirect to a client-selection screen if no client ID is present in the URL or state.

### Admin Page Checklist (apply to every admin route/component)

- [ ] `selectedClient` is validated before rendering client-specific content
- [ ] Loading states are shown while data is fetching (no blank screen during load)
- [ ] Error states are handled and displayed to the user
- [ ] API calls are guarded against undefined client ID
- [ ] Page does not crash silently — all errors are caught and logged

---

## API Routes & Webhooks

### General Rules

- Every API route must have explicit error handling. Never let an unhandled promise rejection crash the Express process.
- Use `try/catch` around every `async` route handler. The catch block must log the error and return an appropriate HTTP status code.
- Never return raw error objects or stack traces to the client in production. Return a sanitized message.
- All routes that modify data must validate the request body before processing. Reject malformed requests with `400` early.

```js
// Required pattern for every async route
router.post('/route', async (req, res) => {
  try {
    // validate input first
    if (!req.body.requiredField) {
      return res.status(400).json({ error: 'requiredField is required' });
    }
    // ... logic
  } catch (err) {
    console.error('[route-name] error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});
```

- **Every new API route must have a corresponding entry in the route documentation comment block** at the top of its router file.

### Twilio Webhooks

- All incoming Twilio webhook requests **must be validated using the Twilio signature** (`validateRequest`) before processing. Never process unvalidated webhook payloads.
- The Twilio webhook URL must always match exactly what is configured in the Twilio console — including trailing slashes. A mismatch causes silent failures.
- Twilio expects a `200` response quickly (within a few seconds). Any heavy processing must be deferred — respond immediately, then process async.
- Log every incoming Twilio webhook with a timestamp and the relevant phone number/SID for debugging.
- If the `TWILIO_AUTH_TOKEN` env var is missing, the server should refuse to start rather than silently skip validation.

```js
// Required at top of Twilio webhook handler
const twilioSignature = req.headers['x-twilio-signature'];
const isValid = twilio.validateRequest(
  process.env.TWILIO_AUTH_TOKEN,
  webhookUrl,
  req.body,
  twilioSignature
);
if (!isValid) {
  return res.status(403).send('Forbidden');
}
```

### Vapi Webhooks

- Vapi webhook endpoint: `https://app.streamtecservices.com/api/vapi-webhook`
- All Vapi webhook payloads must be logged on receipt (before processing) so failures can be reconstructed.
- Always confirm the Vapi `call.id` and `assistant.id` are present before branching on event type.
- Handle `call-ended`, `call-failed`, and `transcript-ready` events explicitly — do not use a catch-all that silently swallows unknown events.
- If the Vapi webhook fails to process (e.g., DB write fails), return `500` so Vapi can retry, not `200`.

### Stripe Webhooks & Billing

- **Always verify the Stripe webhook signature** using `stripe.webhooks.constructEvent()` with the raw request body. Never parse the body before signature verification.
- The raw body must be preserved — do not run the Stripe webhook route through `express.json()` middleware. Use `express.raw()` for that specific route.
- Handle idempotency: check if an event has already been processed before acting on it (store processed event IDs in Supabase).
- Always handle these events explicitly: `checkout.session.completed`, `customer.subscription.updated`, `customer.subscription.deleted`, `invoice.payment_failed`.
- Log every Stripe event with its `event.id` and `event.type` on receipt.
- Never update a client's subscription tier in the database without first confirming the Stripe event signature is valid.

```js
// Required pattern for Stripe webhook route
router.post('/stripe-webhook', express.raw({ type: 'application/json' }), (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;
  try {
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error('[stripe-webhook] signature verification failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }
  // process event
});
```

---

## CRM Webhooks (Session 29 Pattern)

- All outbound CRM webhook calls (Zapier, Make, HubSpot, GoHighLevel, Pipedrive) must use the exponential-backoff retry logic established in Session 29.
- HMAC-SHA256 signing must be applied to all outbound CRM webhook payloads.
- Never send a webhook without first confirming the client has a webhook URL configured.
- Log every outbound webhook attempt (URL, payload hash, response status).

---

## Frontend — React/Vite

- Never fetch client-specific data in a component without checking that the client ID is defined first.
- Always show a loading indicator while async data is fetching — never render an empty UI that looks like a bug.
- Use `useEffect` cleanup functions for any subscriptions or timers to prevent memory leaks.
- Never store sensitive values (API keys, tokens) in React state, localStorage, or sessionStorage.
- All forms must validate inputs client-side before sending to the API.

---

## React — Rules of Hooks

### Never Return Early Before Hook Calls

React requires hooks to be called in the **same order on every render**. An early return before any hook call violates this rule and causes a runtime crash that breaks the entire admin or portal app.

**WRONG — conditional return before hooks:**
```js
export default function MyComponent() {
  const { user } = useAuth();
  if (!user) return null; // ❌ Returns before hooks below

  const [state, setState] = useState('');
  const mutation = useMutation();
}
```

**RIGHT — all hooks first, conditional return after:**
```js
export default function MyComponent() {
  const { user } = useAuth();
  const [state, setState] = useState(''); // ✅ All hooks declared first
  const mutation = useMutation();

  if (!user) return null; // ✅ Guard after all hooks
}
```

**RIGHT — container + content pattern (for complex admin pages):**
```js
export default function MyPage() {
  const { selectedClient: client } = useClient();
  if (!client) return <div>Select a client to continue.</div>;
  return <MyPageContent client={client} />;
}

function MyPageContent({ client }) {
  // All hooks are safe here — this component always renders when mounted
  const [state, setState] = useState('');
  const { data } = useQuery(...);
}
```

This is the **required pattern for all admin service pages** (MissedCall, GoogleReview, Scheduling, AIReceptionist, GrowWithBeck, CRM, etc.) because they all depend on `useClient()`.

### Recurring Bug: `useClient()` Destructure

The admin `ClientContext` exports `useClient()` which returns `{ selectedClient, selectClient, ... }`. Every admin page must destructure as:

```js
const { selectedClient: client } = useClient();
```

**NOT** `const { client } = useClient()` — `client` is not a key in that context object. This has caused blank pages in Sessions 22, 23, and 29.

### Portal Tier-Gated Pages

Portal pages that check a user's tier (e.g., `canGrow`, `canSchedule`) must declare ALL hooks before the tier guard:

```js
export default function TierGatedPage() {
  const { user } = useAuth();
  const effectiveTier = user?.feature_tier || user?.plan_tier || 'starter';
  const canAccess = ['growth', 'professional', 'enterprise'].includes(effectiveTier);

  // ✅ All hooks BEFORE the early return
  const [state, setState] = useState('');
  const mutation = useMutation();

  if (!canAccess) {
    return <UpgradePrompt />;
  }
  // ...
}
```

---

## Code Review Checklist

Run this mentally before every PR or commit:

**Environment & Config**
- [ ] No hardcoded secrets or credentials
- [ ] New env vars documented in `.env.example`
- [ ] Env var existence checked at startup for critical vars

**Deployment Safety**
- [ ] Build tested locally before deploying
- [ ] PM2 restart (not reload) used if env vars changed
- [ ] `pm2 logs` checked after deploy

**Admin Portal**
- [ ] All admin pages handle missing `selectedClient` with a fallback UI
- [ ] No blank page states on load or error

**API & Webhooks**
- [ ] All async routes wrapped in `try/catch`
- [ ] Twilio signature validated on every incoming webhook
- [ ] Vapi events logged on receipt
- [ ] Stripe webhook uses raw body and `constructEvent` signature check
- [ ] Stripe events handled idempotently

**Database**
- [ ] All new tables have RLS policies
- [ ] No string-concatenated SQL
- [ ] `{ data, error }` destructure handled on every Supabase call

**React Hooks**
- [ ] No early return before any `useState`, `useEffect`, `useMutation`, `useQuery`, or custom hook call
- [ ] Admin pages that depend on `useClient()` use the container/content pattern
- [ ] Portal tier-gated pages declare all hooks before the tier check guard
- [ ] `useClient()` is destructured as `const { selectedClient: client }` — NOT `const { client }`

**General**
- [ ] No stack traces exposed to client in production
- [ ] All error paths return appropriate HTTP status codes
- [ ] No `console.log` left with sensitive data (keys, tokens, PII)

---

## Naming & Conventions

- Route files: `kebab-case` (e.g., `vapi-webhook.js`, `stripe-billing.js`)
- React components: `PascalCase`
- Utility functions: `camelCase`
- Environment variables: `SCREAMING_SNAKE_CASE`
- Database tables: `snake_case`
- Always prefer early returns over deeply nested conditionals
- Every new API route must have a comment explaining what it does, its method, and its expected request/response shape

---

## What Claude Should Always Flag in Review

- Any `process.env.X` used without a fallback check or startup guard
- Any webhook handler that does not validate the incoming signature
- Any admin component that does not guard against a null/undefined client
- Any `async` route handler missing a `try/catch`
- Any Supabase query that does not handle the `error` field
- Any `pm2 reload` recommendation when env vars have changed (should be `pm2 restart`)
- Any hardcoded URL, key, phone number, or credential
- Any Stripe webhook route that runs through `express.json()` instead of `express.raw()`
