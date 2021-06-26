FROM node:16-alpine

WORKDIR /app/frontend

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY  . .

RUN yarn build

RUN mv ./build /app/build
RUN rm -rf /app/frontend

WORKDIR /app/build

EXPOSE 3000