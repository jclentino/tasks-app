const express = require('express')
const schema = require('./src/graphql/schema')
const { graphqlHTTP } = require('express-graphql')
const { getConnectionDb } = require('./src/database')
const { config } = require('./config')

getConnectionDb()
const app = express()

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true 
}))

app.listen(config.port, ()=> {
    console.log(`listen port ${config.port}`)
})