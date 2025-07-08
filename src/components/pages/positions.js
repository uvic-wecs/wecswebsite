import React from 'react';
import './positionStyling.css';
import { Container, Row, Col } from 'react-bootstrap';

const Positions = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Our  Open Positions</h1>
      <p style={{ textAlign: "center" }}>
        We would love to meet you! If you're interested in joining our team, browse our open positions <br /> below and apply by
        emailing your completed <a href="https://docs.google.com/document/d/1xhHzLDpSUt4A85tQt84KerA_P0yqwRa_PS1_uof7uvs/edit#heading=h.kxed8et1m9yw">WECS Expression of Interest Form</a> to
        uvicwecs.official@gmail.com.
      </p>
      <Container>
        <Row className="justify-content-center">
          <Col sm={6}>
            <Col sm={12} className="custom-border padding-margin">
              <h3>VP Outreach</h3>
              <p>Term: ASAP-August 2025 (will be extended upon review in September)<br />
                Weekly Commitment: 5-10 hours <br />
                Number of Positions Available: 1 <br />
                <br />
                The VP Outreach is responsible for managing the outreach team.
                This includes running weekly meetings with all committee members, goal setting, and task delegation.
                VP Outreach will collaborate with the President to ensure that all activities align with our organization’s goals and scope.
                <br /><br />
                For more information, please see <a href="https://docs.google.com/document/d/1-at-JZ89iF6k05_AMK2chBJxm9Wi5ncf9r_-9_RDvpc/edit?tab=t.0">this</a> document.
                <br /><br /><br /><br />
              </p>
            </Col>
          </Col>
          <Col sm={6}>
            <Col sm={12} className="custom-border padding-margin">
              <h3>Professional Development Director</h3>
              <p>Term: ASAP-August 2025 (will be extended upon review in September)<br />
                Weekly Commitment: 3-6 hours <br />
                Number of Positions Available: 1 <br />
                <br />
                The Professional Development Events Director is responsible for planning and executing professional development events each semester.
                These can include our speaker series that bring industry experts, thought leaders, and professionals to share insights and knowledge with club members.
                It can also be picnic on the quad with career experts, co-op panels with upper year students, or resume building events.
                This includes finding and communicating with speakers, developing topics for the series, and executing the sessions.
                <br /><br />
                For more information, please see <a href="https://docs.google.com/document/d/1ztM94cveIyw3c9HmMWzOQfauFC6mV1UbvFjIT7P0t0U/edit?tab=t.0">this</a> document.
                <br />
              </p>
            </Col>
          </Col>
        </Row>


        <Row className="justify-content-center">
          <Col sm={6}>
            <Col sm={12} className="custom-border padding-margin">
              <h3>Community Events Director</h3>
              <p>Term: ASAP-August 2025 (will be extended upon review in September)<br />
                Weekly Commitment: 3-6 hours <br />
                Number of Positions Available: 1 <br />
                <br />
                The Community Events Director is responsible for hosting community based events.
                You report to the VP Community.
                The Community Events Director will collaborate with their VP to ensure that all events align with our organization’s goals and scope.
                <br /><br />
                For more information, please see <a href="https://docs.google.com/document/d/16GC-_mbrAUN5jFV8mS5KKSifcPZHVlmOtpDqBeBjTP4/edit?tab=t.0">this</a> document.
                <br /><br /><br /><br />
              </p>
            </Col>
          </Col>
          <Col sm={6}>
            <Col sm={12} className="custom-border padding-margin">
              <h3>Academic Materials Director</h3>
              <p>Term: ASAP-August 2025 (will be extended upon review in September)<br />
                Weekly Commitment: 3-6 hours <br />
                Number of Positions Available: 1 <br />
                <br />
                The Academic Materials Director is responsible for managing the creation and distribution of academic materials.
                This includes maintaining the public facing “WECS Study Materials” google folder, and organizing the development of materials for WECS review sessions.
                The Academic Materials Director will collaborate with the VP Academic and Academia Committee to ensure that all materials are created for WECS Academic Events.
                <br /><br />
                For more information, please see <a href="https://docs.google.com/document/d/1rS1fS54lKqHL6Fw8m6KkLTa2usBe-xoTvrrHO9ZINps/edit?tab=t.0">this</a> document.
              </p>
            </Col>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col sm={12}>
            <Col sm={12} className="custom-border padding-margin">
              <h3>Review Session Volunteer</h3>
              <p>
                We're always looking for more volunteers to help with our final exam review sessions!
                <br />
                Classes we run include
                CSC: 110, 111, 115,
                ENGR: 141,
                PHYS: 110, 111, and
                CHEM: 150.
                <br />
                <br />
                A variety of roles are available! Whether you want to run the review sessions, support the review session leader,
                or make new practice materials, we would love to hear from you! Email uvicwecs.official@gmail.com with the subject line
                Review Session Volunteer and tell us about yourself, which courses you're interested in, and which role.
              </p>
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Positions;
