import React from 'react';

const PlayerCard = ({SoccerPlayer}) => {
  
    return(
  
  <div className="cardholder">
  
  
            {SoccerPlayer.map(players => (

            <div className= "card1"key={players.id}>

            <h2>{players.name}</h2>
            <h2>{players.country}</h2>
            <h2>{players.id}</h2>
            <h2>{players.searches}</h2> 

            </div>

            ))}
      
  
        </div>//End Card Holder
    );
   }
   
  
    
  
      
  export default PlayerCard;