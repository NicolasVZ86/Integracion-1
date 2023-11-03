import { Router } from "express";

import { sessionValidation, roleValidation } from "../middlewares/cuenta.mw.js"

import { getProductos, getProducto, createProducto } from "../controllers/productos.controllers.js"

const router = Router()

router.get('/productos', getProductos)

router.get('/productos/:id', getProducto)

router.post('/productos', sessionValidation, roleValidation(["ADMIN"]), createProducto)

export default router