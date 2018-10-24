const enums = require('./enums');
const inputs = require('./inputs');
const mutations = require('./mutations');
const interfaces = require('./interfaces');
const queries = require('./queries');
const scalars = require('./scalar');
const types = require('./types');

module.exports = `
  ${enums}
  ${inputs}
  ${mutations}
  ${interfaces}
  ${queries}
  ${scalars}
  ${types}
`;