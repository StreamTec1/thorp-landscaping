#!/bin/bash
set -e

echo "=== Adding swap for Next.js build ==="
if [ ! -f /swapfile ]; then
    fallocate -l 1G /swapfile
    chmod 600 /swapfile
    mkswap /swapfile
    swapon /swapfile
    echo '/swapfile none swap sw 0 0' >> /etc/fstab
fi

echo "=== Updating system ==="
apt-get update -y
apt-get install -y git nginx certbot python3-certbot-nginx

echo "=== Installing Node.js 20 ==="
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt-get install -y nodejs

echo "=== Installing PM2 ==="
npm install -g pm2

echo "=== Cloning repository ==="
git clone https://github.com/StreamTec1/thorp-landscaping.git /var/www/thorp-landscaping
cd /var/www/thorp-landscaping

echo "=== Building application ==="
npm ci
npm run build

echo "=== Copying static assets ==="
cp -r public .next/standalone/
cp -r .next/static .next/standalone/.next/

echo "=== Starting with PM2 ==="
PORT=3000 pm2 start /var/www/thorp-landscaping/.next/standalone/server.js --name thorp-landscaping
pm2 startup systemd -u root --hp /root
pm2 save

echo "=== Configuring nginx ==="
cat > /etc/nginx/sites-available/thorp-landscaping << 'NGINXCONF'
server {
    listen 80;
    server_name thorp-landscaping.com www.thorp-landscaping.com _;

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
systemctl enable nginx
systemctl restart nginx

echo "=== Setup complete! Site running at http://159.89.193.54 ==="
