import fs from 'fs'

class Archivo{
    constructor(name){
        this.nombre = name
    }
    async leer(){
        try{
            const contenido = await fs.promises.readFile('./' + this.nombre + '.txt', 'utf-8')
            return JSON.parse(contenido)
        }catch(e){
            return 'Error al leer el archivo: ' + e
        }
    }
    async guardar(newData){
        try{
            newData.id = await archivo.leer().length + 1
        }catch (e){
            return(e)
        }
        console.log(newData.id)
        // let newSave = await archivo.leer()
        // newSave = [...newSave, newData]
        // const actualizacion = await fs.promises.writeFile('./' + this.nombre + '.txt', JSON.stringify(newSave), e => {
        //     if(!e){
        //         return this.leer()
        //     }else{
        //         return 'Error: ' + e
        //     }
        // })
    }
    borrar(){

    }
}

const archivo =  new Archivo('productos')

let data = {
    "title": "accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend",
    "price": "$0.24",
    "thumbnail": "http://dummyimage.com/144x230.png/5fa2dd/ffffff",
    "id": 0
}

archivo.guardar(data)

//console.log(await archivo.leer())