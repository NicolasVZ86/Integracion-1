import express from "express"
import userRoutes from "./routes/usuarios.routes.js"
import rutasproducto from "./routes/productos.routes.js"
import cuentaRoutes from ".routes/cuenta.routes.js"
import {PORT} from "./config.js"

const app = express()

app.use(express.json())
app.use('/api',cuentaRoutes)
app.use('/api',userRoutes)
app.use('/api',rutasproducto)

app.use((req,res,next)=>{
    res.status(404).json({message:"Endpoint not found"})
})

app.listen(PORT)
console.log(`http://localhost:${PORT}/api/usuarios`)