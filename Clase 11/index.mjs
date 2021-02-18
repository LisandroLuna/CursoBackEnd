import express from 'express'
import {router} from "./routes/api.mjs"
import viewRouter from "./routes/web.mjs"

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
const port = 8080

app.set('view engine', 'ejs')

app.use('/', viewRouter)
app.use('/api', router)

const server = app.listen(port, () => {
    console.log('Server listen at port: ' + port)
})

server.on('error', error => console.log('Error: ' + error))

