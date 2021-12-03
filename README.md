# AmaroTeam-Challenge
AmaroTeam Challenge - TypeScript - Back End

## Sobre o desafio

### Criação de API para cadastro e consulta de produtos
Você precisa criar uma API com os seguintes requisitos:

#### End-point para inserção de dados
- O cliente poderá enviá-los em arquivos json ou xml e a API
  deverá inserir no banco de dados.
- Escolha o banco de dados que achar melhor.

#### End-point para consulta destes produtos
- Pode ser consultado por: id, nome ou tags. Caso a consulta seja por uma tag ou nome,
  deverá listar todos os produtos com aquela respectiva busca, poderá ser feito em um ou mais end-points.

==========================
#### Configurando um banco de dados para testar a solução de dados
- Criar um arquivo .env na root do projeto, ou seja, onde encontra-se o package.json.
- Inserir as informações abaixo no arquivo .env com seus respectivos valores:
DB_HOST = "Name or IP address of the server host"
DB_USER = "Name of the user to connect with"
DB_PASSWORD = "The user's password"
DB_SCHEMA = "The schema to use"

#### Solução
Esta solução foi construída utilizando o YARN: Rode os seguintes comandos dentro da pasta que estiver com o package.json.
- yarn migrations
- yarn dev or yarn start

#### Link da Documentação
* https://documenter.getpostman.com/view/16818323/UVJhBuHN
