# SmartSite - Smart Fit Challenge
Este é um projeto da Smart Fit de um site inteligente que traz as unidades que estao em funcionamento ou não com suas respectivas informações de horario, localização e prevenções adotadas pelas mesmas.

## Tecnologias
Este projeto foi desenvolvido em javascript com os frameworks:
    - React :: para o desenvolvimento,
    - Reactstrap/Bootstrap :: para trabalhar com o layout e composição dos componentes usados.

## Como acesar/rodar o projeto ?
Forma 1 - Rodando Localmente
    Voce pode acessar o seu terminal e ir até a pasta que deseja instalar a aplicação e rodar o seguinte comando:
```
    git clone https://github.com/LuisCamargoM/smartSite.git
```
    Em seguida, acessar a pasta raiz do repositorio e rodar o seguinte comando:
```
    npm install
``` 

Forma 2 - Rodando Localmente via docker
    Voce pode acessar o seu terminal e ir até a pasta que deseja instalar a aplicação e rodar o seguinte comando:
```
    git clone https://github.com/LuisCamargoM/smartSite.git
```
    Em seguida, acessar a pasta raiz do repositorio e rodar os seguintes comandos:
```
    docker build . -t smartsite
    docker run -it -p 3000:3000 smartsite
``` 

## Acesso em produção
O smart site esta rodando na plataforma Netlify. Ela esta fazendo a intermediação do código do repositorio para produção 