import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Talento 2025
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/clientes">
            Clientes
          </Nav.Link>
          <Nav.Link as={Link} to="/productos">
            Productos
          </Nav.Link>
          <Nav.Link as={Link} to="/servicios">
            Servicios
          </Nav.Link>
          <Nav.Link as={Link} to="/contacto">
            Contacto
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
