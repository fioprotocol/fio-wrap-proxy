FROM node:lts

WORKDIR /usr/app

COPY . .

RUN npm install

CMD ["bash","-c","node server.js"]