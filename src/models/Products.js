const { Schema, model } = require('mongoose');

const verificationSchema = new Schema ({
   nomProducto: {
      type: String,
      required: true
   },
   categoria: {
      type: String,
      required: true
   },
   descripcion: {
      type: String,
      required: true
   },
   precio: {
      type: String,
      required: true
   },
   estado: {
      type: String,
      require: true
      // Stock
      // Sin stock
   }
}, {
   timestamps: true,
   versionKey: false
});

module.exports = model('Productos', verificationSchema);