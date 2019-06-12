import React from 'react';
import CurrentWeather from './currentWeather/currentWeather';

const Content = (props) => {
    return (
        <div className="content">
            <CurrentWeather weather={props.weather} />
        </div>
    )
}

export default Content;