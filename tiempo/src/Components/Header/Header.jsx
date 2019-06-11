import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header>
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
        </header>
    )
}

export default Header;

