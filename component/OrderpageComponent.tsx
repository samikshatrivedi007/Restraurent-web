//import React,
import { useState } from 'react';
// import './styles.css';

type cartItem = {
    id: number;
    name: string;
    price: number;
}
function OrderPage() {
  const [cart, setCart] = useState<cartItem[]>([]);

  const menuItems = [
    { id: 1, name: 'Pizza', price: 10 },
    { id: 2, name: 'Burger', price: 8 },
    { id: 3, name: 'Pasta', price: 12 },
  ];

  const addToCart = (item:cartItem) => {
    setCart((prev) => {
          prev.push(item)
          return prev
      })
  };

  return (
    <div className="order-page">
      <h2>Order Now</h2>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </li>
        ))}
      </ul>
      <h3>Cart</h3>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item.name} - ${item.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default OrderPage;
