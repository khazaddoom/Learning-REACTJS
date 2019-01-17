import React, { Component } from 'react';
import NameComponent from './components/NameComponent'
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
         <NameComponent />
      </div>
   
    );
  }
}

export default App;
