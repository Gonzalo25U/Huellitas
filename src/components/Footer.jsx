import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import '../styles/Footer.css';
import '../assets/logo.png';
import logo from '../assets/logo.png';
function Footer() {
  return (
    <footer>
      <Container>
        <Row className="align-items-center">
          <Col xs={6} className="d-flex gap-3">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaFacebook />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaInstagram />
            </a>
          </Col>
          <Col xs={6} className="text-end">
            <span>© HuellitasShop. Derechos reservados</span>
            <img src={logo} alt="HuellitasShop" height="30" />
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
