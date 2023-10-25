
import { createPool } from 'mysql2/promise'

export const pool = createPool({
  host: 'localhost',
  user: 'root',
  database: 'joyeria',
  waitForConnections: true, // permite que las conexiones esperen cuando no hay conexiones solicitadas
  connectionLimit: 10, // el numero maximo de conexiones simultaneas a la base de datos
  maxIdle: 10, // numero maximo de conexiones inactivas que pueden estar en el grupo de conexiones
  idleTimeout: 60000, // tiempo (en milisegundos) que una conexion puede estar inactiva antes de ser liberada
  queueLimit: 0, // numero maximo de conexiones de trabajo permitidas en la cola (0 = ilimitado)
  enableKeepAlive: false, // permite reutilizar las conexiones ya realizadas en lugar de crear nuevas
  keepAliveInitialDelay: 0  //
});

// Conexion a la base de datos
// export const pool = createPool({    
//     host: 'bylanpdxjlmrw2ixoud8-mysql.services.clever-cloud.com',
//     user:  'uofv0bbpla2jv4cg',
//     password: 'ZCY0AtinSfje5DtFrfDk',
//     port: 3306,
//     database: 'bylanpdxjlmrw2ixoud8',
//     connectTimeout: 100000,
// });