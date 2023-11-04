# 01 - Montagem uma imagem otimizada para produção

- **use labels** para documentar a imagem. Isto não é obrigatório, mas podemos declarar meta informações da imagem como: autor, licenças, versão e etc. Estas informações podem ser usadas por ferramentas de automação de build e deploy.

- **Utilize imagens oficiais**. As imagens oficiais são mantidas pela comunidade e são mais seguras. Evite criar imagens do zero, pois isto pode ser um trabalho desnecessário. Procure imagens que tenham o sufixo `-alpine`, `-slim` e etc.

- **Tente juntar comandos RUN**. Cada comando RUN cria uma nova camada na imagem. Quanto mais camadas, maior o tamanho da imagem.

- **Remova ferramentas e arquivos desnecessários**. Após instalar e configurar as ferramentas necessárias, remova os arquivos temporários e caches para reduzir o tamanho da imagem. Tente fazer isto no mesmo comando `RUN`.

- **Use usuário non-root como usuário padrão da image**m. Usuários non-root são mais seguros e não podem executar comandos privilegiados. Para isto, use o comando `USER` no Dockerfile. Aplique o princípio chamado de _least privilege_ (privilégio mínimo).

- **Use a estratégia de cache de camadas com COPY e RUN**. Colocar um COPY e logo em seguida um RUN faz com que o Docker só execute o RUN se o COPY tiver sido alterado. Isto é muito útil para evitar que o Docker execute comandos desnecessários, além de melhorar o tempo de build, exemplo:

```dockerfile
  COPY package.json .
  RUN npm install
```

- **Use o EXPOSE** para expor portas. Isto é útil para documentar quais portas a imagem precisa para funcionar.

- **Use o multi-stage build** para reduzir o tamanho da imagem. O multi-stage build é uma técnica que permite criar uma imagem com vários estágios. Cada estágio pode ser usado para executar uma tarefa específica. Por exemplo, podemos usar um estágio para instalar as dependências e outro para executar os testes. No final, podemos copiar apenas os arquivos necessários para a imagem final. Isto reduz o tamanho da imagem e melhora o tempo de build.

- **Para necessidade de otmização mais agressiva, use imagem distroless**. Imagens distroless são imagens que não possuem um sistema operacional. Elas são muito seguras e pequenas. Porém, elas não possuem ferramentas como: shell, apt, apk, yum, etc. Isto significa que não podemos executar comandos dentro de um container distroless. Configurar a imagem é mais fácil, porque você terá que distribuir e copiar ferramentas manualmente, já que não se tem gerenciador de pacotes.