const { gql } = require('@urql/core');

const GET_ALL_BOLETOS = gql`
   query 
      allBoletos($password: String!) {
         allBoletos(pass: $password) {
            _id
            apellidos
            nombres
         }
      }
`;

const LOGIN_USER = gql`
   query 
      userLogin(
         $cedula: String!,
         $password: String
      ) {
         userLogin(
            data: {
               cedula: $cedula,
               password: $password
            }
         ) {
            _id
            cedula
            apellidos
            nombres
            fechaNacimiento
            genero
            direccion
            telefono
            email
            privilegio
            password
            estado
            profile
         }
      }
`;

module.exports = {
   GET_ALL_BOLETOS,
   LOGIN_USER
};