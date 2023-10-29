import { pool } from '../config/bd.js'
import { newToken } from '../utils/jwt.utils.js'
import { tokensInvalidos } from '../utils/tokens.utils.js'
import { hashPassword, comparePassword } from '../utils/bcrypt.utils.js'

export const loginController = async (req, res) => {
    try {
        const { email, contraseña } = req.body

        const query = `
            SELECT * FROM usuario
            WHERE Correo = ? AND contraseña = ?
        `

        const [rows] = await pool.query(query, [email, contraseña])

        if (rows.length === 0) {
            throw new Error(JSON.stringify({ status: 404, message: 'User not found' }))
        }

        const user = rows[0]
        const isValidPassword = await comparePassword(contraseña, user.contraseña)

        if (!isValidPassword) {
            throw new Error(JSON.stringify({ status: 401, message: 'Invalid credentials' }))
        }

        const payload = {
            uid: user.id,
        }

        const token = newToken(payload)
        res.status(200).json({ message: 'Te haz logueado correctamente', token })
    } catch (error) {
        res.status(error?.status || 500).json({ message: error?.message })
    }
}

export const registerController = async (req, res) => {
    try {
        const {
            Nombre, Apellido, Correo, Contraseña,
        } = req.body

        let query = `
            SELECT * FROM Usuario
            WHERE Nombre = ? AND Apellido = ? OR Correo = ?
        `
        const [rows] = await pool.query(query, [Nombre, Apellido, Correo])

        if (rows.length > 0) {
            throw { status: 400, message: 'Ya existe el usuario' }
        }

        query = `
            INSERT INTO usuario (Nombre, Apellido, Correo, Contraseña)
            VALUES (?, ?, ?, ?)
        `

        const hashedPassword = await hashPassword(Contraseña)
        await pool.query(query, [Nombre, Apellido, Correo, hashedPassword])

        res.status(200).json({ message: 'Usuario registrado correctamente' })
    } catch (error) {
        res.status(error?.status || 500).json({ message: error?.message })
    }
}

export const logoutController = async (req, res) => {
    try {
        const { token } = req
        tokensInvalidos.push(token)
        res.status(200).json({ message: 'User logged out successfully' })
    } catch (error) {
        res.status(error?.status || 500).json({ message: error?.message })
    }
}
