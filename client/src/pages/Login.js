import React, { useEffect, useState, useContext } from "react";
import Axios from "axios";
import { Button, Container } from "react-bootstrap";
import { AuthContext } from "../helpers/AuthContext";
import { useHistory } from "react-router-dom";

export default function Login() {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const { setAuthState } = useContext(AuthContext);

  Axios.defaults.withCredentials = true;

  const login = () => {
    Axios.post("http://localhost:3001/usuarios/login", {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setAuthState({
          username: response.data[0].username,
          id: response.data[0].id,
          status: true,
        });
        history.push("/seccion");
      }
    });
  };

  //
  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn === true) {
        setLoginStatus(response.data.user[0].username);
      }
    });
  }, []);

  return (
    <Container className="contain">
      <div className="login">
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Username..."
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password..."
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button variant="primary" onClick={login}>
          Login
        </Button>
      </div>
      <p className="alert">{loginStatus}</p>
    </Container>
  );
}
