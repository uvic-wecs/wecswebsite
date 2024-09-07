import React from 'react';
import Footer from '../footer/footer';

const hrStyle = {
  border: 'none',
  height: '5px',
  backgroundColor: '#ff9df5',
};

const boxStyle = {
  border: '2px solid #ffecfd',
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

            <h3>Human Resources Director</h3>
            <p>Term: Sept 2024-August 2025 <br />
              Weekly Commitment: 5-10 hours<br />
              Number of Positions Available: 1 <br />
              <br />
              The Human Resources Director is responsible for recruitment, onboarding, and staff support.
              The Director will work closely with the President to ensure effective human resources practices are implemented.
              <br /><br />
              For more information, please see <a href="https://docs.google.com/document/d/1cqzY-rMUJVQi-UoFKwLcI1zjUM2TXRz6EM_96_ZDWik/edit?usp=sharing">this</a> document.
            </p>
          </div>
          <div className={"col"} style={boxStyle}>
            <h3>VP Professional Development</h3>
            <p>Term: Sept 2024-August 2025 <br />
              Weekly Commitment: 5-10 hours <br />
              Number of Positions Available: 1 <br />
              <br />
              The VP Professional Development (PD) is responsible for managing the professional development team.
              This includes running bi-weekly meetings with all committee members, goal setting, and task delegation.
              VP PD will collaborate with the President to ensure that all events align with our organization’s goals and scope.
              <br /><br />
              For more information, please see <a href="https://docs.google.com/document/d/1_Jrz8t3YTlVKwsMVAmC9FMhNcddPWfyS7-zSuGk2sEw/edit#heading=h.kxed8et1m9yw">this</a> document.

            </p>
          </div>
        </div>

        <div className={"row"}>
          <div className={"col"} style={boxStyle}>
            <h3>Speaker Series Director</h3>
            <p>Term: Sept 2024-Aug 2025 <br />
              Weekly Commitment: 3-6 hours <br />
              Number of Positions Available: 1 <br />
              <br />
              The Speaker Series Director is responsible for planning and executing our speaker series that bring industry experts, thought leaders, and professionals to share insights and knowledge with club members.
              This includes finding and communicating with speakers, developing topics for the series, and executive the sessions.
              <br /><br />
              For more information, please see <a href="https://docs.google.com/document/d/1ztM94cveIyw3c9HmMWzOQfauFC6mV1UbvFjIT7P0t0U/edit?usp=sharing">this</a> document.
            </p>
          </div>
          <div className={"col"} style={boxStyle}>
            <h3>External Outreach Director</h3>
            <p>Term: Sept 2024-August 2025 <br />
              Weekly Commitment: 5-10 hours <br />
              Number of Positions Available: 1 <br />
              <br />
              The VP External Outreach is responsible for managing the communication between WECS and groups and organizations outside of UVic. 
              This includes local high schools, and community groups and organizations (Rotary). 
              The External Outreach Director will collaborate with the VP Outreach to ensure WECS is informed of external events and communications.
              <br /><br />
              For more information, please see <a href="https://docs.google.com/document/d/16baQ2I7W5l-DItFlha67vZszHg7WHj6oeOuK71KiZM4/edit?usp=sharing">this</a> document.
            </p>
          </div>
        </div>

        <div className={"row"}>
          <div className={"col"} style={boxStyle}>
            <h3>Review Session Volunteer</h3>
            <p>
              We're always looking for more volunteers to help with our final exam review sessions!
              <br/>
              Classes we run include 
              CSC: 110, 111, 115, 
              ENGR: 141,
              PHYS: 110, 111, and
              CHEM: 150.
              <br/>
              <br/>
              A variety of roles are available! Whether you want to run the review sessions, support the review session leader, 
              or make new practice materials, we would love to hear from you! Email uvicwecs.official@gmail.com with the subject line 
              Review Session Volunteer and tell us about yourself, which courses you're interested in, and which role.
            </p>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default Positions;
