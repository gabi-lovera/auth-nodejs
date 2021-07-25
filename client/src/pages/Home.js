import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "../components/Carta";

export default function Home() {
  return (
    <Container className="contain">
        <h1>Home</h1>
      <Row>
        <Col xs={6} md={3}>
        <Card />
        </Col>
        <Col xs={6} md={3}>
          <Card />
        </Col>
        <Col xs={6} md={3}>
          <Card />
        </Col>
        <Col xs={6} md={3}>
          <Card />
        </Col>
      </Row>
    </Container>
  );
}
