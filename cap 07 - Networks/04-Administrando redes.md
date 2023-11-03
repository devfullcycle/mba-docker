# 04 - Administrando redes

## Listando redes

Para listar as redes disponíveis no host, execute o comando `docker network ls`:

```bash
$ docker network ls
```

## Removendo redes

Para remover uma rede, execute o comando `docker network rm`:

```bash
$ docker network rm <network-name>
```

## Removendo apenas redes não utilizadas

Para remover apenas redes não utilizadas, execute o comando `docker network prune` (que existem sem estar relacionados a nenhum container):

```bash
$ docker network prune
```

## Removendo redes relacionados a containers do Docker Compose

Para remover redes relacionados a containers do Docker Compose, execute o comando `docker-compose down`:

```bash
$ docker-compose down
```

