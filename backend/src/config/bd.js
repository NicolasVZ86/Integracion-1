
import { createPool } from 'mysql2/promise'

export const pool = mysql.createPool({
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