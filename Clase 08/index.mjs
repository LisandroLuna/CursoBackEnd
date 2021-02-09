import express from 'express'


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const port = 8080

const server = app.listen(port, () => {
    console.log('Server listen at port: ' + port)
})

let prodList = [
    {
        id: 0,
        title: "Crested porcupine",
        price: "$63.27",
        thumbnail: "http://dummyimage.com/113x117.jpg/dddddd/000000"
    },
    {
        id: 1,
        title: "Civet cat",
        price: "$40.17",
        thumbnail: "http://dummyimage.com/131x243.jpg/cc0000/ffffff"
    },
    {
        id: 2,
        title: "Beaver, european",
        price: "$18.21",
        thumbnail: "http://dummyimage.com/144x167.png/5fa2dd/ffffff"
    },
    {
        id: 3,
        title: "Red-capped cardinal",
        price: "$51.36",
        thumbnail: "http://dummyimage.com/173x220.jpg/dddddd/000000"
    },
    {
        id: 4,
        title: "Bleu, red-cheeked cordon",
        price: "$42.59",
        thumbnail: "http://dummyimage.com/114x240.bmp/cc0000/ffffff"
    }
]

server.on('error', error => console.log('Error: ' + error))

app.get('/api/productos/', (req, res) => {
    let data = prodList
    data.length == 0 ? data = {error : 'no hay productos cargados'} : ''
    res.json(prodList)
})

app.post('/api/productos/', (req, res) => {
    let id = 0
    prodList.forEach(prod => {
        prod.id >= id ? id++ : ''
    })
    let newProd = req.body
    newProd.id = id
    prodList = [...prodList, newProd]
    res.json(req.body)
})

app.get('/api/productos/:id', (req, res) => {
    let data = {error : 'producto no encontrado'}
    let id = req.params.id
    prodList.forEach(prod => {
        prod.id == id ? data = prod : ''
    })
    res.json(data)
})