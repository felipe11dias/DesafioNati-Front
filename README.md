# Desafio NATI
## Frontend
Módulo de interface para desafio NATI

## Features
- Telas de login
- Telas do CRUD(Usuário).
- Telas do CRUD(Curso)
- Telas do CRUD(Disciplina)


## Tecnologias utilizadas
- [ReactJS 16.12.0](https://pt-br.reactjs.org/)
- [Bootstrap 4.4.1](https://getbootstrap.com/docs/4.4/getting-started/introduction/)
- [axios](https://github.com/axios/axios)
- [yarn](https://yarnpkg.com/)

## Funcionamento da Aplicação
Autenticação foi feita apenas com email de um usuário.

Usuários foram catalogados por 4 tipos de numeros inteiros: 

0 - Aluno
1 - Professor
2 - Administrador
3 - Coordenador

## Banco de Dados - Relações
Banco de dados, usuário tem relação n para n com curso e disciplina, curso tem relação de n para n com usuário e semestre, além de um para n com disciplina, semestre tem relação n para n com curso e disciplina.

## Instalação
Faça o clone do projeto no git, canto superior direito no repositório do projeto(Botão 'Code').

Na pasta do projeto utilize do [NPM](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/) para gerenciar as dependências e siga os passos:
- Use o comando: yarn install ou npm i(Baixara todas as dependências do projeto)
- Use o comando: yarn run ou npm start(Irá iniciar o projeto, levantando a aplicação e deixando pronto para se utilizar)


