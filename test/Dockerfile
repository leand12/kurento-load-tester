FROM node:16.13-alpine

WORKDIR /app

RUN npm install mocha chai webdriverio@4.6.1

COPY test.js .


# add entrypoint.sh
COPY ./entrypoint.sh .
RUN chmod +x ./entrypoint.sh

ENTRYPOINT ["/app/entrypoint.sh"]
