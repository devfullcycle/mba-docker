FROM node:20-slim

RUN apt update && apt install -y \
        curl \
        git \
        procps \
        iputils-ping \
        fonts-powerline

USER node

WORKDIR /home/node/app

CMD [ "/home/node/app/.docker/start-dev.sh" ]