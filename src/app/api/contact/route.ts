import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { name, email, phone, subject, message } = await request.json();

  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { error: "Missing required fields." },
      { status: 400 }
    );
  }

  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (!smtpUser || !smtpPass) {
    console.error("SMTP credentials not configured.");
    return NextResponse.json(
      { error: "Email service not configured." },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  await transporter.sendMail({
    from: `"Thorp Landscaping Website" <${smtpUser}>`,
    to: "thorpllc@gmail.com",
    replyTo: email,
    subject: `Website Inquiry: ${subject}`,
    text: `New contact form submission from the Thorp Landscaping website.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\nService Needed: ${subject}\n\nMessage:\n${message}`,
    html: `
      <h2>New Website Inquiry</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
      <p><strong>Service Needed:</strong> ${subject}</p>
      <hr />
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br>")}</p>
    `,
  });

  return NextResponse.json({ success: true });
}
