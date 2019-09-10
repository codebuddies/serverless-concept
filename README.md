# Serverless proof-of-concept for CodeBuddies V3

Serverless GraphQL API built with Netlify functions and Apollo. This is a POC using a serverless architecture for CB v3.

## Local development

```shell
> npm i -g netlify-cli # install Netlify cli first!
> git clone git@github.com:codebuddies/serverless-concept.git
> cd serverless-concept
> npm install
> ntl dev ## this will run your server locally
```

## Running GraphQL queries

We will use the handly GraphQL [playground](https://github.com/prisma/graphql-playground) app to test/run queries against our GraphQL API.

Enter the following url: `http://localhost:8888/.netlify/functions/graphql` in GraphQL playground.

### Example queries

`GetAll Resources:`

```
{
  resources {
    id
    title
    description
    credit
    url
  }
}
```

`GetAResourceById:`

```
{
  resource(id: 1) {
    id
    title
    description
    url
    credit
  }
}
```

## Technologies used

- Netlify
- AWS Lambda functions with node (via Netlify functions)
- GraphQL (Apollo)
