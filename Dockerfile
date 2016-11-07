FROM node:6

RUN mkdir -p /var/app
WORKDIR /var/app

COPY package.json /var/app
RUN npm install

COPY . /var/app

CMD nodemon
