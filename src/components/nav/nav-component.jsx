import React, { useState } from 'react';

const Nav = () => {
    const [activeItem, setActiveItem] = useState('Home'); // Храним название активного пункта

    const menuItems = [
        { name: 'Home', href: '#' },
        { name: 'Project', href: '#' },
        { name: 'About Us', href: '#' },
        { name: "FAQ's", href: '#' }
    ];

    const handleItemClick = (itemName) => {
        setActiveItem(itemName);
    };

    return (
        <div className="container">
            <nav className='nav'>
                <a href="#!" className="nav__logo">
                    {/* <img src={logo} alt="logo" className="nav__logo-img"/> */}
                    <div className="nav__logo-placeholder">LOGO</div>
                </a>
                <ul className="nav__list">
                    {menuItems.map((item) => (
                        <li 
                            key={item.name}
                            className={`nav__item ${activeItem === item.name ? 'nav__item--active' : ''}`}
                        >
                            <a 
                                href={item.href} 
                                className="nav__link"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleItemClick(item.name);
                                }}
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="nav__btn-wrapper">
                    <a href="#!" className="nav__btn-link">
                        Contact Us
                    </a>
                </div>
            </nav>

            <style jsx>{`
                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 20px;
                }
                
                .nav {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 1rem 0;
                    background: white;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                }
                
                .nav__logo {
                    text-decoration: none;
                    font-weight: bold;
                    font-size: 1.5rem;
                    color: #333;
                }
                
                .nav__logo-placeholder {
                    padding: 10px 20px;
                    background: #333;
                    color: white;
                    border-radius: 4px;
                }
                
                .nav__list {
                    display: flex;
                    list-style: none;
                    margin: 0;
                    padding: 0;
                    gap: 2rem;
                }
                
                .nav__item {
                    position: relative;
                }
                
                .nav__link {
                    text-decoration: none;
                    color: #666;
                    font-weight: 500;
                    padding: 0.5rem 1rem;
                    border-radius: 4px;
                    transition: all 0.3s ease;
                }
                
                .nav__link:hover {
                    color: #333;
                    background: #f5f5f5;
                }
                
                .nav__item--active .nav__link {
                    color: #007bff;
                    background: #e3f2fd;
                    font-weight: 600;
                }
                
                .nav__btn-wrapper {
                    margin-left: 2rem;
                }
                
                .nav__btn-link {
                    text-decoration: none;
                    background: #007bff;
                    color: white;
                    padding: 0.75rem 1.5rem;
                    border-radius: 6px;
                    font-weight: 500;
                    transition: background 0.3s ease;
                }
                
                .nav__btn-link:hover {
                    background: #0056b3;
                }
                
                @media (max-width: 768px) {
                    .nav {
                        flex-direction: column;
                        gap: 1rem;
                    }
                    
                    .nav__list {
                        gap: 1rem;
                    }
                    
                    .nav__btn-wrapper {
                        margin-left: 0;
                    }
                }
            `}</style>
        </div>
    );
};

export default Nav;