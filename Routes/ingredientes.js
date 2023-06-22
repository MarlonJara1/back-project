const {Router} = require('express')

const route = Router()

const {getIngrediente, postIngrediente, putIngrediente, deleteIngrediente} = require('../Controllers/ingredientes')

route.get('/', getIngrediente)
route.post('/', postIngrediente)
route.put('/', putIngrediente)
route.delete('/', deleteIngrediente)


module.exports = route  