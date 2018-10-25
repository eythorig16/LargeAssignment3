module.exports = `
  createPickupGame(input: PickupGameInput!): PickupGame!
  removePickupGame(id: String!): Boolean!
  updatePickupGame(input: PlayerInput!): PickupGame!
  deletePickupGame(input: PlayerInput!) : PickupGame!
  addPlayerToPickupGame(input: PlayerInput!): PickupGame!
  removePlayerFromPickupGame(input: PlayerInput!): PickupGame!
  
`;