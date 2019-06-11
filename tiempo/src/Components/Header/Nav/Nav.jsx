import React from 'react';
import './Nav.css';

const Nav = () => {
    return (
        <div className="nav">
            <div className="pageLogo">
                <h1>Weather Forecast</h1>
                <p>by Jose Sanchis</p>
            </div>
            <div className="buscarCiudad">
                <input type="text" />
                <i className="fas fa-search-location fa-2x"></i>
            </div>
        </div>
    )
}

export default Nav;
