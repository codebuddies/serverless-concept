const { ApolloServer, gql } = require('apollo-server-lambda');
const {
  fileLoader,
  mergeResolvers,
  mergeTypes
} = require('merge-graphql-schemas');

exports.initialize = (typesDirectory, resolversDirectory) => {
  const typesArray = fileLoader(typesDirectory);
  const resolversArray = fileLoader(resolversDirectory);
  const apolloServerConfig = {
    typeDefs: mergeTypes(typesArray),
    resolvers: mergeResolvers(resolversArray),
    introspection: true
  };

  const server = new ApolloServer(apolloServerConfig);
  exports.handler = server.createHandler();
};

exports.handleRequest = (request, context) => {
  const handlerPromise = new Promise((resolve, reject) => {
    const callback = (error, body) => (error ? reject(error) : resolve(body));
    return this.handler(request, context, callback);
  });
  return handlerPromise;
};
