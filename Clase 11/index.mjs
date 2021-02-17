import express from 'express'
import handlebars from 'express-handlebars'
import router from "./routes/api.mjs"
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
        layoutsDir: __dirname + '/public/views/layouts',
        partialsDir: __dirname + '/public/views/partials'
    })
)

app.set('view engine', 'hbs')
app.set('views', './public/views')
app.use(express.static('public'));

const port = 8080

app.use('/', viewRouter)
app.use('/api', router)

const server = app.listen(port, () => {
    console.log('Server listen at port: ' + port)
})

server.on('error', error => console.log('Error: ' + error))

