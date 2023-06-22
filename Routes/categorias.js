const {Router} = require('express')

const route = Router()

const {getCategoria, postCategoria, putCategoria, deleteCategoria} = require('../Controllers/categorias')

route.get('/', getCategoria)
route.post('/', postCategoria)
route.put('/', putCategoria)
route.delete('/', deleteCategoria)


module.exports = route  