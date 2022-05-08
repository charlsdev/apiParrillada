const UsersModel = require('../../../models/Users');

const {
   encryptPassword
} =  require('../../../security/encrytion');

const newUsuario = async (root, args) => {    
   const {
      cedula,
      apellidos,
      nombres,
      fechaNacimiento,
      genero,
      direccion,
      telefono,
      email,
      privilegio,
      password,
      estado
   } = args.data;

   const registerUser = new UsersModel({
      cedula,
      apellidos,
      nombres,
      fechaNacimiento,
      genero,
      direccion,
      telefono,
      email,
      privilegio,
      password: await(encryptPassword(password)),
      estado,
      profile: 'profile.svg'
   });

   const saveUser = await registerUser.save();

   if (saveUser) {
      return saveUser;
   } else {
      return [];
   }
};

module.exports = {
   newUsuario
};