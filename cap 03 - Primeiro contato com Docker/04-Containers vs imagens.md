# 04 - Containers vs imagens

Aprendemos que uma imagem é um template somente leitura com instruções para criar um container. O container é uma instância de uma imagem. Mas o que isso significa na prática?

Vamos criar um container a partir da imagem `node:20-slim`, que é uma imagem do Node.js com o sistema operacional Debian. Para criar o container, execute o comando abaixo:

```bash
docker run -it node1 node:20-slim bash
```

O `bash` no final do comando é o comando que será executado quando o container for criado. Neste caso, o container será criado e o bash será executado.

A opção `-it` é uma abreviação de `-i` e `-t`. A opção `-i` significa que o container será executado em modo interativo, ou seja, o terminal do container será conectado ao terminal do host. A opção `-t` significa que o container terá um terminal.

Vamos criar um arquivo dentro do container:

```bash
echo "Olá mundo" > teste.txt
```

Agora vamos criar um segundo container a partir da mesma imagem:

```bash
docker run -it node2 node:20-slim bash
```

Vamos verificar se o arquivo `teste.txt` existe no segundo container:

```bash
cat teste.txt
```

O arquivo não existe. Isso acontece porque o container é uma instância da imagem, mas não é a imagem.

É como se tivessemos criado 2 objetos a partir de uma mesma classe. Os objetos são diferentes, mas possuem as mesmas características, exemplo:

```javascript
class ImagemNode20Slim {
  files
  etc
  etc
}

const containerNode1 = new ImagemNode20Slim();
const containerNode2 = new ImagemNode20Slim();
```

A imagem é imutável, ou seja, não podemos alterar uma imagem. Se precisarmos alterar uma imagem, precisamos criar uma nova imagem a partir da imagem original.

Já o container é mutável, ou seja, podemos alterar um container. Por exemplo, podemos adicionar um arquivo no container, podemos instalar um programa no container, etc.

Enquanto um container estiver presente na máquina, as alterações feitas no container serão mantidas. Se o container for removido, as alterações serão perdidas. Uma lição muito importante é que os containers são efêmeros, ou seja, eles não devem ser usados para armazenar dados, mais para frente para entender como preservar os dados de um container, mas já saiba, não tenha dó nem piedade de remover um container.





