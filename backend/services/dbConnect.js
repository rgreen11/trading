const pgp = require('pg-promise')({});
const db = pgp(process.env.DATABASE_URL || 'postgress://localhost/trading');

module.exports = {
    db,
}