import './positionStyling.css';
import { Container, Row, Col } from 'react-bootstrap';

const Positions = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Our Open Positions</h1>
      <p style={{ textAlign: 'center' }}>
        We would love to meet you! If you're interested in joining our team, browse our open positions<br />
        below and apply by emailing your completed <a href="https://docs.google.com/document/d/1xhHzLDpSUt4A85tQt84KerA_P0yqwRa_PS1_uof7uvs/edit#heading=h.kxed8et1m9yw" target="_blank" rel="noreferrer">WECS Expression of Interest Form</a> to uvicwecs.official@gmail.com.
      </p>

      <Container>
        <Row className="justify-content-center align-items-stretch mb-4">
          <Col sm={6} className="d-flex">
            <div className="custom-border flex-fill p-3">
              <h3 className="position-title">Review Session Coordinator</h3>
              <p>
                This position will organize midterm and final review sessions that improve students' academic confidence.<br /><br />

                Email uvicwecs.official@gmail.com with the subject line “Review Session Coordinator” and tell us about yourself.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="justify-content-center align-items-stretch mb-4">
          <Col sm={6} className="d-flex">
            <div className="custom-border flex-fill p-3">
              <h3 className="position-title">Media Director</h3>
              <p>
                This position will be creating graphics and manage social media accounts including event promotion and updates.<br />
                <br />

                Email uvicwecs.official@gmail.com with the subject line “Media Director” and tell us about yourself.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="justify-content-center align-items-stretch mb-4">
          <Col sm={6} className="d-flex">
            <div className="custom-border flex-fill p-3">
              <h3 className="position-title">Newsletter Director</h3>
              <p>
                This position will develop monthly newsletters to keep club members informed and engaged.<br /><br/>

                Email uvicwecs.official@gmail.com with the subject line “Newsletter Director” and tell us about yourself.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="justify-content-center align-items-stretch mb-4">
          <Col sm={6} className="d-flex">
            <div className="custom-border flex-fill p-3">
              <h3 className="position-title">HR Director</h3>
              <p>
                This position will oversee onboarding and integration of new members and support HR-related questions and concerns.<br /><br />

                Email uvicwecs.official@gmail.com with the subject line “HR Director” and tell us about yourself.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="justify-content-center align-items-stretch mb-4">
          <Col sm={6} className="d-flex">
            <div className="custom-border flex-fill p-3">
              <h3 className="position-title">Discord Director</h3>
              <p>
                This position will create content and engage with members and followers to build a supportive online community.<br /><br />

               Email uvicwecs.official@gmail.com with the subject line “Discord Director” and tell us about yourself.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="justify-content-center align-items-stretch mb-4">
          <Col sm={6} className="d-flex">
            <div className="custom-border flex-fill p-3">
              <h3 className="position-title">Workshop Director</h3>
              <p>
               
                This position will plan and organize professional development workshops for club members aimed at developing skills for members.<br /><br />

                Email uvicwecs.official@gmail.com with the subject line “Workshop Director” and tell us about yourself.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Positions;
