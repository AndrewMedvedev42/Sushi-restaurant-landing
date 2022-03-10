import React from 'react';

export const NavigationBar:React.FC = () => {
    return (
        <nav>
            <img src="." alt="logo" />
            <ul>
                <li>Home</li>
                <li>How to work</li>
                <li>Services</li>
                <li>Products</li>
                <li>Contacts</li>
                <li>Register</li>
            </ul>
        </nav>
    )
}