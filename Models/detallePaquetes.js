const {Schema, model} = require('mongoose') 

const detalleSchema = Schema({

    idPaquete: {
        type: String,
        required: [true, 'El id del paquete es obligatorio']
    },

    tipoPa: {
        type: String,
        required: [true, 'El tipo es obligatorio']
    },

    cantidad: {
        type: Number,
        required: [true, 'La cantidad es obligatoria']
    },
})

module.exports = model('Detalle', detalleSchema)