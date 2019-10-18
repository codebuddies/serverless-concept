// env: local || development || production

const local = {
  graphUrl: 'http://localhost:8888/.netlify/functions/graphql',
  env: 'local',
};

const config = {
  graphUrl: process.env.REACT_APP_GRAPH_URL || local.graphUrl,
  env: process.env.REACT_APP_ENV || local.env,
};

export default config;
