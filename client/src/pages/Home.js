import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "../components/Carta";

export default function Home() {
  const runCallback = (cb) => {
    return cb();
  };
  return (
    <Container className="contain">
      <h1>Home</h1>
      <Row>
        {runCallback(() => {
          const row = [];
          for (var i = 0; i < 5; i++) {
            row.push(
              <Col xs={6} md={3}>
                <Card />
              </Col>
            );
          }
          return row;
        })}
      </Row>
    </Container>
  );
}
