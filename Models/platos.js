const {Schema, model} = require('mongoose') 

const PlatoSchema = Schema({
    nombrePlato: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },

    descripcionPlato: {
        type: String,
        required: [true, 'La descripcion es obligatoria']
    },

    precioPlato: {
        type: Number,
        required: [true, 'El precio es obligatorio']
    },

    estadoPlato: {
        type: String,
        enum: ['Activo', 'Inactivo'],
        required: [true]
    }
})

module.exports = model('Plato', PlatoSchema)