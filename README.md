# [Ecoleta](https://ecoleta-djoni.herokuapp.com)
<img src="public/assets/logo.svg" align="right">

Projeto Ecoleta feito durante a 1° temporada da Next Level Weak, dos dias 1 a 5 de junho, organizado pela [@Rocketseat](https://github.com/Rocketseat). Tem como funcionalidade ser um marketplace para ONG's coletoras de resíduos, facilitando a reciclagem entre a população.

***

## Tecnologias usadas:
#### FrontEnd:
  * [Nunjucks](https://mozilla.github.io/nunjucks)
  * [JavaScript](https://javascript.com/)
  * [HTML5](http://w3.org/TR/html5/)
  * [CSS3](https://w3schools.com/Css/)

#### BackEnd:
  * [Express](https://expressjs.com/pt-br)
  * [SQLite3](https://sqlite.org)
  * *[Nodemon](https://nodemon.io) - para desenvolvimento*

#### API:
  * [IBGE](https://servicodados.ibge.gov.br/api/docs/localidades)


## Funcionalidades trabalhadas
  * [Cadastro](#tela-criar-ponto) de entidades
  * [Uso de API](#api) do IBGE para classificação dos estados e cidades
  * [Pesquisa](#modal-de-pesquisa) a partir da cidade
  * [Listagem](#tela-resultados-da-pesquisa) de resultados puxados do banco de dados
  * [Responsividade](#imagens) para todas as telas

***

## Para iniciar:
> * `npm install`

Após o comando acima executar:
*(executar apenas um dos comandos abaixo)*

> * `npm start` **→** para abrir **sem** o nodemon
>
> * `npm dev` **→** para abrir **com** o nodemon

***

## Imagens:
### Tela [Inicial](https://ecoleta-djoni.herokuapp.com):
<div style=display:"grid">
  <img src=".github/images/pc-pageHome.png" alt="Página Inicial visto por um PC" width="50%">
  <img src=".github/images/tablet-pageHome.png" alt="Página Inicial visto por um Tablet" width="23.35%">
  <img src=".github/images/cel-pageHome.png" alt="Página Inicial visto por um Celular" width="11.99%">
</div>

### Tela [Criar Ponto](https://ecoleta-djoni.herokuapp.com/crair-ponto):
<div style=display:"grid">
  <img src=".github/images/pc-createPoint.png" alt="Página Criar Ponto visto por um PC" width="50%">
  <img src=".github/images/tablet-createPoint.png" alt="Página Criar Ponto visto por um Tablet" width="23.35%">
  <img src=".github/images/cel-createPoint.png" alt="Página Criar Ponto visto por um Celular" width="11.99%">
</div>

### Tela [Resultados da Pesquisa](https://ecoleta-djoni.herokuapp.com):
<div style=display:"grid">
  <img src=".github/images/pc-searchPoint.png" alt="Página Resultados da Pesquisa visto por um PC" width="50%">
  <img src=".github/images/tablet-searchPoint.png" alt="Página Resultados da Pesquisa visto por um Tablet" width="23.35%">
  <img src=".github/images/cel-searchPoint.png" alt="Página Resultados da Pesquisa visto por um Celular" width="11.99%">
</div>

### Modal de Pesquisa:
  <img src=".github/images/modal-searchPoint.png">