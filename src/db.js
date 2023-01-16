import {createPool} from 'mysql2/promise'
import { 
    DB_HOST,
    DB_USER,
    DB_PASSWORD,
    DB_DATABASE,
    DB_POST
} from './config.js'
export const pool = createPool({
    host:DB_HOST,
    user:DB_USER,
    password:DB_PASSWORD,
    port:DB_POST,
    database:DB_DATABASE,
    charset:"utf8"
})
