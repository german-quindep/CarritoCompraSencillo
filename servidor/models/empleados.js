const mongoose = require("mongoose");
const { Schema } = mongoose;

const empleadoSchema = new Schema({
  nombre: { type: String, required: true },
  posicion: { type: String, required: true },
  oficina: { type: String, required: true },
  salario: { type: Number, required: true },
});

//DATOS PARA GUARDAR A LA BD Y EXPORTAR PARA LLEVARLO AL CONTROLADOR
module.exports = mongoose.model("Empleado", empleadoSchema);
