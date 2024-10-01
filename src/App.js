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
import Team from "./components/pages/team";
import Events from "./components/pages/events";
import Positions from "./components/pages/positions";
import Contact from "./components/pages/contact";
import Newsletter from "./components/pages/newsletter";
import { ScrollRestoration } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/team" element={<Team />} />
        <Route path="/positions" element={<Positions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/newsletter" element={<Newsletter />} />
      </Routes>

    </HashRouter>

  );
}

export default App;
