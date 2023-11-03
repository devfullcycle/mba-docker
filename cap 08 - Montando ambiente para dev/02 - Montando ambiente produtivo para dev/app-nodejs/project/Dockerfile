FROM node:20-slim

RUN apt update && apt install -y \
        curl \
        git \
        wget \
        zsh \
        procps \
        iputils-ping \
        fonts-powerline

USER node

WORKDIR /home/node/app

RUN sh -c "$(wget -O- https://github.com/deluan/zsh-in-docker/releases/download/v1.1.5/zsh-in-docker.sh)" -- \
    -p https://github.com/zdharma-continuum/fast-syntax-highlighting \
    -p https://github.com/zsh-users/zsh-autosuggestions \
    -p https://github.com/zsh-users/zsh-completions \
    -a 'export TERM=xterm-256color'

CMD [ "/home/node/app/.docker/start-dev.sh" ]