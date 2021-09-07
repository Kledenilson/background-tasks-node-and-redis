
# Projeto desenvolvido em live code da Digital Innovation One

## Tarefas em background com Nodejs e Redis

### Tecnologias utilizadas

* Express — A web framework for Node.js
* Bull — Premium Queue package for handling distributed jobs

### Pre requisitos
Node.js
NPM or Yarn
Redis

### Dicas

* Utilize um servidor de e-mail de teste, como o https://mailtrap.io/
* Utilize o Docker para rodar o Redis: `docker pull redis`, recomendo ver o artigo: https://medium.com/@prog.tiago/redis-instalando-via-docker-58cb1d2cfb3b

### Startando projeto

* Clonar este repositório
* Rodar o `yarn` ou `npm install`
* Copiar o arquivo .env.example e criar o arquivo .env com suas credenciais de e-mail e do redis
* Rodar `yarn start` e `yarn queue` para startar o servidor local
* Acesse o Bull Dashboard: `{servidor:porta}/admin/queues`



