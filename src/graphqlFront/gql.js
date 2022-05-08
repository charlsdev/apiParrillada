require('isomorphic-unfetch');

const { 
   createClient
} = require('@urql/core');

const client = createClient({
   url: 'http://localhost:4000/',
   maskTypename: true   // Remove __typename of the result data
});

module.exports = {
   client
};