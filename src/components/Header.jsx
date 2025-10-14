import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import '../styles/Header.css';
import { FaShoppingCart } from 'react-icons/fa';
import logo from '../assets/logo.png'; // <-- IMPORTAR LOGO CORRECTAMENTE

function Header({ cartCount, onOpenCart }) {
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="#" className="navbar-brand">
          <img
            src={logo}      // <-- USAR LA VARIABLE IMPORTADA
            alt="HuellitasShop"
            height="40"
            className="d-inline-block align-top me-2"
          />
          HuellitasShop
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about">Sobre Nosotros</Nav.Link>
            <Nav.Link href="#products">Productos</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link onClick={onOpenCart} className="cart-icon">
              <FaShoppingCart size={24} />
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
