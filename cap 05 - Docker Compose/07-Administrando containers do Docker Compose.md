# 07 - Administrando containers do Docker Compose

## Executando containers sem bloquear o terminal

Ao executar o comando `docker compose up`, o terminal ficará bloqueado até que o comando seja finalizado. Para executar os containers em background, execute o comando abaixo:

```bash
$ docker compose up -d
```

O parâmetro `-d` executa os containers em background, ou seja, o terminal não fica bloqueado. Tem o mesmo efeito do parâmetro `-d` do comando `docker run`.

## Listando containers

Podemos listar os containers que estão em execução. Para listar os containers que estão em execução, execute o comando abaixo:

```bash
$ docker compose ps
```

Se usar a opção `-a`, serão listados todos os containers, inclusive os que não estão em execução.

```bash
$ docker compose ps -a
```

Os comandos habituais do Docker também podem ser utilizados para listar os containers. Por exemplo:

```bash
$ docker ps
$ docker container ls
```

## Parando containers

Podemos parar os containers que estão em execução. Para parar os containers que estão em execução, execute o comando abaixo:

```bash
$ docker compose stop
```

Os comandos habituais do Docker também podem ser utilizados para parar os containers. Por exemplo:

```bash
$ docker stop id-do-container ou nome-container
```

**Dica:** Se você estiver rodando os containers sem `-d`, você pode parar os containers com o atalho `Ctrl+C`, mas se precisar `Ctrl+C` duas vezes, o Docker Compose irá parar os containers e remover os containers.

## Nomes dos containers

Quando executamos um container com o Docker Compose, o Docker Compose gera um nome aleatório para o container. Por exemplo:

```bash
$ docker compose up -d
Creating network "04-administrando-containers-do-docker-compose_default" with the default driver
Creating 04-administrando-containers-do-docker-compose_app_1 ... done
Creating 04-administrando-containers-do-docker-compose_db_1  ... done
```

O nome do container é composto pelo nome do diretório onde o arquivo `docker-compose.yml` está localizado, seguido do nome do serviço e um número sequencial.

Se você criar outra pasta com o mesmo nome de diretório e tiver um arquivo `docker-compose.yml` com as tags `services` com mesmo nome, o Docker Compose irá gerar usar o mesmo container anterior.

## Removendo containers

Podemos remover os containers que estão em execução. Para remover os containers que estão em execução, execute o comando abaixo:

```bash
$ docker compose rm
```

Os comandos habituais do Docker também podem ser utilizados para remover os containers. Por exemplo:

```bash
$ docker rm id-do-container ou nome-container
```

## Parando e removendo containers

Podemos parar e remover os containers que estão em execução. Para parar e remover os containers que estão em execução, execute o comando abaixo:

```bash
$ docker compose down
```


## Removendo imagens

Podemos remover as imagens dos containers que estão no arquivo `docker-compose.yml`. Para remover as imagens dos containers que estão no arquivo `docker-compose.yml`, execute o comando abaixo:

```bash
$ docker compose down --rmi
```

## Build

Podemos construir as imagens dos containers que estão no arquivo `docker-compose.yml`. Para construir as imagens dos containers que estão no arquivo `docker-compose.yml`, execute o comando abaixo:

```bash
$ docker compose build
```

Uma vez feito o build, podemos executar os containers com o comando `docker compose up`, mas podemos executar o comando `docker compose up` com a opção `--build` para construir as imagens e executar os containers. Para construir as imagens e executar os containers, execute o comando abaixo:

```bash
$ docker compose up --build
```

Portanto, o Docker Compose construirá as imagens dos containers e já subirá os containers.

Isto só é útil quando você altera o Dockerfile de um service, caso contrário, não é necessidade.


## Logs

Podemos visualizar os logs dos containers que estão no arquivo `docker-compose.yml`. Para visualizar os logs dos containers que estão no arquivo `docker-compose.yml`, execute o comando abaixo:

```bash
$ docker compose logs
```

## Executando comandos dentro de um container

Podemos executar comandos dentro de um container que está no arquivo `docker-compose.yml`. Para executar comandos dentro de um container que está no arquivo `docker-compose.yml`, execute o comando abaixo:

```bash
$ docker compose exec nome-do-container comando
```

## Executando up, stop, down, rm, logs somente em um service

Podemos executar os comandos `up`, `stop`, `down`, `rm`, `logs` somente em um service. Para executar os comandos `up`, `stop`, `down`, `rm`, `logs` somente em um service, execute o comando abaixo:

```bash
$ docker compose up nome-do-service
$ docker compose stop nome-do-service
$ docker compose down nome-do-service
$ docker compose rm nome-do-service
$ docker compose logs nome-do-service
```

