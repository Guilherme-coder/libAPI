const Books = require('../models/books')

module.exports = app => {
    app.post('/api/books/', async (req, res) => {
        try{
            const values = req.body
            if(!values.title)
                throw new Error('O título do livro não pode ser vazio.')
            if(!values.description)
                throw new Error('A descrição do livro não pode ser vazia.')
            if(!values.author)
                throw new Error('O autor do livro não pode ser vazio.')
            if(!values.category)
                throw new Error('A categoria do livro não pode ser vazia.')
            Books.post(values)
                .then(results => {
                    res.status(201).json(values)
                })
        }catch(err){
            res.status(400).json({ message: err.message })
        }


    })
    
    app.get('/api/books/', async (req, res) => {
        try{
            await Books.getAll()
                .then(results => {
                    res.status(200).json(results)
                })
        }catch(err){
            res.status(400).json({ message: err.message })
        }
        
        
    })

    app.get('/api/books/:id', async (req, res) => {
        try{
            const id = parseInt(req.params.id)
            await Books.getById(id)
                .then(results => {
                    if(results.length === 0)
                        throw new Error('Livro não cadastrado.')
                    res.status(200).json(results)
                })
        }catch(err){
            res.status(404).json({ message: err.message })
        }
        
    })

    app.put('/api/books/:id', async (req, res) => {
        try{
            const values = req.body
            const id = req.params.id
            await Books.updateById(id, values)
                .then(results => {
                    res.status(201).json(values)
                })
        }catch(err){
            res.status(400).json({ message: err.message })
        }
        
    })

    app.delete('/api/books/:id', async (req, res) => {
        try{
            const id = parseInt(req.params.id)
            if(JSON.stringify(await Books.getById(id)).length <= 2)
                throw new Error('O livro não existe, logo não é possível deletá-lo.')
            await Books.deleteById(id)
                .then(results => {
                    res.status(200).json(results)
                })
        }catch(err){
            res.status(400).json({ message: err.message })
        }
        
    })
}