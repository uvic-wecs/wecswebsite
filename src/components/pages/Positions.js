import './positionStyling.css';
import { Container, Card, Row, Col, Carousel} from 'react-bootstrap';

const Positions = () => {
  return (
    <div className="position-container">
      <h1 style={{ textAlign: 'center' }}>Our Open Positions</h1>
      <p style={{ textAlign: 'center' }}>
        We would love to meet you! If you're interested in joining our team, browse our open positions<br />
        below and apply by emailing your completed <a href="https://docs.google.com/document/d/1xhHzLDpSUt4A85tQt84KerA_P0yqwRa_PS1_uof7uvs/edit#heading=h.kxed8et1m9yw" target="_blank" rel="noreferrer">WECS Expression of Interest Form</a> to uvicwecs.official@gmail.com.
      </p>
          
      
      <Card className="carousel-border" style={{padding: '50px', margin: 'auto', width: '70%', display: 'flex', justifyContent: 'center'}}>
        <Carousel>
          <Carousel.Item>
           <Container>
              <Row className="justify-content-center align-items-stretch mb-4">
              <Col sm={6} className="d-flex">
                <div className="custom-border flex-fill p-3" style={{ background: 'linear-gradient(180deg, #f4d7ec, #fcf8fb)' }}>
                  
                  <h3 className="position-title" style={{ color: '#3a3a3a', textAlign: 'center' }}>Review Session Volunteer</h3>
                  <p>
                    We're always looking for more volunteers to help with our final exam review sessions!<br /><br />
                    Classes we run include: PHYS 110, CSC 110, CSC 111, CSC 115, CSC 225, CSC 226, SENG 265, ECE 250, and MECH 240<br /><br />

                    A variety of roles are available! Whether you want to run the review sessions, support 
                    the review session leader, or make new practice materials, we would love to hear from you. <br /><br /> 
                    <span style={{ textDecorationLine: 'underline' }}>Email uvicwecs.official@gmail.com with the subject line “Review Session Volunteer”</span> and tell us 
                    about yourself, which courses you're interested in, and which role.
                  
                  </p>
                </div>
              </Col>
              </Row>
            </Container>
          </Carousel.Item>

          <Carousel.Item>
           <Container style ={{margin: 'auto', paddingTop: '100px', paddingBottom: '116px'}}>
              <Row className="justify-content-center align-items-stretch mb-4">
                <Col sm={6} className="d-flex">
                  <div className="custom-border flex-fill p-3" style={{background: 'linear-gradient(180deg, #f4d7ec, #fcf8fb)' }}>
                    <h3 className="position-title" style={{ color: '#3a3a3a', textAlign: 'center' }}>Media Director</h3>
                    <p>
                      This position will be creating graphics and manage social media accounts including event promotion and updates.<br />
                      <br />

                      <span style={{ textDecorationLine: 'underline' }}>Email uvicwecs.official@gmail.com with the subject line “Media Director”</span> and tell us about yourself.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>

          <Carousel.Item>
            <Container style ={{margin: 'auto', paddingTop: '100px', paddingBottom: '116px'}}>
              <Row className="justify-content-center align-items-stretch mb-4">
                <Col sm={6} className="d-flex">
                  <div className="custom-border flex-fill p-3" style={{background: 'linear-gradient(180deg, #f4d7ec, #fcf8fb)' }}>
                    <h3 className="position-title" style={{ color: '#3a3a3a', textAlign: 'center' }}>Newsletter Director</h3>
                    <p>
                      This position will develop monthly newsletters to keep club members informed and engaged.<br /><br/>

                      <span style={{ textDecorationLine: 'underline' }}>Email uvicwecs.official@gmail.com with the subject line “Newsletter Director”</span> and tell us about yourself.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
          
          <Carousel.Item>
            <Container style ={{margin: 'auto', paddingTop: '100px', paddingBottom: '92px'}}>
              <Row className="justify-content-center align-items-stretch mb-4">
                <Col sm={6} className="d-flex">
                  <div className="custom-border flex-fill p-3" style={{background: 'linear-gradient(180deg, #f4d7ec, #fcf8fb)' }}>
                    <h3 className="position-title" style={{ color: '#3a3a3a', textAlign: 'center' }}>HR Director</h3>
                    <p>
                      This position will oversee onboarding and integration of new members and support HR-related questions and concerns.<br /><br />

                      <span style={{ textDecorationLine: 'underline' }}>Email uvicwecs.official@gmail.com with the subject line “HR Director”</span> and tell us about yourself.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
          
          <Carousel.Item>
          <Container style ={{margin: 'auto', paddingTop: '100px', paddingBottom: '116px'}}>
            <Row className="justify-content-center align-items-stretch mb-4">
              <Col sm={6} className="d-flex">
                <div className="custom-border flex-fill p-3" style={{ background: 'linear-gradient(180deg, #f4d7ec, #fcf8fb)' }}>
                  <h3 className="position-title" style={{ color: '#3a3a3a', textAlign: 'center' }}>Discord Director</h3>
                  <p>
                    This position will create content and engage with members and followers to build a supportive online community.<br /><br />

                    <span style={{ textDecorationLine: 'underline' }}>Email uvicwecs.official@gmail.com with the subject line “Discord Director”</span> and tell us about yourself.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
          </Carousel.Item>
          
          <Carousel.Item>
          <Container style ={{margin: 'auto', paddingTop: '100px', paddingBottom: '92px'}}>
              <Row className="justify-content-center align-items-stretch mb-4">
                <Col sm={6} className="d-flex">
                  <div className="custom-border flex-fill p-3" style={{ background: 'linear-gradient(180deg, #f4d7ec, #fcf8fb)' }}>
                    <h3 className="position-title" style={{ color: '#3a3a3a', textAlign: 'center' }}>Workshop Director</h3>
                    <p>
                    
                      This position will plan and organize professional development workshops for club members aimed at developing skills for members.<br /><br />

                      <span style={{ textDecorationLine: 'underline' }}>Email uvicwecs.official@gmail.com with the subject line “Workshop Director”</span> and tell us about yourself.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>

        </Carousel>
      </Card>
        
     
      
     
      
      
    </div>
  );
};

export default Positions;
