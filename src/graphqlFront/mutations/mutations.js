const { gql } = require('@urql/core');

const SAVE_NEW_BOLETO = gql`
   mutation
      addNewBoleto(
         $password: String!,
         $apellidos: String!,
         $nombres: String!,
         $telefono: String!,
         $numBoleto: String!,
         $vendedor: Vendedores!
      ) {
         addNewBoleto(
            pass: $password,
            data: {
               apellidos: $apellidos,
               nombres: $nombres,
               telefono: $telefono,
               numBoleto: $numBoleto,
               vendedor: $vendedor
            }
         ) {
            msg
            User {
               _id
               apellidos
               nombres
               telefono
               numBoleto
               vendedor
            }
         }
      }
`;

module.exports = {
   SAVE_NEW_BOLETO
};