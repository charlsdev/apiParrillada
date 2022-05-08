const { Schema, model } = require('mongoose');

const verificationSchema = new Schema ({
   numMesa: {
      type: Number,
      required: true
   },
   codigo: {
      type: String,
      required: true
   },
   estado: {
      type: String,
      require: true
      // Ocupada
      // Desocupada
   }
}, {
   timestamps: true,
   versionKey: false
});

module.exports = model('Mesa', verificationSchema);