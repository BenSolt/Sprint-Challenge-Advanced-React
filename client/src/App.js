import React, { useState, useEffect }from 'react';
import './App.css';
import axios from 'axios';
import ReactDOM from "react-dom";

import PlayerCard from "./components/PlayerCard";
import NavbarSlider from "./components/NavbarSlider";

const App = () => {
  const [player, setPlayer] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/players")
      .then(res => setPlayer(res.data))
      .catch(err => console.log(err));
  },[]);

  return (
    <div className="App">
      <NavbarSlider/>
      <PlayerCard SoccerPlayer={player} />

    </div>
  );
};





// class Appa extends React.Component {

//     constructor(){
//       super()
//       this.state = {
//      players: {}
//       };
//     }

//     componentDidMount() {
//         console.log("first render(mounting)");
//         axios
//         .get("http://localhost:5000/api/players")
//         .then(res => this.setState({ players: res.data }))
//         //.catch(err => console.log("error"));
      
//       }




//     render() {
//         console.log('state', this.state)
//         return (
//             <div className="App">

//             <h1>Womans World Cup</h1> 
             
//               <PlayerCard players={this.state.players}/> 
//               <div className="Slider">
//               <NavbarSlider/>
//               </div>
             

             
//             </div>
        
//           );}
// }
//      ReactDOM.render(<App />, document.getElementById('root'));
     

export default App;
