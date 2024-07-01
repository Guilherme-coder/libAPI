const query = require('../infraestructure/database/queries')

class Authors {
    async post(values) {
        const sql = `INSERT INTO Authors SET ?;`
        return await query(sql, values)
    }

    async getAll() {
        const sql = `SELECT * FROM Authors WHERE deleted_at is NULL;`
        return await query(sql)
    }

    async getById(id){
        const sql = `SELECT * FROM Authors WHERE id=? AND deleted_at is NULL;`
        return await query(sql, id)
    }

    async updateById(id, values){
        const sql = `UPDATE Authors SET ? WHERE id=${id};`
        values.updated_at = new Date();
        return await query(sql, values)
    }
    async deleteById(id){
        const sql = `UPDATE Authors SET ? WHERE id=${id};`
        let value = {
            deleted_at: new Date()
          };
        return await query(sql, value)
    }
}

module.exports = new Authors