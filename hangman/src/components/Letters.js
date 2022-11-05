
import React, { Component } from 'react';
import Letter from './Letter'

class Letters extends Component {
    render() {
        
        return (            
           <div>
           <p>Avilable letters</p>
            {Object.keys(this.props.letterStatus).map((k) =><Letter letter={k}/>)}
            
            </div>
            
        )
    }
}
export default Letters