import React from 'react';
import CurrentWeather from './currentWeather/currentWeather';

const Content = (props) => {
    return (
        <div className="content">
            <CurrentWeather geo={props.geo}/>
        </div>
    )
}

export default Content;