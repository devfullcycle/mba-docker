# 03 - Rodando primeiro container com Docker

Vamos começar com o tradicional Hello World, que é um programa que imprime a mensagem "Hello World" na tela. No caso do Docker, o Hello World é um container que imprime a mensagem "Hello World" na tela.

Para executar o Hello World, vamos usar a imagem oficial do Docker, que é a imagem mais básica que existe. Para executar o Hello World, execute o comando abaixo:

```bash
docker run hello-world
```

O comando `docker run` executa um container. O parâmetro `hello-world` é o nome da imagem que será executada. Como a imagem `hello-world` não existe localmente, o Docker vai baixar a imagem do Docker Hub e executar o container.

## Imagens

Uma imagem é um template somente leitura com instruções para criar um container. Uma imagem pode ser criada manualmente ou automaticamente através de um Dockerfile.

Para listar as imagens que estão no seu computador, execute o comando abaixo:

```bash
docker image ls
```

O comando `docker image ls` lista as imagens que estão no seu computador. O parâmetro `-a` lista todas as imagens, incluindo as imagens intermediárias que são criadas durante o build de uma imagem.

## Containers

Um container é uma instância de uma imagem. Um container pode ser criado manualmente ou automaticamente através de um docker-compose.yml.

Para listar os containers que estão em execução no seu computador, execute o comando abaixo:

```bash
docker container ls
```

O comando `docker container ls` lista os containers que estão em execução no seu computador. O parâmetro `-a` lista todos os containers, incluindo os containers que não estão em execução.

## Limitando recursos

Por padrão, o Docker não limita os recursos que um container pode consumir. Isso significa que um container pode consumir toda a memória e CPU do seu computador, o que pode causar problemas de performance.

Para limitar a quantidade de memória que um container pode consumir, execute o comando abaixo:

```bash
docker run --memory 512m hello-world
```

O parâmetro `--memory` limita a quantidade de memória que um container pode consumir. O valor `512m` significa que o container pode consumir no máximo 512 MB de memória.

Para limitar a quantidade de CPU que um container pode consumir, execute o comando abaixo:

```bash
docker run --cpus 0.5 hello-world
```

O parâmetro `--cpus` limita a quantidade de CPU que um container pode consumir. O valor `0.5` significa que o container pode consumir no máximo 50% de uma CPU.

