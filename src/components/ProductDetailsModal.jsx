import React from 'react';
import { Modal, Carousel, Button } from 'react-bootstrap';

function ProductDetailsModal({ product, show, onClose }) {
  if (!product) return null;

  return (
    <Modal show={show} onHide={onClose} size="lg" centered animation={true}>
      <Modal.Header closeButton>
        <Modal.Title>{product.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{product.description}</p>
        <p><strong>Precio: </strong>${product.price}</p>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={product.image}
              alt={product.name}
            />
          </Carousel.Item>
          {product.extraImages.map((img, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={img}
                alt={`${product.name} ${index + 1}`}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </Modal.Body>
      <Modal.Footer>
        <Button className="btn-hover" onClick={onClose}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProductDetailsModal;
