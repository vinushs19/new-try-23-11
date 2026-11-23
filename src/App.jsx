import { useState } from "react";
import "./App.css";
import Nav from "./component/nav";
import Home from "./Page/home";
import About from "./Page/about";
import No from "./Page/no";
import axios from "axios";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Aboutc from "./Page/about copy";
import User from "./component/user";
function App() {
  const [rout, setCount] = useState("/a");

  function api(a) {
    setCount(a);
  }
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/new-try-23-11/" element={<No />} />
          <Route path="/new-try-23-11/home" element={<Home />} />
          <Route path="/new-try-23-11/home/:id" element={<User />} />
          <Route path="/new-try-23-11/About" element={<About />} />
          <Route path="/new-try-23-11/About/:cpy" element={<Aboutc />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
