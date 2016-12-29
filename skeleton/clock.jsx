import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    setInterval(this.tick, 1000);
  }

  // componentWillUnmount() {
  //   this.intervalID.clearInterval();
  // }

  tick() {
    this.setState({date: new Date()});
  }

  render() {
    let hrs = this.state.date.getHours();
    let mins = this.state.date.getMinutes();
    let secs = this.state.date.getSeconds();

    hrs = hrs < 10 ? `0${hrs}` : hrs;
    mins = mins < 10 ? `0${mins}` : mins;
    secs = secs < 10 ? `0${secs}` : secs;

    return (
      <div className="clock-container">
        <div className="clock">
          <h1>Time: {hrs}:{mins}:{secs}</h1>
          <h1>Date: {this.state.date.toDateString()}</h1>
        </div>
      </div>
    );
  }
}

export default Clock;
