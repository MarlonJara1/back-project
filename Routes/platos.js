const {Router} = require('express')

const route = Router()

const {getPlato, postPlato, putPlato, deletePlato} = require('../Controllers/platos')

route.get('/', getPlato)
route.post('/', postPlato)
route.put('/', putPlato)
route.delete('/', deletePlato)


module.exports = route  