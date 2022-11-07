
import React, { Component } from 'react';


class Score extends Component {
    render() {
         
        return (            
           <div>            
            <div>
                {this.props.Score>=80?<div className='high-score'>{this.props.Score}</div>
                :this.props.Score>=50 && this.props.Score<80?<div className='medium-score'>{this.props.Score}</div>
                :<div className='low-score'>{this.props.Score}</div>}
            </div>            
            </div>
            
        )
    }
}
export default Score