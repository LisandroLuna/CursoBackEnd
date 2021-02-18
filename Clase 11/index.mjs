import express from 'express'
import {router} from "./routes/api.mjs"
import viewRouter from "./routes/web.mjs"

const app = express()
const port = 8080

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(express.static('public'))
app.set('views', './views')
app.set('view engine', 'pug')
app.use('/', viewRouter)
app.use('/api', router)
const server = app.listen(port, () => {
    console.log('Server listen at port: ' + port)
})

server.on('error', error => console.log('Error: ' + error))

