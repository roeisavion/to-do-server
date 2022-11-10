import pg from 'pg';
import fs from 'fs';
import { postgresConfig } from '../config/postgresConfig.js';

export const initializePool = async () => {
    const pool = new pg.Pool(postgresConfig);
    const dataSql = fs.readFileSync('src/queries/initializeTable.sql').toString();
    pool.query(dataSql);
    pool.on('connect', async () => {
        console.log('connected to postgress');
    });
    pool.on('error', (error) => {
        console.log('ERROR: Connecting to postgres');
    });

    return pool;
}

