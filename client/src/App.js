import React, { useState, useEffect }from 'react';
import './App.css';
import axios from 'axios';
import ReactDOM from "react-dom";

import PlayerCard from "./components/PlayerCard";
import NavbarSlider from "./components/NavbarSlider";



class App extends React.Component {

    constructor(){
      super()
      this.state = {
     players: []
      };
    }

    componentDidMount() {
        console.log("first render(mounting)");
        axios
        .get("http://localhost:5000/api/players")
        .then(res => this.setState({ players: res.data }))
        //.catch(err => console.log("error"));
      
      }


render() {

    return (

<div>

  <div className="Title">
      <h1>Womans World Cup</h1> 

      <div className="Slider">
        <NavbarSlider/>  
      </div>
  </div>

      <div>
        <PlayerCard/>
      </div> 

  </div> 
      // <div>
      // {this.state.players.map(player => <div>
        
      // {player.name}
      // <h2>Name: {player.name}</h2>
      // <h2>Country: {player.country}</h2>
      // <h2>Times Searched: {player.searches}</h2> 

      // </div>
      
      
      // )}


      
    
    // <PlayerCard title={player.name}/>
    
//                  <div className="Players">
//             <PlayerCard SoccerPlayer={player} />
//                 </div>
          

//                  <div className="Title">
//   <h1>Womans World Cup</h1> 

//  <div className="Slider">
//   <NavbarSlider/>
//   </div>

// </div>
    )

  }
}
 


        

//      ReactDOM.render(<App />, document.getElementById('root'));
     

export default App;
