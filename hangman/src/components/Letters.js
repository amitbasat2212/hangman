
import React, { Component } from 'react';
import Letter from './Letter'

class Letters extends Component {
 

    render() {        
        return (            
           <div>
           <p>Avilable letters</p>
           
            {Object.keys(this.props.letterStatus).map((k) => this.props.letterStatus[k.toUpperCase()]?
            <Letter selectLetter={this.props.selectLetter} className="wipe" letter={k}/>
            :<Letter selectLetter={this.props.selectLetter} className="in" letter={k}/>)}
            
            </div>
            
        )
    }
}
export default Letters