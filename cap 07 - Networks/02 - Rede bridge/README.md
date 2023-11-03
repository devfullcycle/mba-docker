# 02 - Rede bridge

É o tipo de network padrão. Cria um link entre os containers permitindo a comunicação encaminhando o tráfego entre os segmentos de rede. Os containers ficam isolados de outros containers e podem se comunicar com o host através do gateway da rede. Todos os containers recebem um IP interno da rede. Eles também podem se comunicar internamente através dos seus IPs.

```bash
$ docker network create <network-name>
```

Para usar a rede bridge, basta informar o nome da rede no comando `docker run`:

```bash
docker run -d --name <container-name> --network <network-name> <image-name>
```

## Rede bridge no Docker Compose

Para criar uma rede bridge no Docker Compose, basta informar a opção `network` ou `networks`:

```yaml
networks:
  <network-name>:
    external: true
```

Como esta rede foi criada externamente, é necessário informar a opção `external: true`. A tag `networks` é usada para informar ao Docker Compose as redes que serão usadas nos containers.

Para usar a rede bridge, basta informar o nome da rede no serviço:

```yaml
services:
  <service-name>:
    networks:
      - <network-name>
```

Uma vez que a rede está presente em um container, outro container só poderá se comunicar com este container se estiver na mesma rede, portanto aplique a mesma configuração para os outros containers.

Normalmente não precisamos criar uma rede bridge externa, a não ser que queríamos conectar containers de projetos Docker Compose diferentes, por padrão o Docker Compose cria uma rede bridge para cada projeto. Podemos verificar a existência desta rede logo quando se executa o comando `docker-compose up` pela primeira vez, veremos o seguinte output:

```bash
Creating network "aulas_cap-07-networks_default" with the default driver
```

Se quisermos especificar uma rede bridge local no Docker Compose, também podemos faze-lo, exemplo:

```yaml
networks:
  <network-name>:
    driver: bridge
```

Neste caso, o Docker Compose deixar de criar a rede bridge padrão, somos obrigados a usar esta rede entre os services.

## Comunicação entre containers

Uma vez que os containers estão na mesma rede, podemos nos comunicar entre eles usando o nome do container como host, exemplo:

```bash
$ ping <container-name>
```

Ou, podemos usar o IP do container, exemplo:

```bash
$ ping <container-ip>
```

Para descobrir o IP de um container, execute o comando `docker inspect`:

```bash
$ docker inspect <container-name> | grep IPAddress
```


