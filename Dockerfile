FROM node:20-alpine AS build-stage
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM busybox:1.35
RUN adduser -D static
USER static
WORKDIR /home/static
COPY --from=build-stage /app/dist .
CMD ["busybox", "httpd", "-f", "-v", "-p", "8080"]