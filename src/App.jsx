import { useState } from 'react'
import './App.css'
import Nav from './component/nav'
import Home from './Page/home'
import About from './Page/about'
import No from './Page/no'
import axios from "axios"
import { BrowserRouter, Routes, Route,Link} from "react-router-dom"
function App() {
  const [rout, setCount] = useState("/a")

  function api(a){
    setCount(a)
  }
  return (
    <>
    <BrowserRouter>   
       <Nav/>
      <Routes>
        <Route path="/" element={< No/>} />
          <Route path="/home" element={<Home />} />
          <Route path="/About" element={<About />} />
          
      </Routes>

    </BrowserRouter>
    
    
    </>
  )
}

export default App
