const connection = require('../infraestructure/database/connection')
const repositories = require('../repositories/Authors')
const moment = require('moment')

class Authors{
    async post(values){
        values.created_at = moment().format('YYYY-MM-DD')
        return await repositories.post(values)
    }

    async getAll(){
        return await repositories.getAll()
    }

    async getById(id){
        return await repositories.getById(id)
    }

    async updateById(id, values){
        return await repositories.updateById(id, values)
    }

    async deleteById(id){
        return await repositories.deleteById(id)
    }
}

module.exports = new Authors