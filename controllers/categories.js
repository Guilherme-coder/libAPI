const Categories = require('../models/categories')

module.exports = app => {
    app.post('/api/categories/', async (req, res) => {
        try{
            console.log(req.body);
            const values = req.body
            if(!values.name)
                throw new Error('O nome da categoria não pode ser vazia.')
            if(!values.description)
                throw new Error('A descrição da categoria não pode ser vazia.')
            Categories.post(values)
                .then(results => {
                    res.status(201).json(values)
                })
        }catch(err){
            res.status(400).json({ message: err.message })
        }


    })
    
    app.get('/api/categories/', async (req, res) => {
        try{
            await Categories.getAll()
                .then(results => {
                    res.status(200).json(results)
                })
        }catch(err){
            res.status(400).json({ message: err.message })
        }
        
        
    })

    app.get('/api/categories/:id', async (req, res) => {
        try{
            const id = parseInt(req.params.id)
            await Categories.getById(id)
                .then(results => {
                    if(results.length === 0)
                        throw new Error('Categoria não cadastrada.')
                    res.status(200).json(results)
                })
        }catch(err){
            res.status(404).json({ message: err.message })
        }
        
    })

    app.put('/api/categories/:id', async (req, res) => {
        try{
            const values = req.body
            const id = req.params.id
            await Categories.updateById(id, values)
                .then(results => {
                    res.status(201).json(values)
                })
        }catch(err){
            res.status(400).json({ message: err.message })
        }
        
    })

    app.delete('/api/categories/:id', async (req, res) => {
        try{
            const id = parseInt(req.params.id)
            if(JSON.stringify(await Categories.getById(id)).length <= 2)
                throw new Error('A categoria não existe, logo não é possível deletá-la.')
            await Categories.deleteById(id)
                .then(results => {
                    res.status(200).json(results)
                })
        }catch(err){
            res.status(400).json({ message: err.message })
        }
        
    })
}