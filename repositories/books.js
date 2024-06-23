const query = require('../infraestructure/database/queries')

class Books{
    async post(values){
        const sql = 'INSERT INTO Books SET ?;'
        return await query(sql, values)
    }

    async getAll(){
        const sql = 'SELECT * FROM Books ORDER BY data DESC;'
        return await query(sql)
    }

    async getById(id){
        const sql = 'SELECT * FROM Books WHERE id=?;'
        return await query(sql, id)
    }

    async getByModel(model){
        const sql = 'SELECT * FROM Books WHERE model=?'
        return await query(sql, model)
    }

    async updateById(id, values){
        const sql = `UPDATE Books SET ? WHERE id=${id};`
        return await query(sql, values)
    }

    async deleteById(id){
        const sql = 'DELETE FROM Books WHERE id=?;'
        return await query(sql, id)
    }
}

module.exports = new Books