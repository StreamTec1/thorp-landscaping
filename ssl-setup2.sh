#!/bin/bash
set -e

echo "=== Setting up webroot for certificate challenge ==="
mkdir -p /var/www/certbot

python3 -c "
config = '''server {
    listen 80;
    server_name thorp-landscaping.com www.thorp-landscaping.com;

    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection upgrade;
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
    }
}'''
open('/etc/nginx/sites-available/thorp-landscaping', 'w').write(config)
"

nginx -t && systemctl reload nginx

echo "=== Getting SSL certificate ==="
certbot certonly --webroot \
  -w /var/www/certbot \
  -d thorp-landscaping.com \
  -d www.thorp-landscaping.com \
  --non-interactive \
  --agree-tos \
  --email thorpllc@gmail.com

echo "=== Configuring HTTPS ==="
python3 -c "
config = '''server {
    listen 80;
    server_name thorp-landscaping.com www.thorp-landscaping.com;

    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

    location / {
        return 301 https://\$host\$request_uri;
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
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection upgrade;
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
    }
}'''
open('/etc/nginx/sites-available/thorp-landscaping', 'w').write(config)
"

nginx -t && systemctl reload nginx

echo "=== Setting up auto-renewal ==="
(crontab -l 2>/dev/null; echo "0 3 * * * certbot renew --quiet --deploy-hook 'systemctl reload nginx'") | crontab -

echo "=== Done! Site is live at https://thorp-landscaping.com ==="
