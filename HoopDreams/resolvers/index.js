const playerResolver = require('./playerResolver');
const basketballFieldResolver = require('./basketballFieldResolver');
const pickupGameResolver = require('./pickupGameResolver');
const moment = require('moment');
const { GraphQLScalarType } = require('graphql');


module.exports = {
    Query: {
        ...playerResolver.queries,
        ...basketballFieldResolver.queries,
        ...pickupGameResolver.queries
    },
    Mutation: {
        ...playerResolver.mutations,
        ...pickupGameResolver.mutations
    },
    Moment: new GraphQLScalarType({
        name: "Moment",
        description: "Custom scalar to schow icelandic locale",
        parsevalue: value => {
          return value;
        },
        parseliteral: value => {
          return value;
        },
        serialize: value => {
          return value = moment(value).format("llll").locale("is");
        }
    })
}