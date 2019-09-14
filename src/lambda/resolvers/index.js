const { mergeResolvers } = require('merge-graphql-schemas');
const resourcesResolver = require('../resolvers/resources.resolvers');

const resolvers = [resourcesResolver];

module.exports = mergeResolvers(resolvers);
