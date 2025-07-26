FROM node:22-alpine

WORKDIR /usr/src/app

COPY ./sorteio/package*.json ./

RUN npm install --force

COPY ./sorteio ./

CMD ["npm", "start"]
