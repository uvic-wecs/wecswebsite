import React from 'react';
import welcomeImage from "../../resources/Welcome Home Page.png";
import './home.css';
import { Link } from "react-router-dom";
import wecsTeam from "../../resources/WECS Team.jpg";
import wecsLogo from "../../resources/WECS Logo.png";
import toteAd from "../../resources/Tote Ad.jpg";
import oldWecsTeam from "../../resources/old WECS Team.jpg";
import newsletter from "../../resources/Newsletter.png";
import { Col, Container, Row } from 'react-bootstrap';

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
  // padding: '10px',
  // margin: '5px'
};

const removeLinkStyling = {
  textDecoration: 'none',
  color: '#000000',
}

// will scroll back to the top of the page when you click on a link
const onClickScroll = () => {
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

      <Container>
        <Row className="justify-content-center">

          <Col sm={4}>
            <Col sm={12} className='custom-border padding-margin'>
              <Link to="/about" onClick={onClickScroll} style={removeLinkStyling}>
                <h4 style={headingStyle}>Learn more about WECS!</h4>
                <img src={wecsLogo} alt="WECS logo" class="img-fluid image-style" />
              </Link>
            </Col>
          </Col>

          <Col sm={4}>
            <Col sm={12} className='custom-border padding-margin'>
              <Link to="/calendar" onClick={onClickScroll} style={removeLinkStyling}>
                <h4 style={headingStyle}>Check out our upcoming events!</h4>
                <img src={toteAd} alt="Our tote bag paint night" class="img-fluid image-style" />
              </Link>
            </Col>
          </Col>

          <Col sm={4}>
            <Col sm={12} className='custom-border padding-margin'>
              <Link to="/positions" onClick={onClickScroll} style={removeLinkStyling}>
                <h4 style={headingStyle}>Browse our open positions!</h4>
                <img src={wecsTeam} alt="WECS team" class="img-fluid image-style" />
              </Link>
            </Col>
          </Col>
        </Row>

        <Row className='justify-content-center my-3'>
          <Col xs={4} style={boxStyle}>
            <h4 style={headingStyle}> Check out our <Link to="/newsletter" onClick={onClickScroll}>newsletter</Link>!</h4>
            <img src={newsletter} alt="Our newsletter logo" width='300' class="img-fluid" style={{ display: "block", margin: "auto" }} />
          </Col>

          <Col xs={4} style={boxStyle}>
            <h4 style={headingStyle}>Meet our team <Link to="/team" onClick={onClickScroll}>here</Link>!</h4>
            <img src={oldWecsTeam} alt="The WECS team" width='300' class="img-fluid" style={{ display: "block", margin: "auto" }} />
          </Col>

          <Col xs={4} style={boxStyle}>
            <h4><Link to="/contact" onClick={onClickScroll}>Contact us</Link>!</h4>
            <img src={wecsLogo} alt="WECS logo" width='300' class="img-fluid" style={{ display: "block", margin: "auto" }} />
          </Col>

        </Row>

      </Container>
      <br />
    </div>
  )
}

export default Home;