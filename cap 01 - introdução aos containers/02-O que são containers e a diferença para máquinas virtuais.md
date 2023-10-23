# 02 - O que são containers e a diferença para máquinas virtuais


## Containers vs Máquinas virtuais

![Imagens vs Containers](https://www.sdxcentral.com/wp-content/uploads/2019/05/ContainersvsVMs_Image.jpg)

## Vantagens e desvantagens de usar máquinas virtuais

Máquina virtuais são muito úteis, pois conseguem rodar outros sistemas operacionais até de outras arquiteturas dentro de um sistema operacional, isto representa uma vantagem enorme, pois permite que um único servidor seja dividido em vários servidores virtuais, o que reduz o custo de aquisição de hardware.

Entretanto, máquinas virtuais possuem algumas desvantagens:

- **Performance**: A máquina virtual precisa de um hypervisor para funcionar, o que causa uma degradação no desempenho.

- **Tamanho**: Uma máquina virtual precisa de um sistema operacional completo, o que faz com que ela seja muito grande.

- **Inicialização**: Uma máquina virtual precisa de um sistema operacional completo, o que faz com que ela demore muito para inicializar.

- **Gerenciamento**: Uma máquina virtual precisa de um sistema operacional completo, o que faz com que ela seja difícil de gerenciar.

- **Segurança**: Uma máquina virtual precisa de um sistema operacional completo, o que faz com que ela seja difícil de gerenciar.

- **Dificuldade de migração**: Uma máquina virtual precisa de um sistema operacional completo, o que faz com que ela seja difícil de gerenciar.

- **Dificuldade de compartilhamento**: Uma máquina virtual precisa de um sistema operacional completo, o que faz com que ela seja difícil de gerenciar.

- **Dificuldade de backup**: Uma máquina virtual precisa de um sistema operacional completo, o que faz com que ela seja difícil de gerenciar.

## O que são containers

A ideia de containers surgiu em 1979 com o chroot, que é um comando que permite que um processo enxergue um diretório como se fosse a raiz do sistema. O chroot é muito utilizado para isolar processos, pois permite que um processo enxergue apenas um diretório como se fosse a raiz do sistema.

O chroot hoje não é usado para criar containers, já temos ferramentas melhores para isto, mas é importante entender o conceito de chroot, pois ele é a base para a criação de containers. Scripts podem hackear a montagem de diretório e acessar o sistema de arquivos do host, o que pode ser um problema de segurança.

Diferente de máquina virtuais, containers não precisam de um sistema operacional completo, eles compartilham o kernel do host, o que faz com que eles sejam muito mais leves e rápidos que máquinas virtuais. 

Containers não podem rodar outros sistemas operacionais, eles precisam rodar o mesmo sistema operacional do host, mas isto não é um problema, pois o objetivo de um container é rodar uma aplicação, não um sistema operacional.

## Exemplo de chroot

![Montagem do chroot](https://securityqueens.co.uk/wp-content/uploads/2020/04/Chroot-1.png)

## Os anos 2000 e o nascer dos containers

Em 2001, a FreeBSD lançou o Jails, que é uma ferramenta que permite isolar processos. O Jails é muito utilizado para isolar processos, pois permite que um processo enxergue apenas um diretório como se fosse a raiz do sistema.

Em 2004, a Solaris lançou o Solaris Containers, que permite criar ambientes isolados com o Solaris Zones. Com os Zones, é possível ter um ambiente completo para usuários, processos, sistemas de arquivos e redes.

Em 2006, a Google lançou o cgroups (control groups), que permite isolar e limitar o uso de recursos de um processo. Na verdade ele era chamado de process containers, mas depois foi renomeado para control groups.

Em 2008, o cgroups foi integrado ao kernel do Linux, o que permitiu que o Linux pudesse isolar e limitar o uso de recursos de um processo.

Também em 2008, por iniciativa da Google, IBM, Virtuozzo e outros foi criado o LXC (Linux Containers), que é uma ferramenta que permite isolar processos. O LXC é muito utilizado para isolar processos, pois permite que um processo enxergue apenas um diretório como se fosse a raiz do sistema.

Em 2013, o Docker foi lançado como projeto open-source, o que popularizou o uso de containers. A empresa Docker Inc foi fundada em 2010, mas o Docker só foi lançado em 2013.

Daí pra frente o horizonte dos containers só cresceu, em 2015 foi criado o Open Container Initiative (OCI), que é um projeto open-source para criar padrões para containers. O OCI é um projeto da Linux Foundation e conta com a participação de várias empresas, como: Docker, Google, IBM, Microsoft, Oracle, Red Hat e etc.

Fontes:


- [https://www.pluralsight.com/resources/blog/cloud/history-of-container-technology](https://www.pluralsight.com/resources/blog/cloud/history-of-container-technology)
- [https://www.docker.com/blog/runc/](https://www.docker.com/blog/runc/)