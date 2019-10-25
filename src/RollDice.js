import React, { Component } from 'react';
import Die from './Die'
import './RollDice.css'

class RollDice extends Component {
    static defaultProps ={
        sides: ["one","two","three","four","five","six"]
    }
    constructor(props) {
        super(props)
        this.state = { 
            die1: "six",
            die2: "two",
            rolling: false
        }
        this.roll = this.roll.bind(this)
    }

    roll() {
        //Randomize Die 1 and 2
        let newDie1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)]    
        let newDie2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)] 
        
        //Set state of Die 1 and 2 to randomized faces set above 
        this.setState({ die1: newDie1, die2: newDie2, rolling: true})
        setTimeout(()=>{
            this.setState({rolling:false})
        },1000)
    }

    render() {

        return (
            <div className= "RollDice">
                
                <nav>
                    <div class="nav-wrapper">
                        <a class="RollDice-Title brand-logo center black-text text-darken-2 z-depth-5" alt="Dice Roller">Roll'Em</a>
                    </div>
                </nav>
                <div className="Dice-Countainer">
                    {/* <Die die1={this.state.die1} die2={this.state.die2}/> */}
                    <Die face={this.state.die1} rolling={this.state.rolling} />
                    <Die face={this.state.die2} rolling={this.state.rolling} />
                </div>
                
                <button onClick= {this.roll} disabled={this.state.rolling} className="RollButton">
                    {this.state.rolling? "Rolling...": "Roll Dice"}
                </button>
          
            </div>

        )
    }
}

export default RollDice; 
