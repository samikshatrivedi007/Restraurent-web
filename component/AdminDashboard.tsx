//import React,
import { useState } from 'react';
//import './styles.css';

function AdminDashboard() {
  const [menuItems, setMenuItems] = useState([
    { id: 1, name: 'Pizza', price: 10 },
    { id: 2, name: 'Burger', price: 8 },
  ]);

  const addItem = () => {
    const newItem = { id: menuItems.length + 1, name: 'New Item', price: 0 };
    setMenuItems([...menuItems, newItem]);
  };

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <button onClick={addItem}>Add New Menu Item</button>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>{item.name} - ${item.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default AdminDashboard;
