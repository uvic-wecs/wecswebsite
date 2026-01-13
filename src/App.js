import './App.css';
import Navigation from "./components/navbar/Navbar";
import {
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";
import Home from "./components/pages/home";
import About from "./components/pages/about";
import Team from "./components/pages/team";
import Highlight from './components/pages/highlight';
import Events from "./components/pages/events";
import Positions from "./components/pages/positions";
import Contact from "./components/pages/contact";
import Newsletter from "./components/pages/newsletter";
import EventsBlog from './components/pages/EventsBlog';
import BlogPost from './components/pages/BlogPost';
// import ReviewSessions from './components/pages/ReviewSessions';
import Footer from './components/footer/footer';

function App() {
  return (
    <HashRouter>
      <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/calendar" element={<Events />} />
          <Route path="/events-blog" element={<EventsBlog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/team" element={<Team />} />
          <Route path="/highlight" element={<Highlight />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newsletter" element={<Newsletter />} />
          {/* <Route path="/review-sessions" element={<ReviewSessions />} /> */}
        </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
