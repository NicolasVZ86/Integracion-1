import {createPool} from 'mysql2/promise';


// Conexion a la base de datos
export const pool = createPool({    
    host: 'bylanpdxjlmrw2ixoud8-mysql.services.clever-cloud.com',
    user:  'uofv0bbpla2jv4cg',
    password: 'ZCY0AtinSfje5DtFrfDk',
    port: 3306,
    database: 'bylanpdxjlmrw2ixoud8',
    connectTimeout: 100000,
});