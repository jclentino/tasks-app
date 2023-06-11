const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLBoolean  } = require('graphql')
const { User } = require('../models')

const UserType = new GraphQLObjectType({
    name: 'UserType',
    description: 'The user type',
    fields: {
        id: { type: GraphQLID },
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        displayName: { type: GraphQLString },
        createdAt: { type: GraphQLString},
        updatedAt: { type: GraphQLString }
    }
})

const TaskType = new GraphQLObjectType({
    name: "TaskType",
    description: "The task type",
    fields: {
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        completed: { type: GraphQLBoolean },
        author: { type: UserType, resolve(parent){
            return User.findById(parent.authorId)
        }},
        createdAt: { type: GraphQLString},
        updatedAt: { type: GraphQLString }
    }
})

module.exports = { UserType, TaskType }