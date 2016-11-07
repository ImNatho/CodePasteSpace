FROM node:argon

RUN mkdir -p /var/apps/codepastespace
WORKDIR /var/apps/codepastespace

COPY package.json /var/apps/codepastespace
RUN npm install

COPY . /var/apps/codepastespace

EXPOSE 127.0.0.1:5001:8080

CMD ['nodemon', 'index.js']
