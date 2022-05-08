const indexControllers = {};

const { client } = require('../graphql/config');

const { 
   SAVE_NEW_BOLETO 
} = require('../graphql/mutations/mutations');

// const { 
//    GET_ALL_BOLETOS 
// } = require('../graphql/querys/query');

indexControllers.login = async (req, res) => {
   // const { data } = await client
   //    .query(GET_ALL_BOLETOS, { password: '@CV158' })
   //    .toPromise();
   
   const { data } = await client
      .mutation(SAVE_NEW_BOLETO, { 
         password: '@CV158',
         apellidos: 'Villacreses Parrales',
         nombres: 'Carlos A.',
         telefono: '0993751461',
         numBoleto: '99',
         vendedor: 'CarlosVP'
      })
      .toPromise();

   res.json(data);
};

module.exports = indexControllers;