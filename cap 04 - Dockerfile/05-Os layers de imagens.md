# 05 - Os layers de uma imagem

Uma imagem Docker é composta por uma ou mais camadas, chamadas de layers. Cada layer é uma imagem Docker, e cada layer é somente leitura.

No site Docker Hub, podemos ver os layers de uma imagem Docker. Vamos verificar os layers da imagem `node:20-slim` no Docker Hub: [https://hub.docker.com/_/node](https://hub.docker.com/_/node) acessando a aba `Tags` e clicando na tag `20-slim`.

Vamos verificar os layers de uma imagem fazendo o comando de build:

```bash
$ docker build -t node-nginx .
```

Podemos ver que ao fazer o build, o Docker cria um sha256 e isto representa um layer da imagem.

Para vermos com mais detalhes os layers, podemos utilizar o comando `docker save` para salvar a imagem em um arquivo tar, e depois utilizar o comando `tar` para extrair o conteúdo do arquivo tar.

```bash
$ docker save node:20-slim > image.tar
$ mkdir image-layers
$ tar -xvf image.tar -C ./image-layers
```

O comando `docker save` salva a imagem `node:20-slim` em um arquivo tar chamado `image.tar`. O comando `tar` extrai o conteúdo do arquivo tar `image.tar` para o diretório `image-layers`.

Veja que a pasta `image-layers` contém os layers da imagem `node:20-slim`. Cada layer representa uma instrução do Dockerfile e é gerado uma sub-imagem para cada instrução do Dockerfile, exemplo:

![Exemplo de layer de uma imagem docker](https://docs.docker.com/build/guide/images/layers.png)

## Union File Systems e OverlayFS

O Docker utiliza o Union File System para gerenciar os layers de uma imagem. O Union File System é um sistema de arquivos que permite que os arquivos e diretórios de diferentes sistemas de arquivos sejam montados em um único sistema de arquivos.

O driver de Union File System padrão do Docker é o OverlayFS. O OverlayFS (Overlay File System) é um sistema de arquivos que faz parte do kernel do Linux e é usado para combinar dois ou mais sistemas de arquivos em uma única visualização. Ele é usado principalmente para criar camadas de sistema de arquivos empilháveis.

O OverlayFS 2 é uma nova versão do OverlayFS que foi lançada no kernel do Linux 5.6. O OverlayFS 2 é uma versão mais rápida e eficiente do OverlayFS. Nas novas versões do Docker o OverlayFS 2 é o driver de Union File System padrão, ela permite nativamente até 128 camadas inferiores.

Dentro do diretório `/var/lib/docker/overlay2` temos os layers de todas as imagens Docker. Para vermos os layers de uma imagem, execute o comando `ls -l` dentro do diretório `/var/lib/docker/overlay2`.

Vamos encontrar os layers do `node:20-sim` com o `docker inspect`:

```bash
$ docker inspect node:20-slim
```

O comando `docker inspect` retorna informações sobre a imagem `node:20-slim` em formato JSON. O campo `GraphDriver` contém informações sobre o driver de Union File System. Vamos pegar o diretório `/var/lib/docker/overlay2/xxxxxxxx` e lista-lo:

```bash
$ sudo ls -l /var/lib/docker/overlay2/xxxxxxxx
```

O diretório `/var/lib/docker/overlay2/xxxxxxxx` contém os layers da imagem `node:20-slim`.


Os layers são muito importantes, pois eles permitem que o Docker compartilhe arquivos entre imagens, e economize espaço em disco. Por exemplo, se você tem 2 imagens que compartilham o mesmo layer, o Docker não precisa armazenar o mesmo layer 2 vezes, ele armazena o layer somente uma vez, e compartilha o layer entre as 2 imagens. Também é possível fazer cache de layers, por exemplo, se você tem 2 imagens que compartilham o mesmo layer, e você faz uma alteração em uma imagem, o Docker não precisa armazenar o mesmo layer 2 vezes, ele armazena o layer somente uma vez, e compartilha o layer entre as 2 imagens.

A medida que você vai produzir novas versões de uma imagem, o Docker vai armazenar somente as diferenças entre as versões, e compartilhar os layers que não mudaram. Isto torna o processo de build e envio da imagem muito mais rápido, pois o Docker não precisa processar toda a imagem e enviar todos os layers, somente os que mudaram.

Veja mais informações na documentação do Docker: [https://docs.docker.com/storage/storagedriver/overlayfs-driver/](https://docs.docker.com/storage/storagedriver/overlayfs-driver/)