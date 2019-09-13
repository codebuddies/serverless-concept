const { ApolloServer } = require('apollo-server-lambda');
const path = require('path');
const {
  fileLoader,
  mergeResolvers,
  mergeTypes
} = require('merge-graphql-schemas');

exports.initialize = () => {
  const typesDirectory = path.resolve(__dirname, '../types');
  console.log(`types directory: ${typesDirectory}`);
  const resolversDirectory = path.resolve(__dirname, '../resolvers');
  const typeDefs = mergeTypes(fileLoader(`${typesDirectory}/*.graphql`));
  console.log(`typeDefs: ${JSON.stringify(typeDefs)}`);
  const resolvers = mergeResolvers(
    fileLoader(`${resolversDirectory}/*.resolvers.js`)
  );
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
    return this.handler(request, context, callback);
  });
  return handlerPromise;
};
