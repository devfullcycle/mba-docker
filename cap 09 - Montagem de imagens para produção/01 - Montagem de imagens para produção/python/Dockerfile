FROM python:3.9.0-slim as builder

ENV PYTHONUNBUFFERED 1

RUN apt update && apt install --no-install-recommends -y libpq-dev gcc curl git zlib1g-dev libjpeg-dev && \
    pip install pdm

RUN useradd -ms /bin/bash python

WORKDIR /home/python/app

COPY pdm* pyproject.toml ./
RUN pdm export --format requirements --pyproject > /home/python/app/requirements.txt && \
    pip wheel -r requirements.txt --wheel-dir=/home/python/app/wheels

FROM node:20-slim as static

RUN mkdir /home/node/app
WORKDIR /home/node/app

COPY package*.json ./
RUN npm ci

COPY js/ ./js
COPY webpack.mix.js ./

RUN npm run prod && rm -rf node_modules

FROM python:3.9.0-slim

ENV PYTHONUNBUFFERED 1

RUN useradd -ms /bin/bash python

COPY --chown=python:python . /home/python/app
COPY --from=builder --chown=python:python /home/python/app /home/python/app
COPY --from=static --chown=python:python /home/node/app/static /home/python/app/static

RUN apt update && apt install --no-install-recommends -y nginx-light && \
    pip install --no-index --find-links=/home/python/app/wheels -r /home/python/app/requirements.txt && \
    chmod +x /home/python/app/.docker/start.prod.sh && \
    apt-get autoremove -y && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/* /home/python/app/wheels && \
    mkdir -p /var/log/nginx && \
    mkdir -p /var/log/gunicorn && \
    chown -R python:python /var/log && \
    mkdir -p /var/lib/nginx/proxy && \
    mkdir -p /var/lib/nginx/body && \
    mkdir -p /var/lib/nginx/fastcgi && \
    mkdir -p /var/lib/nginx/uwsgi && \
    chown -R python:python /var/lib/nginx && \
    chown -R python:python /etc/nginx/nginx.conf && \
    touch /run/nginx.pid && \
    chown -R python:python /run/nginx.pid && \
    sed -i '1d' /etc/nginx/nginx.conf

COPY .docker/nginx.conf /etc/nginx/sites-available/default

USER python
WORKDIR /home/python/app

ENTRYPOINT ["./.docker/start.prod.sh"]