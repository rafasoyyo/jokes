FROM node:current-slim

WORKDIR /home/scrapbook/tutorial/dockerJokes

COPY . .

RUN npm install

CMD [ "npm", "start" ]