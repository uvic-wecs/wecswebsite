import "./home.css";
import { Container, Card, Row, Col, Carousel, Image } from "react-bootstrap";
import ClubsDay from '../../resources/homepage/ClubsDay.png';
import { Link } from "react-router-dom";
import wecsTeam from "../../resources/homepage/WECS Team.webp";
import wecsLogo from "../../resources/homepage/WECS Logo.webp";
import toteAd from "../../resources/homepage/Tote Ad.webp";
import oldWecsTeam from "../../resources/homepage/old WECS Team.webp";
import newsletter from "../../resources/homepage/Newsletter.webp";
import EventImage from "../../resources/homepage/Women in Eng Celebration.jpg"

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
      <Card className="home-container">
        <div className="overlay" />
        <div className="content">
          <h1>Women in Engineering <br /> and Computer Science</h1>
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <p>We support women and nonbinary students at the University of Victoria <br /> studying Engineering and Computer Science</p>
        </div>
      </Card>

      <Row className="justify-content-center my-3">
        <Col xs={8}>
          <hr className="hrStyleBlue" />
        </Col>
      </Row>
      <Row className="justify-content-center my-3">
        <Col xs={8}>
          <hr className="hrStylePink" />
        </Col>
      </Row>

      <Row>
        <Col sm={12} className="custom-border padding-margin d-flex justify-content-center" style={{ textAlign: 'center' }}>
          <p>We acknowledge, respect and thank the lək̓ʷəŋən People (Songhees and Xʷsepsəm/Esquimalt) for their care and leadership on these lands. As a club at the University of Victoria, we acknowledge that we are guests on these lands and acknowledge our responsibility to the land, its resources, and its people. We also give thanks to the Lək̓ʷəŋən and W̱SÁNEĆ Peoples whose historical relationships with the land continue to this day.</p>
        </Col>
      </Row>

      <Row className="justify-content-center my-3">
        <Col xs={8}>
          <hr className="hrStylePink" />
        </Col>
      </Row>
      <Row className="justify-content-center my-3">
        <Col xs={8}>
          <hr className="hrStyleBlue" />
        </Col>
      </Row>

      <Card className="carousel-border">
        <Carousel>
          <Carousel.Item>
            <Image src={ClubsDay} className="carousel-image" />
            <div>
              <p style={{ color: 'black', textAlign: 'center' }}>Come and meet WECS at the UVSS Clubs and Course Unions day!</p>
              <br />
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <Image src={EventImage} className="carousel-image" />
            <div>
              <p style={{ color: 'black', textAlign: 'center' }}>Look out for our upcoming events this semester!</p>
              <br />
            </div>
          </Carousel.Item>
        </Carousel>
      </Card>

      <Row className="justify-content-center my-3">
        <Col xs={8}>
          <hr className="hrStyleBlue" />
        </Col>
      </Row>
      <Row className="justify-content-center my-3">
        <Col xs={8}>
          <hr className="hrStylePink" />
        </Col>
      </Row>

      <Row>
        <Col sm={12} md={6} lg={4}>
          <Link to="/about" className="remove-link-styling" onClick={onClickScroll}>
            <Card className="info-card">
              <div className="card-image-wrapper">
              <Card.Img variant="top" src={wecsLogo} className="card-image" />
              </div>
              <Card.Body>
                <Card.Title>
                  About Us
                </Card.Title>
                <Card.Text>
                  We support women and nonbinary students at UVic who are studying Engineering and Computer Science.
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>

        </Col>
        <Col sm={12} md={6} lg={4}>
          <Link to="/calendar" className="remove-link-styling" onClick={onClickScroll}>
            <Card className="info-card">
              <div className="card-image-wrapper">

              <Card.Img variant="top" src={toteAd} className="card-image" />
              </div>
              <Card.Body>
                <Card.Title>
                  Upcoming Events
                </Card.Title>
                <Card.Text>
                  Check out our upcoming events for the semester! We hope to see you there!
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>

        <Col sm={12} md={6} lg={4}>
          <Link to="/positions" className="remove-link-styling" onClick={onClickScroll}>
            <Card className="info-card">
              <div className="card-image-wrapper">

              <Card.Img variant="top" src={wecsTeam} className="card-image" />
              </div>
              <Card.Body>
                <Card.Title>
                  Open Positions
                </Card.Title>
                <Card.Text>
                  Interested in joining our team? Check out our open positions, we'd love to have you!
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        
        <Col className="my-3" sm={12} md={6} lg={4}>
          <Link to="/newsletter" className="remove-link-styling" onClick={onClickScroll}>
            <Card className="info-card">
              <div className="card-image-wrapper">

              <Card.Img variant="top" src={newsletter} className="card-image" />
              </div>
              <Card.Body>
                <Card.Title>
                  Newsletter
                </Card.Title>
                <Card.Text>
                  Browse our past newsletters!
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>

        <Col className="my-3"  sm={12} md={6} lg={4}>
          <Link to="/team" className="remove-link-styling" onClick={onClickScroll}>
            <Card className="info-card">
              <div className="card-image-wrapper">

              <Card.Img variant="top" src={oldWecsTeam} className="card-image" />
              </div>
              <Card.Body>
                <Card.Title>
                  Meet Our Team
                </Card.Title>
                <Card.Text>
                  Learn more about the awesome people behind WECS!
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>

        <Col className="my-3"  sm={12} md={6} lg={4}>
          <Link to="/contact" className="remove-link-styling" onClick={onClickScroll}>
            <Card className="info-card">
              <div className="card-image-wrapper">
                <Card.Img src={wecsLogo} className="card-image" />
              </div>              <Card.Body>
                <Card.Title>
                  Contact Us
                </Card.Title>
                <Card.Text>
                  We'd love to hear from you!
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      </Row>

    </Container>
  );
};

export default Home;