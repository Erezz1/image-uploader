FROM node:18-alpine3.15 as dependencies
WORKDIR /app
COPY package.json package-lock.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:18-alpine3.15 as builder
RUN npm i -g @nestjs/cli
WORKDIR /app
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .
RUN yarn build

FROM node:18-alpine3.15 as runner
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn install
COPY --from=builder /app/dist ./dist

CMD ["node","dist/main"]
