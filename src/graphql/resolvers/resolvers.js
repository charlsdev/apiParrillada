const { 
   allUsers,
   userLogin
} = require('./querys/query');

const { 
   newUsuario 
} = require('./mutations/mutation');

const resolvers = {
   Query: {
      allUsers,
      userLogin,
   },
   
   Mutation: {
      newUsuario,
   }
};

module.exports = resolvers;