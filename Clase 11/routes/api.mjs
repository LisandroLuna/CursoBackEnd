import express from 'express'
import prodList from "../data/files.mjs";


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
    res.writeHead(301, {"Location": "/productos/vista"});
    return res.end();
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