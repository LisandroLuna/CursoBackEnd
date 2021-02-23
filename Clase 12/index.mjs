import * as http from "http";
import express from 'express'
import {Server} from "socket.io";
import handlebars from 'express-handlebars'
import {prodList, router} from "./routes/api.mjs"
import viewRouter from "./routes/web.mjs"
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
        defaultLayout: 'index.hbs',
        layoutsDir: __dirname + '/views/layouts',
        partialsDir: __dirname + '/views/partials'
    })
)

app.set('view engine', 'hbs')
app.set('views', './views')
app.use(express.static('public'));

const port = 8080

app.use('/', viewRouter)
app.use('/api', router)

const server = http.createServer(app)

const io = new Server(server)

server.listen(port, () => {
    console.log('Server listen at port: ' + port)
})
io.on("connection", socket => {
    let list = prodList
    console.log("Client connected...");
    socket.emit('data', list)
    socket.on('update', (newData) => {
        let id = 0
        prodList.forEach(prod => {
            prod.id >= id ? id++ : ''
        })
        newData.id = id
        list = [...list, newData]
        io.emit('data', list)
    })
});

