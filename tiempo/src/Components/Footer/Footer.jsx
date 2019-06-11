import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="pageLogoFooter">
                    <h1>Weather Forecast</h1>
                    <p>by Jose Sanchis</p>
                </div>
                <div className="subFooter">
                    <div className="redesSociales">
                        <ul>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Linkedin</a></li>
                            <li><a href="#">Github</a></li>
                            <li><a href="#">Gmail</a></li>
                        </ul>
                    </div>
                    <div className="infoPage">
                        <ul>
                            <li>API: <a href="https://openweathermap.org" target="_blank" rel="noopener noreferrer">OpenWeatherMap</a></li>
                            <li>Made with <a href="https://github.com/facebook/react" target="_blank" rel="noopener noreferrer">React</a></li>
                            <li>Icons from: <a href="https://fontawesome.com" target="_blank" rel="noopener noreferrer">Font Awesome</a></li>
                            <li>Wallpaper from: <a href="https://picsum.photos/" target="_blank" rel="noopener noreferrer">Lorem Picsum</a></li>
                        </ul>
                    </div>
                </div>
                <div className="copyright">
                    <p>Weather Forecast by Jose Sanchis©. All rights reserved. 2019</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer;