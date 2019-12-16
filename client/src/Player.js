import React, { useState } from "react"
import useColor from "./utils/UseColor"
import "./Player.css"


function Player(props){
    console.log(props)
    const[player, setPlayer]=useState(props)
    const[coloring,setColoring]=useColor(false)

    const togglePlayer=e=>{
        e.preventDefault()
        setColoring(!coloring)
    }

    return(
        <div className="container">
            <div onClick={togglePlayer} className={ coloring ?"regular" : "blue" }>
                <h1>{player.player.name}</h1>
                <h2>{player.player.country}</h2>
                <h3>{player.player.searches}</h3>
            </div>
        </div>
        
    )
}

export default Player;