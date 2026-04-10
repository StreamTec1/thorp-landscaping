#!/bin/bash
set -e

echo "=== Stopping nginx so certbot can use port 80 ==="
systemctl stop nginx

echo "=== Getting SSL certificate via standalone ==="
certbot certonly --standalone \
  -d thorp-landscaping.com \
  -d www.thorp-landscaping.com \
  --non-interactive \
  --agree-tos \
  --email thorpllc@gmail.com

echo "=== Configuring nginx with HTTPS ==="
cat > /etc/nginx/sites-available/thorp-landscaping << 'NGINXCONF'
server {
    listen 80;
    server_name thorp-landscaping.com www.thorp-landscaping.com;

    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

    location / {
        return 301 https://$host$request_uri;
    }
}

server {
    listen 443 ssl;
    server_name thorp-landscaping.com www.thorp-landscaping.com;

    ssl_certificate /etc/letsencrypt/live/thorp-landscaping.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/thorp-landscaping.com/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers off;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
NGINXCONF

ln -sf /etc/nginx/sites-available/thorp-landscaping /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default
nginx -t
systemctl start nginx

echo "=== Setting up auto-renewal ==="
mkdir -p /var/www/certbot
(crontab -l 2>/dev/null | grep -v certbot; echo "0 3 * * * certbot renew --quiet --deploy-hook 'systemctl reload nginx'") | crontab -

echo "=== Done! Site is live at https://thorp-landscaping.com ==="
