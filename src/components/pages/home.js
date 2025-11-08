import welcomeImage from "../../resources/homepage/Welcome Home Page.webp";
import './home.css';
import { Link } from "react-router-dom";
import wecsTeam from "../../resources/homepage/WECS Team.webp";
import wecsLogo from "../../resources/homepage/WECS Logo.webp";
import toteAd from "../../resources/homepage/Tote Ad.webp";
import oldWecsTeam from "../../resources/homepage/old WECS Team.webp";
import newsletter from "../../resources/homepage/Newsletter.webp";
import { Col, Container, Image, Row } from 'react-bootstrap';

const headingStyle = {
  textAlign: "center"
};

const hrStyle = {
  border: 'none',
  height: '5px',
  backgroundColor: '#c4dcff',
  margin: "auto",
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
    <Container>
      <Row>
        <Col>
          <Image src={welcomeImage} alt="Our tote bag paint night!" style={{ height: "100%", width: "100%" }} />
        </Col>
      </Row>

      <Row>
        <Col>
          <h1 style={headingStyle}>Welcome to WECS!</h1>
          <h3 style={headingStyle}> We are working hard to empower gender minorities in Engineering and <br />
            Computer Science at the University of Victoria </h3>
        </Col>
      </Row>

      <Row className="justify-content-center my-3">
        <Col xs={8}>
          <hr style={hrStyle} />
        </Col>
      </Row>

      <Row>
        <Col sm={12} className="custom-border padding-margin d-flex justify-content-center" style={{textAlign: 'center'}}>
            <p>We acknowledge, respect and thank the lək̓ʷəŋən People (Songhees and Xʷsepsəm/Esquimalt) for their care and leadership on these lands. As a club at the University of Victoria, we acknowledge that we are guests on these lands and acknowledge our responsibility to the land, its resources, and its people. We also give thanks to the Lək̓ʷəŋən and W̱SÁNEĆ Peoples whose historical relationships with the land continue to this day.</p>
        </Col>
      </Row>

      <Row className="justify-content-center my-3">
        <Col xs={8}>
          <hr style={hrStyle} />
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col sm={4} className="d-flex">
          <Col sm={12} className="custom-border padding-margin d-flex justify-content-center">
            <Link to="/about" onClick={onClickScroll} style={removeLinkStyling}>
              <h4 style={headingStyle}>Learn more about WECS!</h4>
              <Image src={wecsLogo} alt="WECS logo" className="img-fluid" />
            </Link>
          </Col>
        </Col>

        <Col sm={4} className="d-flex">
          <Col sm={12} className="custom-border padding-margin d-flex justify-content-center">
            <Link to="/calendar" onClick={onClickScroll} style={removeLinkStyling}>
              <h4 style={headingStyle}>Check out our upcoming events!</h4>
              <div class="image-wrapper">
                <Image src={toteAd} alt="Our tote bag paint night" className="image-style" fluid rounded />
              </div>
            </Link>
          </Col>
        </Col>

        <Col sm={4} className="d-flex">
          <Col sm={12} className="custom-border padding-margin d-flex justify-content-center">
            <Link to="/positions" onClick={onClickScroll} style={removeLinkStyling}>
              <h4 style={headingStyle}>Browse our open positions!</h4>
              <br /><br />
              <Image src={wecsTeam} alt="WECS team" style={{ height: '200px' }} fluid rounded />
            </Link>
          </Col>
        </Col>
      </Row>

      <br />
      <Row className='justify-content-center'>
        <Col sm={4} className="d-flex">
          <Col sm={12} className="custom-border padding-margin d-flex justify-content-center">
            <Link to="/newsletter" onClick={onClickScroll} style={removeLinkStyling}>
              <h4 style={headingStyle}> Check out our newsletter!</h4>
              <br />
              <Image src={newsletter} alt="Our newsletter logo" width='300' className="img-fluid" />
            </Link>

          </Col>
        </Col>

        <Col sm={4} className="d-flex">
          <Col sm={12} className="custom-border padding-margin d-flex justify-content-center">
            <Link to="/team" onClick={onClickScroll} style={removeLinkStyling}>
              <h4 style={headingStyle}>Meet our team!</h4>
              <br /><br />
              <Image src={oldWecsTeam} alt="The WECS team" className="img-fluid" />
            </Link>
          </Col>
        </Col>

        <Col sm={4} className="d-flex">
          <Col sm={12} className="custom-border padding-margin d-flex justify-content-center">
            <Link to="/contact" onClick={onClickScroll} style={removeLinkStyling}>
              <h4 style={headingStyle}>Contact us!</h4>
              <Image src={wecsLogo} alt="WECS logo" width='300' className="img-fluid" />
            </Link>
          </Col>
        </Col>
      </Row>

    </Container>
  )
}

export default Home;