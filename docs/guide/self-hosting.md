# Self-Hosting

## Data directory

Files are written to `./data/YYYY-MM/` relative to the process working directory. The directory is created automatically on first use.

When running in Docker, mount a persistent volume at `/app/data`:

```yaml
# docker-compose.yml example
services:
  editor:
    image: your-image
    volumes:
      - ./data:/app/data
    ports:
      - "4321:4321"
```

## Security

The API endpoints have no built-in authentication. **Do not expose the server to the public internet** without adding access control.

A minimal nginx config with HTTP basic auth:

```nginx
location / {
    auth_basic "HTML Editor";
    auth_basic_user_file /etc/nginx/.htpasswd;
    proxy_pass http://localhost:4321;
    proxy_set_header Host $host;
}
```

Or restrict by IP:

```nginx
location / {
    allow 10.0.0.0/8;
    allow 192.168.0.0/16;
    deny all;
    proxy_pass http://localhost:4321;
}
```

## HTTPS

Use a reverse proxy (nginx, Caddy) to terminate TLS. The app itself speaks plain HTTP.

Caddy example:

```
editor.example.com {
    reverse_proxy localhost:4321
    basicauth {
        user $2a$...
    }
}
```

## Process management

Use systemd or Docker to keep the server running:

```ini
# /etc/systemd/system/html-editor.service
[Unit]
Description=astro-html-editor
After=network.target

[Service]
WorkingDirectory=/opt/astro-html-editor
ExecStart=/usr/bin/node dist/server/entry.mjs
Restart=on-failure
Environment=PORT=4321

[Install]
WantedBy=multi-user.target
```

```bash
systemctl enable --now html-editor
```
