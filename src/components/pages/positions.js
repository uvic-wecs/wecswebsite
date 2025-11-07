import './positionStyling.css';
import { Container, Row, Col } from 'react-bootstrap';

const Positions = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Our Open Positions</h1>
      <p style={{ textAlign: 'center' }}>
        We would love to meet you! If you're interested in joining our team, browse our open positions<br />
        below and apply by emailing your completed <a href="https://docs.google.com/document/d/1xhHzLDpSUt4A85tQt84KerA_P0yqwRa_PS1_uof7uvs/edit#heading=h.kxed8et1m9yw">WECS Expression of Interest Form</a> to uvicwecs.official@gmail.com.
      </p>

      <Container>
        <Row className="justify-content-center align-items-stretch mb-4">

          <Col sm={6} className="d-flex">
            <div className="custom-border padding-margin flex-fill">
              <h3>VP Community</h3>
              <p>
                Term: ASAP–December 2025 (will be extended upon review in December)<br />
                Weekly Commitment: 5–10 hours<br />
                Number of Positions Available: 1<br /><br />

                The VP Community is responsible for managing the community team, which includes 2–3 Community Directors. This includes running bi-weekly meetings with all committee members, goal setting, and task delegation. VP Community will collaborate with the President to ensure that all events align with our organization’s goals and scope. The Community Committee organizes events, seminars and workshops that focus on providing opportunities for WECS members to build a community, providing all students—irrespective of gender—with a supportive environment.
                <br /><br />

                For more information, please see <a href="https://docs.google.com/document/d/1meHBzryCjaoM-ZHpAK6afHrSRQRm6qat/edit?usp=sharing&ouid=100029941138871925223&rtpof=true&sd=true">this</a> document.
              </p>
            </div>
          </Col>
          <Col sm={6} className="d-flex">
            <div className="custom-border padding-margin flex-fill">
              <h3>Community Events Director</h3>
              <p>
                Term: ASAP–August 2025 (will be extended upon review in September)<br />
                Weekly Commitment: 3–6 hours<br />
                Number of Positions Available: 1<br /><br />

                The Community Events Director is responsible for hosting community-based events. You report to the VP Community and will collaborate with them to ensure that all events align with our organization’s goals and scope.<br /><br />
                The Community Committee organizes events, seminars and workshops that focus on providing opportunities for WECS members to build a community. In doing so, the committee provides all students, irrespective of gender, who attend events with a supportive community.
                <br /><br />
                For more information, please see <a href="https://docs.google.com/document/d/16GC-_mbrAUN5jFV8mS5KKSifcPZHVlmOtpDqBeBjTP4/edit?tab=t.0">this</a> document.
              </p>
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center align-items-stretch mb-4">

          <Col sm={6} className="d-flex">
            <div className="custom-border padding-margin flex-fill">
              <h3>Review Sessions Director</h3>
              <p>
                Term: September 2025 - August 2026<br />
                Weekly Commitment: 3-6 hours<br />
                Number of Positions Available: 1<br /><br />

                The Review Sessions Director is responsible for managing the review sessions. This includes maintaining a list of midterm and final exam dates, finding upper-year students to lead and support sessions, organizing the sessions, and delegating tasks to WECS members as needed. The Review Sessions Director will collaborate with the VP Academia and the Academia Committee to ensure that all events align with our organization’s goals and scope.
                <br /><br />
                For more information, please see <a href="https://docs.google.com/document/d/1UCdegVICDwym0t6TYgZBeHbc_GstPQ-A/edit#heading=h.nv23kbvhauad">this</a> document.
              </p>
            </div>
          </Col>

          <Col sm={6} className="d-flex">
            <div className="custom-border padding-margin flex-fill">
              <h3>Website Director</h3>
              <p>
                Term: September 2025 - August 2026<br />
                Weekly Commitment: 3-6 hours<br />
                Number of Positions Available: 1-2<br /><br />

                The Website Director is responsible for managing our website. This includes ensuring it is up-to-date, user friendly, and visually appealing. The Website Director will collaborate with the Website Manager and Vice President to maintain and improve the website.
                <br /><br />
                Preference will be given to students who have experience with JavaScript and React, but we encourage enthusiastic learners to apply.
                <br /><br />
                For more information, please see <a href="https://docs.google.com/document/d/1B-iHmwWGDSsM3gN4O9M4FwAaC1jHLhrmvhhila0i_Us/edit?tab=t.0#heading=h.kxed8et1m9yw">this</a> document.
              </p>
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center align-items-stretch mb-4">
          <Col sm={6} className="d-flex">
            <div className="custom-border padding-margin flex-fill">
              <h3>Media Director</h3>
              <p>
                Term: ASAP–December 2025 (will be extended upon review in December)<br />
                Weekly Commitment: 3–6 hours<br />
                Number of Positions Available: 1<br /><br />
                The Media Director is responsible for managing our current social media profiles (Instagram) and developing a new media profile for LinkedIn. They are also responsible for creating digital signage and posters. The Media Director will collaborate with the Marketing Team and President to maintain and improve our social media presence. <br /><br />

                For more information, please see <a href="https://docs.google.com/document/d/1fg-LtWYUFK5gUx1AGUk2ZrGXaF1TpHYq/edit?usp=sharing&ouid=100029941138871925223&rtpof=true&sd=true">this</a> document.
              </p>
            </div>
          </Col>
          <Col sm={6} className="d-flex">
            <div className="custom-border padding-margin flex-fill">
              <h3>Review Session Volunteer</h3>
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
