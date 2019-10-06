const { handleRequest } = require('./lib/apollo');
const setup = require('./initializers/setup');

exports.handler = async (request, context) => {
  await setup.run();
  const response = await handleRequest(request, context);

  response.headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
  }
  return response;
};
