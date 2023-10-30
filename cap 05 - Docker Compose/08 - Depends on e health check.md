# 08 - Depends on e health check

## Depends on

O Docker Compose permite definir dependências entre os containers, ou seja, um container só será iniciado após o container que ele depende ser iniciado.

Isto é importante, porque o Docker Compose não deixará o container que depende de outro container ser iniciado, caso o container que ele depende não esteja em execução.

Um detalhe importante é que o `depends_on` não garante, por exemplo, que o banco de dados já esteja pronto para receber conexões, ele só garante que o container do banco de dados já está em execução. Para garantir que o banco de dados já esteja pronto para receber conexões, é necessário utilizar o `healthcheck`.

Para definir dependências entre os containers, utilize a tag `depends_on`. Veja o exemplo abaixo:

```yml
version: "3"

services:
  app:
    build: .
    ports:
      - 3000:3000
    depends_on:
      - db

  db:
    image: mysql:8.0.30-debian
    environment:
      MYSQL_ROOT_PASSWORD: root
```

## Health check

O `healthcheck` é uma instrução para definir um comando que será executado periodicamente dentro do container para verificar se o container está saudável.

O `healthcheck` é importante, porque o `depends_on` não garante que o container já esteja pronto para receber conexões, ele só garante que o container já está em execução.

O `healthcheck` é uma instrução que pode ser utilizada no Dockerfile ou no arquivo `docker-compose.yml`.

Para definir um `healthcheck` no Dockerfile, utilize a instrução `HEALTHCHECK`. Veja o exemplo abaixo:

```Dockerfile
FROM node:20-slim

WORKDIR /usr/src/app

COPY . .

RUN npm install

EXPOSE 3000

CMD ["node", "index.js"]

HEALTHCHECK --interval=30s --timeout=3s \
  CMD curl -f http://localhost:3000 || exit 1
```

Para definir um `healthcheck` no arquivo `docker-compose.yml`, utilize a tag `healthcheck`. Veja o exemplo abaixo:

```yml
version: "3"

services:
  app:
    build: .
    ports:
      - 3000:3000
    depends_on:
      - db

  db:
    image: mysql:8.0.30-debian
    environment:
      MYSQL_ROOT_PASSWORD: root
    healthcheck:
      test: ["CMD", "mysqladmin", "ping", "-h", "localhost"]
      interval: 1m30s
      timeout: 10s
      start_period: 40s
      retries: 3
```

Sobre as opções do `healthcheck`:

- `test`: é o comando que será executado dentro do container para verificar se o container está saudável. O comando pode ser definido como uma string ou como uma lista.

- `interval`: especifica o tempo entre a verificação de integridade do contêiner do aplicativo. ele aguarda o tempo especificado de uma verificação para outra.

- `timeout`: especifica o tempo que a verificação de integridade aguarda uma resposta para considerar o status do contêiner. Por exemplo, se definirmos 30 segundos e nosso servidor não responder em 30 segundos, será considerado com falha.

- `start_period`: especifica o número de segundos que o contêiner precisa para iniciar; o exame de saúde aguardará esse momento para começar.

- `retries`: especifica o número de falhas consecutivas na verificação de integridade necessárias para declarar o status do contêiner como não íntegro. A verificação de integridade tentará apenas o número de novas tentativas especificado. Se o servidor falhar consecutivamente até os tempos especificados, ele será considerado não íntegro.

Com a definição de um `healthcheck`, podemos usar o depends_on para garantir que o container só será iniciado após o container que ele depende ser iniciado e o `healthcheck` para garantir que o container já esteja pronto para receber conexões.

Exemplo:

```yml
version: "3"

services:
  app:
    build: .
    ports:
      - 3000:3000
    depends_on:
      db:
        condition: service_healthy

  db:
    image: mysql:8.0.30-debian
    environment:
      MYSQL_ROOT_PASSWORD: root
    healthcheck:
      test: ["CMD", "mysqladmin", "ping", "-h", "localhost"]
      interval: 1m30s
      timeout: 10s
      start_period: 40s
      retries: 3
```

O `depends_on` possui a opção `condition`, que pode ser `service_started` ou `service_healthy`. A opção `service_started` é o padrão, ela não verifica se o container está saudável, ela só verifica se o container já está em execução. A opção `service_healthy` verifica se o container está saudável, ou seja, se o `healthcheck` do container retornou sucesso. Quando usamos o `depends_on`, como no exemplo lá em cima, a condição padrão é o `service_started`.

Ele ainda possui o `service_completed_successfully`, isso especifica que se espera que uma dependência seja executada até a conclusão bem-sucedida antes de iniciar um serviço dependente. Esta instrução é normalmente usada para casos mais específicos, por exemplo, não basta só verificar se o banco está aceitando conexões, mas é necessário verificar se um scritpt de migração foi executada para outros usarem o container. O banco de dados pode ter outra dependência que seria um container apenas para executar a migrações, então o `service_completed_successfully` seria usado para verificar se o container de migração foi executado e se o banco de dados também está ok, ou seja, ele analisa a conjuntura de dependências.

