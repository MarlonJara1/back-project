const express = require('express')
const cors  = require('cors');
const bodyParser = require('body-parser')

const dbConection = require('../Database/config')

class server{
    
    constructor () {
        this.app = express()

        this.port = process.env.PORT

        this.categoriaPath = '/api/categoria'
        this.ingredientePath = '/api/ingrediente'
        this.platoPath = '/api/plato'
        this.paquetePath = '/api/paquete'
        this.detallePaquetePath = '/api/detalle'


        this.middlewares()

        this.routes()

        this.dbConectar()

    }

    middlewares() 
    {
        this.app.use( cors() );
        this.app.use(bodyParser.json()) 
    }

    routes()
    {
        this.app.use(this.categoriaPath, require('../Routes/categorias'))
        this.app.use(this.ingredientePath, require('../Routes/ingredientes'))
        this.app.use(this.platoPath, require('../Routes/platos'))
        this.app.use(this.paquetePath, require('../Routes/paquetes'))
        this.app.use(this.detallePaquetePath, require('../Routes/detallePaquetes'))
    }

    async dbConectar(){
        await dbConection()
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Escuchando el puerto ${this.port}`)
        })
    }
}

module.exports = server