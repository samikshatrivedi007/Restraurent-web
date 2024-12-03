import React, { useState } from 'react';
import './Header.css';

const Header: React.FC = () => {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const toggleDropdown = (menu: string) => {
        setActiveDropdown(activeDropdown === menu ? null : menu);
    };

    return (
        <header className="header">
            <div className="header-logo">𝕼𝖚𝖊𝖚𝖊𝖑𝖔𝖌𝖞</div>
            <ul className="header-menu">
                <li
                    className="header-item"
                    onMouseEnter={() => toggleDropdown('products')}
                    onMouseLeave={() => toggleDropdown(null)}
                >
                    Products
                    {activeDropdown === 'products' && (
                        <div className="dropdown">
                            <div className="dropdown-section">
                                <h4>DISCOVERY</h4>
                                <a href="#">Online Food Ordering System</a>
                                <a href="#">Mobile App</a>
                                <a href="#">Table Reservation</a>
                                <a href="#">Website Builder</a>
                            </div>
                            <div className="dropdown-section">
                                <h4>OPERATIONS</h4>
                                <a href="#">Restaurant POS System</a>
                                <a href="#">Inventory</a>
                                <a href="#">Third-Party Order Management</a>
                                <a href="#">Kitchen Display System</a>
                            </div>
                            <div className="dropdown-section">
                                <h4>ENGAGEMENT</h4>
                                <a href="#">CRM Solution</a>
                                <a href="#">Loyalty Program</a>
                                <a href="#">Feedback System</a>
                                <a href="#">IVR Service</a>
                            </div>
                        </div>
                    )}
                </li>
                <li className="header-item">
                    <a href="#">Restaurant Type</a>
                </li>
                <li className="header-item">
                    <a href="#">Clients</a>
                </li>
                <li className="header-item">
                    <a href="#">Resources</a>
                </li>
                <li className="header-item">
                    <a href="#">Blog</a>
                </li>
                <li className="header-item">
                    <a href="#">COVID-19</a>
                </li>

            </ul>
        </header>
    );
};

export default Header;
