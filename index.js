const express = require('express');
const { ApolloServer } = require('apollo-server');
const { PubSub } = require('graphql-subscriptions');
const mongooose = require('mongoose');
const cors =  require('cors');
const path = require('path');


const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
const { MONGODB } = require('./config.js');
const pubsub = new PubSub();



const app = express();
app.use(cors())


const PORT = process.env.port || 5000;

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req, pubsub }),
    persistedQueries: { cache: 'bounded' },
});



    // const __dirname = path.resolve();


    app.use(express.static(path.join(__dirname, 'build')));

    app.get('/*', function (req, res) {
      res.sendFile(path.join(__dirname, 'build', 'index.html'));
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