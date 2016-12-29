import React from 'react';
import Tabs from './tabs';
import Clock from './clock';
import Weather from './weather';

const tabs = [
  {title: 'One', content: 'First is the worst.'},
  {title: 'Two', content: 'Second is the best.'},
  {title: 'Three', content: 'Third is the bird.' }
];

const Main = () => (
  <div className="main">
    <div className="tabs-div">
      <Tabs tabList={tabs} />
    </div>

    <div className="clock-div">
      <Clock />
    </div>

    <div className="weather-div">
      <Weather />
    </div>
  </div>
);


export default Main;
