# 07 - Publicando portas

Imaginando um cenário em que precisamos rodar um servidor web dentro de um container, como podemos acessar esse servidor web? Como podemos acessar o servidor web que está rodando dentro de um container?

Vamos rodar o nginx:

```bash
docker run --rm --name nginx nginx
```

O comando acima executa o nginx dentro de um container. Mas, como podemos acessar o nginx que está rodando dentro do container?

Ao rodar o comando `docker ps`, podemos ver que o nginx está rodando na porta `80`:

Mas, esta porta 80 está dentro do namespace do container, ou seja, não podemos acessar essa porta de fora do container. Para acessar o nginx que está rodando dentro do container, precisamos publicar a porta `80` do container para uma porta do host.

Para publicar a porta `80` do container para a porta `8080` do host, execute o comando abaixo:

```bash
docker run --rm --name nginx -p 8080:80 nginx
```

O parâmetro `-p` publica a porta `80` do container para a porta `8080` do host.

Podemos ter outro container rodando na porta `80` do host, mas não podemos ter dois containers rodando na mesma porta do host. Se tentarmos publicar a porta `80` do container para a porta `8080` do host, mas já tivermos outro container rodando na porta `8080` do host, o Docker irá retornar um erro.

Este regra é um conceito básico entre processos e portas. Um processo pode rodar em uma porta, mas não podemos ter dois processos rodando na mesma porta.







