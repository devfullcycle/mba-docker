# 02 - Criando volumes pelo "volume create"

É possível criar volumes usando o comando `docker volume create`.

```bash
docker volume create my-volume
```

É possível criar volumes com mais opções, usando plugin e outros tipos de drives de armazenamento. Para mais informações, consulte a documentação oficial do Docker.

## Onde os volumes ficam armazenados

Os volumes gerenciados pelo Docker ficam armazenados no diretório `/var/lib/docker/volumes` do host.

```bash
sudo ls /var/lib/docker/volumes
```

Se inspecionarmos o volume `my-volume` criado anteriormente, podemos ver que ele está armazenado no diretório `/var/lib/docker/volumes/my-volume/_data`.

```bash
docker volume inspect my-volume
```

## Usando volumes no "docker run"

Para usar um volume em um container, basta usar a opção `-v` ou `--volume` no comando `docker run`.

```bash
docker run -d --rm --name db -v my-volume:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=root mysql:8.0.30-debian
```

O container pode ser parado ou removido, mas o volume permanecerá no host. Qualquer novo container usará os dados já existentes.


## Usando volumes no "docker-compose"

Para usar um volume em um container, basta usar a opção `volume` ou `volumes` no arquivo `docker-compose.yml`.

```yaml
version: "3"

services:
  db:
    image: mysql:8.0.30-debian
    container_name: db
    environment:
      MYSQL_ROOT_PASSWORD: root
    volumes:
      - my-volume:/var/lib/mysql
  
  nginx1:
    image: nginx:1.19.10-alpine
    ports:
      - 8080:80
    volumes:
      - my-volume-nginx:/usr/share/nginx/html
  
  nginx2:
    image: nginx:1.19.10-alpine
    ports:
      - 8081:80
    volumes:
      - my-volume-nginx:/usr/share/nginx/html
    
volumes:
    my-volume:
        external: true
    my-volume-nginx:
        external: true
```

Algo interessante com volumes é que podemos compartilhar o mesmo volume entre vários containers. No exemplo acima, o volume `my-volume-nginx` é compartilhado entre os containers `nginx1` e `nginx2`.

A tag `volumes` no final do arquivo `docker-compose.yml` é usada para configurar os volumes para os services. Neste caso, especificamos que os volumes `my-volume` e `my-volume-nginx` são externos, ou seja, eles já existem no host.
