// server/db.js
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './.env') });

const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT || 3306),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,        
  waitForConnections: true,
  connectionLimit: 10,
});

module.exports = pool;
