FROM node:6.7.0

RUN mkdir /code

COPY . /code

WORKDIR /code

CMD ["node", "server.js"]