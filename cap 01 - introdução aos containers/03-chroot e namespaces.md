# 03 - chroot e namespaces

O comando chroot significa change root, ele permite que um processo enxergue um diretório como se fosse a raiz do sistema. O chroot é muito utilizado para isolar processos, pois permite que um processo enxergue apenas um diretório como se fosse a raiz do sistema.

O chroot hoje não é usado para criar containers, já temos ferramentas melhores para isto, mas é importante entender o conceito de chroot, pois ele é a base para a criação de containers. Scripts podem hackear a montagem de diretório e acessar o sistema de arquivos do host, o que pode ser um problema de segurança.

Para exemplo vamos baixar um userland de Debian para ativar um chroot:

```bash
wget https://github.com/ericchiang/containers-from-scratch/releases/download/v0.1.0/rootfs.tar.gz
```

Descompacte em qualquer lugar:

```bash
sudo tar -zxf rootfs.tar.gz
```

Agora vamos executar o chroot:

```bash
sudo chroot rootfs /bin/bash
```

Agora você está dentro do chroot, você pode executar qualquer comando, mas não vai conseguir acessar o sistema de arquivos do host:

```bash
ls /
```

Mesmo assim, este processo consegue acessar outros artefatos do sistema global, como: rede, pontos de montagem (mounts) e etc. Vamos testar habilitando o mount de `proc`:

```bash
mount -t proc proc /proc
```

Ao executar o comando `ps aux`, veremos todos os processos do sistema global.

## Namespaces

Namespaces são uma forma de isolar processos, eles permitem que um processo enxergue apenas um subconjunto de recursos do sistema. Existem vários tipos de namespaces, cada um isola um tipo de recurso:

- **pid**: Isola processos.
- **net**: Isola interfaces de rede, endereços, portas, rotas e etc.
- **mnt**: Isola pontos de montagem.
- **ipc**: Isola filas de mensagens, semáforos e memória compartilhada.
- **uts**: Isola hostname e domínio.
- **user**: Isola usuários e grupos.

Com o comando `unshare` é possível criar um novo namespace e isolar os recursos de um processo:

```bash
sudo unshare -p -f --mount-proc=$PWD/rootfs/proc chroot rootfs /bin/bash
```

Este comando ativou as opções:

- **--pid**: Isola processos. Podemos definir um ID para o namespace.
- **--fork**: Cria um novo processo.

A opção `--mount-proc` monta o diretório `/proc` dentro do namespace, isto é necessário para que o comando `ps aux` funcione.

Veja que ao executar o `ps aux` só mostra os processos deste namespace e não mais do sistema global.


Fonte:

- [https://ericchiang.github.io/post/containers-from-scratch/](https://ericchiang.github.io/post/containers-from-scratch/)