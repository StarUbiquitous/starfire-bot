FROM node:16-alpine as builder

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn

COPY . .

RUN yarn build

FROM node:16-alpine

WORKDIR /app

EXPOSE 3000

COPY --from=builder /app/dist/ /app

CMD [ "node", "index.js" ]