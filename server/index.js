const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");

var usuariosRouter = require('./routes/usuarios');

const app = express();

app.use(express.json());
app.use(cors({
  origin: ["http://localhost:3000"],
  methods: ["GET", "POST"],
  credentials: true,
}));

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use(
    session({
    key: "userId",
    secret: "Secreto",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);

app.use('/usuarios', usuariosRouter);

app.listen(3001, () => {
  console.log("running server");
});
