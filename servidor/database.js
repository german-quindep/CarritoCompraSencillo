//CONEXION A LA BASE DE DATOS MONGODB
const mongoose = require("mongoose");
const { configBD, urlMongoose } = require("./config/ConfigBd.const");
//CONECTARSE A LA BD
mongoose
  .connect(urlMongoose.urlBdMongo, configBD)
  .then((db) => console.log("Conectado a la BD"))
  .catch((err) => console.log(err));

module.exports = mongoose;
