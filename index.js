const { ApolloServer } = require('apollo-server');
const mongooose = require('mongoose');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const post = require('./models/Post')
const { MONGODB } = require('./config.js');



const PORT = process.env.port || 5000;

const server = new ApolloServer({
    typeDefs,
    resolvers
});




mongooose.connect(MONGODB, { useNewUrlParser: true })
    .then(() => {
        console.log('MongoDB connected')
        return server.listen({ port: PORT })
    }).then(res => {
        console.log(`Server running at ${res.url}`)
    })
    .catch(err => {
        console.error(err)
    })