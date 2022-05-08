const { gql } = require('apollo-server');

const typeDefs = gql`
   type Query {
      allUsers: [Usuarios]!,
      userLogin(data: inputLogin): Usuarios!
   }

   type Mutation {
      newUsuario(data: inputUsers!): Usuarios!
   }

   type Usuarios {
      _id: ID
      cedula: String
      apellidos: String
      nombres: String
      fechaNacimiento: String
      genero: String
      direccion: String
      telefono: String
      email: String
      privilegio: String
      password: String
      estado: String
      profile: String
   }

   input inputUsers {
      cedula: String!
      apellidos: String!
      nombres: String!
      fechaNacimiento: String!
      genero: Genero! = NoDefinido
      direccion: String!
      telefono: String!
      email: String!
      privilegio: Privilegio! = Cajero
      password: String!
      estado: Estado! = Enabled
   }

   input inputLogin {
      cedula: String!
      password: String
   }

   enum Privilegio {
      Administrador
      Gerente
      Cajero
   }

   enum Estado {
      Enabled
      Disabled
   }

   enum Genero {
      Masculino
      Femenino
      NoDefinido
   }
`;

module.exports = typeDefs;