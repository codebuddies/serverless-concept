// will switch over to a real db for data sources once we vet the POC
const resources = [
  {
    id: '1',
    title: 'Learning React',
    description: 'Official react tutorial',
    url: 'https://reactjs.org/tutorial/tutorial.html',
    referrer: '',
    credit: 'cool dev',
    published: '2019-08-01',
    created: '2019-09-07',
    modified: '2019-09-07',
    type: 'TUTORIAL',
    tags: [
      {
        id: 1,
        name: 'webdev'
      },
      {
        id: 2,
        name: 'react'
      }
    ]
  },
  {
    id: '2',
    title: 'Learning Vue',
    description: 'Official Vuejs tutorial',
    url: 'https://vuejs.org/v2/guide/',
    referrer: '',
    credit: 'awesome possom',
    published: '2019-06-01',
    created: '2019-09-03',
    modified: '2019-09-05',
    type: 'TUTORIAL',
    tags: [
      {
        id: 1,
        name: 'webdev'
      },
      {
        id: 3,
        name: 'vue'
      }
    ]
  }
];

/**
 * @module resourcesResolver
 *
 * @description
 * Resolver for resources related queries
 */

module.exports = {
  Query: {
    resources: () => resources,
    resource: (parent, args, context, info) => {
      return resources.find(resource => {
        return resource.id === args.id;
      });
    }
  }
};
