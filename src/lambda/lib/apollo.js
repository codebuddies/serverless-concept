const { ApolloServer } = require('apollo-server-lambda');
const typeDefs = require('../types');
const resolvers = require('../resolvers');

exports.initialize = () => {
  const apolloServerConfig = {
    typeDefs,
    resolvers,
    introspection: true
  };

  const server = new ApolloServer(apolloServerConfig);
  exports.handler = server.createHandler();
};

exports.handleRequest = (request, context) => {
  const handlerPromise = new Promise((resolve, reject) => {
    const callback = (error, body) => (error ? reject(error) : resolve(body));
    return exports.handler(request, context, callback);
  });
  return handlerPromise;
};
