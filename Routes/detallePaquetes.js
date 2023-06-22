const {Router} = require('express')

const route = Router()

const {getDetalle, postDetalle, putDetalle, deleteDetalle} = require('../Controllers//detallePaquetes')

route.get('/', getDetalle)
route.post('/', postDetalle)
route.put('/', putDetalle)
route.delete('/', deleteDetalle)


module.exports = route  