import { useState } from 'react'
import { Container, Row, Col, Navbar, Nav, Card, Button, Form } from 'react-bootstrap';




function App() {

  return (
      <>
     <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">TechShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Inicio</Nav.Link>
              <Nav.Link href="#productos">Productos</Nav.Link>
              <Nav.Link href="#contacto">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/*Seccion Hero  */}
      <div className="bg-dark text-white text-center p-5">
        <h1>Los mejores celulares del mercado</h1>
        <p>Encuentra la tecnología que se adapta a tu estilo.</p>
        <Button variant="success">Ver ofertas</Button>
      </div>

      <Container className="mt-4" id="productos">
        <h2 className="text-center mb-4">Nuestros productos</h2>
        <Row>
          
          
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src="https://placehold.co/300x200" />
              <Card.Body>
                <Card.Title>Samsung Galaxy S24</Card.Title>
                <Card.Text>Pantalla AMOLED y cámara profesional.</Card.Text>
                <Button variant="dark">Ver más</Button>
              </Card.Body>
            </Card>
          </Col>

        
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src="https://placehold.co/300x200" />
              <Card.Body>
                <Card.Title>iPhone 15 Pro</Card.Title>
                <Card.Text>Diseño elegante y rendimiento superior.</Card.Text>
                <Button variant="dark">Ver más</Button>
              </Card.Body>
            </Card>
          </Col>

         
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src="https://placehold.co/300x200" />
              <Card.Body>
                <Card.Title>Xiaomi 14 Ultra</Card.Title>
                <Card.Text>Alta potencia y excelente relación calidad-precio.</Card.Text>
                <Button variant="dark">Ver más</Button>
              </Card.Body>
            </Card>
          </Col>


        </Row>
      </Container>


       <Container id="contacto" className="p-4 mt-4 bg-light rounded">
        <h3>Contáctanos</h3>
        <Form>
          <Form.Group className="mb-3" controlId="formNombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Tu nombre" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Tu email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formMensaje">
            <Form.Label>Mensaje</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Escribe tu mensaje" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form>
      </Container>

          <footer className="bg-dark text-white text-center p-3 mt-4">
        <p>Talento 2025</p>
      </footer>


      </>
  )
}

export default App
