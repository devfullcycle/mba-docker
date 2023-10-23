## 04 - cgroups

### O que são cgroups

Cgroups (control groups) são uma forma de isolar e limitar o uso de recursos de um processo, como CPU e memória. Cgroups são muito utilizados para isolar e limitar o uso de recursos de um processo, pois permite que um processo enxergue apenas um subconjunto de recursos do sistema.

No linux, podemos fazer o comando `ls /sys/fs/cgroup/` para ver os cgroups disponíveis. Todo cgroup está dentro deste diretório, até mesmos cgroups que criarmos.

Os cgroups são organizados em hierarquias, cada cgroup pode ter subcgroups. A hierarquia de cgroups é organizada em árvore, onde cada cgroup pode ter vários subcgroups, mas apenas um cgroup pai.

Se rodarmos o comando `systemctl status` veremos que em cada serviço do `systemd` tem um cgroup associado. O `systemd` é um gerenciador de serviços do linux, ele é responsável por iniciar e gerenciar os serviços do sistema.

Abra o firefox e rode o comando `systemctl status | grep firefox`, veremos que o firefox tem um cgroup associado. O firefox é um processo, então ele precisa estar em algum cgroup. Olhe também que cada linha tem um número, este número é o PID do processo, as abas do firefox são processos filhos do processo principal do firefox, todos eles estão no mesmo cgroup.

Existem várias formas de criar cgroups, vamos usar o `systemd` para criar um system.slice, que é um cgroup que isola processos de um serviço. Vamos criar um cgroup para isolar um processo:

```bash
sudo vim /etc/systemd/system/limit-app.slice
```

Conteúdo do arquivo:
```
[Slice]
CPUQuota=20%
MemoryMax=20M
```

Para rodar processos neste cgroup, vamos rodar o comando:
```bash
systemd-run --slice=limit-app.slice --uid=my-user --shell
```

Ao usar um programa de monitoramento de processos, como o `htop`, veremos que o processo está rodando no cgroup `limit-app.slice`.

Fonte:
- [https://ericchiang.github.io/post/containers-from-scratch/#creating-namespaces-with-unshare](https://ericchiang.github.io/post/containers-from-scratch/#creating-namespaces-with-unshare)