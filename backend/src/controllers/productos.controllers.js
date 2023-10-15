import { pool } from '../bd.js'


export const getProductos = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM Productos');
        res.json(rows);
    } catch (error) {
        console.error('Error al obtener los productos:', error);
        res.status(500).json({ message: "Error al obtener los productos" });
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

// export const deleteProducto = async (req, res) => {
//     try {
//         const [rows] = await pool.query('DELETE FROM Productos WHERE ID = ?', [req.params.id]);
//         if (rows.affectedRows <= 0) return res.status(404).json({ message: "El producto no existe" });
//         res.json({ message: "El producto ha sido eliminado" });
//     } catch (error) {
//         console.error('Error al eliminar el producto:', error);
//         res.status(500).json({ message: "Error al eliminar el producto" });
//     }
// }

// export const updateProducto = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const { Nombre, Descripcion, Precio, PorcentajeDescuento, Almacenamiento } = req.body;

//         const [existingProducts] = await pool.query('SELECT * FROM Productos WHERE ID = ?', [id]);
//         if (existingProducts.length === 0) {
//             return res.status(404).json({ message: "El producto no existe" });
//         }

//         const [results] = await pool.query('UPDATE Productos SET Nombre = ?, Descripcion = ?, Precio = ?, PorcentajeDescuento = ?, Almacenamiento = ? WHERE ID = ?', [Nombre, Descripcion, Precio, PorcentajeDescuento, Almacenamiento, id]);

//         const [rows] = await pool.query('SELECT * FROM Productos WHERE ID = ?', [id]);
//         res.json(rows[0]);
//     } catch (error) {
//         console.error('Error al actualizar el producto:', error);
//         res.status(500).json({ message: "Error al actualizar el producto" });
//     }
// }
