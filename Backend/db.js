const { createPool } = require('mysql2/promise');

const pool = createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'violentometro'
});

pool.getConnection()
    .then(conn => {
        conn.ping()
            .then(() => console.log('Database connection is alive'))
            .catch(err => console.log('Error pinging database', err))
            .finally(() => conn.release());
    })
    .catch(err => console.log('Unable to connect to database', err));

module.exports = {
    pool
};
