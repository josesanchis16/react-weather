import React from 'react';
import './HeaderMenu.css';

const Header = () => {
    
    return (
        <div className="header">
            <ul className="divMax">
                <li><a href="#">Opcion 1</a></li>
                <li><a href="#">Opcion 2</a></li>
                <li><a href="#">Opcion 3</a></li>
            </ul>
            <div className="divMin">
                <a href="#" className="btnMenuDivMin">Menu</a>
                <ul>
                    <li><a href="#">Opcion 1</a></li>
                    <li><a href="#">Opcion 2</a></li>
                    <li><a href="#">Opcion 3</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;

