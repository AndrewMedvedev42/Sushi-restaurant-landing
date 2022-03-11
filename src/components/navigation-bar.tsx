import React from 'react';

export const NavigationBar:React.FC = () => {
    return (
        <nav className="navigation_bar">
            <img className="logo" src="." alt="logo" />
            <ul className="link_list">
                <li className="nav_link">Home</li>
                <li className="nav_link">How to work</li>
                <li className="nav_link">Services</li>
                <li className="nav_link">Products</li>
                <li className="nav_link">Contacts</li>
            </ul>
        </nav>
    )
}