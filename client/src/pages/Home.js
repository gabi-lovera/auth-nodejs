import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

export default function Home() {
  return (
    <Container>
        <h1>Home</h1>
      <Row>
        <Col xs={6} md={3}>
        <Image src="images/gray.png" thumbnail />
        </Col>
        <Col xs={6} md={3}>
          <Image src="images/gray.png" roundedCircle />
        </Col>
        <Col xs={6} md={3}>
          <Image src="images/gray.png" thumbnail />
        </Col>
        <Col xs={6} md={3}>
          <Image src="images/gray.png" thumbnail />
        </Col>
      </Row>
    </Container>
  );
}
