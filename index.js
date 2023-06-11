const express = require('express')
const schema = require('./src/graphql/schema')
const { graphqlHTTP } = require('express-graphql')
const { config } = require('./config')

const app = express()

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true 
}))

app.listen(config.port, ()=> {
    console.log(`listen port ${config.port}`)
})