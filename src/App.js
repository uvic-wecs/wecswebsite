import './App.css';
import Navigation from "./components/navbar/Navbar";
import {
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Team from "./components/pages/Team";
import Events from "./components/pages/Events";
import Positions from "./components/pages/Positions";
import Contact from "./components/pages/Contact";
import Newsletter from "./components/pages/Newsletter";
import EventsBlog from './components/pages/EventsBlog';
import BlogPost from './components/pages/BlogPost';
import SponsorPage from './components/pages/Sponsors';
// import ReviewSessions from './components/pages/ReviewSessions';
import Footer from './components/footer/Footer';

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
          <Route path="/positions" element={<Positions />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sponsors" element={<SponsorPage />} />
          <Route path="/newsletter" element={<Newsletter />} />
          {/* <Route path="/review-sessions" element={<ReviewSessions />} /> */}
        </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
