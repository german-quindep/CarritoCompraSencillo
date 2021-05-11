const authCtrl = {};
const modelUsuario = require("../models/usuarios");
const {
  encryptPassword,
  desCryptPassword,
} = require("../helpers/EncryptDescryptPassword");
const generateToken = require("../helpers/jwt");
//CREAR USERS
authCtrl.crearUsuario = async (req, res) => {
  const nuevoUsuario = new modelUsuario({
    usuario: req.body.usuario,
    email: req.body.email,
    password: encryptPassword(req.body.password),
  });
  await nuevoUsuario.save((err, usuario) => {
    if (err)
      return res.status(401).json({ error: "Usuario o Email ya existen" });
    const { accessToken, expireIn } = generateToken(usuarios.id); //GENERO TOKEN
    //LLEVAR LOS DATOS DE USUARIO AL FRONTEND
    const datosUsuarios = {
      usuario: nuevoUsuario.usuario,
      email: nuevoUsuario.email,
      accessToken: accessToken,
      expireIn: expireIn,
    };
    //RESPONDER A FRONTEND
    res.status(200).json({ message: datosUsuarios });
  });
};
//LOGIN USERS
authCtrl.loginUsuario = async (req, res) => {
  const loginUsuario = new modelUsuario({
    email: req.body.email,
    password: req.body.password,
  });
  await modelUsuario.findOne({ email: loginUsuario.email }, (err, usuarios) => {
    if (err) return res.status(500).send("Error del servidor");
    if (!usuarios) {
      res.status(409).send({ mensaje: "No existe email" });
    } else {
      //LO QUE VIENE DEL POST||LO QUE VIENE DE LA BD
      const descofiPassword = desCryptPassword(
        loginUsuario.password,
        usuarios.password
      );
      if (descofiPassword) {
        const { accessToken, expireIn } = generateToken(usuarios.id); //GENERO TOKEN
        const datosUsuarios = {
          usuario: usuarios.usuario,
          email: usuarios.email,
          accessToken: accessToken,
          expireIn: expireIn,
        };
        res.send({ datosUsuarios });
      } else {
        res.status(409).send({ mensaje: "Contraseña incorrecta" });
      }
    }
  });
};

module.exports = authCtrl;
