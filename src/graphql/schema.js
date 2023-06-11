const { GraphQLSchema, GraphQLObjectType } = require('graphql')
const { user, users, task, tasks } = require('./querys')
const { register, login, createTask } = require('./mutations')

const QueryType = new GraphQLObjectType({
    name: "QueryType",
    description: "The root query type",
    fields: {
        user,
        users,
        task,
        tasks,
    }
})

const MutationType = new GraphQLObjectType({
    name: "MutationType",
    description: "The root mutation type",
    fields: {
        register,
        login,
        createTask
    }
})

module.exports = new GraphQLSchema({
    query: QueryType,
    mutation: MutationType
})