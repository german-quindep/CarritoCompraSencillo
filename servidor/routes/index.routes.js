const configServe = require("../config/ConfigServe.env");
const routerInvoice = require("./facturas.routes.js");
const routerAuth = require("./auth.routes");
const routerProduct = require("./productos.routes");
const routerEmpleados = require("./empleados.routes");


const indexRoutes = (app) => {
  //RUTAS
  app.use(configServe.URL_API, routerEmpleados);
  app.use(configServe.URL_API, routerProduct);
  app.use(configServe.URL_API, routerInvoice);
  app.use(configServe.URL_API, routerAuth);
};
//EXPORTS
module.exports = indexRoutes;

