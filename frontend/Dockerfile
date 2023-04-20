FROM node:18

WORKDIR /frontend

RUN npm i -g nodemon

COPY package*.json ./
RUN npm install
COPY . ./

EXPOSE 5173

CMD ["npm", "run", "dev"]