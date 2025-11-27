# Troubleshooting

## Dev Server Not Accessible

- Ensure Node.js v18+ is installed.
- Verify the dev server is running: `npm run dev`.
- Confirm port `5173` is open and not blocked by a firewall.

## PDF Viewer Issues

- The resume viewer expects `public/files/resume.pdf`.
- If the PDF does not render, ensure the file path is correct and accessible.

## Broken Images or Icons

- Check image paths. Assets should live under `public/images/` or `public/icons/`.
- Use absolute paths like `/images/asset.png`.

## Docker Container Healthcheck Failing

- Confirm the container exposes and maps the correct port (default: `8080` for production).
- Check container logs: `docker logs <container-name>`.
- If using custom Nginx config, validate with `nginx -t` inside the container.

## Build Fails on CI

- Use `npm ci` for deterministic installs when a lockfile is present.
- Clear caches if needed and re-run the build.

