import React, { Component } from 'react';
import '../styles/Header.css'

class Header extends Component {

  state = {
    
  }

  handleClick = (event) => {

  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
        <nav>
            <button onClick={this.handleClick} id="bouquet-coll-button">Bouquet Collection</button>
            <a href="http://localhost:3001/">Home</a>
        </nav>
        <h1>Talk Floral To Me</h1>
        <h2>Say It With Flowers</h2>
        </header>
      </div>
    );
  }
}

export default Header;
