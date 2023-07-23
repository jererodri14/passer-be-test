const transactions = require('../services/transactions')
const querystring = require('querystring');

const createTransaction = async (req, res, next) => {
    const { pk_transaction, fk_user, description, amount } = req.body
    try {
        let transaction = await transactions.createTransaction(pk_transaction, fk_user, description, amount)
        if (transaction instanceof Error)
            res.status(400).send(transaction.message)
        else
            res.status(200).send(transaction)
        next()
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500) && next(e)
    }
}

const getTransaction = async (req, res, next) => {
    const { pk_transaction } = req.params
    try {
        let transaction = await transactions.getTransaction(pk_transaction)
        res.status(200).send(transaction)
        next()
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500) && next(e)
    }
}

const updateTransaction = async (req, res, next) => {
    const { pk_transaction } = req.params
    const { fk_user, description, amount } = req.body
    try {
        let transaction = await transactions.updateTransaction(pk_transaction, fk_user, description, amount)
        res.status(200).send(transaction)
        next()
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500) && next(e)
    }
}

const getTransactionsByUser = async (req, res, next) => {
    const { fk_user } = req.query
    try {
        let transactionsByUser = await transactions.getTransactionsByUser(fk_user)
        res.status(200).send(transactionsByUser)
        next()
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500) && next(e)
    }
}

module.exports = {
    createTransaction,
    getTransaction,
    updateTransaction,
    getTransactionsByUser
}