import React, { Component } from 'react';
import Main from "./containers/Main"
import Header from "./components/Header"
import './App.css'

class App extends Component {

  state = {
    
  }

  render(){
    return (
      <div className="App">
        <Header />
        <Main />
    
      </div>
    );
  }
}

export default App;
