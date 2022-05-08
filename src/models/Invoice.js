const { Schema, model } = require('mongoose');

const verificationSchema = new Schema ({
   cliente: {
      type: String,
      required: true
   },
   fecha: {
      type: String,
      require: true
   },
   _idSales: {
      type: Schema.Types.ObjectId,
      ref: 'Ventas'
   },
   total: {
      type: String,
      require: true
   },
   _idVendedor: {
      type: Schema.Types.ObjectId,
      ref: 'Usuarios'
   },
}, {
   timestamps: true,
   versionKey: false
});

module.exports = model('Factura', verificationSchema);