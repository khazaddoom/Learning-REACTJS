import React, { Component } from 'react';
//import NameComponent from './components/NameComponent'


class App extends Component {


  clicked() {
    console.log("Clicked")
  }

  render() {

    // var divStyle = {
    //   fontFamily : 'Calibri',
    //   fontSize : '10em',
    //   fontStyle: 'italic',
    //   color : 'red',
    //   border: '2px solid lime',
    //   margin: '100px',
    //   padding: '0px'
    // };

    var welcomeMessage = ["Welcome", "to", "my", "new", "world!"];
    var toShow = [];
    
    welcomeMessage.forEach((word) => {

      toShow.push(
        <p>{word}</p>
      );

    });

    return (
      
      // <button onClick = {() => {

      //   console.log("You clicked!")

      // }}>Press me...</button>

      <button onClick = {this.clicked}>Press me...</button>
   
    );


  }
}

export default App;
