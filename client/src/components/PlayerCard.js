import React from 'react';

const PlayerCard = ({SoccerPlayer}) => {
  
    return(
  
  <div className="cardholder">
  
  
            {SoccerPlayer.map(players => (

            <div className= "card1"key={players.id}>

            <h2>Name: {players.name}</h2>
            <h2>Country: {players.country}</h2>
            <h2>Times Searched: {players.searches}</h2> 

            </div>

            ))}
      
  
        </div>//End Card Holder
    );
   }
   
  
    
  
      
  export default PlayerCard;