import { conn } from '../bd.js'

export const pushProducts = async (req, res) => {
    try {
        const [rows] = await conn.query('SELECT * FROM Producto')
        if (!rows) throw {status: 404, message: 'No hay productos'}

        return res.status(200).json(rows)
    } catch (error) {
        console.log(error)
        return res.status(error.status || 500).json(error.message)
    }
}

// añadir un producto al carrito
// export const addproducto = async (req, res) => {
//     try:
//         const  = req.body
    
//     catch (error) {
//         console.log(error)
//     }

// }