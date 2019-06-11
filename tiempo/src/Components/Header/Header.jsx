import React from 'react';
import './Header.css';

const Header = () => {

    if ("geolocation" in navigator) { //check geolocation available 
        //try to get user current location using getCurrentPosition() method
        navigator.geolocation.getCurrentPosition(function (position) {
            console.log("Found your location nLat : " + position.coords.latitude + " nLang :" + position.coords.longitude);
        });
    } else {
        console.log("Browser doesn't support geolocation!");
    }
    
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

