import React from 'react';
import { Modal, Button, ListGroup, Badge } from 'react-bootstrap';

function Cart({ cartItems, onRemoveFromCart, onChangeQuantity, show, onClose }) {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Modal show={show} onHide={onClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>🛍️ Tu carrito</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cartItems.length === 0 ? (
          <p>No hay productos en el carrito.</p>
        ) : (
          <ListGroup variant="flush">
            {cartItems.map(item => (
              <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center">
                <div>
                  <strong>{item.name}</strong> <br />
                  ${item.price} x {item.quantity}
                </div>
                <div>
                  <Button variant="secondary" size="sm" onClick={() => onChangeQuantity(item.id, -1)}>➖</Button>{' '}
                  <Button variant="secondary" size="sm" onClick={() => onChangeQuantity(item.id, 1)}>➕</Button>{' '}
                  <Button variant="danger" size="sm" onClick={() => onRemoveFromCart(item.id)}>Quitar</Button>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Modal.Body>
      <Modal.Footer>
        <h5>Total: ${total}</h5>
        <Button variant="danger" onClick={() => cartItems.forEach(item => onRemoveFromCart(item.id))}>
          Vaciar carrito
        </Button>
        <Button variant="secondary" onClick={onClose}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Cart;
