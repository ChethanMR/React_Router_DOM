import { useState } from "react";
import { useContext } from "react";
 import { AppContext } from "./navigation";

export default function ChangeProfile(){
    const [newName, setNewName]=useState('');
    const{setUserName}=useContext(AppContext)

    const handleInputChange=()=>{
    setUserName(newName)
    }

    return ( 
        <div>
            <input onChange={(event)=>setNewName(event.target.value)}/>
            <button onClick={handleInputChange}> Change UserName</button>
        </div>
    )
}