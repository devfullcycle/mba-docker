# 02 - Publicando imagens no Docker Hub

O Docker Hub é um serviço de registro de imagens do Docker. É possível criar repositórios públicos ou privados para armazenar as imagens.

Para publicar uma imagem no Docker Hub, é necessário criar uma conta no site [hub.docker.com](https://hub.docker.com/).

Após criar a conta, é necessário fazer o login através do comando:

```bash
docker login -u <username>
```

Após o login, podemos publicar uma imagem através do comando:

```bash
docker push <username>/<image-name>:<tag>
```

Um detalhe importante é que o nome da imagem deve ser o mesmo nome do repositório no Docker Hub. Você pode ter imagens locais com nomes diferentes, mas para publicar no Docker Hub, o nome da imagem deve ser o mesmo nome do repositório.

Por exemplo, se você deseja publicar uma imagem com o nome `meu-site`, você deve criar um repositório com o mesmo nome no Docker Hub.

Um conceito que vamos aprender mais adiante são os layers de uma imagem. Quando você faz o build de uma imagem, o Docker cria uma camada para cada instrução do Dockerfile. Por exemplo, se você tem um Dockerfile com 3 instruções, o Docker irá criar 3 camadas. Quando você faz o build de uma imagem, o Docker cria uma camada para cada instrução do Dockerfile. Por exemplo, se você tem um Dockerfile com 3 instruções, o Docker irá criar 3 camadas.

Ao publicar uma imagem, se a imagem nova tem layers que já existem no Docker Hub, o Docker não irá enviar essas layers novamente. Por exemplo, se você tem uma imagem com 3 layers e publica essa imagem no Docker Hub, o Docker irá enviar as 3 layers para o Docker Hub. Se você alterar o conteúdo da primeira layer e publicar a imagem novamente, o Docker irá enviar apenas a primeira layer, pois as outras duas layers já existem no Docker Hub.

Para verificar as layers de uma imagem, podemos utilizar o comando `docker history`:

```bash
docker history <image-name>
```

Por exemplo, vamos verificar as layers da imagem `nginx`:

```bash
docker history nginx
```

Agora com a imagem no Docker Hub, poderíamos publicar o site em qualquer hospedagem que suporte Docker, nós já temos clouds que facilitam e muito o deploy de containers através das imagens.

Sempre teremos que ter imagens num container registry para realizar isto. Um container registry é um repositório de imagens, como o Docker Hub, que é um container registry público, mas podemos ter um container registry privado, como o Azure Container Registry, AWS ECR, Google Container Registry, Gitlab Container Registry, etc.

