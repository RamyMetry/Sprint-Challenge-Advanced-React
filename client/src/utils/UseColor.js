import {useEffect, useState} from "react";
import useLocalStorage from "./UseLocalStorage"

const useColor =(initialValue)=>{
    const [color, setColor] =useLocalStorage('blue', initialValue);

    useEffect(()=>{
        if(color){
            document.body.classList.add("color");
        }else{
            document.body.classList.remove("color");
        }
    },[color])

    return [color, setColor]
}

export default useColor;