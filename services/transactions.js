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

module.exports = {  
    createTransaction
}