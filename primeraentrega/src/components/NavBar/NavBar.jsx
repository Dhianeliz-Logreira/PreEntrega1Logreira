import { CartWidget } from "../CartWidget/CartWidget"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom"

export const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-secondary">
    <Container>
      <Link to="/">
      <Navbar.Brand href="#home">EL CEMENTERIO DE LIBROS</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Link to="/categorias/juveniles">JUVENILES</Link>
          <Link to="/categorias/adultos"> ADULTOS</Link>
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

