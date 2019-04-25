FROM node:10.15.3
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN yarn install && yarn cache clean
EXPOSE 3000

