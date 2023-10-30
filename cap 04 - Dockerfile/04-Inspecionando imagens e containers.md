# 04 - Inspecionando containers e imagens

O comando `docker inspect` inspeciona um ou mais objetos Docker, por exemplo, imagens, containers, volumes e networks.

O comando `docker inspect` retorna informações sobre o objeto Docker em formato JSON.

Por exemplo, para inspecionar a imagem `node-nginx`, execute o comando `docker inspect node-nginx`:

```bash
$ docker inspect node-nginx
```

O comando `docker inspect` retorna informações sobre a imagem `node-nginx` em formato JSON.

O comando `docker inspect` retorna muitas informações sobre a imagem `node-nginx`. Lembra do comando `runc spec`? O comando `docker inspect` retorna informações sobre a imagem `node-nginx` em formato JSON, e o comando `runc spec` retorna informações sobre o container `node-nginx` em formato JSON.

O comando `docker inspect` é muito útil para inspecionar imagens, containers, volumes e networks.

Dentro da OCI, temos padrões de especificação para imagens, containers, volumes e networks. Por isso, que esta imagem é compatível com o Docker, Podman, CRI-O e etc.

Vamos inspecionar um container em execução, para isto, execute o comando `docker inspect container-id`

```bash
$ docker inspect 0b0
```

O comando `docker inspect` retorna informações sobre o container `0b0` em formato JSON.