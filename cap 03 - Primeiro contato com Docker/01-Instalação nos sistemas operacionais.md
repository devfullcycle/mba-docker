# 01 - Instalação do Docker nos sistemas operacionais

## Instalação do Docker no Linux

Há 2 modos de instalar o Docker no Linux:

- Rodando comandos no terminal para instalar o Docker Engine
- Instalando o Docker Desktop

O Docker Desktop é uma excelente ferramenta para gerenciar imagens, containers e outras coisas, mas vejo ele principalmente pra quem está começando como uma ferramenta desnecessária, principalmente porque ele consome muitos recursos do computador. Por isso, recomendo o Docker Engine.

A instalação do Docker Engine depende da distribuição Linux que você está usando, então recomendo seguir o tutorial oficial: [https://docs.docker.com/engine/install/](https://docs.docker.com/engine/install/)

## Instalação do Docker no Windows

Há também 2 formas de instalar o Docker no Windows, mas as duas usarão o WSL (Windows Subsystem for Linux), que é um recurso do Windows que permite rodar distribuições Linux dentro do Windows.

Para instalar o WSL, recomendamos o tutorial da Full Cycle de quick start: [https://github.com/codeedu/wsl2-docker-quickstart](https://github.com/codeedu/wsl2-docker-quickstart)

Veja também a aula sobre configuração de ambiente no Windows: [https://www.youtube.com/watch?v=btCf40ax0WU](https://www.youtube.com/watch?v=btCf40ax0WU)

Após instalar o WSL, você pode instalar o Docker Engine no WSL ou instalar o Docker Desktop no Windows.

Também recomendamos que você instale o Docker Engine diretamente no WSL, porque ele será bem mais rápido que o Docker Desktop. Um dos únicos motivos fortes para usar o Docker Desktop é se você precisar criar containers usando o kernel do Windows.

Para instalação do Docker Engine no WSL, verifique nosso tutorial compartilhado mais acima.

## Instalação do Docker no Mac

A instalação do Docker no Mac é bem simples, basta baixar o instalador e seguir o passo a passo: [https://docs.docker.com/docker-for-mac/install/](https://docs.docker.com/docker-for-mac/install/)

Você escolherá entre o Docker Desktop para Intel Chip ou o Docker Desktop para Apple Chip.

Uma outra alternativa que tem sido utilizada por alguns usuários de Mac é o `colima` (container runtimes on macos): [https://github.com/abiosoft/colima](https://github.com/abiosoft/colima). Não cheguei a utiliza-la, mas parece ser uma boa alternativa para quem não quer usar o Docker Desktop, ela criará uma máquina virtual leve e usar o Docker Engine para rodar os containers.