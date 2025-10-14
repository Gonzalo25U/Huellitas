import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import logo from '../assets/logo.png';
function About() {
  return (
    <Container className="my-5">
      <h2 className="mb-4 text-center">Sobre HuellitasShop <img src={logo} alt="HuellitasShop" height="30" /> </h2>
      <Row>
        <Col md={6} className="mb-4">
          <Card className="h-100 shadow-sm">
            <Card.Img variant="top" src="https://place-puppy.com/400x200" />
            <Card.Body>
              <Card.Title>Misión</Card.Title>
              <Card.Text>
                Cuidar de tus mascotas con productos de calidad, como si fueran parte de nuestra familia.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card className="h-100 shadow-sm">
            <Card.Img variant="top" src="https://placekitten.com/400/200" />
            <Card.Body>
              <Card.Title>Visión</Card.Title>
              <Card.Text>
                Ser la tienda online de referencia para amantes de las mascotas, ofreciendo variedad, calidad y buen servicio.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
