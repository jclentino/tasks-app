const express = require('express')
const schema = require('./src/graphql/schema')
const { graphqlHTTP } = require('express-graphql')
const { getConnectionDb } = require('./src/database')
const { config } = require('./config')
const { authenticate } = require('./src/middlewares')

getConnectionDb()
const app = express()

app.use(authenticate)

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true 
}))

app.listen(config.port, ()=> {
    console.log(`listen port ${config.port}`)
})