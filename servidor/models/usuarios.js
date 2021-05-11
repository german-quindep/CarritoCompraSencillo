const mongoose = require("mongoose");
const { Schema } = mongoose;

const modelUsuario = new Schema(
  {
    usuario: { type: String, required: true, unique: true,trim:true },
    email: { type: String, required: true, unique: true,trim:true },
    password: { type: String, required: true, trim:true},
    //TRIM:true, PARA LIMPIAR LOS ESPACIOS
  },
  {
    timestamps:true
  }
);
module.exports = mongoose.model("Usuario", modelUsuario);
