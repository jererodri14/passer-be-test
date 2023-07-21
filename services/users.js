const usersModel = require('../models/users')

/**
 * Get an espcific user
 * @param {number} pk_user User id
 * @returns {{pk_user: 1, name: "Juan"}}
 */
const getUser = async (pk_user) => {
    try {
        return await usersModel.getUser(pk_user)
    } catch (e) {
        throw new Error(e.message)
    }
}

/**
 * Create an user
 * @param {number} pk_user User id
 * @param {string} name User name
 * @returns {{pk_user: 1, name: "Juan"}}
 */
const createUser = async (pk_user, name) => {
    try {
        return usersModel.createUser(pk_user, name)
    } catch (e) {
        throw new Error(e.message)
    }
}



module.exports = {
    getUser,
    createUser
}