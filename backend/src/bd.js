import { createConnection } from 'mysql2';
import {createPool} from 'mysql2/promise';


// Conexion a la base de datos
// export const pool = createPool({    
//     host: 'bylanpdxjlmrw2ixoud8-mysql.services.clever-cloud.com',
//     user:  'uofv0bbpla2jv4cg',
//     password: 'ZCY0AtinSfje5DtFrfDk',
//     port: 3306,
//     database: 'bylanpdxjlmrw2ixoud8',
//     connectTimeout: 100000,
// });
 
// conexión con el xampp( localhost )
export const pool = createConnection({
    host: 'localhost',
    user:  'root',
    password: '',
    database: 'joyeria'
})