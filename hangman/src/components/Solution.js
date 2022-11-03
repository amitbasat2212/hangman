
import React, { Component } from 'react';


class Solution extends Component {
    render() {
        const n = 4; 
        return (            
           <div>
            {[...Array(n)].map(() => <span className='spaces'>-</span>)}
            <div>
                <em>your edeal mood when coding</em>
            </div>
            </div>
            
        )
    }
}
export default Solution