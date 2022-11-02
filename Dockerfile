FROM node:12-slim

WORKDIR /usr/src/app

ENV NODE_ENV=production
ENV ADMIN_URL=/admin-notification
ENV API_URL=/notification-api

COPY . .
RUN yarn
RUN yarn build

CMD ["yarn", "start"]
