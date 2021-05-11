const express = require("express");
const indexRoutes = require("./routes/index.routes");
const cors = require("cors");
const app = express();
//CORS
const corsMiddleware = require("./middleware/Cors.middleware");
//BD
require("./database");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//MIDDLEWARE CORS
app.use(cors(corsMiddleware));
//RUTAS
indexRoutes(app);

//PARA DECIRLE QUE FRONT QUIERE HACER PETICIONES

module.exports = app;
