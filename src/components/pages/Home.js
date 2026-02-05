import "./home.css";
import { Container, Card, Row, Col, Carousel, Image } from "react-bootstrap";
import ClubsDay from '../../resources/homepage/ClubsDay.webp';

import { Link } from "react-router-dom";
import wecsTeam from "../../resources/homepage/WECS Team.webp";
import wecsLogo from "../../resources/homepage/WECS Logo.webp";
import toteAd from "../../resources/homepage/Tote Ad.webp";
import oldWecsTeam from "../../resources/homepage/old WECS Team.webp";
import newsletter from "../../resources/homepage/Newsletter.webp";

import EventImage from "../../resources/homepage/Women in Eng Celebration.webp"

const Home = () => {

  // will scroll back to the top of the page when you click on a link
  const onClickScroll = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <Container>
      {/* FIRST ROW */}
      <Row className="justify-content-between text-center mb-5">
        <Col sm={12} md={6} lg={4} className="mb-4">
          <Link to="/about" className="remove-link-styling" onClick={onClickScroll}>
            <Card className="info-card">
              <Card.Body>
                <Card.Title>About Us</Card.Title>
                <div className="card-image-wrapper">
                  <Card.Img src={wecsLogo} className="card-image" />
                </div>
              </Card.Body>
            </Card>
          </Link>
        </Col>

        <Col sm={12} md={6} lg={4} className="mb-4">
          <Link to="/calendar" className="remove-link-styling" onClick={onClickScroll}>
            <Card className="info-card">
              <Card.Body>
                <Card.Title>Upcoming Events</Card.Title>
                <div className="card-image-wrapper">
                  <Card.Img src={toteAd} className="card-image" />
                </div>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      </Row>

      <div className="WECSTitle"> 
          <h1 className="TITLE-title">
            Women in Engineering & Computer Science
            </h1>
          <p className="TITLE-subtitle">
            since 2023
          </p>

        <Col sm={12} md={6} lg={4} className="mb-4">
          <div className="join-btn">
            <Link to="/positions" onClick={onClickScroll} className="join-btn">
              join us!
            </Link>
          </div>
        </Col>
        
      </div>


      {/* SECOND ROW */}
      <Row className="justify-content-between">
        <Col sm={12} md={6} lg={4} className="mb-4">
          <Link to="/newsletter" className="remove-link-styling" onClick={onClickScroll}>
            <Card className="info-card">
              <Card.Body>
                <Card.Title>Newsletter</Card.Title>
                <div className="card-image-wrapper">
                  <Card.Img src={newsletter} className="card-image" />
                </div>
              </Card.Body>
            </Card>
          </Link>
        </Col>

        <Col sm={12} md={6} lg={4} className="mb-4">
          <Link to="/team" className="remove-link-styling" onClick={onClickScroll}>
            <Card className="info-card"> 
              <Card.Body>
                <Card.Title>Our Team</Card.Title>
                <div className="card-image-wrapper">
                  <Card.Img src={oldWecsTeam} className="card-image" />
                </div>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      </Row>


    {/* goals section */}
      <div className="goal-section my-5">
        <Row className="align-items-center">
          <Col md={4}>
            <div className="card-image-wrapper">
              <Card.Img src={oldWecsTeam} className="card-image" />
            </div>
          </Col>

          <Col md={8} className="text-white">
            <h3>OUR GOAL</h3>
            <p>
            Women in Engineering and Computer Science (WECS) has a goal to create a community for women and gender-non-conforming 
            individuals at the University of Victoria to grow as students and professionals. 
            Women make up around 19% of students in the faculty of Engineering and Computer Science. 
            We hope that by providing women with more opportunities and community support, that number will continue to rise.
            </p>
          </Col>
        </Row>
      </div>


      {/* land ack. */}
      <Row>
        <Col sm={12} style={{ textAlign: 'center' }}>
          <p>We acknowledge, respect and thank the lək̓ʷəŋən People (Songhees and Xʷsepsəm/Esquimalt) for their care and leadership on these lands. As a club at the University of Victoria, we acknowledge that we are guests on these lands and acknowledge our responsibility to the land, its resources, and its people. We also give thanks to the Lək̓ʷəŋən and W̱SÁNEĆ Peoples whose historical relationships with the land continue to this day.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;