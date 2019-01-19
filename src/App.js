import React, { Component } from 'react';
//import NameComponent from './components/NameComponent'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date : new Date()
    };
  }


  clicked() {
    console.log(this.state.date.toLocaleTimeString());
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

    // var welcomeMessage = ["Welcome", "to", "my", "new", "world!"];
    // var toShow = [];
    
    // welcomeMessage.forEach((word) => {

    //   toShow.push(
    //     <p>{word}</p>
    //   );

    // });

    return (
      
      // <button onClick = {() => {

      //   console.log("You clicked!")

      // }}>Press me...</button>

      <p>{this.state.date.toLocaleTimeString()}</p>
   
    );


  }
}

export default App;
