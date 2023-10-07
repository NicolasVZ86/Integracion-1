import  express  from "express"
import {pool} from "./bd.js"
import userRoutes from "./routes/usuarios.routes.js"
const PORT = 3000

const app = express()


app.use(express.json())
app.use('/api',userRoutes)

app.listen(3000)
console.log(`http://localhost:${PORT}/api/usuarios`)