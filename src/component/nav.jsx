
import { BrowserRouter, Routes, Route,Link} from "react-router-dom"


function Nav(){

    return(
        
        <nav>
            <Link to= "/new-try-23-11/">No </Link>
        <Link to= "/new-try-23-11/home">Home </Link>
        <Link to= "/new-try-23-11/About">About</Link>
        <Link to= "/new-try-23-11/About/e"> About1</Link>
        <Link to= "/new-try-23-11/About/n"> About2</Link>
        
        </nav>
       
        
        
      
    )


}
export default Nav;