
import { pool } from '../database.js'
import { newToken } from '../utils/jwt.utils.js'
import { tokensInvalidos } from '../utils/tokens.utils.js'
import { hashPassword, comparePassword } from '../utils/bcrypt.utils.js'

export const loginController = async (req, res) => {

    try {

        const { email, password } = req.body

        const query = `
            SELECT * FROM usuarios
            WHERE email = $1 AND password = $2
        `

        const result = await pool.query(query, [email, password])

        if (result.rows.length === 0) {
            throw { status: 404, message: "User not found" }
        }

        const user = result.rows[0]
        const isValidPassword = await comparePassword(password, user.password)

        if (!isValidPassword) {
            throw { status: 401, message: "Invalid credentials" }
        }

        const payload = {
            uid: user.id,
        }

        const token = newToken(payload)
        res.status(200).json({ message: "Te haz logueado correctamente", token })

    } catch (error) {
        res.status(error?.status || 500).json({ message: error?.message })
    }
}

export const registerController = async (req, res) => {

    try {

        const { Nombre, Apellido, email, password } = req.body

        let query = `
            SELECT * FROM usuarios
            WHERE Nombre = $1 AND Apellido = $2 OR email = $3
        `
        let result = await pool.query(query, [Nombre, Apellido, email])

        if (result.rows.length > 0) {
            throw { status: 400, message: "Ya existe el usuario" }
        }

        query = `
            INSERT INTO usuarios (nombre, apellido, email, password)
            VALUES ($1, $2, $3, $4)
        `

        const hashedPassword = hashPassword(password)
        result = await pool.query(query, [Nombre, Apellido, email, hashedPassword])

        res.status(200).json({ message: "Usuario registrado correctamente" })

    } catch (error) {
        res.status(error?.status || 500).json({ message: error?.message })
    }
}

export const logoutController = async (req, res) => {

    try {

        const { token } = req
        tokensInvalidos.push(token)

        res.status(200).json({ message: "User logged out successfully" })

    } catch (error) {
        res.status(error?.status || 500).json({ message: error?.message })
    }
}

