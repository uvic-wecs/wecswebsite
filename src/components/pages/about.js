import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../footer/footer';

function About() {
  return (
    <div>
    <h1>My About Page</h1>
    <Container fluid>
      <Row>
        <Col>1 of 1</Col>
      </Row>
    </Container>
    <Footer />
    </div>
  );
}

export default About;