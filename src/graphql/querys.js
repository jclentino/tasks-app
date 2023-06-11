const { GraphQLID, GraphQLList } = require('graphql')
const { UserType, TaskType } = require('./typedef')
const { User, Task } = require('../models')

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

// Tasks 
const tasks = {
    type: new GraphQLList(TaskType), 
    description: 'List of Tasks',
    resolve: ()=> {
        try {
            return Task.find()
        } catch (e){
            throw new Error(e)
        }
    } 
}

module.exports = { user, users, tasks }