import fs from 'fs'

export default class Archivo{
    constructor(name){
        this.nombre = name
    }
    async leer(){
        try{
            const contenido = await fs.promises.readFile('./' + this.nombre + '.txt', 'utf-8')
            return JSON.parse(contenido)
        }catch(e){
            return []
            console.log(e)
        }
    }
    async guardar(newData){
        try{
            let data = await archivo.leer();
            newData.id = data.length + 1
        }catch (e){
            return(e)
        }
        let newSave = await archivo.leer()
        newSave = [...newSave, newData]
        const actualizacion = await fs.promises.writeFile('./' + this.nombre + '.txt', JSON.stringify(newSave), e => {
            if(!e){
                return this.leer()
            }else{
                return 'Error: ' + e
            }
        })
    }
    async borrar(){
        const borrado = await fs.unlink('./' + this.nombre + '.txt', e => {
            if(!e){
                return 'Archivo borrado'
            }else{
                return e;
            }
        })
    }
}