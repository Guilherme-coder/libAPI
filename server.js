const customExpress = require('./config/customExpress')
const app = customExpress()
const connection = require('./infraestructure/database/connection')
const Tables = require('./infraestructure/database/tables')

connection.connect(err => {
    if(err){
        console.log(err);
    }else{
        console.log('\nAPI conectada ao banco com sucesso');
        Tables.init(connection)
        app.listen(3000, () => console.log('servidor rodando na porta 3000'))
    }
})