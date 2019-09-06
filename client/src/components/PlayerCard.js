import React from 'react';

const PlayerCard = ({coinData}) => {
  
    return(
  
  <div className="cardholder">
  
            {coinData.map(players => (

            <div className= "card2"key={players.id}>
            <h3>{players.name}</h3>
            <h3>{players.}</h3>
            </div>

            ))}
      
  
        </div>//End Card Holder
    );
   }
   
  
    
  
      
  export default PlayerCard;