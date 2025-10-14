import React, { useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Footer from './components/Footer';
import About from './components/About';
import productsData from './data/products';

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const changeQuantity = (id, delta) => {
    setCart(cart.map(item => item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item));
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const openCart = () => setShowCart(true);
  const closeCart = () => setShowCart(false);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
    }}>
      <Header cartCount={cart.length} onOpenCart={openCart} />

      <main style={{ flex: 1 }}>
        <About />
        <ProductList products={productsData} onAddToCart={addToCart} />
      </main>

      <Footer />

      <Cart
        cartItems={cart}
        onRemoveFromCart={removeFromCart}
        onChangeQuantity={changeQuantity}
        show={showCart}
        onClose={closeCart}
      />
    </div>
  );
}

export default App;
