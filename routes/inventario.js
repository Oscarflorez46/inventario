const express = require("express");
const{obtenerInventario, crearHerramienta} = require("../controllers/inventario");
// const routers = require("./helloRoutes");
const router = express.Router()

router.get("/",obtenerInventario)
router.post("/", crearHerramienta)

module.exports = router