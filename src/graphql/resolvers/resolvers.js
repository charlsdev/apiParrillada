const { 
   boletoCount 
} = require('./querys/query');

const { 
   addNewBoleto 
} = require('./mutations/mutation');

const resolvers = {
   Query: {
      boletosCount: boletoCount,
   },
   
   Mutation: {
      addNewBoleto: addNewBoleto,
   }
};

module.exports = resolvers;