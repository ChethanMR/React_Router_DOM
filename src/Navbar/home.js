 
import { useContext } from "react";
import {AppContext} from "./navigation"
function Home(){
    const {userName}=useContext(AppContext);
    return (
        <div>
              <h1>This is the Home page</h1>
              <h2>Welcome : {userName}</h2>
        </div>
      
    )
}
export default Home;