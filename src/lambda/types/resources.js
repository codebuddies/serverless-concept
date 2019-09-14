const resourceType = `
type Query {
  resources: [Resource]!
  resource(id: ID!): Resource
}

type Resource {
  id: ID!
  title: String
  description: String
  url: String
  referrer: String
  credit: String
  created: String
  published: String
  modified: String
  type: String
}
`
module.exports = resourceType
