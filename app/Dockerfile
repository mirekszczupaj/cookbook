# Build stage
FROM node:lts as build-stage
WORKDIR /app
COPY ./ ./

RUN npm install -g pnpm
RUN pnpm install
RUN pnpm run build

# Production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
