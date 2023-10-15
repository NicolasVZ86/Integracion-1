import { Router } from "express";

import { getProductos, getProducto } from "../controllers/productos.controllers.js";

const router = Router();

router.get('/productos', getProductos)
//const sql = 'SELECT * FROM productos'
router.get('/productos/:id', getProducto)

export default router