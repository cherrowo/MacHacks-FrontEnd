import { RaisedButton } from 'material-ui';
import React, { Component } from 'react';
import './App.css';
import { Banner } from './banner';

import Calendar from './Components/Calendar/';
import SearchBar from './search';


const style = {
  position: "relative",
  margin: "50px auto"
}

class App extends Component {
  onDayClick = (e, day) => {
    alert(day);
  }
  
  render() {
    return (
      <div className="App">
      <Banner/>
      <h1>Welcome Back!</h1>
      <h3>Enter new keyword:</h3>
      <SearchBar/>
      
      <h3>Scheduled Dates:</h3>
        <Calendar style={style} width="302px" 
          onDayClick={(e, day)=> this.onDayClick(e, day)}/>     
      </div>
    );
  }
}

export default App;