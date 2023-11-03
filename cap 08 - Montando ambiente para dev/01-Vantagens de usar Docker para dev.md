# 01 - Vantagens de usar Docker para Dev

Usar containers em produção é muito útil por todos os motivos que já vimos aqui no curso, de formal geral teremos imagens consolidadas das aplicações facilitando e abrindo um leque de possibilidades para o gerenciamento de infraestrutura.

Mas e para desenvolvimento? Quais as vantagens de usar Docker para desenvolver aplicações?

## Ambiente de desenvolvimento

Quando estamos desenvolvendo uma aplicação, precisamos de um ambiente de desenvolvimento, que pode ser um ambiente local ou um ambiente na nuvem, mas de qualquer forma, precisamos de um ambiente para desenvolver.

Esse ambiente pode ser um ambiente com as ferramentas instaladas diretamente no sistema operacional, ou pode ser um ambiente virtualizado, como uma máquina virtual, ou pode ser um ambiente em container.

A não ser que tenhamos uma situação muito específica, hoje não vale a pena montar um ambiente virtualizado para dev, exatamente por todas as desvantagens que vimos no capítulo 01.

Quanto mais unificarmos o ambiente de desenvolvimento com o ambiente de produção, mais fácil será para desenvolver, testar e colocar em produção. Isto ajudará a reduzir problemas do tipo "funciona na minha máquina". Podemos usar o Docker para organizar totalmente o ambiente de desenvolvimento.

Ao usar o Docker teremos um ambiente que será próximo ou idêntico do de produção, permitindo que os devs independente da máquina e sistema operacional tenham um ambiente de desenvolvimento padronizado.

## Desafios para montar um ambiente de desenvolvimento com Docker

Quando falamos em criar imagens para dev, estamos pensando em satisfazer as necessidades de um desenvolvedor, e não de um ambiente de produção. Isso significa que precisamos de ferramentas que não são necessárias em produção, como editores de texto, IDEs, ferramentas de debug, etc.

Além disso, precisamos de um ambiente que seja fácil de usar, que não exija que o desenvolvedor tenha que ficar executando comandos para criar e rodar os containers, e que seja fácil de configurar.

Neste cenário, não estamos preocupado com tamanho e otimização das imagens, pois estas as imagens tenderão a ser maiores, justamente por terem mais ferramentas instaladas.





