import React from 'react';
import welcomeImage from "../../resources/Welcome Home Page.png";
import './home.css';
import Footer from '../footer/footer';
import { Link } from "react-router-dom";
import wecsTeam from "../../resources/WECS Team.jpg";
import wecsLogo from "../../resources/WECS Logo.png";
import toteAd from "../../resources/Tote Ad.jpg";
import oldWecsTeam from "../../resources/old WECS Team.jpg";
import newsletter from "../../resources/Newsletter.png";

const headingStyle = {
  textAlign: "center"
};

const hrStyle = {
  border: 'none',
  height: '5px',
  backgroundColor: '#c4dcff',
  width: "700px",
  margin: "auto",
};

const boxStyle = {
  border: '3px solid #d3e5ff',
  padding: '10px',
  margin: '5px'
};

// will scroll back to the top of the page when you click on a link
const onClickScroll = () =>{
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
}



function Home() {
  return (
    <div>
      <img src={welcomeImage} alt="Our tote bag paint night!" style={{ height: "100%", width: "100%" }} />
      <br /> <br />
      <h1 style={headingStyle}>Welcome to WECS!</h1>
      <h3 style={headingStyle}> We are working hard to empower gender minorities in Engineering and <br />
        Computer Science at the University of Victoria </h3>


      <hr style={hrStyle} />
      <br />

      <div className={"container"}>
        <div className={"row"}>

          <div className={"col"} style={boxStyle}>
            <h4 style={headingStyle}>Learn more about WECS <Link to="/about" onClick={onClickScroll}>here</Link>!</h4>
            <img src={wecsLogo} alt="WECS logo" width='250' class="img-fluid" style={{ display: "block", margin: "auto" }} />
          </div>

          <div className={"col"} style={boxStyle}>
            <h4 style={headingStyle}>Check out our <Link to="/calendar" onClick={onClickScroll}>events</Link>!</h4>
            <img src={toteAd} alt="Our tote bag paint night" width='200' class="img-fluid" style={{ display: "block", margin: "auto" }} />
          </div>

          <div className={"col"} style={boxStyle}>
            <h4 style={headingStyle}>Join our team! <Link to="/positions" onClick={onClickScroll}>Open positions</Link>!</h4>
            <br />
            <img src={wecsTeam} alt="WECS team" height='300' class="img-fluid" style={{ display: "block", margin: "auto" }} />
          </div>

        </div>

        <div className={"row"}>

          <div className={"col"} style={boxStyle}>
            <h4 style={headingStyle}> Check out our <Link to="/newsletter" onClick={onClickScroll}>newsletter</Link>!</h4>
            <img src={newsletter} alt="Our newsletter logo" width='300' class="img-fluid" style={{ display: "block", margin: "auto" }} />
          </div>

          <div className={"col"} style={boxStyle}>
            <h4 style={headingStyle}>Meet our team <Link to="/team" onClick={onClickScroll}>here</Link>!</h4>
            <img src={oldWecsTeam} alt="The WECS team" width='300' class="img-fluid" style={{ display: "block", margin: "auto" }} />
          </div>

          <div className={"col"} style={boxStyle}>
            <h4><Link to="/contact" onClick={onClickScroll}>Contact us</Link>!</h4>
            <img src={wecsLogo} alt="WECS logo" width='300' class="img-fluid" style={{ display: "block", margin: "auto" }} />
          </div>

        </div>

      </div>
      <br />
      <Footer />
    </div>
  )
}

export default Home;