FROM node:16.10-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

# copy repo
COPY . .

EXPOSE 5000
CMD [ "node", "build:dev" ]
CMD [ "npm", "run", "start" ]
