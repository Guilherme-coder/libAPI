const moment = require('moment')

class Tables{
    init(connection){
        this.connection = connection
        this.createTableCategories()
        this.createTableAuthors()
        this.createTableBooks()
    }

    createTableBooks(){
        const sql = `CREATE TABLE IF NOT EXISTS Books (
                    id INT NOT NULL AUTO_INCREMENT,
                    title VARCHAR(255) NOT NULL, 
                    description TEXT NOT NULL,
                    author INT NOT NULL,
                    category INT NOT NULL,
                    publishedDate DATETIME NOT NULL,
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                    deleted_at TIMESTAMP,
                    PRIMARY KEY(id),
                    FOREIGN KEY(author) REFERENCES Authors(id),
                    FOREIGN KEY(category) REFERENCES Categories(id)
                    )`
        this.connection.query(sql, err => {
            if(err){
                console.log(err);
            }else{
                console.log('a tabela de livros foi criada com sucesso');
            }
        })            
                
    }

    createTableCategories(){
        const sql = `CREATE TABLE IF NOT EXISTS Categories (
                    id INT NOT NULL AUTO_INCREMENT,
                    name VARCHAR(255) NOT NULL, 
                    description TEXT NOT NULL,
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                    deleted_at TIMESTAMP,
                    PRIMARY KEY(id)
                    )`
        this.connection.query(sql, err => {
            if(err){
                console.log(err);
            }else{
                console.log('a tabela de categorias foi criada com sucesso');
            }
        })
    }

    createTableAuthors(){
        const sql = `CREATE TABLE IF NOT EXISTS Authors (
                    id INT NOT NULL AUTO_INCREMENT,
                    name VARCHAR(255) NOT NULL, 
                    bio TEXT NOT NULL,
                    birthdate DATE NOT NULL,
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                    deleted_at TIMESTAMP,
                    PRIMARY KEY(id)
                    )`
        this.connection.query(sql, err => {
            if(err)
                console.log(err);
            else
                console.log('a tabela de autores foi criada com sucesso');
        })
    }

    addDateToJson(json){
        const string = JSON.stringify(json)

        const datetime = moment().format("YYYY-MM-DD H:mm:ss")

        const stringJson = string.replace('}', `,"data": "${datetime}"\n}`)

        const finalJson = JSON.parse(stringJson)
    
        return finalJson
    }


}

module.exports = new Tables