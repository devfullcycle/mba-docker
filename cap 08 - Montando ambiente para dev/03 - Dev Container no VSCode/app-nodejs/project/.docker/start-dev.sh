#!/bin/bash

#preparar algum env
if [ ! -f "./.env" ]; then
    cp ./.env.example ./.env
fi

#instalar dependencias
npm install

#executar outros comandos
#    - migração
#    - seed

tail -f /dev/null