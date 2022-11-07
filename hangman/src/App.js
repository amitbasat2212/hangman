
import './App.css';
import React, { Component } from 'react';
import Solution from './components/Solution'
import Score from './components/Score'
import Letters from './components/Letters'
import EndGame from './components/EndGame'


class App extends Component {

    constructor() {
        super()
       
        this.state = {
            letterStatus : this.generateLetterStatuses() ,       
            randomWords:['ROCK', 'PAPER', 'SCISSORES'],
            solution:{
                "word":"ROCK",
                "hint":"the name every one want"
            },
            score:100
        }
    }

    generateLetterStatuses(){  
        const letters={}    
        for (let i = 65; i < 91; i++) {
            letters[String.fromCharCode(i)] = false;
        }
        return letters;
        
    }

    updatescorebyletter=(letter)=>{
        if(this.state.solution.word.includes(letter)){
            return 5;
        }else{
            return -20
        }
    }
    selectLetter=(letter)=>{       
      const allleters = {...this.state.letterStatus};      
      allleters[letter]=true;  
      const scoreYouGot = this.updatescorebyletter(letter);
      const score= this.state.score+scoreYouGot;  
      this.setState({
        letterStatus:allleters,
        score:score
      })  
        
    }
    reatertGame=()=>{
        this.setState({
            letterStatus:this.generateLetterStatuses(),
            score:100
            
        })   
    }
    
  render()  {
    
    return (
        <div className="App">
           <div>
           
            <div className="ex-space">
             <Score Score={this.state.score}/>
             <Solution solution={this.state.solution} letterStatus={this.state.letterStatus}/>        
             <Letters selectLetter={this.selectLetter } letterStatus={this.state.letterStatus}/>
             <EndGame reatertGame={this.reatertGame} letterStatus={this.state.letterStatus} solution={this.state.solution} Score={this.state.score} />
            </div>
        </div>
        </div>
      );
  }
  
}

export default App;
