# 02 - Rodando um container sem Docker com runc

## O que é o runc

O runc é uma ferramenta que permite rodar containers sem o Docker. O runc é uma ferramenta de baixo nível, ele não é muito utilizado diretamente, mas é a base para outras ferramentas, como o containerd e o CRI-O. Ele gera e executa containers de acordo com o padrão da OCI (Open Container Initiative).

## Instalando o runc

Em várias distribuições Linux o runc já vem instalado, mas caso não esteja instalado, você pode instalar com o comando:

```bash
sudo apt install runc
```

Ou siga o tutorial do README.md do projeto do runc: [https://github.com/opencontainers/runc](https://github.com/opencontainers/runc)

## Gerando especificação de um container

Vamos usar novamente aquele userland `rootfs` para criar a especificação que servirá de base para a criação de um container. Baixe o userland:

```bash
wget https://github.com/ericchiang/containers-from-scratch/releases/download/v0.1.0/rootfs.tar.gz
```

Descompacte em qualquer lugar:

```bash
sudo tar -zxf rootfs.tar.gz
```

Entre no diretório `rootfs` e crie a especificação:

```bash
runc spec
```

Arquivo `config.json`:

```json
{
  "ociVersion": "1.0.2-dev",

  "process": {
    "terminal": true,

    "user": {
      "uid": 0,

      "gid": 0
    },

    "args": ["sh"],

    "env": [
      "PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin",

      "TERM=xterm"
    ],

    "cwd": "/",

    "capabilities": {
      "bounding": ["CAP_AUDIT_WRITE", "CAP_KILL", "CAP_NET_BIND_SERVICE"],

      "effective": ["CAP_AUDIT_WRITE", "CAP_KILL", "CAP_NET_BIND_SERVICE"],

      "permitted": ["CAP_AUDIT_WRITE", "CAP_KILL", "CAP_NET_BIND_SERVICE"],

      "ambient": ["CAP_AUDIT_WRITE", "CAP_KILL", "CAP_NET_BIND_SERVICE"]
    },

    "rlimits": [
      {
        "type": "RLIMIT_NOFILE",

        "hard": 1024,

        "soft": 1024
      }
    ],

    "noNewPrivileges": true
  },

  "root": {
    "path": "rootfs",

    "readonly": true
  },

  "hostname": "runc",

  "mounts": [
    {
      "destination": "/proc",

      "type": "proc",

      "source": "proc"
    },

    {
      "destination": "/dev",

      "type": "tmpfs",

      "source": "tmpfs",

      "options": ["nosuid", "strictatime", "mode=755", "size=65536k"]
    },

    {
      "destination": "/dev/pts",

      "type": "devpts",

      "source": "devpts",

      "options": [
        "nosuid",

        "noexec",

        "newinstance",

        "ptmxmode=0666",

        "mode=0620",

        "gid=5"
      ]
    },

    {
      "destination": "/dev/shm",

      "type": "tmpfs",

      "source": "shm",

      "options": ["nosuid", "noexec", "nodev", "mode=1777", "size=65536k"]
    },

    {
      "destination": "/dev/mqueue",

      "type": "mqueue",

      "source": "mqueue",

      "options": ["nosuid", "noexec", "nodev"]
    },

    {
      "destination": "/sys",

      "type": "sysfs",

      "source": "sysfs",

      "options": ["nosuid", "noexec", "nodev", "ro"]
    },

    {
      "destination": "/sys/fs/cgroup",

      "type": "cgroup",

      "source": "cgroup",

      "options": ["nosuid", "noexec", "nodev", "relatime", "ro"]
    }
  ],

  "linux": {
    "resources": {
      "devices": [
        {
          "allow": false,

          "access": "rwm"
        }
      ]
    },

    "namespaces": [
      {
        "type": "pid"
      },

      {
        "type": "network"
      },

      {
        "type": "ipc"
      },

      {
        "type": "uts"
      },

      {
        "type": "mount"
      },

      {
        "type": "cgroup"
      }
    ],

    "maskedPaths": [
      "/proc/acpi",

      "/proc/asound",

      "/proc/kcore",

      "/proc/keys",

      "/proc/latency_stats",

      "/proc/timer_list",

      "/proc/timer_stats",

      "/proc/sched_debug",

      "/sys/firmware",

      "/proc/scsi"
    ],

    "readonlyPaths": [
      "/proc/bus",

      "/proc/fs",

      "/proc/irq",

      "/proc/sys",

      "/proc/sysrq-trigger"
    ]
  }
}
```

Este arquivo define como o container será executado, ele define o processo que será executado, o diretório raiz, os pontos de montagem, namespaces e etc.

Vejamos o detalhamento das instruções:

- **ociVersion**: Versão da especificação da OCI.
- **process**: Define o processo que será executado.
  - **terminal**: Define se o processo terá um terminal.
  - **user**: Define o usuário e grupo do processo.
  - **args**: Define os argumentos do processo.
  - **env**: Define as variáveis de ambiente do processo.
  - **cwd**: Define o diretório de trabalho do processo.
  - **capabilities**: Define as capacidades do processo.
  - **rlimits**: Define os limites do processo.
  - **noNewPrivileges**: Define se o processo pode criar novos privilégios.
- **root**: Define o diretório raiz do container.
    - **path**: Define o diretório raiz do container.
    - **readonly**: Define se o diretório raiz do container é somente leitura.
- **hostname**: Define o hostname do container.
- **mounts**: Define os pontos de montagem do container.
    - **destination**: Define o destino do ponto de montagem.
    - **type**: Define o tipo do ponto de montagem.
    - **source**: Define a origem do ponto de montagem.
    - **options**: Define as opções do ponto de montagem.
- **linux**: Define as configurações do Linux.
    - **resources**: Define os recursos do Linux.
        - **devices**: Define os dispositivos do Linux.
            - **allow**: Define se o dispositivo é permitido.
            - **access**: Define o acesso ao dispositivo.
    - **namespaces**: Define os namespaces do Linux.
        - **type**: Define o tipo do namespace.
    - **maskedPaths**: Define os caminhos mascarados do Linux.
    - **readonlyPaths**: Define os caminhos somente leitura do Linux.

## Capabilities

As capabilities são um conjunto de permissões que um processo pode ter. O Linux possui várias capabilities, cada uma permite que um processo execute uma ação específica. Por exemplo, a capability `CAP_NET_BIND_SERVICE` permite que um processo escute em uma porta abaixo de 1024.

As capabilities são divididas em 4 grupos:
- **bounding**: Define as capabilities estão disponíveis em uma árvore de processos.
- **effective**: Define as capacidades ativas para um processo durante sua execução
- **permitted**: O conjunto permitido é um conjunto intermediário entre o conjunto bounding e o conjunto efetivo. Ele define as capacidades que um processo pode adquirir, mas ainda não estão ativas.
- **ambient**: O conjunto ambient é semelhante ao conjunto permitido, mas é projetado para permitir que um processo conceda capacidades específicas a outros processos que ele inicia.

## Executando um container

Agora que temos a especificação, vamos executar o container:

```bash
sudo runc run test1
```

O comando `runc run` executa o container, o parâmetro `test1` é o nome do container.

Você pode verificar comandos como mount, ps e outros atestando que o container está devidamente isolado em um namespace diferente.

O comando `runc list` lista os containers em execução, rode para verificar que o container está em execução.

Fontes:

- [https://man7.org/linux/man-pages/man7/capabilities.7.html](https://man7.org/linux/man-pages/man7/capabilities.7.html)