import React from 'react';
import './App.css';
// import 'font-awesome/css/font-awesome.min.css';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import {faDiceOne } from '@fortawesome/free-solid-svg-icons'
// import Die from './Die'
import RollDice from './RollDice'


function App() {
  // render(){ 
    // library.add(faDiceOne)
    
    return (
      <div className="App  yellow lighten-3">
        <RollDice/>
      </div>  
    );
  // }
}

export default App;
