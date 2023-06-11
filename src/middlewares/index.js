const jwt = require('jsonwebtoken')
const { config } = require('../../config')

const authenticate = (req,res,next)=> {
    try {
        const token = req.headers.authorization?.split(' ')[1]
        const verified = jwt.verify(token, config.secret_key)
        req.verifiedUser = verified.user 
        next()
    } catch (e){
        next()
    }
}

module.exports = {
    authenticate
}