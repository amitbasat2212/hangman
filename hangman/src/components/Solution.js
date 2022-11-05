
import React, { Component } from 'react';
import Letter from './Letter'

class Solution extends Component {
    render() {
        
        return (            
           <div>
            
            <div>                
                <em>{this.props.solution.hint}</em>
            </div>
            <div>
                
                {this.props.solution.word.split('').map((k) =>this.props.letterStatus[k.toUpperCase()]?<Letter letter={k}/>:<Letter letter="-"/>)}
            </div>
            </div>
            
        )
    }
}
export default Solution