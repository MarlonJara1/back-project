const {response} = require('express')
const Detalle = require('../Models/detallePaquetes')


const getDetalle = async(req, res=response) => {
    let mensaje = ''
    try {
        const detalle = await Detalle.find()
        mensaje = detalle
    } catch (error) {
        mensaje = error
    }

   res.json({
        detalle:mensaje
    })
    
}

const postDetalle = async(req, res = response) =>{

    const body = req.body
    let mensaje = ''
    const detalle= new Detalle(body) 
    console.log(body)
    try {
        await detalle.save()
        mensaje = 'Detalle registrado exitosamente'
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

const putDetalle = async(req, res = response) =>{
    const body = req.body
     console.log(body)

    let mensaje = ''

    try {
            await Detalle.findOneAndUpdate({_id:body._id}, {idPaquete:body.idPaquete, tipoPa:body.tipoPa, cantidad:body.cantidad})
            mensaje = 'Detalle modificado exitosamente.'
            
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

const deleteDetalle= async(req, res = response) =>{
    const body = req.body
    let mensaje = ''

    try {
        await Detalle.findOneAndDelete({_id:body._id})
        mensaje = 'Eliminado exitosamente'
    } catch (error) {
        mensaje = error
    }
    
    res.json({
        mensaje
    })
   
}

module.exports = {
    getDetalle,
    postDetalle,
    putDetalle,
    deleteDetalle
}