const bcrypt = require("bcryptjs");
const bcryptPassowrd = {};
bcryptPassowrd.encryptPassword = (password) => {
  return bcrypt.hashSync(password);
};
bcryptPassowrd.desCryptPassword = (password, encrytPassword) => {
  return bcrypt.compareSync(password, encrytPassword);
};

module.exports = bcryptPassowrd;
