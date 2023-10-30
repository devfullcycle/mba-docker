# 01 - O que é Docker Compose

O Docker Compose é uma ferramenta para definir e executar aplicações Docker com múltiplos containers. Com o Docker Compose você pode usar um arquivo YAML para configurar os serviços da sua aplicação. Então, com um único comando, você cria e inicia todos os serviços do seu arquivo de configuração.

Inicialmente o Docker Compose construído em Python, mas hoje é construído em Golang.

O Docker Compose permite configurar, executar, parar e remover containers de uma aplicação com um único comando.

A configuração dos containers é feita através de um arquivo YAML, onde você define os serviços da sua aplicação. Um serviço é um container que será executado pela aplicação. Então, você pode ter vários serviços em um único arquivo YAML. Também permite separar ambientes de desenvolvimento, teste e produção, assim como mesclar configurações de vários Docker Compose YAML.

Este YAML também é usado no Docker Swarm, que é uma ferramenta para orquestrar containers em cluster. Então, você pode usar o mesmo arquivo YAML para executar sua aplicação em um cluster de containers.
