const jwt = require('jsonwebtoken')
const { config } = require('../../config')

const createJWT= user => {
    return jwt.sign({ user }, config.secret_key, {
        expiresIn: '1d'
    })
}

module.exports = { createJWT }