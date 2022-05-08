const { Schema, model } = require('mongoose');

const verificationSchema = new Schema ({
   _codeMesa: {
      type: String,
      required: true
   },
   ventas: [{
      producto: {
         type: String,
         require: true
      },
      cantidad: {
         type: Number,
         required: true
      },
      precio: {
         type: String,
         require: true
      }
   }]
}, {
   timestamps: true,
   versionKey: false
});

module.exports = model('Ventas', verificationSchema);