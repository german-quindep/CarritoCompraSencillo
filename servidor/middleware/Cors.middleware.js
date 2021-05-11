const ConfigServeEnv = require("../config/ConfigServe.env");
module.exports = {
  origin: ConfigServeEnv.CORS_FRONT,
  methods: ConfigServeEnv.CORS_METHOD,
  allowedHeaders: ConfigServeEnv.CORS_ALLOW_HEADER,
};
