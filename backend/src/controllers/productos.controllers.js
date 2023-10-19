import { pool } from '../bd.js'


export const getProductos = async (req, res) => {
    try {
        
        const [rows] = await pool.query('SELECT * FROM Productos');

        if (!rows) {
            res.status(404).json({ message: "No hay productos" })
        }

        res.status(200).json(rows);
    
    } catch (error) {
        console.error('Error al obtener los productos:', error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const getProducto = async (req, res) => {
    try {
        
        const [rows] = await pool.query('SELECT * FROM Productos WHERE ID = ?', [req.params.id]);
        if (rows.length <= 0) return res.status(404).json({ message: "El producto no existe" });
        res.json(rows[0]);
    
    } catch (error) {
        console.error('Error al obtener el producto:', error);
        res.status(500).json({ message: "Error al obtener el producto" });
    }
}

