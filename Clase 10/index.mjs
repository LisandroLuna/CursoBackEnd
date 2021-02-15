import express from 'express'
import handlebars from 'express-handlebars'
import {router, viewRouter} from "./routes.mjs"


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

app.use('/api', router)

app.get('/', viewRouter)

const server = app.listen(port, () => {
    console.log('Server listen at port: ' + port)
})

server.on('error', error => console.log('Error: ' + error))

