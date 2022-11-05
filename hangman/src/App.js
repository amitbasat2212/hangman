
import './App.css';
import React, { Component } from 'react';
import Solution from './components/Solution'
import Score from './components/Score'
import Letters from './components/Letters'


class App extends Component {

    constructor() {
        super()
        this.state = {
            letterStatus : {
             
            },
            solution:{
                "word":"amit",
                "hint":"the name every one want"
            },
            score:"100"
        }
    }

    generateLetterStatuses(){        
        for (let i = 65; i < 91; i++) {
          this.state.letterStatus[String.fromCharCode(i)] = false;
        }
        
    }
  render()  {
    return (
        <div className="App">
           <div>
            {this.generateLetterStatuses()}
            <div className="ex-space">
             <Score Score={this.state.score}/>
             <Solution solution={this.state.solution} letterStatus={this.state.letterStatus}/>        
             <Letters letterStatus={this.state.letterStatus}/>
            </div>
        </div>
        </div>
      );
  }
  
}

export default App;
