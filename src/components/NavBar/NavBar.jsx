import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Mundo CALZADO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/">Inicio</Link>
            <Link to="/product/:idProduct">Nike</Link>
            <Link to="/product/:idProduct">Adidas</Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Futbol</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Basketball</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Por Encargue
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">En Stock</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CartWidget />
      <Nav.Link href="#link">Carrito</Nav.Link>
    </Navbar>
  );
}

export default Navbar;
