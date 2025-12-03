
import { Col, Container, Row, Card } from 'react-bootstrap';
import './reviewSessions.css';

import csc110 from "../../resources/reviewSessions/csc110.png";
import csc111 from "../../resources/reviewSessions/csc111.png";
import phys110 from "../../resources/reviewSessions/Phys110.png";
import csc225 from "../../resources/reviewSessions/csc225.png";

const sessions = [
  {
    title: "CSC 110",
    where: "COR B135",
    when: "Dec 4, starts at 6pm",
    image: csc110,

  },
  {
    title: "CSC 111",
    where: "ECS 108",
    when: "Dec 6, starts at 2pm",
    image: csc111 ,

  },
  {
    title: "PHYS 110",
    where: "ECS 104",
    when: "Dec 10, starts at 2pm",
    image: phys110 ,
  },

  {
    title: "CSC 225",
    where: "ECS 108",
    when: "Dec 10, starts at 2pm",
    image: csc225,
  }
]



const ReviewSessions = () => {
  return (
    <Container className="py-4 review-container">
    <Container className="py-5 review-header">
      <header className="text-center mb-4">
        <h1 className="review-header-title">Final Review Sessions</h1>
        <h3 className="review-header-sub">Join us for the following review sessions!</h3>
        <h3 className="review-header-sub">Hosted by WECSxECSS</h3>
      </header>
    </Container>

      <Row xs={1} md={2} className="g-4">
        {sessions.map((sess, idx) => (
          <Col key={idx}>
            <Card className="h-100 d-flex flex-column shadow-sm gradient-card review-card">
            {/* Add image to each card */}
            <Card.Img 
              variant="top" 
              src={sess.image}      // Add image field to your sessions data
              alt={sess.title}
              style={{ height: "auto", width: "100%" }}
            />

            <Card.Body className="d-flex flex-column">
              <Card.Title className="text-center review-title">
                {sess.title}
              </Card.Title>

              <Card.Text className="flex-grow-1 review-text">
                <strong><i className="fa-solid fa-location-dot"></i> Where:</strong> {sess.where}
                <br />
                <strong><i className="fa-solid fa-clock"></i> When:</strong> {sess.when}
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ReviewSessions;
