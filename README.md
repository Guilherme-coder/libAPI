Esta é uma API de gerenciamento de livros, cateorias e autores.

Ela foi construída usando Node.js (v20.15.0) com gerenciador de pacotes NPM (v10.7.0).
Foi usado express para criar o servidor HTTP e não possui ORM para persistir os dados.

Configurando: 
* Para iniciar, é preciso ter uma versão do Node.js e NPM conpatível com o projeto.
* Fazer o download do projeto na máquina.
* É necessário ter um servidor MySQL (rodando na máquina ou até em nuvem).
* Para fazer a configuração do MySQL é necessário preencher o arquivo abaixo conforme os dados do seu servidor.

  ![image](https://github.com/Guilherme-coder/libAPI/assets/62355014/8f991b93-3aa3-4330-996f-99c624672561)

Você precisa substituir os dados conforme seu host, user, password e port.

ATENÇÃO: O parâmetro 'database' não deve ser substituido de seu valor padrão 'libapi', pois, se substituido irá dar erro ao criar as tabelas.

* Após isso, entre na raiz do projeto e rode o comando 'npm install' para baixar as dependências do projeto.
* Feito isso, o comando para rodar o servidor em modo desenvolvimento é 'npm run dev'.
* A porta padrão em que o projeto vai rodar é a 3000, estarei deixando um arquivo de requisições que poderá ser útil para testar as rotas e casos de uso.
