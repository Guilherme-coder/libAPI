const connection = require('../infraestructure/database/connection')
const repositories = require('../repositories/authors')
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

    async checkCredentials(email, password){
        return await repositories.checkCredentials(email, password)
    }

    async checkEmail(email){
        return await repositories.checkEmail(email)
    }

    async updateById(id, values){
        return await repositories.updateById(id, values)
    }
}

module.exports = new Authors