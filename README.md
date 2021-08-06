# SmartSite - Smart Fit Challenge
Este é um projeto da Smart Fit de um site inteligente que traz as unidades que estao em funcionamento ou não com suas respectivas informações de horario, localização e prevenções adotadas pelas mesmas.

## Tecnologias
Este projeto foi desenvolvido em javascript com os frameworks:
    - React :: para o desenvolvimento,
    - Reactstrap/Bootstrap :: para trabalhar com o layout e composição dos componentes usados.
    - Redux :: para tratar do compartilhamento das informações utilizadas

## Como acesar/rodar o projeto ?
Forma 1 - Rodando Localmente
    Voce pode acessar o seu terminal e ir até a pasta que deseja instalar a aplicação e rodar os seguintes comandos dentro da pasta raiz:
```
    git clone https://github.com/LuisCamargoM/smartSite.git
    npm install
```


Forma 2 - Rodando Localmente via docker
    Voce pode acessar o seu terminal e ir até a pasta que deseja instalar a aplicação e rodar os seguintes comandos dentro da pasta raiz:
```
    git clone https://github.com/LuisCamargoM/smartSite.git
    docker build . -t smartsite
    docker run -it -p 3000:3000 smartsite
``` 

Forma 3 - Acesso CI do Smart Site
O smart site esta rodando na plataforma Netlify. Ela esta fazendo a intermediação do código do repositorio para produção. Voce pode acessar clicando aqui: [SmartFit Site](https://sad-volhard-df6017.netlify.app/)
