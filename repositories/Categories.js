const query = require('../infraestructure/database/queries')

class Catergories{
    async post(values){
        const sql = 'INSERT INTO Categories SET ?;'
        return await query(sql, values)
    }

    async getAll(){
        const sql = 'SELECT * FROM Categories ORDER BY id DESC;'
        return await query(sql)
    }

    async getById(id){
        const sql = 'SELECT * FROM Categories WHERE id=?;'
        return await query(sql, id)
    }

    async getByModel(model){
        const sql = 'SELECT * FROM Categories WHERE model=?'
        return await query(sql, model)
    }

    async updateById(id, values){
        const sql = `UPDATE Categories SET ? WHERE id=${id};`
        return await query(sql, values)
    }

    async deleteById(id){
        const sql = 'DELETE FROM Categories WHERE id=?;'
        return await query(sql, id)
    }
}

module.exports = new Catergories