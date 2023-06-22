const {Router} = require('express')

const route = Router()

const {getPaquete, postPaquete, putPaquete, deletePaquete} = require('../Controllers/paquetes')

route.get('/', getPaquete)
route.post('/', postPaquete)
route.put('/', putPaquete)
route.delete('/', deletePaquete)


module.exports = route  