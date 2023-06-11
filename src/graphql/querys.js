const { GraphQLString } = require('graphql')

// Message 
const welcomeMessage = {
    type: GraphQLString, 
    description: 'A welcome message',
    resolve: ()=> 'Welcome to Tasks-App'
}
module.exports = { welcomeMessage }