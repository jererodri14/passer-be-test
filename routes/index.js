const express = require('express')

const { users, transactions } = require('../controllers')
const router = express.Router()

router.get('/users/:pk_user', users.getUser)
    .post('/users/', users.createUser)
    .put('/users/:pk_user', users.updateUser)
    .delete('/users/:pk_user', users.deleteUser)
    
router.post('/transactions/', transactions.createTransaction)

module.exports = router