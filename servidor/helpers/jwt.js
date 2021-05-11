const jwt = require("jsonwebtoken");
const SECRET_KEY = "mysecretJSON";

const generateToken = (idUser) => {
  const expireIn = 24 * 60 * 60;
  const accessToken = jwt.sign({ id: idUser }, SECRET_KEY, {
    expiresIn: expireIn,
  });
  return { expireIn, accessToken };
};

module.exports = generateToken;
