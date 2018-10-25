const playerResolver = require('./playerResolver');
const basketballFieldResolver = require('./basketballFieldResolver');

module.exports = {
    Query: {
        ...playerResolver.queries,
        ...basketballFieldResolver.queries
    },
    Mutation: {
        ...playerResolver.mutations
    }
}