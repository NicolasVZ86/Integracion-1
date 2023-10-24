
import { createPool } from 'mysql2/promise'
import { BD_URL} from './config.js'

export const pool = createPool({
    host: BD_URL,
    user: 'root',
    password: '',
    database: 'joyeria-402518',
})

// mysql://<USER>:<PASSWORD>@34.176.226.19:3306/joyeria-402518
