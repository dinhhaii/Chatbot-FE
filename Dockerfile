FROM node:12

WORKDIR /usr/src/fe-hacademy

COPY package*.json ./

RUN npm install

COPY ./ ./

EXPOSE 3001

CMD ["npm", "run", "start"]