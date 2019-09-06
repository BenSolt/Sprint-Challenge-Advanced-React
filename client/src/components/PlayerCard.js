const PlayerCard = (props) => {
  

    return(
  
   
  
    
  <div className="cardholder">
  
    <div className="card">
  
      <h1>{props.player.name}</h1>
      <h2>{props.player.country}</h2>
      <h2>{props.player.id}</h2>
      <h2>{props.player.searches}</h2>
  
    </div>
        
        <div className="followers">
  
          <h2>Followers</h2>
  
        
          <div className="cardholder2">
  
         
  
            {props.player.map(followers => 
            <div className= "card2"key={user.id}>
               <h3>{player.user}</h3>
          <img className="img2" src={user.avatar_url}></img>
          
  
          </div> )}
  
  
          </div>
         
  
        </div>
  
        </div>//End Card Holder
    );
   }
   
  
    
  
      
  export default PlayerCard;