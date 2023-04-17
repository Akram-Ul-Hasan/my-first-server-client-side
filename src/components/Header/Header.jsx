import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/phones">Phones</Link>
            <Link to="/phones/:id">Phone</Link>
        </div>
    );
};

export default Header;