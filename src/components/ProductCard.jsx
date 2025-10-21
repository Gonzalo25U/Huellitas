import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useAuth } from '../auth/AuthProvider'; 

function ProductCard({ product, onAddToCart, onViewDetails }) {
    const { user } = useAuth();


  return (
    <Card className="product-card">
      <Card.Img
        variant="top"
        src={product.image}
        alt={product.name}
        className="product-image"
        onClick={() => onViewDetails(product)}
      />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>${product.price}</Card.Text>
        <div className="d-flex flex-column gap-2">
          <Button variant="outline-success" onClick={() => onAddToCart(product)}>
            Agregar al carrito
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
