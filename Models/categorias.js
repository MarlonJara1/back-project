const {Schema, model} = require('mongoose') 

const CategoriaSchema = Schema({
    nombreCategoria: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },

    descripcionCategoria: {
        type: String,
        required: [true, 'La descripcion es obligatoria']
    },

    estadoCategoria: {
        type: String,
        enum: ['Activo', 'Inactivo'],
        required: [true]
    }
})

module.exports = model('Categoria', CategoriaSchema)