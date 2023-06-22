const {response} = require('express')
const Categoria = require('../Models/categorias')

const getCategoria = async(req, res=response) => {
    let mensaje = ''
    try {
        const categorias = await Categoria.find()
        mensaje = categorias
    } catch (error) {
        mensaje = error
    }

   res.json({
        categorias:mensaje
    })
    
}

const postCategoria = async(req, res = response) =>{

    const body = req.body 
    let mensaje = ''
    const categoria = new Categoria(body)
    console.log(body)
    try {
        await categoria.save()
        mensaje = 'Categoria registrado exitosamente'
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

const putCategoria = async(req, res = response) =>{
    const body = req.body
     console.log(body)

    let mensaje = ''

    try {
        await Categoria.findOneAndUpdate({_id:body._id}, {nombreCategoria:body.nombreCategoria, descripcionCategoria:body.descripcionCategoria, estadoCategoria:body.estadoCategoria})
        mensaje = 'Categoria modificada'
        
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

const deleteCategoria = async(req, res = response) =>{
    const body = req.body
    let mensaje = ''

    try {
        await Categoria.deleteOne({_id:body._id})
        mensaje = 'Eliminado exitosamente'
    } catch (error) {
        mensaje = error
    }
    res.json({
        mensaje
    })
   
}

module.exports = {
    getCategoria,
    postCategoria,
    putCategoria,
    deleteCategoria
}

