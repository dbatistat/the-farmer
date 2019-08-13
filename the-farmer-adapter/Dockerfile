FROM node:10-alpine

WORKDIR /home/node

ADD package*.json /home/node/
ADD dist/ /home/node/dist/

RUN npm install

CMD ["node", "dist/main.js"]
