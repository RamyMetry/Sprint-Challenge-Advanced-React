import React from 'react';
import './App.css';
import axios from "axios"
import Player from "./Player"

class App extends React.Component {
constructor(){
  super()
  this.state={
    Data:[]
  }
}

componentDidMount(){
  axios.get("http://localhost:5000/api/players")
  .then(res=>{
    this.setState({Data:res.data})
  })
  .catch(err=>{
    console.log(err)
  })
}

  render(){
    return (
        <div className="App">
          <h1> Choose Players</h1>
          {this.state.Data.map((player)=>
            {return(<div className="container">
              <Player  key={player.id} player={player}/>
            </div>)
            
          }   
          )}
          
        </div>
      );

  }
 
}

export default App;
