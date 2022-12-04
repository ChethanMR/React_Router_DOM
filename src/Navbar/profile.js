import ChangeProfile from "./changeprofile";
import { useContext } from "react";
import { AppContext } from "./navigation";

 export default function Profile(){
    const {userName}=useContext(AppContext);
    return(
        <div>
            <h1>This is profile page</h1>
            <h2>   User : {userName} </h2>
            <ChangeProfile />
        </div>
        
    )
 }