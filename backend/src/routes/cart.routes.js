import { Router } from "express";
import { pushProducts } from "../controllers/cart.controller.js"

const router = Router();

router.get("/", pushProducts)

export default router