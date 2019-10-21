const { handleRequest } = require('./lib/apollo');
const setup = require('./initializers/setup');

exports.handler = async (request, context) => {
  await setup.run();
  const response = await handleRequest(request, context);
  return response;
};
