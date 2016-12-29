import React from 'react';
import ReactDOM from 'react-dom';

class Weather extends React.Component {
  constructor(params) {
    super(params);

    this.state = {location: ""};
  }

  componentDidMount() {
    let pos;
    let location = navigator.geolocation.getCurrentPosition(function(x) {
      pos = (x.coords.latitude, x.coords.longitude);
    });
    this.setState({location: pos});
  }

  render() {
    let location = this.state.location;
    return (
      <div className="location">
        <h1>Location: {location}</h1>
      </div>
    );
  }
  
}
export default Weather;
