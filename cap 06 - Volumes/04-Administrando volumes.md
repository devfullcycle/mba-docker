# 04 - Administrando volumes

## Listando volumes

Para listar os volumes disponíveis no host, execute o comando `docker volume ls`:

```bash
$ docker volume ls
```

## Removendo volumes

Para remover um volume, execute o comando `docker volume rm`:

```bash
$ docker volume rm <volume-name>
```

## Removendo apenas volumes não utilizados

Para remover apenas volumes não utilizados, execute o comando `docker volume prune` (que existem sem estar relacionados a nenhum container):

```bash
$ docker volume prune
```

## Removendo volumes relacionados a containers do Docker Compose

Para remover volumes relacionados a containers do Docker Compose, execute o comando `docker-compose down -v`:

```bash
$ docker-compose down -v
```

## Backup de um volume

Para fazer backup de um volume, execute o comando `docker run` com o volume que deseja fazer backup e o volume que deseja salvar o backup:

```bash
docker run --rm \
      -v "$VOLUME_NAME":/backup-volume \
      -v "$(pwd)":/backup \
      busybox \
      tar -zcvf /backup/my-backup.tar.gz /backup-volume
```

É possível também fazer backup na UI do Docker Desktop.

## Restaurando um backup

Para restaurar um backup, execute o comando `docker run` com o volume que deseja restaurar e o volume que deseja salvar o backup:

```bash
docker run --rm \
      -v "$VOLUME_NAME":/backup-volume \
      -v "$(pwd)":/backup \
      busybox \
      tar -zxvf /backup/my-backup.tar.gz -C /backup-volume
```