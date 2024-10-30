// src/view/pages/Cart.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '../../../components/Button';  

function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: 'Product 1',
      description: 'This is a great product that you will love.',
      image: 'https://via.placeholder.com/150',
      price: 29.99,
      quantity: 1,
    },
    {
      id: 2,
      title: 'Product 2',
      description: 'This is another great product for you.',
      image: 'https://via.placeholder.com/150',
      price: 19.99,
      quantity: 2,
    },
  ]);

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity <= 0) {
      setCartItems(cartItems.filter(item => item.id !== id));
    } else {
      setCartItems(cartItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <div>
          <div className="mb-4">
            {cartItems.map(item => (
              <div key={item.id} className="flex items-center mb-4 p-4 border-b">
                <img src={item.image} alt={item.title} className="w-20 h-20 object-cover mr-4" />
                <div className="flex-grow">
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                  <p>{item.description}</p>
                  <p className="text-gray-600">Price: ${item.price.toFixed(2)}</p>
                  <div className="flex items-center mt-2">
                    <label className="mr-2">Quantity:</label>
                    <input
                      type="number"
                      min="0"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                      className="border rounded w-16 p-1 text-center"
                    />
                    <Button onClick={() => handleRemoveItem(item.id)} className="ml-4 bg-red-500 text-white">
                      Remove
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <h2 className="text-2xl font-bold">Total: ${calculateTotal()}</h2>
          <div className="mt-8 flex justify-end">
            <Link to="/checkout">
              <Button className="bg-blue-500 text-white px-4 py-2 rounded">Proceed to Checkout</Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
