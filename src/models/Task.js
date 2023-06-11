const { GraphQLString, GraphQLBoolean } = require('graphql')
const { Schema, model } = require('mongoose')

const taskSchema = new Schema({
    title: {
        type: GraphQLString,
        required: true 
    },
    description: {
        type: GraphQLString,
        required: true 
    },
    completed: {
        type: GraphQLBoolean, 
        required: true,
        default: false 
    },
    authorId: {
        type: GraphQLString, 
        required: true 
    },
    
}, {
    timestamps: true 
})

module.exports = model('Task', taskSchema)