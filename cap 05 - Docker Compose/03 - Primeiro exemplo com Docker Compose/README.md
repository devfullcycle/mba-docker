# 03 - Primeiro exemplo com Docker Compose

Vamos criar um arquivo chamado `docker-compose.yml` com o seguinte conteúdo:

```yml
version: '3'

services:
  app:
    build: .
    restart: always
    ports:
      - 3000:3000
    
  db:
    image: mysql:8.0.30-debian
    environment:
      MYSQL_ROOT_PASSWORD: root
```

Agora vamos executar o comando `docker compose up` para subir os containers.

```bash
$ docker-compose up
```

Este comando é como se fosse o `docker run`, mas ele vai subir todos os containers de uma vez só.

Já nos logs podemos ver que o container `app` se conectou no banco de dados, isto aconteceu, porque o Docker Compose já cria uma rede padrão entre os containers, portanto eles conseguem se comunicar através do **nome do serviço**.

# Arquivo docker-compose.yml

Ao executar o `docker compose up` ou outros comandos com o Docker Compose, a ferramenta irá procurar no diretório atual 2 arquivos:

- `docker-compose.yml`
- `docker-compose.yaml`

Os 2 são o padrão de configuração do Docker Compose, mas é possível nomea-los com outros nomes e coloca-los em outros diretórios, mas para isto é necessário passar o nome do arquivo com a opção `-f` ou `--file`.

## Tags

Todas as instruções do Docker Compose no arquivo `docker-compose.yml` são chamadas de **tags**, e cada tag tem uma função específica. Veja mais detalhes sobre cada tag em [https://docs.docker.com/compose/compose-file/03-compose-file/](https://docs.docker.com/compose/compose-file/03-compose-file/)

### version

A tag `version` define a versão do Manifesto Docker Compose que será utilizada para ler o arquivo `docker-compose.yml`. Ela não é obrigatória, mas acaba sendo validada pelo Docker Compose, vamos supor que você esteja utilizado uma tag mais abaixo no YAML que não é suportada pela versão do Docker Compose que você está utilizando, neste caso o Docker Compose irá retornar um erro.

### services

A tag `services` é onde você define os serviços que serão executados pelo Docker Compose, cada serviço é um container. Ela é obrigatória.

### build

A tag `build` é onde você define como o Docker Compose irá construir a imagem do container. Ela não é obrigatória, mas se você não definir esta tag, deve definir pelo menos a tag `image`. Portanto, ela serve para apontar para o Dockerfile que será utilizado para construir a imagem do container. É possível definir o caminho do Dockerfile com a opção `context`, por padrão o Docker Compose irá procurar o Dockerfile no diretório atual.

### image

A tag `image` é onde você define qual imagem será utilizada para construir o container. Ela não é obrigatória, mas se você não definir esta tag, deve definir pelo menos a tag `build`. Portanto, ela serve para apontar para uma imagem que já está disponível no Docker Hub, de um Container Registry privado ou do Container Registry local.

### ports

A tag `ports` é onde você define quais portas serão publicadas pelo container. Ela não é obrigatória, mas se você não definir esta tag, o container não irá publicar nenhuma porta. Portanto, ela serve para publicar as portas do container no host.

### environment

A tag `environment` é onde você define as variáveis de ambiente que serão utilizadas pelo container.

### restart

A tag `restart` é onde você define como o container será reiniciado. Ela não é obrigatória, portanto, ela serve para definir como o container será reiniciado, por exemplo, se o container falhar, ele será reiniciado automaticamente.

### deploy

A tag `deploy` é onde você define como o container será implantado em um orquestrador de containers, como o Docker Swarm ou o Kubernetes. Ela não é obrigatória, portanto, ela serve para definir como o container será implantado em um orquestrador de containers. Mas, ele funciona normalmente com o Docker Compose.
