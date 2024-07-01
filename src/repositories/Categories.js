const query = require('../infraestructure/database/queries')

class Catergories{
    async post(values){
        const sql = 'INSERT INTO Categories SET ?;'
        return await query(sql, values)
    }

    async getAll(){
        const sql = 'SELECT * FROM Categories WHERE deleted_at is null ORDER BY id DESC;'
        return await query(sql)
    }

    async getById(id){
        const sql = 'SELECT * FROM Categories WHERE deleted_at is null AND id=?;'
        return await query(sql, id)
    }

    async getByModel(model){
        const sql = 'SELECT * FROM Categories WHERE model=?'
        return await query(sql, model)
    }

    async updateById(id, values){
        const sql = `UPDATE Categories SET ? WHERE id=${id} AND deleted_at is null;`
        values.updated_at = new Date();
        return await query(sql, values)
    }

    async deleteById(id){
        const sql = `UPDATE Categories SET ? WHERE id=${id};`
        let value = {
            deleted_at: new Date()
          };
        return await query(sql, value)
    }
}

module.exports = new Catergories