import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import ProductDetailsModal from './ProductDetailsModal';

function ProductCard({ product, onAddToCart }) {
  const [showDetails, setShowDetails] = useState(false);

  const openDetails = () => setShowDetails(true);
  const closeDetails = () => setShowDetails(false);

  return (
    <>
      <Card style={{ width: '100%', height: '100%' }}>
        <Card.Img 
          variant="top" 
          src={product.image} 
          style={{ cursor: 'pointer' }} 
          onClick={openDetails} 
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>${product.price}</Card.Text>
        <Button className="btn-hover mt-auto" onClick={() => onAddToCart(product)}>
        Agregar al carrito
        </Button>
        </Card.Body>
      </Card>

      {/* Modal de detalles */}
      <ProductDetailsModal product={product} show={showDetails} onClose={closeDetails} />
    </>
  );
}

export default ProductCard;
