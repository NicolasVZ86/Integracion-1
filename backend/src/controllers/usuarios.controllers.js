import { pool } from '../bd.js'



export const getUsuarios = async (req, res) => {
    
try {
    const [rows] = await pool.query('SELECT * FROM Usuario')
    res.json(rows)
} catch (error) {
    console.error('Error al obtener los usuarios:', error);
    res.status(500).json({ message: "Error al obtener los usuarios" });
}    
}


//const sql = 'SELECT * FROM usuarios'


export const getUsuario = async (req, res) => {

    try {
        const [rows] = await pool.query('SELECT * FROM Usuario WHERE ID = ?', [req.params.id])
        if (rows.length <= 0) return res.status(404).json({ message: "El usuario no existe" })
        res.json(rows[0])
    } catch (error) {       
        console.error('Error al obtener el usuario:', error);
        res.status(500).json({ message: "Error al obtener el usuario" });
        
    }

}

export const createUsuarios = async (req, res) => {
try {
        const { ID, Nombre, Apellido, Correo, Contraseña } = req.body // Revisar que los nombres de los campos coincidan con los de la base de datos
        const [rows] = await pool.query('INSERT INTO Usuario (ID, Nombre, Apellido, Correo, Contraseña) VALUES (?,?,?,?,?)', [ID, Nombre, Apellido, Correo, Contraseña]) // Asegúrate de que los nombres coincidan exactamente
        console.log(req.body);
        res.send({
            ID: rows.insertId, Nombre, Apellido, Correo, Contraseña
        })
    } catch (error) {
    console.error('Error al crear el usuario:', error);
    res.status(500).json({ message: "Error al crear el usuario" });
    
    }

}

//const sql = 'INSERT INTO usuarios SET ?'


export const deleteUsuarios = async (req, res) => {
    try {
        const [rows] = await pool.query('DELETE FROM Usuario WHERE ID = ?', [req.params.id])
        if (rows.affectedRows <= 0) return res.status(404).json({ message: "El usuario no existe" })
        res.json({ message: "El usuario ha sido eliminado" })
    } catch (error) {
        console.error('Error al eliminar el usuario:', error);
        res.status(500).json({ message: "Error al eliminar el usuario" });
        
    }     

}
//const sql = 'DELETE FROM usuarios WHERE id = ?'

export const updateUsuarios = async (req, res) => {
    try {
        const { id } = req.params;
        const { Nombre, Apellido, Correo, Contraseña } = req.body;


        const [results] = await pool.query('UPDATE Usuario SET Nombre = IFNULL(?, Nombre), Apellido = IFNULL(?, Apellido), Correo = IFNULL(?, Correo), Contraseña = IFNULL(?, Contraseña) WHERE ID = ?', [Nombre, Apellido, Correo, Contraseña, id]);

        if (results.affectedRows === 0) return res.status(404).json({ message: "El usuario no existe" });


        const [rows] = await pool.query('SELECT * FROM Usuario WHERE ID = ?', [id]);

        res.json(rows[0]);
    } catch (error) {
        console.error('Error al actualizar el usuario:', error);
        res.status(500).json({ message: "Error al actualizar el usuario" });
    }

}

//const sql = 'UPDATE usuarios SET ? WHERE id = ?'

