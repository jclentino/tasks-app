const { welcomeMessage } = require('./querys')
const { GraphQLSchema, GraphQLObjectType } = require('graphql')

const QueryType = new GraphQLObjectType({
    name: "QueryType",
    description: "The root query type",
    fields: {
        welcomeMessage
    }
})

module.exports = new GraphQLSchema({
    query: QueryType,
})