const { GraphQLString } = require('graphql')
const { Schema, model } = require('mongoose')

const userSchema = new Schema({
    username: {
        type: GraphQLString, 
        required: true 
    },
    password: {
        type: GraphQLString, 
        required: true,
        select: false, 
    },
    email: {
        type: GraphQLString, 
        required: true,
        unique: true 
    },
    displayName: {
        type: GraphQLString, 
        required: true,
    },
}, {
    timestamps: true 
})

module.exports = model('User', userSchema)