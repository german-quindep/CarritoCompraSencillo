const mongoose = require("mongoose");
const { Schema } = mongoose;

const productoSchema = new Schema({
  Nombre: { type: String, required: true },
  Marca: { type: String, required: true },
  Stock: { type: Number, required:true},
  Precio: { type: Number, required: true },
});

module.exports = mongoose.model("Producto", productoSchema);
