const {request} = require ("express")

exports.obtenerInventario = (req,res)=>{
    console.log("Hola desde inventario")
    res.send("Hola Inventario")
}