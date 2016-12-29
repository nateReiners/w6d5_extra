import Tabs from './tabs';
import React from 'react';

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

    <div className="autocomplete-div">
    </div>
  </div>
);


export default Main;
