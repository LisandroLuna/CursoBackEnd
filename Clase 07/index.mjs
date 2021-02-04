import express from 'express'
import Archivo from './files.mjs'
import Visits from './visit.mjs'


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

const app = express()

const port = 8080

const server = app.listen(port, () => {
    console.log('Server listen at port: ' + port)
})

server.on('error', error => console.log('Error: ' + error))

let products = new Archivo('productos')
let result = await products.leer()

let visits = new Visits()

// Consigna 1
app.get('/items', (req, res) => {
    res.json(result)
    visits.add('items')
})

// Consigna 2
app.get('/item-random', (req, res) => {
    res.json(result[getRndInteger(0, result.length-1)])
    visits.add('item')
})

// Consigna 3
app.get('/visitas', (req, res) => {
    res.json(visits)
})