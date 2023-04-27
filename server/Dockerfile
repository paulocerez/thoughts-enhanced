FROM node:18

WORKDIR /backend

RUN npm i -g nodemon

COPY package*.json ./
RUN npm install
COPY . ./
RUN npx prisma generate

# EXPOSE 3001

CMD ["npm", "start"] 