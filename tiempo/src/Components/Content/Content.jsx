import React from 'react';
import CurrentWeather from './currentWeather/currentWeather';
import FiveDaysWeather from './fiveDaysWeather/fiveDaysWeather';

const Content = (props) => {
    if (props) {
        console.log(props)
        return (
            <div className="content">
                <CurrentWeather weather={props.weather} />
                <FiveDaysWeather />
            </div>
        )
    }
}

export default Content;