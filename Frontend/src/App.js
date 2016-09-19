import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="header clearfix">
          <h3 className="text-muted">Knowledge base</h3>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
