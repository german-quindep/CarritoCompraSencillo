module.exports = {
  PORT_DEV: process.env.PORT_DEV || 3000,
  CORS_FRONT: process.env.CORS_FRONT || "http://localhost:4200",
  CORS_METHOD: process.env.CORS_METHOD || "GET,HEAD,PUT,PATCH,POST,DELETE",
  CORS_ALLOW_HEADER:
    process.env.CORS_ALLOW_HEADER ||
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method,Access-Control-Allow-Origin,Access-Control-Allow-Methods",
  URL_API: process.env.URL_API || "/api",
};
