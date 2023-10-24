# 05 - Administrando imagens e containers

A medida que você for usando o Docker, você vai acumular imagens e containers. É importante saber como administrar as imagens e containers, para não deixar o seu computador cheio de imagens e containers que não estão sendo usados.

## Executando containers sem bloquear o terminal

Quando executamos um container, o terminal fica bloqueado até que o container seja parado. Isso pode ser um problema, pois não podemos executar outros comandos no terminal enquanto o container estiver em execução.

Para executar um container sem bloquear o terminal, execute o comando abaixo:

```bash
docker run --rm --name test1 -d nginx
```

O parâmetro `-d` executa o container em background, ou seja, o terminal não fica bloqueado.

## Removendo containers

Ao executar um container, já podemos executa-lo informando ao Docker que ele pode ser removido após a execução. Para remover um container após a execução, execute o comando abaixo:

```bash
docker run --rm --name test1 hello-world
```
O parâmetro `--name` define o nome do container. Isto evita que o Docker gere um nome aleatório para o container.

Observe que ao rodar o comando `docker ps -a` ou `docker container ls -a`, o container não aparece na lista de containers. Isso acontece porque o container foi removido após a execução.

Mas, podemos remover um container manualmente. Para remover um container manualmente, execute o comando abaixo:

```bash
docker rm test1
```

O comando `docker rm` remove um container. O parâmetro `test1` é o nome do container que será removido.

## Parando um container

Um container pode ser parado manualmente. Para parar um container manualmente, execute o comando abaixo:

```bash
docker stop nginx
```

O comando `docker stop` para um container. O parâmetro `test1` é o nome do container que será parado.

Containers também podem ser parados utilizando o atalho `Ctrl+C` no terminal onde o container está sendo executado.

Somente um container que está em execução pode ser parado. Se um container não estiver em execução, não é possível parar o container.

## Parando todas os containers

Podemos parar todos os containers que estão em execução. Para parar todos os containers que estão em execução, execute o comando abaixo:

```bash
docker stop $(docker ps -q)
```

O comando `docker stop` para um container. O parâmetro `$(docker ps -q)` lista todos os containers que estão em execução.

## Logs de um container

Podemos visualizar os logs de um container. Para visualizar os logs de um container, execute o comando abaixo:

```bash
docker logs test1
```

O comando `docker logs` exibe os logs de um container. O parâmetro `test1` é o nome do container que será exibido os logs.

Isto é muito útil também quando estamos executando um container em background, pois podemos visualizar os logs do container sem precisar parar o container.

## Removendo imagens

Podemos remover imagens manualmente. Para remover uma imagem manualmente, execute o comando abaixo:

```bash
docker rmi hello-world
```

O comando `docker rmi` remove uma imagem. O parâmetro `hello-world` é o nome da imagem que será removida.

Se uma imagem estiver sendo usada por um container, não é possível remover a imagem. Para remover uma imagem que está sendo usada por um container, precisamos remover o container primeiro, mas podemos remover o container e a imagem em um único comando. Para remover um container e a imagem, execute o comando abaixo:

```bash
docker rmi -f test1
```

O parâmetro `-f` força a remoção do container e da imagem.

## Removendo todas as imagens

Podemos remover todas as imagens que estão no nosso computador. Para remover todas as imagens que estão no nosso computador, execute o comando abaixo:

```bash
docker rmi $(docker images -q)
```

