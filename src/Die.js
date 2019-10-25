import React, {Component} from 'react';
import './Die.css'

class Die extends Component {
    render(){
        
        return(
            <div className= "Die-div">
                
                <i className={`z-depth-5 teal lighten-1 Die fas fa-dice-${this.props.face} ${this.props.rolling && "shaking"}`}></i> 
            </div>
            
        )
    }
}

export default Die;
