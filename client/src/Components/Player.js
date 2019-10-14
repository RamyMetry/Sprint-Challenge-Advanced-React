import React from "react";
import {UseInput} from "../Utils/input"



function Player(props){
    const[player,setPlayer]=UseInput(props)

    return(
        <div>
            <h4>Name : {player.item.name}</h4>
            <h5>Country : {player.item.country}</h5>
            <h5>Searches : {player.item.searches}</h5><br></br>
        </div>
    )
}

export default Player;