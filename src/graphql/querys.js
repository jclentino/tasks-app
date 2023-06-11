const { GraphQLList } = require('graphql')
const { UserType } = require('./typedef')
const { User } = require('../models')

// Users 
const users = {
    type: new GraphQLList(UserType), 
    description: 'List of Users',
    resolve: ()=> {
        try {
            return User.find()
        } catch (e){
            throw new Error(e)
        }
    }
}

module.exports = { users }