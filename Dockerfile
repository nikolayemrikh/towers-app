FROM nginx:1.27-alpine AS base

FROM node:22.14-alpine AS build

WORKDIR /src
COPY /package.json /package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build
RUN npx supabase gen types --lang typescript --project-id rxukcfirznwuguwfavgu > src/supabase-db.types.ts

FROM base AS final

ENV SITE_ROOT=/usr/share/nginx/html
RUN chown -R nginx:nginx ${SITE_ROOT} && chmod -R 755 ${SITE_ROOT}

RUN chown -R nginx:nginx /var/cache/nginx && chown -R nginx:nginx /var/log/nginx && \
    touch /var/run/nginx.pid && chown -R nginx:nginx /var/run/nginx.pid && \
    mkdir -p -m 755 /build && chown -R nginx:nginx /build

COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=build /src/dist ${SITE_ROOT}

USER nginx

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
