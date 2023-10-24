# 01 - História do Docker, OCI e LXC

![Logo da Docker](https://www.docker.com/wp-content/uploads/2023/08/logo-guide-logos-1.svg)

A Docker Inc. foi fundada em 2010 por Solomon Hykes, Kamel Founadi e Sebastien Pahl durante o Y Combinator, um programa de aceleração de startups. O Hykes iniciou o Docker project com o dotCloud, que era uma plataforma como serviço (PaaS) que permitia que os desenvolvedores pudessem criar, implantar e dimensionar aplicativos sem precisar se preocupar com a infraestrutura.

O Docker foi lançado em março de 2013 na PyCon em Santa Clara, Califórnia, como projeto open-source, o que popularizou o uso de containers. Neste tempo ele usava o LXC (Linux Containers) como backend, mas em 2014 foi lançado o libcontainer, que é um backend escrito em Go que permite que o Docker crie e gerencie containers sem precisar do LXC (que a grosso modo é um chroot tunado).

Mais tarde o libcontainer se tornou o runC. O runC foi incubado mais tarde na Open Container Initiative (OCI), também criado pela Docker Inc. e outros líderes da indústria de tecnologia. Posteriormente o projeto foi delegado  para a Linux Foundation e continua contando com a participação de várias empresas, como: Docker, Google, IBM, Microsoft, Oracle, Red Hat e etc, 

Em 2017, o Docker Inc. anunciou o Moby Project, que é um projeto open-source para criar ferramentas para criar, implantar e gerenciar containers. O Moby Project é um projeto open-source que conta com a participação de várias empresas, como: Docker, Google, IBM, Microsoft, Oracle, Red Hat e etc.


Já em 2016 com maior popularização de containers, a Docker decidiu quebrar seu projeto em partes menores e aí nasceu o containerd. O containerd é um daemon que gerencia containers em execução no host, sem a necessidade de fazer syscalls. Ele é responsável por iniciar e parar containers, além de gerenciar imagens e volumes. O containerd é um projeto open-source que conta com a participação de várias empresas, como: Docker, Google, IBM, Microsoft, Oracle, Red Hat e etc, hoje incubado na CNCF (Cloud Native Computing Foundation).

![Ecossistema do containerd 1](https://containerd.io/img/architecture.png)
![Ecossistema do containerd 2](https://www.docker.com/wp-content/uploads/974cd631-b57e-470e-a944-78530aaa1a23-1.jpg)

Daí surgiu o containerd-shim, é um componente mais específico e serve como um intermediário entre o tempo de execução de containers (como o containerd) e o daemon do Docker (ou outra ferramenta de gerenciamento de containers). Ele atua como um "shim" (ou "ponte") para permitir que o daemon do Docker interaja com o tempo de execução, oferecendo funcionalidades adicionais, como captura de logs, monitoramento de ciclo de vida, etc. Ele executa o OCI Runtime, como o runc, para criar e gerenciar containers. 

A diferença entre o containerd e o containerd-shim é que o primeiro está num nível mais elevado e o segundo num nível mais baixo.

Fontes: 

- [https://linuxcontainers.org/](https://linuxcontainers.org/)
- [https://stackoverflow.com/questions/34152365/difference-between-lxc-and-libcontainer](https://stackoverflow.com/questions/34152365/difference-between-lxc-and-libcontainer)
- [https://www.docker.com/blog/what-is-containerd-runtime/](https://www.docker.com/blog/what-is-containerd-runtime/)