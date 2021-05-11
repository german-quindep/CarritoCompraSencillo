const configBD = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};
const urlMongoose = {
  urlBdMongo: "mongodb://localhost/mean-empleados",
};
module.exports = { configBD, urlMongoose };
