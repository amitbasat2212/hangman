
import React, { Component } from 'react';


class EndGame extends Component {

    checkIfTheWordCorrect=(letterStatus,word)=>{
        let counter=0;
        for(let i=0;i<word.length;i++){
            let letter=word[i]
            if(letterStatus[letter]==true){
                counter++;
            }
        }
        if(counter==word.length){
            return true;
        }
        return false
    }

    restartGame=()=>{
        this.props.reatertGame();
    }
   

    checkIfWonOrLose=(score,letterStatus,word)=>{
        if(score<=0){
            return(
                <div>
                    the game is over you lose, the secret word is {this.props.solution.word}
                    {/* { this.restartGame()} */}
                     </div>
            )
        }else if(this.checkIfTheWordCorrect(letterStatus,word)){
            return(
                <div>
                    Congratulations
                    {/* { this.restartGame()} */}
                    </div>  
                
            )
            
        }

    }

    render() {        
        return (            
           <div>
            {this.checkIfWonOrLose(this.props.Score,this.props.letterStatus,this.props.solution.word)}            
            </div>
            
        )
    }
}
export default EndGame