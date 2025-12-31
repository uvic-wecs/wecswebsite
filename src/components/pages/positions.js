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
            <div className="custom-border padding-margin flex-fill">
              <h3 className="position-title">Human Resources Director</h3>
              <p>
                Term: Sept 2025-August 2026<br />
                Weekly Commitment: 5-10<br />
                Number of Positions Available: 1<br /><br />

                The Human Resources Director is responsible for managing the human resources aspects of WECS. This includes recruitment, onboarding, and staff support. The HR Director will work closely with the President to ensure effective human resources practices are implemented.
                <br></br>
                <br></br>
                For more information, please see <a href="https://docs.google.com/document/d/1cZY6RRwvrXRYeiqvkCqdk6cydLczn8OB/edit#heading=h.ocfzmvt4pub6" target="_blank" rel="noreferrer">this</a> document.
              </p>
            </div>
          </Col>
          <Col sm={6} className="d-flex">
            <div className="custom-border padding-margin flex-fill">
              <h3 className="position-title">Review Session Volunteer</h3>
              <p>
                We're always looking for more volunteers to help with our final exam review sessions!<br />
                Classes we run include CSC: 110, 111, 115; ENGR: 141; PHYS: 110, 111; and CHEM: 150.<br /><br />

                A variety of roles are available! Whether you want to run the review sessions, support the review session leader, or make new practice materials, we would love to hear from you. Email uvicwecs.official@gmail.com with the subject line “Review Session Volunteer” and tell us about yourself, which courses you're interested in, and which role.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Positions;
