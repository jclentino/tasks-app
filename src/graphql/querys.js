const { GraphQLID, GraphQLList } = require('graphql')
const { UserType } = require('./typedef')
const { User } = require('../models')

// Users 
const user = {
    type: UserType, 
    description: 'Get a User by Id',
    args: {
        id: { type: GraphQLID },
    },
    resolve: (__, { id })=> {
        try {
            return User.findById(id)
        } catch (e){
            throw new Error(e)
        }
    }
}

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

module.exports = { user, users }