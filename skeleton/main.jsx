import Tabs from './tabs';
import React from 'react';

const tabs = [{title: 'one', content: 'I am the first'}, {title: 'two', content: 'Be creative Nate'}, {title: 'three', content: 'react is cool!' }];

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
