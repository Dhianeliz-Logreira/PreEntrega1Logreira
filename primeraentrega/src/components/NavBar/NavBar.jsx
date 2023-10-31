import { CartWidget } from "../CartWidget/CartWidget"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-secondary">
    <Container>
      <Navbar.Brand href="#home">EL CEMENTERIO DE LIBROS</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#features">JUVENILES</Nav.Link>
          <Nav.Link href="#pricing">ADULTOS</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link eventKey={2} href="#memes">
          <CartWidget/>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar

