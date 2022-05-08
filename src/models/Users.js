const { Schema, model } = require('mongoose');

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
   fechaNacimiento: {
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

module.exports = model('Usuarios', UsuariosSchema);