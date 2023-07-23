const { postgresql } = require('../databases/postgresql');

/**
 * Create a transaction
 * @param {number} pk_transaction Transaction id
 * @param {number} fk_user User id
 * @param {string} description Transaction description
 * @param {float} amount Transaction amount
 * @returns {{pk_transaction: 1, fk_user: 1, description: "Compra de comida", amount: 10000}}
 */
const createTransaction = async (pk_transaction, fk_user, description, amount) => {
    try {
        let user = await postgresql.public.one(`select * from users where pk_user = ${fk_user}`);
        if (!user) 
            return new Error('User not found')
        if (!user.status)
            return new Error('User is not active')
        let transaction = await postgresql.public.one(`insert into transaction values ('${pk_transaction}', '${fk_user}', '${description}', '${amount}') returning *;`);
        return transaction
    }
    catch (e) {
        throw new Error(e)
    }
}

/**
 * Get an especific transaction
 * @param {number} pk_transaction Transaction id
 * @returns {{pk_transaction: 1, fk_user: 1, description: "Compra de comida", amount: 10000}}
 */
const getTransaction = async (pk_transaction) => {
    try {
        let transaction = await postgresql.public.one(`select * from transaction where pk_transaction = ${pk_transaction}`);
        return transaction
    } catch (e) {
        throw new Error(e)
    }
}

/**
 * Update an especific transaction
 * @param {number} pk_transaction Transaction id
 * @param {number} fk_user User id
 * @param {string} description Transaction description
 * @param {float} amount Transaction amount
 * @returns {{pk_transaction: 1, fk_user: 1, description: "Compra de comida", amount: 10000}}
 */
const updateTransaction = async (pk_transaction, fk_user, description, amount) => {
    try {
        let transaction = await postgresql.public.one(`update transaction set fk_user = '${fk_user}', description = '${description}', amount = '${amount}' where pk_transaction = ${pk_transaction} returning *;`);
        return transaction
    } catch (e) {
        throw new Error(e)
    }
}

/**
 *  Get transactions by user
 * @param {number} fk_user User id
 * @returns {{{pk_transaction: 1, fk_user: 1, description: "Compra de comida", amount: 10000}, 
 * {pk_transaction: 2, fk_user: 1, description: "Compra de ropa", amount: 20000}}}
 */
const getTransactionsByUser = async (fk_user) => {
    try {
        let transactions = await postgresql.public.many(`select * from transaction where fk_user = ${fk_user}`);
        return transactions
    } catch (e) {
        throw new Error(e)
    }
}

 module.exports = {
        createTransaction,
        getTransaction,
        updateTransaction,
        getTransactionsByUser
 }