# 01 - O que são volumes

Por padrão todos os arquivos armazenados dentro de um container ficam em uma camada de escrita. Isto significa que:

- Se o container for removido, todos os arquivos serão perdidos.
- Os dados são gravados diretamente na máquina host, dificultando a portabilidade do container para outras máquinas.
- Escrever na camada de escrita reduz o desempenho do container, porque exige um drive de armazenamento para gerenciar o sistema de arquivos. O Linux fornece o Union File System (UFS) para gerenciar a camada de escrita, mas ele não é tão eficiente quanto o sistema de arquivos nativo da máquina host.

A regra de ouro é que containers são efêmeros, ou seja, eles podem ser parados, removidos e recriados a qualquer momento. Portanto, não é uma boa prática armazenar dados dentro de um container.

## Tipos de armazenamento

O Docker possui 4 tipos de armazenamento:

- **Volumes**: São diretórios que ficam fora da camada de escrita do container, portanto os dados não são perdidos quando o container é removido. Os volumes são gerenciados pelo Docker e podem ser compartilhados entre containers.

- **Bind mounts**: São diretórios que ficam fora da camada de escrita do container, mas apresentam recursos limitados quando comparados aos volumes. São mais difíceis de gerenciar como para fazer backup e restauração e são muitos ligados ao host.

- **tmpfs mounts**: São diretórios que ficam na memória RAM do container, portanto os dados são perdidos quando o container é removido. Os tmpfs mounts são gerenciados pelo Docker e não podem ser compartilhados entre containers.

- **named pipes**: Uma montagem npipe pode ser usada para comunicação entre o host Docker e um contêiner. O caso de uso comum é executar uma ferramenta de terceiros dentro de um contêiner e conectar-se à API do Docker Engine usando um canal nomeado.


## Maneira de criar volumes

Há 3 maneiras de criar volumes no Docker:

- **CLI**: É possível criar volumes usando o comando `docker volume create`. Os volumes criados desta forma são chamados de **volumes gerenciados pelo usuário**. Também é possível criar volumes usando o comando `docker run -v <volume-name>`.

- **Dockerfile**: É possível criar volumes no Dockerfile usando a instrução `VOLUME`. Os volumes criados desta forma são chamados de **volumes gerenciados pelo Docker**.

- **Docker Compose**: É possível criar volumes especificando a opção `volume` ou `volumes` no arquivo `docker-compose.yml`.




Fontes: 

- [https://martinheinz.dev/blog/44](https://martinheinz.dev/blog/44)