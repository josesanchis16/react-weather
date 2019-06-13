import React, {
  Component
} from 'react';
import './style.css';
import Header from './Components/Header/Header';
import Content from './Components/Content/Content';
import Footer from './Components/Footer/Footer';
const Api = require('./data/weatherApi').default;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    }
    console.log(Api);
  }

  componentDidMount() {
    this.geo();
  }

  geo = () => {
    if ("geolocation" in navigator) { //check geolocation available 
      //try to get user current location using getCurrentPosition() method
      navigator.geolocation.getCurrentPosition((position) => {
        const api = Api;
        fetch(`https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${api}&units=metric`)
          .then(res => res.json())
          .then(res => {
            this.setState({
              weather: res
            }, () => (this.setState({
              isLoading: false,
            })))
          })
          .then(console.log(this.state.weather))
          .catch(console.log);
      });
    } else {
      console.log("Browser doesn't support geolocation!");
    }
  }

  render() {
    return ( <
      div className = "App" >
      <
      Header / > {
        !this.state.isLoading && < Content weather = {
          this.state.weather
        }
        />} <
        Footer / >
        <
        /div>
      );
    }
  }

  export default App;