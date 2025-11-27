# Dependencies stage (optimized caching)
FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN if [ -f package-lock.json ]; then npm ci; else npm install; fi

# Build stage
FROM node:20-alpine AS build
WORKDIR /app
COPY --from=deps /app/node_modules /app/node_modules
COPY . .
ENV NODE_ENV=production
RUN npm run build

# Development stage (optional)
FROM node:20-alpine AS dev
WORKDIR /app
COPY . .
RUN npm install
ENV HOST=0.0.0.0
EXPOSE 5173
CMD ["npm", "run", "dev"]

# Production runner stage
FROM nginx:stable-alpine AS runner
ENV NODE_ENV=production \
    NGINX_PORT=8080
COPY --from=build /app/dist /usr/share/nginx/html
RUN apk add --no-cache curl \
    && rm -f /etc/nginx/conf.d/default.conf \
    && mkdir -p /var/cache/nginx /var/run/nginx \
    && chown -R nginx:nginx /var/cache/nginx /var/run /var/log/nginx /usr/share/nginx/html
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
USER nginx
EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=5s --retries=3 CMD curl -fsS http://localhost:$NGINX_PORT/ || exit 1
CMD ["nginx", "-g", "daemon off;"]
