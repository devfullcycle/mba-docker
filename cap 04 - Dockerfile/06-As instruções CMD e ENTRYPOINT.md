# 06 - As instruções CMD e ENTRYPOINT

As instruções `CMD` e `ENTRYPOINT` definem o comando padrão que será executado quando o container for iniciado. Apesar de parecem ser iguais, elas possuem algumas diferenças.

## Instrução CMD

A instrução `CMD` define o comando padrão que será executado quando o container for iniciado. Por exemplo, se você precisa iniciar um servidor web quando o container é iniciado, você pode utilizar a instrução `CMD` para executar o comando de inicialização do servidor web quando o container é iniciado.

A instrução `CMD` pode ser definida de 3 formas:

- `CMD ["executable","param1","param2"]` (exec form, this is the preferred form)
- `CMD ["param1","param2"]` (as default parameters to ENTRYPOINT)
- `CMD command param1 param2` (shell form)

A instrução `CMD` executa o comando quando o container é iniciado, e ela pode ser sobrescrita pelo comando `docker run`. Por exemplo, se você tem uma imagem que executa o comando `npm start` quando o container é iniciado, você pode sobrescrever o comando `npm start` com o comando `docker run`:

```bash
$ docker run -it node-nginx bash
```

O comando `docker run` sobrescreve o comando `npm start` com o comando `bash`.

## Instrução ENTRYPOINT

A instrução `ENTRYPOINT` define o comando padrão que será executado quando o container for iniciado. Por exemplo, se você precisa iniciar um servidor web quando o container é iniciado, você pode utilizar a instrução `ENTRYPOINT` para executar o comando de inicialização do servidor web quando o container é iniciado.

A instrução `ENTRYPOINT` pode ser definida de 2 formas:

- `ENTRYPOINT ["executable", "param1", "param2"]` (exec form, preferred)
- `ENTRYPOINT command param1 param2` (shell form)

A instrução `ENTRYPOINT` executa o comando quando o container é iniciado, e ela não pode ser sobrescrita pelo comando `docker run`. Por exemplo, se você tem uma imagem que executa o comando `npm start` quando o container é iniciado, você não pode sobrescrever o comando `npm start` com o comando `docker run`:

```bash
$ docker run -it node-nginx bash
```

O comando `docker run` não sobrescreve o comando `npm start` com o comando `bash`. Na verdade que é passado como argumento no comando é adicionado ao final do comando `npm start`, então teríamos um comando `npm start bash`, que estaria incorreto.

## Instrução ENTRYPOINT e CMD

A instrução `ENTRYPOINT` e `CMD` podem ser definidas juntas, e elas são executadas em conjunto quando o container é iniciado. Por exemplo, se você precisa iniciar um servidor web quando o container é iniciado, você pode utilizar a instrução `ENTRYPOINT` para executar o comando de inicialização do servidor web quando o container é iniciado, e utilizar a instrução `CMD` para passar argumentos para o comando de inicialização do servidor web.

A imagem do Nginx é um bom exemplo disto. Ela executa um script SH no ENTRYPOINT, e passa o comando `nginx -g daemon off;` como argumento para o script SH no CMD. Desta forma, a imagem sempre força o script SH a ser executado, mesmo que você queria executar apenas o bash.

Vejamos isto no Dockerfile do Nginx: [https://github.com/nginxinc/docker-nginx/blob/1.25.2/mainline/debian/Dockerfile](https://github.com/nginxinc/docker-nginx/blob/1.25.2/mainline/debian/Dockerfile)

## Usar CMD ou ENTRYPOINT?

Você pode utilizar como regra o seguinte, use sempre o CMD, porque ele pode ser sobrescrito por outro comando, caso seja indispensável executar um script SH ou um comando específico no início de um container, utilize o ENTRYPOINT.