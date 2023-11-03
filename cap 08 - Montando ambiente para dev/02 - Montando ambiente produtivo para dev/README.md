# 02 - Montando um ambiente produtivo para dev

## Passo a passo

* **Escolha uma imagem base com menor tamanho possível**, normalmente imagens `-alpine`, `-slim`, `-buster` são as melhores opções. Dependendo da linguagem de programação, se usa outras nomes para imagens menores, veja a documentação da imagem no Docker Hub. Começar com uma imagem menor é importante para que a imagem final seja menor e mais otimizada, mas não é uma regra, se você precisa de uma imagem maior, use uma imagem maior.

* **Instale ferramentas básicas que são auxiliares ao desenvolvimento**, como `cURL`, `procps`, `iputils-ping`. Podemos instalar até instalar ferramentas como `Git` se necessitar gerenciar o controle de versão dentro do container, mas neste caso exigirá um volume Docker para compartilhar sua configurações do Git com o container. Podemos instalar também shell mais produtivos para dev como ZSH.

* **Use um usuário não-root**, isso é importante para que o container não rode com privilégios de root, o que pode ser um risco de segurança. Para isso, crie um usuário não-root e use o comando `USER` para trocar para este usuário. Temos que nos acostumar com isto, porque em produção o container vai rodar com um usuário não-root.

* **Defina um diretório de trabalho**, isso é importante para que o container já inicie em um diretório específico, e não no diretório raiz. Para isso, use o comando `WORKDIR` para definir o diretório de trabalho. Defina um diretório de trabalho que seu usuário não-root tenha permissão de escrita.

* **Não rode seu gerenciador de pacotes** (NPM, Composer, Maven, Pip, etc) dentro da imagem, deixe a instalação para o CMD ou ENTRYPOINT. Isso é importante para que o volume que normalmente vamos compartilhar ao desenvolver não sobrescreva os arquivos instalados pelo gerenciador de pacotes.

* **Use CMD em vez de ENTRYPOINT** para rodar o container. Isso é importante para que possamos sobrescrever o comando de inicialização do container quando rodarmos o container com o Docker Compose. O CMD é mais flexível que o ENTRYPOINT, e por isso é mais recomendado para rodar containers em desenvolvimento.

* **Use um comando para manter o container rodando**, como `tail -f /dev/null` ou `sleep infinity`. Isso é importante para que o container não finalize logo após iniciar, e assim possamos usar o comando `docker exec` para acessar o container e rodar comandos dentro dele. Se tiver necessidades de executar coisas antes do container estar pronto, criar um scripts SH e o execute no CMD.

* **Crie um Docker Compose específico para dev**. Separe o Docker Compose de desenvolvimento do Docker Compose de produção, assim você pode ter configurações diferentes para cada ambiente.

* **Crie um volume local para sincronizar as modificações do projeto**. Isso é importante para que as modificações feitas no projeto sejam refletidas dentro do container. Podemos usar o volume para sincronizar as modificações do projeto com o container, e assim não precisamos ficar recriando a imagem a cada modificação.

* **Crie um volume local para não perder o banco de dados**. Isso é importante para que o banco de dados não seja perdido quando o container for removido. O volume local irá permitir que você exclua todos os volumes do Docker sem perder o banco de dados, porque o volume estará dentro do próprio projeto

* **(Opcional)Use um health check e depends_on**. Pode ser necessário esperar containers iniciarem, mas como estamos em desenvolvimento, a ideia é o projeto não ser executado logo de cara, então a princípio não precisaria do health check, já o depends_on pode ser útil para criar uma ordem de execução entre os containers e também se um não subir, o outro não sobe.

* **Use o artifício do Docker Compose Override para sobrescrever o comando de inicialização do container**. Ele permitirá que dev sobrescrevam configurações padrões no Docker Compose sem alterar o arquivo original e bagunçar o git. Quando o `docker compose up` é possível passar vários arquivos de configuração, e o último arquivo sobrescreve as configurações dos arquivos anteriores. Podemos usar este artifício para sobrescrever o comando de inicialização do container, e assim rodar o container com o comando que quisermos.