import express from 'express'
import router from "./routes.mjs";


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const port = 8080

app.use('/api', router)
app.use(express.static('public'));

const server = app.listen(port, () => {
    console.log('Server listen at port: ' + port)
})

server.on('error', error => console.log('Error: ' + error))

