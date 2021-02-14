import express from 'express'

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

let router = express.Router()

router.get('/productos/', (req, res) => {
    let data = prodList
    data.length == 0 ? data = {error : 'no hay productos cargados'} : ''
    res.json(prodList)
})

router.post('/productos/', (req, res) => {
    let id = 0
    prodList.forEach(prod => {
        prod.id >= id ? id++ : ''
    })
    let newProd = req.body
    newProd.id = id
    prodList = [...prodList, newProd]
    res.json(req.body)
})

router.get('/productos/:id', (req, res) => {
    let data = {error : 'producto no encontrado'}
    let id = req.params.id
    prodList.forEach(prod => {
        prod.id == id ? data = prod : ''
    })
    res.json(data)
})

router.put('/productos/actualizar/:id', (req, res) => {
    let data = {error : 'producto no encontrado'}
    let id = req.params.id
    let body = req.body
    prodList = prodList.map(prod => {
        prod.id == id ? (body.id = id, prod = body  ) : ''
        return prod
    })
    res.json({
        result: 'ok',
        id: req.params.id,
        nuevo: req.body
    })
})

router.delete('/productos/borrar/:id', (req, res) => {
    let data = {error : 'producto no encontrado'}
    let id = req.params.id
    let body = req.body
    prodList.forEach((prod, i) => {
        prod.id == id ? (delete prodList[i]) : ''
    })
    res.json({
        result: 'ok',
        id: req.params.id
    })
})


export default router