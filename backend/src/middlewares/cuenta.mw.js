import { pool } from '../config/bd.js'
import { JWT_SECRET } from '../config/config.js'
import { verifyToken, newToken } from '../utils/jwt.utils.js'
import { tokensInvalidos } from '../utils/tokens.utils.js'

export const sessionValidation = async (req, res, next) => {
    try {
        // const tokk = newToken({ uid: 1 })
        // console.log(tokk);
        const token = req.headers.authorization
        console.log(typeof token);
        if (tokensInvalidos.includes(token)) {
            throw { status: 401, message: 'Unauthorized' }
        }

        const payload = verifyToken(token, JWT_SECRET)

        // console.log(payload);

        req.payload = payload
        req.token = token
        return next()
    } catch (error) {
        return res.status(401).json({ message: error.message })
    }
}

export const roleValidation = (roles) => async (req, res, next) => {
    try {
        const { uid } = req.payload
        console.log(uid);

        const query = `
            SELECT * FROM Usuario 
            WHERE id = ?
        `

        const result = await pool.query(query, [uid])

        if (result.length === 0) {
            throw { status: 404, message: 'User not found' }
        }

        const user = result.rows[0]

        if (!roles.includes(user.rol)) {
            throw { status: 401, message: 'Unauthorized' }
        }

        return next()
    } catch (error) {
        return res.status(401).json({ message: error.message })
    }
}
