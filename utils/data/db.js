const { Pool } = require('pg');
const pool = new Pool({
    user: '',
    database: '',
    password: '',
    port: 0000,
    host: 'localhost', //VPS
});

module.exports = { pool };
