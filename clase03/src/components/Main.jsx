import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Main = () => {
  return (
    <main className="py-5 bg-light">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h2>Hola Mundo Desde React</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus architecto maiores ut?
            </p>
            <Button variant="primary">ingresar</Button>
          </Col>
          <Col md={6}>
            <img src="https://picsum.photos/600/400"        
              className="img-fluid rounded shadow"
            />
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Main;
