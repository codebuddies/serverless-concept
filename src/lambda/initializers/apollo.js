const path = require('path');
const apollo = require('../lib/apollo');

module.exports = () => {
  const typesDirectory = path.resolve('./src/lambda/types');
  const resolversDirectory = path.resolve('./src/lambda/resolvers');
  apollo.initialize(typesDirectory, resolversDirectory);
};
