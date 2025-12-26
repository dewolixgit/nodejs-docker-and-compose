FROM node:16-alpine AS builder

WORKDIR /app

COPY package.json ./

RUN npm i --legacy-peer-deps

COPY . .

RUN npm run build

FROM node:16-alpine AS production

WORKDIR /app

COPY package.json ./

RUN npm i --only=production --legacy-peer-deps && npm cache clean --force

COPY --from=builder /app/dist ./dist

RUN npm install -g pm2

COPY ecosystem.config.js ./

EXPOSE 3000

CMD ["pm2-runtime", "ecosystem.config.js"]

