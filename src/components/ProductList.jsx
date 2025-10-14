import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';

function ProductList({ products, onAddToCart }) {
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  // Productos iniciales
  const initialProducts = products.slice(0, 3);
  // Productos adicionales para el modal
  const extraProducts = products.slice(3);

  return (
    <Container className="mb-5">
      <h2 className="mb-4">Catálogo de Productos</h2>
      <Row>
        {initialProducts.map(product => (
          <Col key={product.id} xs={12} sm={6} md={4} className="mb-4">
            <ProductCard product={product} onAddToCart={onAddToCart} />
          </Col>
        ))}
      </Row>

      {extraProducts.length > 0 && (
        <div className="text-center">
        <Button variant="warning" className="btn-hover" onClick={handleOpen}>
        Ver más
        </Button>
        </div>
      )}

      {/* Modal de productos adicionales */}
      <Modal show={showModal} onHide={handleClose} size="lg" centered animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Productos adicionales</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ maxHeight: '60vh', overflowY: 'auto' }}>
        <Row>
            {extraProducts.map(product => (
            <Col key={product.id} xs={12} sm={6} md={4} className="mb-4">
                <ProductCard product={product} onAddToCart={onAddToCart} />
            </Col>
            ))}
        </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default ProductList;
