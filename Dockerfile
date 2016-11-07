FROM node:argon

RUN mkdir -p /var/apps/codepastespace
WORKDIR /var/apps/codepastespace

COPY package.json /var/apps/codepastespace
RUN npm install

COPY . /var/apps/codepastespace
COPY config.default.js /var/apps/codepastespace/config.js

CMD nodemon
