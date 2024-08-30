import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navigation from "./components/navbar/"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";
import Home from "./components/pages/home";
import About from "./components/pages/about";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Routes>
        <Route path = "/" element={<Home />} />
        <Route path = "/home" element={<Home />} />
        <Route path = "/about" element={<About />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
