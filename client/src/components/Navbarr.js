import React, { useContext } from "react";
import { Nav, Navbar, Form, Button, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbarr.css";
import { AuthContext } from "../helpers/AuthContext";
import Axios from "axios";

export const Navbarr = () => {
  const { authState, setAuthState } = useContext(AuthContext);

  const logout = () => {
    setAuthState({ ...authState, status: false });
    Axios.get("http://localhost:3001/usuarios/logout");
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/home">
          Home
        </Nav.Link>
        {authState.status ? (
          <Nav.Link as={Link} to="/seccion">
            Seccion
          </Nav.Link>
        ) : (
          ""
        )}
      </Nav>
      <Form inline>
        <Nav className="mr-auto">
          {!authState.status ? (
            <>
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
              <Nav.Link as={Link} to="/registration">
                Registration
              </Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link className="links" onClick={logout} as={Link} to="/">
                Cerrar sesion
              </Nav.Link>
            </>
          )}
        </Nav>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>
  );
};

export default Navbarr;
