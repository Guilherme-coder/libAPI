const Authors = require('../models/Authors')

module.exports = app => {
    app.post('/api/authors/', async (req, res) => {
        const values = req.body
        if(!values.name) return res.status(400).json({message: 'Nome não informado!'})
        if(!values.bio) return res.status(400).json({message: 'Bio não informada!'})
        if(!values.birthdate) return res.status(400).json({message: 'Data de nascimento não informada!'})

        await Authors.post(values)
            .then(results => res.status(201).json({message: "Autor criado com sucesso."}))
            .catch(err => res.status(400).json({ error: err.message }))
    })

    app.get('/api/authors/', async (req, res) => {
        await Authors.getAll()
            .then(results => res.status(200).json(results))
            .catch(err => res.status(400).json({ error: err.message }))
    })

    app.get('/api/authors/:id', async (req, res) => {
        const id = req.params.id

        try{
            const id = parseInt(req.params.id)
            await Authors.getById(id)
                .then(results => {
                    if(results.length === 0)
                        throw new Error('Autor não cadastrado.')
                    res.status(200).json(results)
                })
        }catch(err){
            res.status(404).json({ message: err.message })
        }
    })

    app.put('/api/authors/:id', async (req, res) => {
        const id = req.params.id
        const values = req.body
        await Authors.updateById(id, values)
            .then(results => res.status(201).json(values))
            .catch(err => res.status(400).json({error: err.message}))
    })

    app.delete('/api/authors/:id', async (req, res) => {
        try{
            const id = parseInt(req.params.id)
            if(JSON.stringify(await Authors.getById(id)).length <= 2)
                throw new Error('O autor não existe, logo não é possível deletá-lo.')
            await Authors.deleteById(id)
                .then(results => {
                    res.status(200).json({message: "Autor deletado com sucesso."})
                })
        }catch(err){
            res.status(400).json({ message: err.message })
        }
        
    })
}