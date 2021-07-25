import React, { useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import { Form } from "react-bootstrap";

export default function Registration() {
  const [username, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const history = useHistory();

  const register = () => {
    Axios.post("http://localhost:3001/usuarios/registro", {
      username: username,
      password: passwordReg,
    }).then((response) => {
      console.log(response);
    });

    history.push("/login");
  };

  const SignupSchema = Yup.object().shape({
    password: Yup.string()
      .min(6, "Demasiado corto")
      .max(15, "Demasiado largo")
      .required("Es requerido"),
  });

  return (
    <Container className="contain">
      <h1>Registration</h1>

      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(data) => {
          Axios.post(
            "http://localhost:3001/usuarios/registro",
            data
          ).then(() => {
            console.log(data);
          });
          history.push("/login");
        }}
      >
        {({ handleSubmit, errors, touched, handleChange }) => (
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                onChange={handleChange}
                isValid={touched.password && !errors.password}
                isInvalid={touched.password && !!errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Button className="btn-reg" variant="primary" type="submit">
              Register
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
}
