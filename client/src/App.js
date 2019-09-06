import React from 'react';

import './App.css';
import axios from 'axios';
import ReactDOM from "react-dom";

class App extends React.Component {

    constructor(){
      super()
      this.state = {
       players:{}
      };
    }

    componentDidMount() {
        console.log("first render(mounting)");
        axios
        .get("http://localhost:5000/api/players")
        .then(res => this.setState({ user: res.data }))
        //.catch(err => console.log("error"));
      
      }




    render() {
        console.log('state', this.state)
        return (
            <div className="App">

            <h1>Womans Soccer</h1> 



            </div>
        
          );}
}
    ReactDOM.render(<App />, document.getElementById('root'));


export default App;
