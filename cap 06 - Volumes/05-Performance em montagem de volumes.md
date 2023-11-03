# 05 - Performance em montagem de volumes

Ao criar volumes, podemos informar ao Docker o tipo de montagem a ser realizada, isto ajuda na performance de leitura e escrita dos dados.

## Tipos de montagem

O Docker possui 3 tipos de montagem:

- **consistency**: É o tipo de montagem padrão. O Docker garante que os dados sejam consistentes entre o host e o container. Por exemplo, se um arquivo for criado no host, ele será visível imediatamente no container e vice-versa. Este tipo de montagem é o mais lento, pois o Docker precisa sincronizar os dados entre o host e o container.

- **delegated**: Quando mudança de dados é feita no container, o Docker não sincroniza imediatamente com o host. É muito útil para quando é o container que realiza muito escrita nos dados.

- **cached**: Aumenta performance de leitura. Quando o host faz alterações, o container fica em modo read-only. Recomendando quando o host é mandatário nas modificações.

Como realizar a montagem:

```bash
$ docker run -v <volume-name>:<mount-point>:<consistency-type>
```

No Docker Compose:

```yaml
volumes:
  - <volume-name>:<mount-point>:<consistency-type>
```


## Montagem apenas para leitura

É possível montar um volume apenas para leitura, desta forma o container não poderá realizar escrita nos dados.

```bash
$ docker run -v <volume-name>:<mount-point>:ro
```

O `ro` é a abreviação de `read-only`.