const enums = require('./enums');
const inputs = require('./input');
const mutations = require('./mutations');
const queries = require('./queries');
const scalars = require('./scalar');
const types = require('./types');

module.exports = `
  ${enums}
  ${inputs}
  ${mutations}
  ${queries}
  ${scalars}
  ${types}
`;