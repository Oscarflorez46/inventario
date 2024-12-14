const express = require("express");
const{obtenerInventario} = require("../controllers/inventario");
// const routers = require("./helloRoutes");
const router = express.Router()

router.get("/",obtenerInventario)

module.exports = router