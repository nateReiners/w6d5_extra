import React from 'react';
import ReactDOM from 'react-dom';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: "", content: "", index: 0 };
  }

  selectTab() {
  }


  render() {
    let tabs = this.props.tabList.map((tab, index) => (
      <li key={index}
        className = {(this.state.title === tab.title) ? "bold" : ""}
        onClick={() => (this.setState({ title: tab.title, content: tab.content, index }))}>
        {tab.title}
      </li>
    ));

    return (
      <div className="tabscontainer">
        <div className="tabsHeader">
          <ul>
            {tabs}
          </ul>
        </div>

        <div className="tabsContent">
          <h1>{this.state.content}</h1>
        </div>
      </div>


    );
  }
}

export default Tabs;
