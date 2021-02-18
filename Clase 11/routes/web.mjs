import express from 'express'
import {prodList} from "./api.mjs"


let viewRouter = express.Router()

viewRouter.get('/productos/vista', (req, res) => {
    res.render('pages/view', { list: prodList})
})
viewRouter.get('/productos/cargar', (req, res) => {
    res.render('pages/load', { list: prodList})
})

export default viewRouter