const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  barcode: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  quantity: { type: Number, required: true, default: 0 },
  price: { type: Number },
  // Puedes agregar más campos como descripción, categoría, etc.
});

module.exports = mongoose.model('Item', itemSchema);