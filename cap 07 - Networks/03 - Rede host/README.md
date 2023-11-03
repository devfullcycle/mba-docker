# 03 - Rede Host

Em vez de receber um IP interno e criar um isolamento, os containers compartilham a rede o host. Esta opção é muito performática, já que não há isolamento de rede, re-encaminhamento de portas ou pontes de redes, o acesso é direto.

## Exemplo

Vamos criar um container usando a rede host:

```bash
$ docker run -d --name my-nginx --network host nginx
```

Como a rede não está isolada, o nginx estará rodando na porta 80 da máquina, sem isolamento, se acessarmos `http://localhost` mostrará o nginx funcionando.

Inclusive se tentarmos rodar outro nginx na porta 80, teremos um erro que não podemos ter outro processo ocupando a porta 80.

## Rede host no Docker Compose

Para usar a rede host no Docker Compose, basta informar a opção `network_mode: host`:

```yaml
services:
  <service-name>:
    network_mode: host
```

## Comunicação entre containers

Como os containers compartilham a mesma rede da máquina, o nome do host será o IP da máquina ou o famoso `localhost`.


