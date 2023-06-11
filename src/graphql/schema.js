const { GraphQLSchema, GraphQLObjectType } = require('graphql')
const { user, users } = require('./querys')
const { register, login } = require('./mutations')

const QueryType = new GraphQLObjectType({
    name: "QueryType",
    description: "The root query type",
    fields: {
        user,
        users,
    }
})

const MutationType = new GraphQLObjectType({
    name: "MutationType",
    description: "The root mutation type",
    fields: {
        register,
        login,
    }
})

module.exports = new GraphQLSchema({
    query: QueryType,
    mutation: MutationType
})