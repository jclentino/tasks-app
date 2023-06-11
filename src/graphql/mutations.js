const { GraphQLString } = require('graphql')
const { User } = require('../models')
const { createJWT } = require('../utils')

// Users 
const register = {
    type: GraphQLString,
    description: "Create new user and return a token",
    args: {
        username: { type: GraphQLString },
        email: { type: GraphQLString}, 
        password: { type: GraphQLString },
        displayName: { type: GraphQLString }, 
    },   
    resolve: async (__, args)=> {
        try {
            const user = await User.create({ ...args})
            return createJWT({
                _id: user.id, 
                username: user.username,
                email: user.email,
                displayName: user.displayName
            })
        } catch (e){
            throw new Error(e)
        }
    }
}

module.exports = { register }

