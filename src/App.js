import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {

    var divStyle = {
      fontFamily : 'Calibri',
      fontSize : '10em',
      fontStyle: 'italic',
      color : 'red',
      border: '2px solid lime',
      margin: '100px',
      padding: '0px'
    };
    

    return (
      <div className="App" style = {divStyle}>
          Welcome to my very first React App!
      </div>
    );
  }
}

export default App;
