const app = require("./app");
const configServe = require("./config/ConfigServe.env.js");

//INICIALIZO EL SERVIDOR
const init = async () => {
  await app.listen(configServe.PORT_DEV);
  console.log(`Server on Port ${configServe.PORT_DEV}`);
};
init();
