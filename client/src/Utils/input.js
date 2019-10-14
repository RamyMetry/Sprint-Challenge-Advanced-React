import {useState} from "react"

export function UseInput(intialValue){
    const[value,setValue]=useState(intialValue)

    const customSetter=(newValue)=>{
        setValue(newValue)
    }
    return [value,customSetter]
}