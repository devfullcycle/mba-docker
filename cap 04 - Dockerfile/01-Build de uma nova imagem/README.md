# 01 - Build de uma nova imagem

Vamos imaginar que temos uma aplicação HTML simples que será disponibilizada em um servidor web Nginx através de um container. Para isso, precisamos criar uma imagem que contenha o Nginx e o código da aplicação.

Para isso, vamos criar um arquivo chamado `Dockerfile` na raiz do projeto com o seguinte conteúdo:

```dockerfile
FROM nginx:latest
COPY . /usr/share/nginx/html
```

A primeira linha indica qual imagem será utilizada como base para a nossa imagem. Nesse caso, estamos utilizando a imagem oficial do Nginx, que está disponível no Docker Hub.

A segunda linha indica que o conteúdo do diretório atual será copiado para o diretório `/usr/share/nginx/html` dentro do container.

Agora, vamos criar a imagem a partir do Dockerfile:

```bash
docker build -t meu-site .
```

O parâmetro `-t` indica o nome da imagem que será criada. Nesse caso, o nome da imagem será `meu-site`. O ponto indica que o Dockerfile está no diretório atual.

Após a execução do comando, podemos verificar que a imagem foi criada através do comando `docker images`:

```bash
docker images ls
```

Agora, podemos executar um container a partir da imagem que acabamos de criar:

```bash
docker run -d -p 8080:80 meu-site
```

É possível alterar o conteúdo do index.html já em execução através do comando:

```bash
docker cp index.html <container-id>:/usr/share/nginx/html
```

Ou também é possível alterar o conteúdo do index.html através de um editor de texto no próprio container, como vim ou outro:

```bash
docker exec -it <container-id> bash
# comando para instalar o vim
apt-get update && apt-get install vim
```

Mas, isto não fará com que a imagem seja alterada, lembre-se sempre que a imagem é imutável. Se você deseja publicar uma nova versão do seu site, você precisa criar uma nova imagem.

Para isso, vamos alterar o conteúdo do index.html e criar uma nova imagem:

```bash
docker build -t meu-site .
```

Agora, vamos executar um novo container a partir da nova imagem:

```bash
docker run -d -p 8080:80 meu-site
```

Quando geramos imagens sem passar uma tag, o Docker automaticamente cria uma tag `latest`. Por isso, podemos executar o container a partir da imagem `meu-site:latest`:

```bash
docker run -d -p 8080:80 meu-site:latest
```

Se quisermos ter mais controle sobre as versões da nossa imagem, podemos utilizar tags. Por exemplo, podemos criar uma tag `v1` para a primeira versão da nossa imagem:

```bash
docker build -t meu-site:v1 .
```

E podemos executar o container a partir da imagem `meu-site:v1`:

```bash
docker run -d -p 8080:80 meu-site:v1
```

Agora, podemos criar uma nova versão da nossa imagem e atribuir a tag `v2`:

```bash
docker build -t meu-site:v2 .
```

E podemos executar o container a partir da imagem `meu-site:v2`:

```bash
docker run -d -p 8080:80 meu-site:v2
```

Podemos verificar todas as imagens que temos no nosso host através do comando:

```bash
docker images ls
```

Podemos verificar todos os containers que estão em execução através do comando:

```bash
docker ps
```

