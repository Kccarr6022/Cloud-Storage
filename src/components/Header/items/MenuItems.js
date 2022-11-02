import React from 'react';
import { Link } from 'react-router-dom'

const MenuItems = () => {
    return (
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/live">Live</Link></li>
            <li><Link to="/archieve">Archieve</Link></li>
            <li><Link to="/analytics">Analytics</Link></li>
        </ul>
    );
}

export default MenuItems