import React from 'react';
import Footer from '../footer/footer';

const boxStyle = {
  border: '2px solid #CC5800',
  padding: '10px',
  margin: '5px'
};

const Positions = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Our  Open Positions</h1>
      <p style={{ textAlign: "center" }}>
        We would love to meet you! If you're interested in joining our team, browse our open positions <br /> below and apply by
        emailing your completed <a href="https://docs.google.com/document/d/1xhHzLDpSUt4A85tQt84KerA_P0yqwRa_PS1_uof7uvs/edit#heading=h.kxed8et1m9yw">WECS Expression of Interest Form</a> to
        uvicwecs.official@gmail.com.
      </p>
      <div className={"container"}>
        <div className={"row"}>
          <div className={"col"} style={boxStyle}>
            <h3>Corporate Outreach Director</h3>
            <p>Term: January 2025-August 2025 <br />
              Weekly Commitment: 5-10 hours <br />
              Number of Positions Available: 1 <br />
              <br />
              The Corporate Outreach Director is responsible for finding corporate partners.
              This includes financial partners to sponsor events, and networking partners to join PD events.
              The Corporate Outreach Director will collaborate with the VP Outreach to ensure that all partners are aligned with our goals and scope.
              <br /><br />
              For more information, please see <a href="https://docs.google.com/document/d/1A0Vk0ZaFmi6kuhRvcK0oUMHq_EcjVM209xHtiM8n4Ec/edit?tab=t.0">this</a> document.
            </p>
          </div>
          <div className={"col"} style={boxStyle}>
            <h3>Partnership Director</h3>
            <p>Term: January 2025-August 2025 <br />
              Weekly Commitment: 3-6 hours <br />
              Number of Positions Available: 1 <br />
              <br />
              The Partnership Director is responsible for managing communication between WECS and other UVic-related groups.
              This includes other UVic Clubs and Course Unions, the ECSS, the UVSS, and the Engineering and Computer Science Departments.
              The Partnership Director will collaborate with the VP Outreach to ensure WECS is informed of internal events and communications.
              <br /><br />
              For more information, please see <a href="https://docs.google.com/document/d/1iv-1c-h-Nrh0oghtesQw-mobpER6TxK7vz0McYX5c_Y/edit?usp=sharing">this</a> document.
            </p>
          </div>
        </div>
        <div className={"row"}>
          <div className={"col"} style={boxStyle}>
            <h3>External Outreach Director</h3>
            <p>Term: January 2025-August 2025 <br />
              Weekly Commitment: 5-10 hours <br />
              Number of Positions Available: 1 <br />
              <br />
              The External Outreach Director is responsible for managing the communication between WECS and groups and organizations outside of UVic.
              This includes local high schools, and community groups and organizations (Rotary).
              The External Outreach Director will collaborate with the VP Outreach to ensure WECS is informed of external events and communications.
              <br /><br />
              For more information, please see <a href="https://docs.google.com/document/d/16baQ2I7W5l-DItFlha67vZszHg7WHj6oeOuK71KiZM4/edit?usp=sharing">this</a> document.
            </p>
          </div>
          <div className={"col"} style={boxStyle}>
            <h3>VP Outreach</h3>
            <p>Term: January 2025-August 2025 <br />
              Weekly Commitment: 5-10 hours <br />
              Number of Positions Available: 1 <br />
              <br />
              The VP Outreach is responsible for managing the outreach team.
              This includes running weekly meetings with all committee members, goal setting, and task delegation.
              VP Outreach will collaborate with the President to ensure that all activities align with our organization’s goals and scope.
              <br /><br />
              For more information, please see <a href="https://docs.google.com/document/d/1-at-JZ89iF6k05_AMK2chBJxm9Wi5ncf9r_-9_RDvpc/edit?tab=t.0">this</a> document.
            </p>
          </div>
        </div>

        <div className={"row"}>
          <div className={"col"} style={boxStyle}>
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
          </div>
        </div>

      </div>
      <br />
      <Footer />
    </div>
  );
};

export default Positions;
