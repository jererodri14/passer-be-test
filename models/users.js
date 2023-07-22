const { postgresql } = require('../databases/postgresql')

/**
 * Get an specific user
 * @param {number} pk_user User primary key
 * @param {string} name User name
 * @returns {{pk_user: 1, name: "Juan"}}
 */
const createUser = (pk_user, name) => {
    try {
        let user = postgresql.public.one(`insert into users values ('${pk_user}', '${name}', true) returning *;`);
        return user
    }
    catch (e) {
        throw new Error(e)
    }
}

/**
 * Update an specific user
 * @param {number} pk_user User primary key
 * @param {string} name User name
 * @returns {{pk_user: 1, name: "Juan"}}
 */
const updateUser = (pk_user, name) => {

    throw new Error('Method not implemented.');
}

/**
 * Get an specific user
 * @param {number} pk_user User primary key
 * @returns {{pk_user: 1, name: "Juan"}} User schema
 */
const getUser = (pk_user) => {

    let user = postgresql.public.one(`select * from users where pk_user = ${pk_user}`);
    return user
}

/**
 * Delete an specific user
 * @param {number} pk_user User primary key
 * @returns {pk_user: 1} User primary key
 */
const deleteUser = (pk_user) => {

    throw new Error('Method not implemented.');
}

module.exports = {
    createUser,
    getUser
}