const query = require('../infraestructure/database/queries')

class Books{
    async post(values){
        const sql = 'INSERT INTO Books SET ?;'
        return await query(sql, values)
    }

    async getAll(){
        const sql = 'SELECT * FROM Books WHERE deleted_at is null ORDER BY id DESC;'
        return await query(sql)
    }

    async getById(id){
        const sql = 'SELECT * FROM Books WHERE deleted_at is null AND id=?;'
        return await query(sql, id)
    }

    async getByModel(model){
        const sql = 'SELECT * FROM Books WHERE model=?'
        return await query(sql, model)
    }

    async updateById(id, values){
        const sql = `UPDATE Books SET ? WHERE id=${id} AND deleted_at is null;`
        values.updated_at = new Date();
        return await query(sql, values)
    }

    async deleteById(id){
        const sql = `UPDATE Books SET ? WHERE id=${id};`
        let value = {
            deleted_at: new Date()
          };
        return await query(sql, value)
    }
}

module.exports = new Books