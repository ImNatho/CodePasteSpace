FROM node:argon

RUN mkdir -p /var/app
WORKDIR /var/app

COPY package.json /var/app
RUN npm install

COPY . /var/app
COPY config.default.js /var/app/config.js

CMD npm start
