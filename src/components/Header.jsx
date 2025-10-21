import React, { useState } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { useAuth } from '../auth/AuthProvider';
import Login from '../auth/Login';
import Register from '../auth/Register';
import '../styles/Header.css';
import logo from '../assets/logo.png';

function Header({ cartCount, onOpenCart }) {
  const { user, logout } = useAuth();
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <>
      <Navbar expand="lg" className="navbar">
        <Container>
          <Navbar.Brand href="#" className="navbar-brand">
            <img
              src={logo}
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
              <Nav.Link href="#services">Servicios</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link onClick={onOpenCart} className="cart-icon">
                <FaShoppingCart size={24} />
                {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
              </Nav.Link>
              {user ? (
                <>
                  <span className="navbar-text me-3">Hola, {user.email}</span>
                  <Button variant="outline-light" size="sm" onClick={logout}>
                    Cerrar sesión
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="outline-light" size="sm" className="me-2" onClick={() => setShowLogin(true)}>
                    Iniciar sesión
                  </Button>
                  <Button variant="outline-light" size="sm" onClick={() => setShowRegister(true)}>
                    Registrarse
                  </Button>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Modales */}
      <Login show={showLogin} handleClose={() => setShowLogin(false)} />
      <Register show={showRegister} handleClose={() => setShowRegister(false)} />
    </>
  );
}

export default Header;
