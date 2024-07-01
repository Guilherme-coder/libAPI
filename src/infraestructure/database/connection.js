const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'libapi',
    port: 3306
})

module.exports = connection