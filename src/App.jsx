import { useState } from "react";
import "./App.css";
import Nav from "./component/nav";
import Home from "./Page/home";
import About from "./Page/about";
import No from "./Page/no";
import axios from "axios";
import { BrowserRouter, Routes, Route, Link, HashRouter } from "react-router-dom";
import Aboutc from "./Page/about copy";
import User from "./component/user";
function App() {
  const [rout, setCount] = useState("/a");

  function api(a) {
    setCount(a);
  }
  return (
    <>
      <HashRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Aboutc/>} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/:id" element={<User />} />
          <Route path="/About" element={<About />} />
          <Route path="/About/:cpy" element={<Aboutc />} />
        </Routes>
    </HashRouter>
    </>
  );
}

export default App;
