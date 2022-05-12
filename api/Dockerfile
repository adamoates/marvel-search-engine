FROM node:latest

WORKDIR /api

COPY package*.json .

RUN npm install

COPY . /api

EXPOSE 4000

CMD [ "npm", "start"]