const customExpress = require('./src/config/customExpress')
const app = customExpress()
const connection = require('./src/infraestructure/database/connection')
const Tables = require('./src/infraestructure/database/tables')

connection.connect(err => {
    if(err){
        console.log(err);
    }else{
        console.log('\nAPI conectada ao banco com sucesso');
        Tables.init(connection)
        app.listen(3000, () => console.log('servidor rodando na porta 3000'))
    }
})