# 03 - Criando volumes automaticamente

É possível criar volumes automaticamente usando o Dockerfile ou o Docker Compose.

## Criando volumes no Dockerfile

É possível criar volumes no Dockerfile usando a instrução `VOLUME`.

```dockerfile
FROM mysql:8.0.30-debian

VOLUME /var/lib/mysql
```

Esta instrução cria um volume gerenciado pelo Docker. O volume será criado automaticamente quando o container for iniciado pela primeira vez.

## Criando volume com "docker run"

É possível criar volumes usando o comando `docker run -v <volume-name>`.

```bash
docker run -d --rm name db -v $(pwd):/var/lib/mysql -e MYSQL_ROOT_PASSWORD=root mysql:8.0.30-debian
```

Esta instrução cria um volume que é gerenciado pelo usuário. Teremos uma cópia do volume no diretório atual. Qualquer mudança feita no volume dentro do container será refletida no diretório atual e vice-versa.

Esta opção é muito interessante para desenvolvimento, porque podemos editar/criar/excluir os arquivos localmente e será refletido no container através do volume.

No caso de banco de dados também é interessante, porque podemos fazer backup dos dados do banco de dados localmente, mesmo que o volume seja apagado do Docker, os dados ainda estarão salvos no diretório atual.

## Criando volumes com Docker Compose

É possível criar os volumes gerenciados pelo usuário no Docker Compose, exemplo:

```yaml
version: "3"

services:
  app:
    build: .
    volumes:
      - .:/usr/src/app

  db:
    image: mysql:8.0.30-debian
    environment:
      MYSQL_ROOT_PASSWORD: root
    volumes:
      - .:/var/lib/mysql
```

Antes criamos um volume externo, totalmente gerenciado pelo Docker, mas é possível criar um volume totalmente gerenciado pelo Docker com a instrução `volumes` no começo ou final do arquivo, exemplo:

```yaml
version: "3"

services:
  app:
    build: .
    volumes:
      - my-volume-node:/usr/src/app

  db:
    image: mysql:8.0.30-debian
    environment:
      MYSQL_ROOT_PASSWORD: root
    volumes:
      - my-volume-db:/var/lib/mysql

volumes:
  my-volume-node:
  my-volume-db:
```

Estes volumes serão criados automaticamente quando os containers forem iniciados, podemos passar mais opções como drive de armazenamento e etc, mas isto é suficiente para criar um volume que o usuário não tem acesso diretamente, isto é muito comum para ambientes de produção.

Qualquer tipo de volume é gerenciado pelo Docker, podemos listar todos os volumes com o comando `docker volume ls`.

Estes 2 volumes criados acima são nomeados com o `nome do diretório atual + o nome do volume`, ou seja, a ideia é que estes volumes tenham influência sob os containers locais, apesar de poderem ser usados por outros containers de outros `docker-compose.yaml`