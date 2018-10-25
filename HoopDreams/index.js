const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const mongoDb = require('./data/db');
const baskService = require('./services/basketballFieldService');
const error = require('./errors');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: {
        db: mongoDb,
        fieldService: baskService,
        error: error
    }
});

server.listen()
    .then(({ url }) => console.log(`GraphQL Service is running on ${ url }`));
