const Authors = require('../models/authors')

module.exports = app => {
    app.post('/api/authors/', async (req, res) => {
        const values = req.body
        console.log(values);
        if(!values.name) return res.status(400).json('Nome não informado!')
        if(!values.bio) return res.status(400).json('Bio não informada!')
        if(!values.birthdate) return res.status(400).json('Data de nascimento não informada!')

        await Authors.post(values)
            .then(results => res.status(201).json(results))
            .catch(err => res.status(400).json({ error: err.message }))
    })

    app.get('/api/authors/', async (req, res) => {
        await Authors.getAll()
            .then(results => res.status(200).json(results))
            .catch(err => res.status(400).json({ error: err.message }))
    })

    app.get('/api/authors/:id', async (req, res) => {
        const id = req.params.id
        await Authors.getById(id)
            .then(results => res.status(200).json(results))
            .catch(err => res.status(400).json({ error: err.message }))
    })

    app.post('/api/authors/credentials/', async (req, res) => {
        const data = req.body
        await Authors.checkCredentials(data.email, data.password)
            .then(results => res.status(200).json(results))
            .catch(err => req.status(400).json({ error: err.message }))
    })

    app.post('/api/authors/email/', async (req, res) => {
        const email = req.body.email
        await Authors.checkEmail(email)
            .then(results => res.status(200).json(results))
            .catch(err => res.status(400).json({ error: err.message }))
    })

    app.put('/api/authors/:id', async (req, res) => {
        const id = req.params.id
        const values = req.body
        await Authors.updateById(id, values)
            .then(results => res.status(201).json(results))
            .catch(err => res.status(400).json({error: err.message}))
    })
}