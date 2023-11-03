FROM node:20-slim

WORKDIR /usr/src/app

COPY index.js package.json ./

RUN npm install

EXPOSE 3000

CMD [ "node",  "/usr/src/app/index.js" ]