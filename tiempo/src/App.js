import React, {
  Component
} from 'react';
import './style.css';
import Header from './Components/Header/Header';
import Content from './Components/Content/Content';
import Footer from './Components/Footer/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      geo: {
        log: '',
        lat: '',
      }
    }
    this.geo();
  }

  geo = () => {
    if ("geolocation" in navigator) { //check geolocation available 
      //try to get user current location using getCurrentPosition() method
      navigator.geolocation.getCurrentPosition((position) => {
        this.setState({
          geo: {
            lat: position.coords.latitude,
            log: position.coords.longitude,
          }
        });
      });
    } else {
      console.log("Browser doesn't support geolocation!");
    }
  }

  render() {
    return (
      <div className="App" >
        <Header />
        <Content geo={this.state.geo}/>
        <Footer />
      </div>
    );
  }
}

export default App;