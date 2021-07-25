import React, { useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import { Button, Container} from "react-bootstrap";

export default function Registration() {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const history = useHistory();

  const register = () => {
    Axios.post("http://localhost:3001/usuarios/registro", {
      username: usernameReg,
      password: passwordReg,
    }).then((response) => {
      console.log(response);
    });

    history.push("/login");
  };

  return (
    <Container className="contain">
      <h1>Registration</h1>
      <label>Username</label>
      <input
        type="text"
        onChange={(e) => {
          setUsernameReg(e.target.value);
        }}
      />
      <label>Password</label>
      <input
        type="text"
        onChange={(e) => {
          setPasswordReg(e.target.value);
        }}
      />
      <Button className="btn-reg" variant="primary" onClick={register}> Register </Button>
    </Container>
  );
}
