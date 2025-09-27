const express = require ("express")

const server = express()

//Rotas
server.get('/abacate', (req, res) => {
    return res.send("Esse é o seu Abacate!")
})

server.get('/morango', (req, res) => {
    return res.send("Esse é o seu Morango!")
})

server.listen(3000)