const postsResolvers = require('./posts');
const userssResolvers = require('./posts');


module.exports = {
    Query: {
        ...postsResolvers.Query
      },
    }