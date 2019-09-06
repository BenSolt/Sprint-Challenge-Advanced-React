import React from 'react';
import axios from 'axios';



class PlayerCard extends React.Component {

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

    {this.state.players.map(player => 
    
    <div className="card1">

    <h2>Name: {player.name}</h2>
    <h2>Country: {player.country}</h2>
    <h2>Times Searched: {player.searches}</h2> 

    </div>
    
    
    )}

    </div>   
 
  )

}
}
      
  export default PlayerCard;