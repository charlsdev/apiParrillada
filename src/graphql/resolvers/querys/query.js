const usuariosModels = require('../../models/Users');
const {
   matchPassword
} =  require('../../security/encryptions');

const boletoCount = async (root, args) => {    
   const { pass } = args;

   if (await matchPassword(pass)) {
      const result = await usuariosModels
         .find()
         .countDocuments();

      return `Boletos vendidos ==> ${result}`;
   } else {
      return 'No posees permisos suficientes...';
   }
};

module.exports = {
   boletoCount
};