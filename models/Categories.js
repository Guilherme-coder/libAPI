const connection = require("../infraestructure/database/connection")
const repositorie = require('../repositories/Categories')
const Tables = require('../infraestructure/database/tables')

class Categories{
    async post(values){
        return await repositorie.post(values)
    }

    async getAll(){
        return await repositorie.getAll()        
    }

    async getById(id){
        return await repositorie.getById(id)
        
    }

    async getByModel(model){
        return await repositorie.getByModel(model)
    }

    async updateById(id, values){
        return await repositorie.updateById(id, values)
    }

    async deleteById(id){
        return await repositorie.deleteById(id)
    }
}

module.exports = new Categories