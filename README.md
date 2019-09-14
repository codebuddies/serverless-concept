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

We will use the handly GraphQL [playground](https://github.com/prisma/graphql-playground) app to test/run queries against our GraphQL API. Go ahead and download and install it on your local machine.

Enter the following url: `http://localhost:8888/.netlify/functions/graphql` in GraphQL playground.

### Example queries

`GetAllResources:`

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

`GetResourceById:`

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

## Live site deployed on Netlify

Front-end url: https://hardcore-haibt-da9a6b.netlify.com/

Backend GraphQL url (lambda function): https://hardcore-haibt-da9a6b.netlify.com/graphl

Please use GrapghQL [playground](https://github.com/prisma/graphql-playground) to run your queries against the live site hosted on Netlify.

## TODO

- Build out front-end UI to make the calls to the backend
- Add a datastore to persist data on the backend lambda function
- Add mutations (create new resource)

## Technologies used

- Netlify
- CRA (for front-end)
- AWS Lambda functions with node (via Netlify functions)
- GraphQL (Apollo)
