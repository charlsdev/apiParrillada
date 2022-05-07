const usuariosModels = require('../../models/Users');
const {
   matchPassword
} =  require('../../security/encryptions');

let resUser;

const addNewBoleto = async (root, args) => {    
   const { 
      pass
   } = args;

   if (await matchPassword(pass)) {
      const {
         apellidos,
         nombres,
         telefono,
         numBoleto,
         vendedor
      } = args.data;

      const searchOne = await usuariosModels
         .findOne({
            numBoleto
         })
         .exec();

      if (!searchOne) {
         if (numBoleto >= 0 && numBoleto <= 99) {
            const registroBol = new usuariosModels({
               apellidos,
               nombres,
               telefono,
               numBoleto,
               vendedor
            });

            const saveUser = await registroBol.save();

            if (saveUser) {
               resUser = {
                  msg: 'Boleto registrado con éxito...',
                  User: saveUser
               };
   
               return resUser;
            } else {
               resUser = {
                  msg: 'No se ha podido guardar el registro...',
                  User: null
               };
   
               return resUser;
            }
         } else {
            resUser = {
               msg: 'Número de boleto no válido...',
               User: null
            };

            return resUser;
         }
      } else {
         resUser = {
            msg: `Boleto ya vendido por ${searchOne.vendedor}...`,
            User: searchOne
         };

         return resUser;
      }
   } else {
      resUser = {
         msg: 'No posees los permisos suficientes...',
         User: null
      };
         
      return resUser;
   }
};

module.exports = {
   addNewBoleto
};