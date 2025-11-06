import tote2 from '../../resources/about/Tote Bag 2.webp';
import womenEngCelebration from '../../resources/about/Women in Eng Celebration.webp';
import teamSilly from '../../resources/about/Team Silly.webp';
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
                            Women in Engineering and Computer Science (WECS) has a goal to create a community for women and gender-non-conforming individuals at the University of Victoria to grow as students and professionals.
                            <br/><br/>
                            Women make up around 19% of students in the faculty of Engineering and Computer Science. We hope that by providing women with more opportunities and community support, that number will continue to rise.
                            </p>
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
                            <br/><br/>
                            Opportunities we host include (but are not limited to):
                            <br/><br/>
                            Academia: final exam review sessions and study hours
                            <br/><br/>
                            Professional Development: networking events and skill development workshops
                            <br/><br/>
                            Community: tote bag paint night and phone case decorating
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
                            Over the last couple of years, our team has grown to 35 executives and we have hosted a number of new initiatives!
                        </p>
                    </Col>
                    <Col xs={12} md={6}>
                        <img alt="Silly team" src={teamSilly} width='500' height='667' class="img-fluid" />
                    </Col>
                </Row>

                <hr style={hrStyle} />

                <Row>
                    <h2>Inclusivity Statement</h2>
                    <p style={{ fontSize: "20px" }}>
                    WECS recognizes that our community is diverse, and that every member of community will be impacted differently by discrimination based on their race, gender, sex, sexual orientation, disability, class status, religion, and many other factors. We serve our community with the understanding that the intersection and overlap of these identities means that everyone will have unique life experiences.
                    We are dedicated to continuous learning and growth as individuals, students, and professionals.
                    </p>
                </Row>

            </Container>
            <br />
        </div>
    );
}

export default About;