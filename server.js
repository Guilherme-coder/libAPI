import { createServer } from 'node:http'

const server = createServer((req, res) => {
    res.write('Inicio da API')
    res.end()
})

server.listen(3000)