import { Pool } from 'pg';

const connectionInfo = {
  user: process.env['SHIP_DB_USERNAME'],
  host: process.env['SHIP_DB_URL'] || 'localhost',
  database: process.env['SHIP_DB_NAME'] || 'postgres',
  password: process.env['SHIP_DB_PASSWORD'],
  port: 5432,
  max: 5, // max number of connections this application will create
};

console.log(connectionInfo);

export const connectionPool = new Pool(connectionInfo);