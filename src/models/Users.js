const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

const UsuariosSchema = new Schema ({
   cedula: {
      type: String,
      required: true,
      unique: true
   },
   apellidos: {
      type: String,
      required: true
   },
   nombres: {
      type: String,
      required: true
   },
   dateNacimiento: {
      type: String,
      required: true
   },
   genero: {
      type: String,
      required: true
   },
   direccion: {
      type: String,
      required: true
   },
   telefono: {
      type: String,
      required: true
   },
   email: {
      type: String,
      required: true,
      unique: true
   },
   privilegio: {
      type: String,
      required: true
   },
   username: {
      type: String,
      required: true,
      unique: true
   },
   password: {
      type: String,
      required: true
   },
   estado: {
      type: String,
      required: true
   },
   profile: {
      type: String,
      required: true
   },
}, {
   timestamps: true,
   versionKey: false
});

UsuariosSchema.methods.encryptPassword = async password => {
   const salt = await bcrypt.genSalt(10);
   return await bcrypt.hash(password, salt);
};

UsuariosSchema.methods.matchPassword = async function(password) {
   return await bcrypt.compare(password, this.password);
};

module.exports = model('Usuarios', UsuariosSchema);