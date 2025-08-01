import tote2 from '../../resources/about/Tote Bag 2.webp';
import womenEngCelebration from '../../resources/about/Women in Eng Celebration.webp';
import teamSilly from '../../resources/about/Team Silly.webp';
import { Link } from "react-router-dom";
import { Col, Container, Row } from 'react-bootstrap';

const hrStyle = {
    border: 'none',
    height: '5px',
    backgroundColor: '#B47EDE',
};

function About() {
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>About Us!</h1>
            <Container>
                <Row>
                    <Col>
                        <p style={{ fontSize: "20px" }}> Women in Engineering and Computer Science (WECS) at the University of Victoria strives to improve the experience of women and gender-non-conforming individuals studying engineering and computer science.
                            <br></br>
                            <br></br>
                            Our group has evolved many times over the last decade, always with a goal to create a community for our members. Past executives have hosted Tea Times, Study Hours, and Review Sessions. We will continue to grow our team to provide opportunities for WECS members.
                        </p>
                    </Col>
                </Row>
                <hr style={hrStyle} />

                <Row>
                    <Col xs={12} md={6}>
                        <h2>Our Goal</h2>
                        <p style={{ fontSize: "20px" }}>
                            Women in Engineering and Computer Science (WECS) has a goal to create a community for women and gender-non-conforming individuals at the University of Victoria to grow as students and professionals.</p>
                    </Col>
                    <Col xs={12} md={6}>
                        <img alt="Tote bag paint night" src={tote2} width='500' height='667' class="img-fluid" />
                    </Col>
                </Row>

                <hr style={hrStyle} />

                <Row>
                    <Col xs={12} md={6}>
                        <img alt="Women in engineering celebration" src={womenEngCelebration} width='500' height='667' class="img-fluid" />
                    </Col>
                    <Col xs={12} md={6}>
                        <h2>Our Focus</h2>
                        <p style={{ fontSize: "20px" }}>
                            We have three core areas of focus: Academia, Professional Development, and Community. Within each focus, we provide low-commitment opportunities to support our members.
                            <br></br>
                            <br></br>
                            Example of opportunities we host include (but are not limited to):
                            <br></br>
                            Academia: review sessions and study hours
                            <br></br>
                            Professional Development: networking events and speaker series
                            <br></br>
                            Community: tote bag paint night and exam fuel and chill
                        </p>
                    </Col>
                </Row>

                <hr style={hrStyle} />

                <Row>
                    <Col xs={12} md={6}>
                        <h2>The Revival</h2>
                        <p style={{ fontSize: "20px" }}>
                            WECS was restarted in October 2023 by Emily, the current President.
                            She took the initiative to find previous WECS members, hunt for account passwords, and build a dedicated team of awesome people.
                            <br></br>
                            <br></br>
                            We will be celebrating our first birthday since the revival on November 1st, check out our <Link to="/calendar">Events Page</Link> for more info!
                        </p>
                    </Col>
                    <Col xs={12} md={6}>
                        <img alt="Silly team" src={teamSilly} width='500' height='667' class="img-fluid" />
                    </Col>
                </Row>

            </Container>
            <br />
        </div>
    );
}

export default About;