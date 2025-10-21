// src/components/Cart.jsx
import React from 'react';
import { Modal, Button, ListGroup } from 'react-bootstrap';
import { useAuth } from '../auth/AuthProvider';

function Cart({ cartItems, onRemoveFromCart, onChangeQuantity, show, onClose }) {
  const { user } = useAuth();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleClearCart = () => {
    cartItems.forEach(item => onRemoveFromCart(item.id));
  };

  const handlePurchase = () => {
    // Aquí simulamos la compra: confirm, vaciar carrito y mostrar mensaje
    const ok = window.confirm('Confirmar compra: ¿Deseas procesar el pago y finalizar la compra?');
    if (!ok) return;

    // Simular proceso de compra...
    // (aquí podrías llamar a una API real en el futuro)
    handleClearCart();
    onClose();
    window.alert('¡Compra realizada! Gracias por tu compra en HuellitasShop 🐾');
  };

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

      <Modal.Footer className="d-flex justify-content-between align-items-center">
        <div>
          <h5>Total: ${total}</h5>
        </div>

        <div className="d-flex gap-2">
          <Button variant="outline-danger" onClick={handleClearCart} disabled={cartItems.length === 0}>
            Vaciar carrito
          </Button>

          {/* Comprar solo si hay usuario */}
          {user ? (
            <Button variant="warning" onClick={handlePurchase} disabled={cartItems.length === 0}>
              Comprar ahora
            </Button>
          ) : (
            // Si prefieres, aquí puedes reemplazar por un botón que abra el modal de login
            <Button variant="warning" disabled title="Debes iniciar sesión para comprar">
              Inicia sesión para comprar
            </Button>
          )}

          <Button variant="secondary" onClick={onClose}>Cerrar</Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export default Cart;
