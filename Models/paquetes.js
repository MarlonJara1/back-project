const { Schema, model } = require('mongoose');

const PaqueteSchema = Schema({
  nombrePaquete: {
    type: String,
    required: [true, 'El nombre es obligatorio']
  },
  descripcionPaquete: {
    type: String,
    required: [true, 'La descripción es obligatoria']
  },
  precioPaquete: {
    type: Number,
    required: [true, 'El precio es obligatorio']
  },
  estadoPaquete: {
    type: String,
    enum: ['Activo', 'Inactivo'],
    required: [true]
  }
});

module.exports = model('Paquete', PaqueteSchema);
