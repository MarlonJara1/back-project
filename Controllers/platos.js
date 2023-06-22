const {response} = require('express')
const Plato = require('../Models/platos')

const getPlato = async(req, res=response) => {
    let mensaje = ''
    try {
        const platos = await Plato.find()
        mensaje = platos
    } catch (error) {
        mensaje = error
    }

   res.json({
        platos:mensaje
    })
    
}

const postPlato = async(req, res = response) =>{

    const body = req.body 
    let mensaje = ''
    const plato = new Plato(body)
    console.log(body)
    try {
        await plato.save()
        mensaje = 'Plato registrado exitosamente'
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

const putPlato = async(req, res = response) =>{
    const body = req.body
     console.log(body)

    let mensaje = ''

    try {
        await Plato.findOneAndUpdate({_id:body._id}, {nombrePlato:body.nombrePlato, descripcionPlato:body.descripcionPlato, precioPlato:body.precioPlato, estadoPlato:body.estadoPlato})
        mensaje = 'Plato modificado'
        
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

const deletePlato = async(req, res = response) =>{
    const body = req.body
    let mensaje = ''

    try {
        await Plato.deleteOne({_id:body._id})
        mensaje = 'Eliminado exitosamente'
    } catch (error) {
        mensaje = error.message;
    }
    res.json({
        mensaje
    })
   
}

module.exports = {
    getPlato,
    postPlato,
    putPlato,
    deletePlato
}

