import React from "react";
import { Nav, Navbar, Form, Button, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Navbarr = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/home">Home</Nav.Link>
        <Nav.Link as={Link} to="/registration">Registration</Nav.Link>
        <Nav.Link as={Link} to="/login">Login</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>
  );
};

export default Navbarr;
