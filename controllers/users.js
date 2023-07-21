const users = require('../services/users')

const getUser = async (req, res, next) => {
    const { pk_user } = req.params
    try {
        let user = await users.getUser(pk_user)
        res.status(200).send(user)
        next()
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500) && next(e)
    }
}

const createUser = async (req, res, next) => {
    const { pk_user, name } = req.body
    try {
        let user = users.createUser(pk_user, name)
        res.status(200).send(user)
        next()
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500) && next(e)
    }
}

module.exports = {
    getUser,
    createUser
}