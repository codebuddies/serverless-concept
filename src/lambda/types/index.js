const { mergeTypes } = require('merge-graphql-schemas');
const resourceType = require('../types/resources');

const types = [resourceType];

module.exports = mergeTypes(types);
