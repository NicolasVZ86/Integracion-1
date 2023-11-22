import express from "express"
import cors from "cors"
import userRoutes from "./routes/usuarios.routes.js"
import rutasproducto from "./routes/productos.routes.js"
import cuentaRoutes from "./routes/cuenta.routes.js"
import { PORT } from './config/config.js'

const PORT = process.env.PORT || 3000;

// cors: permite que se puedan realizar peticiones desde un dominio diferente
// al del servidor como puede ser el caso de un cliente web.
app.use(cors({
	origin: 'http://127.0.0.1:5500',
	methods: 'GET,POST,PUT',
	credentials: true
}))

// express.json() recibe y convierte la informacion que viene especificada en el header
// como tipo json a un objeto de js para que pueda ser utilizado por el servidor
app.use(express.json())

// aqui se declaran las rutas o end-points del servidor 
app.use('/api', userRoutes)
app.use('/api', rutasproducto)
app.use('/api', cuentaRoutes)

// ruta/end-point para las rutas que no se han definido en el servidor
app.use((req, res) => {
	res.status(404).json({ message: "Endpoint not found" })
})

// El servidor se pone a escuchar en el puerto PORT
app.listen(PORT)
