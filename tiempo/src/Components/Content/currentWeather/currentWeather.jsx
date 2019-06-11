import React, { Component } from 'react';

class CurrentWeather extends Component {

    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        console.log(this.props);
        return (
            <div className="divCurrentWeather">
                Aqui va el tiempo
            </div>
        )
    }
}

export default CurrentWeather;