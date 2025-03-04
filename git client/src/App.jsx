import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Signup from "./Signup";
import Login from "./Login";
import Home from "./Home";
import Land from "./Land";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Land />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
