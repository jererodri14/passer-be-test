const { newDb } = require('pg-mem');

const postgresql = newDb();

// create mock data
postgresql.public.none(`create table users(pk_user integer, name text, status boolean);
                insert into users values (123, 'Juan', true);`);
                
module.exports = {
    postgresql
}