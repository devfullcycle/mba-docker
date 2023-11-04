# 03 - Dev Container no VSCode

Mesmo criando um ambiente de desenvolvimento com Docker, ainda temos alguns desafios, como:

* Como usar o Git dentro do container?
* Como usar o terminal dentro do container?
* Como fazer com que os plugins da IDE reconheçam as ferramentas instaladas dentro do container?

Para resolver estes problemas, podemos usar o Dev Container do VSCode.

## O que é Dev Container?

O Dev Container é uma funcionalidade do VSCode que permite que o VSCode se conecte a um container e use o container como ambiente de desenvolvimento.

O VSCode funciona numa arquitetura cliente servidor, então o Dev Container permite que o VSCode se instale como um servidor dentro do container, ou seja, o Dev Container permite que o VSCode funcione de forma remota dentro do container.