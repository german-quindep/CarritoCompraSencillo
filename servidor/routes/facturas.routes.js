const { Router } = require("express");
const routerInvoice = Router();
const facturaCtrl = require("../controllers/facturas.controllers");
const urlInvoice = require("../config/UrlInvoices.const");
//RUTAS
routerInvoice.post(urlInvoice.PostInvoice, facturaCtrl.agregarFactura);

module.exports = routerInvoice;
