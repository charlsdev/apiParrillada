require('dotenv').config();

require('./database');

const server = require('./graphql/index');

server
   .listen({ port: process.env.PORT || 4000 })
   .then(({ url }) => {
      console.log(`🚀  Server GraphQL ready at ${url}`);
   });