const {response} = require('express')
const Paquete = require('../Models/paquetes')


const getPaquete = async(req, res=response) => {
    let mensaje = ''
    try {
        const paquete = await Paquete.find()
        mensaje = paquete
    } catch (error) {
        mensaje = error
    }

   res.json({
        paquete:mensaje
    })
    
}

const postPaquete = async(req, res = response) =>{

    const body = req.body
    let mensaje = ''
    const paquete= new Paquete(body) 
    console.log(body)
    try {
        await paquete.save()
        mensaje = 'Paquete registrado exitosamente'
    } catch (error) {
        if (error.errors) {
            const errorMessages = Object.values(error.errors).map((err) => err.message);
            mensaje = errorMessages.join('. ');
          } else {
            mensaje = error.message;
          }
    }

    res.json({
        mensaje
    })
   
}

const putPaquete = async(req, res = response) =>{
    const body = req.body
     console.log(body)

    let mensaje = ''

    try {
            await Paquete.findOneAndUpdate({_id:body._id}, {nombrePaquete:body.nombrePaquete, descripcionPaquete:body.descripcionPaquete, precioPaquete:body.precioPaquete, estadoPaquete:body.estadoPaquete})
            mensaje = 'Paquete modificado exitosamente.'
            
    } catch (error) {
        if (error.errors) {
            const errorMessages = Object.values(error.errors).map((err) => err.message);
            mensaje = errorMessages.join('. ');
          } else {
            mensaje = error.message;
          }
    }
    
    res.json({
        mensaje:mensaje
    })
   
}

const deletePaquete = async(req, res = response) =>{
    const body = req.body
    let mensaje = ''

    try {
        await Paquete.findOneAndDelete({_id:body._id})
        mensaje = 'Eliminado exitosamente'
    } catch (error) {
        mensaje = error
    }
    
    res.json({
        paquete:mensaje
    })
   
}

module.exports = {
    getPaquete,
    postPaquete,
    putPaquete,
    deletePaquete
}