import React, { Component } from 'react';
import MeaningContainer from '../containers/MeaningContainer'

class Main extends Component {

  state = {
    flowers: [],
    bouquets: [],
    bouquetsFlowers: [],
    meanings: {
        beauty: [
          'daintiness',
          'elegance',
          'exotic beauty',
          'glorious femininity',
          'loveliness',
          'magnificence',
          'mature charm',
          'refined beauty',
          'refinement',
          'splendid beauty',
          'sweetness',
          'beauty'
        ],
        happiness: [
          "disappointment",
          "joyfulness",
          "lightness",
          "sorrow",
          "joy ",
          "happiness",
          "playfulness",
          "cheerfulness",
          "levity",
          "fading hope",
          "optimism",
          "anticipation",
          "fame",
          "gaiety"
        ],
        love: [
          'fidelity',
          'disdain',
          'jealousy',
          'unrequited love',
          'slighted love',
          'rejection',
          'regard',
          'love of variety',
          'secret love',
          'friendship',
          'loyal love',
          'admiration',
          'heartlessness',
          'first love',
          'adoration',
          'passion',
          'love'
        ],
        wealth: [
          'long life',
          'abundance',
          'diversity',
          'rebirth',
          'fortune',
          'eternal life',
          'new beginnings',
          'wealth',
          'remembrance',
          'prosperity',
          'worth beyond beauty'
        ],
        character: [
          'strength of character',
          'capriciousness',
          'rashness',
          'solitude',
          'patience',
          'pride',
          'thoughtfulness',
          'chivalry',
          'protection',
          'purity',
          'honor',
          'innocence',
          'constancy',
          'frigidity',
          'fickleness',
          'haughtiness',
          'confidence',
          'bashfulness',
          'indignation',
          'shame',
          'change',
          'transformation',
          'daring',
          'resourcefulness',
          'courage'
      ]  
     }
  }

  componentDidMount(){
    fetch('http://localhost:3000/flowers')
        .then(response => response.json())
        .then(flowers => this.setState({flowers}))
  }

  render(){
    return (
        <div className="meaning-container">
            <MeaningContainer
                meanings={this.state.meanings}    
            />
        
      </div>
    );
  }
}

export default Main;
