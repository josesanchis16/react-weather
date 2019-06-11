import React, { Component } from 'react';
import './Nav.css';

const Nav = () => {
    return (
        <nav>
            <div className="pageLogo">
                <h1>Weather Forecast</h1>
                <p>by Jose Sanchis</p>
            </div>
            <div className="buscarCiudad">
                <input type="text" />
                <i class="fas fa-search-location fa-2x"></i>
            </div>
        </nav>
    )
}

export default Nav;
