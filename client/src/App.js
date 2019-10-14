import React,{Component} from 'react';
import './App.css';
import axios from "axios";
import Player from './Components/Player';

class App extends Component {
  constructor(){
    super()
    this.state={player:[]}
  }

componentDidMount(){
  axios.get("http://localhost:5000/api/players")
  .then(res=>{
    this.setState({
      ...this.state,
      player:res.data,
      name:res.data.name,
      country:res.data.country
    })
  })
  .catch(err=>{
    console.log(err)
  })
}

  render(){
    
    return (
      <div className="App">
        <h1>Players App</h1>
        <h2>Dashboard</h2>
        {this.state.player.map(item=>{
          return <Player key={item.id} item={item}/>
        })}
      </div>
    );
  }
 
}

export default App;
