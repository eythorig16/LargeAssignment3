module.exports = `
    type BaskeballField {
        id: ID!
        name: String!
        capacity: Int!
        yearOfCreation: Moment!
        pickupGames: [PickupGame!]!
        status: BasketballFieldStatus!
    }
`;