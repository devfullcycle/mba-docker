# 06 - Manipulando terminais containers

Quando executamos um container, o Docker cria um terminal dentro do container. Podemos acessar esse terminal para executar comandos dentro do container.

Para acessar o terminal de um container, execute o comando abaixo:

```bash
#somente quando o container estiver em execução
docker exec -it test1 bash
```

Ou

```bash
docker run --rm --name test1 -it node:20-slim bash
```

O parâmetro `-it` executa o container em modo interativo e abre o terminal do container.

O que está no final, sempre é um comando que será executado dentro do container. No caso do comando acima, o comando `bash` abre o terminal do container.

Ao acessar o terminal de um container, o usuário corrente será o usuário definido como default na imagem, em muitos casos o usuário padrão é o `root`, em outros não.

Para verificar o usuário corrente, execute o comando abaixo:

```bash
whoami
```

O comando `whoami` exibe o usuário corrente.

Para sair do terminal do container, execute o comando abaixo:

```bash
exit
```

O comando `exit` sai do terminal do container.

Para mudar o usuário corrente ao acessar o terminal de um container, execute o comando abaixo:

```bash
docker run --rm --name test1 -it --user node node:20-slim bash
```

O parâmetro `--user` define o usuário corrente ao acessar o terminal do container. O valor `node` é o nome do usuário.

