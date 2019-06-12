import React, { Component } from 'react';
import './currentWeather.css';

class CurrentWeather extends Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.state = this.props.weather;
    }
    renderWeathers = (weathers) => (weathers.map(weather => {

    }))

    render() {
        console.log(this.state);
        return (
            <div className="divCurrentWeather">
                <div className="nombreCiudad">
                    <h1>{this.state.name}</h1>
                    <p>{this.state.sys.country}</p>
                </div>
                <div className="temperaturas">
                    <div className="tiempoActualImg card">
                        <div className="img">
                            <img src={'http://openweathermap.org/img/w/' + this.state.weather[0].icon + '.png'} alt="" />
                        </div>
                        <div className="texto">
                            <p>{this.state.weather[0].main}</p>
                            <p>{this.state.weather[0].description}</p>
                        </div>
                    </div>
                    <div className="tiempoActualEstadisticas card">
                        <div className="temperatura">
                            <h3>Temperature</h3>
                            <p>{this.state.main.temp}°</p>
                        </div>

                        <div className="tempMaxNMin secondaryInfo">
                            <div className="tempMin tempChild">
                                <h3>Min. Temperature</h3>
                                <p>{this.state.main.temp_min}</p>
                            </div>
                            <div className="tempMax tempChild">
                                <h3>Max. Temperature</h3>
                                <p>{this.state.main.temp_max}</p>
                            </div>
                        </div>
                        <div className="otherInfo secondaryInfo">
                            <div className="humidity tempChild">
                                <h3>Humidity</h3>
                                <p>{this.state.main.humidity}</p>
                            </div>
                            <div className="pressure tempChild">
                                <h3>Pressure</h3>
                                <p>{this.state.main.pressure}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CurrentWeather;