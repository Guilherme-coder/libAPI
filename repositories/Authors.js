const query = require('../infraestructure/database/queries')

class Authors {
    async post(values) {
        const sql = `INSERT INTO Authors SET ?;`
        return await query(sql, values)
    }

    async getAll() {
        const sql = `SELECT * FROM Authors;`
        return await query(sql)
    }

    async getById(id){
        const sql = `SELECT * FROM Authors WHERE id=?;`
        return await query(sql, id)
    }

    async checkCredentials(email, password){
        const sql = `SELECT * FROM Authors WHERE email="${email}" AND password="${password}";`
        return await query(sql)
    }

    async checkEmail(email){
        const sql = `SELECT * FROM Authors WHERE email=?;`
        return await query(sql, email)
    } 

    async updateById(id, values){
        const sql = `UPDATE Authors SET ? WHERE id=${id};`
        return await query(sql, values)
    }
}

module.exports = new Authors