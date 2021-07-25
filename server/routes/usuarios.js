var express = require('express');
var router = express.Router();
var dbConn  = require('../db');
const bcrypt = require("bcrypt");
const saltRounds = 10;

//Registrar usuarios
router.post('/registro', function(req, res, next) {
  const username = req.body.username;
  const password = req.body.password;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    }
  dbConn.query(
    "INSERT INTO usuarios (username, password) VALUES (?,?)",
    [username, hash],
    );
  });
});

//Sesion usuarios
router.get("/login", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});

//Login usuarios
router.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  dbConn.query(
    "SELECT * FROM usuarios WHERE userName = ?;",
    username,
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }
      if (result.length > 0) {
        bcrypt.compare(password, result[0].password, (error, response) => {
          if (response) {
            req.session.user = result;
            res.send(result);
          } else {
            res.send({ message: "Contraseña Incorrecta" });
          }
        });
      } else {
        res.send({ message: "El Usuario no existe" });
      }
    }
  );
});

// Logout usuario
router.get('/logout', function (req, res) {
  req.session.destroy();
  res.send("logout success!");
});

module.exports = router;
