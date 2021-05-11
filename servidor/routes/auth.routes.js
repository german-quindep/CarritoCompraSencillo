const { Router } = require("express");
const routerAuth = Router();
const auth = require("../controllers/auth.controllers");
const urlAuth = require("../config/UrlAuth.const.js");
//RUTAS
routerAuth.post(urlAuth.Registrar, auth.crearUsuario);
routerAuth.post(urlAuth.Login, auth.loginUsuario);
module.exports = routerAuth;
