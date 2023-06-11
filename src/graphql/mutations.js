const { GraphQLString } = require('graphql')
const { User } = require('../models')

// Users 
const register = {
    type: GraphQLString,
    description: "Create new user",
    args: {
        username: { type: GraphQLString },
        email: { type: GraphQLString}, 
        password: { type: GraphQLString },
        displayName: { type: GraphQLString }, 
    },   
    resolve: async (__, args)=> {
        try {
            await User.create({ ...args})
            return 'User created successfully'
        } catch (e){
            throw new Error(e)
        }
    }
}

module.exports = { register }

