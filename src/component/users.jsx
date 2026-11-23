import { useState } from "react";
import { useParams } from "react-router-dom";

function Users({id,name,uname}){
    
    
    // const [color,setc]=useState(rgb(180, 215, 205))
    return(id%2)?(<div style={{border:"1px solid rgb(255, 238, 179)",margin:"10px",padding:"10px"}}>
    <h1 >{id}.{uname}</h1>
    <h2>Name:{name}</h2>
    </div>
        
    ):(<div style={{border:"1px solid rgb(244, 115, 33)",margin:"10px",padding:"10px"}}>
    <h1 >{id}.{uname}</h1>
    <h2>Name:{name}</h2>
    </div>
        
    );
}
export default Users;
