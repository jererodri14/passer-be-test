const transactionsModel = require('../models/transactions')

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
        return await transactionsModel.createTransaction(pk_transaction, fk_user, description, amount)
    } catch (e) {
        console.log(e.message)
    }
}

/**
 * Get an especific transaction
 * @param {number} pk_transaction Transaction id
 * @returns {{pk_transaction: 1, fk_user: 1, description: "Compra de comida", amount: 10000}}
 */
const getTransaction = async (pk_transaction) => {
    try {
        return await transactionsModel.getTransaction(pk_transaction)
    } catch (e) {
        console.log(e.message)
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
        return await transactionsModel.updateTransaction(pk_transaction, fk_user, description, amount)
    } catch (e) {
        console.log(e.message)
    }
}

/**
 * Get transactions by user
 *  @param {number} fk_user User id
 * @returns {{{pk_transaction: 1, fk_user: 1, description: "Compra de comida", amount: 10000},
 * {pk_transaction: 2, fk_user: 1, description: "Compra de ropa", amount: 20000}}}
 */
const getTransactionsByUser = async (fk_user) => {
    try {
        return await transactionsModel.getTransactionsByUser(fk_user)
    } catch (e) {
        console.log(e.message)
    }
}

module.exports = {  
    createTransaction,
    getTransaction,
    updateTransaction,
    getTransactionsByUser
}