const express = require('express')

const { users } = require('../controllers')

const router = express.Router()

router.get('/users/:pk_user', users.getUser)
    .post('/users/', users.createUser)

module.exports = router