FROM node:23.4.0-alpine

WORKDIR /app

COPY package.json .

RUN npm install

ENV NODE_ENV production

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "node", "build" ]