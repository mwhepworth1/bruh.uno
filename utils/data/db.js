const { Pool } = require('pg');
const pool = new Pool({
    user: 'urlgen',
    database: 'urls',
    password: 'URLGEN558!',
    port: 5432,
    host: 'localhost', //VPS
});

module.exports = { pool };