const { Schema, model } = require('mongoose');

const verificationSchema = new Schema ({
   nomCategoria: {
      type: String,
      required: true
   }
}, {
   timestamps: true,
   versionKey: false
});

module.exports = model('Categoria', verificationSchema);