import React from 'react';
import march25 from "../../resources/newsletters/march25.png";
import feb25 from "../../resources/newsletters/feb25.png";
import apr25 from "../../resources/newsletters/apr25.png";

import { Col, Container, Row } from 'react-bootstrap';

const textStyle = {
    textAlign: "center"
};

const Newsletter = () => {
    return (
        <div>
            <h1 style={textStyle}>WECS Newsletter</h1>
            <p style={textStyle}>Our newsletters are a great way to keep up with the resources, opportunities, and events available to you through WECS each month.
                <br />
                Sign up <a href="https://instagram.us21.list-manage.com/subscribe?u=f1586a8f88c058352d03ee000&id=544c4e006e">here</a> to have them sent to your email and never miss an issue!
            </p>

            <h3>Spring 2025 Issues</h3>
            <p>
                Take a look at what we've been up to this semester!
            </p>
            <Container>
                <Row>
                    <h4>April Issue</h4>
                    <Col xs={12} md={8}>
                    <p>
                    And just like that, another semester comes to an end! As we wrap things up, WECS is once again honoured to offer
                     a wide variety of Final Exam Review Sessions to help you feel as confident as possible going into your exams. 
                     Keep reading for the full list of upcoming sessions—plus a few extra surprises along the way. 
                     From all of us, we wish you a fantastic exam season. We’re here to help—and to remind you to take some moments to relax, 
                     recharge in the sun, celebrate Earth Day, and keep an eye out for George the Peacock on his daily walk!
                        <br /><br />
                        Continue reading <a href="https://us21.campaign-archive.com/?u=f1586a8f88c058352d03ee000&id=f28300cfee">here</a>!
                        </p>
                    </Col>
                    <Col xs={12} md={4}>
                    <img alt="April Newsletter" src={apr25} height="250px" />
                    </Col>
                </Row>
                
            </Container>
            <h4>March Issue</h4>
            <Container>
                <Row>
                    <Col xs={12} md={5}>
                        <img alt="March Newsletter" src={march25} height="300px" />
                    </Col>
                    <Col xs={12} md={7}>
                        <p>
                        Spring has sprung! No more trudging to your 8:30 AM in the dark or stepping out of ECS at 5 PM only to find it's basically midnight. 
                        As campus bursts into colour—from daffodils to cherry blossoms (and that one dramatic purple tree by the fountain)—WECS is here to help you  bloom too! 
                        We’ve got exciting opportunities, incredible events, and more coming your way! So grab your sunglasses, find a sunny spot on the quad, and dive in.
                            <br /><br />
                            Continue reading <a href="https://us21.campaign-archive.com/?u=f1586a8f88c058352d03ee000&id=5f9cd1fb98">here</a>!
                        </p>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <h4>February Issue</h4>
                    <Col xs={12} md={8}>
                        <p>
                        Love is in the air - and so are midterms! Welcome to the February edition of The WECS Scoop! 
                        Whether you're falling for finite element analysis, crushing on control systems, or just trying to stay on good terms with your compiler, we’re here to add some sweetness to your month. 
                        From exciting WECS events (like our upcoming Gal-entines event) to open positions and community support, consider this your friendly reminder that you’re not debugging or stress-testing life alone. 
                        Wishing you a semester full of good vibes, great ideas, and low structural strain!
                        <br /><br />
                        Continue reading <a href="https://us21.campaign-archive.com/?u=f1586a8f88c058352d03ee000&id=981abb26c7">here</a>!
                        </p>
                    </Col>
                    <Col xs={12} md={4}>
                        <img alt="February Newsletter" src={feb25} height="300px" />
                    </Col>
                </Row>
            </Container>
            <br />
            <h4>Older Issues</h4>
            <p>
                Check out the January 2025 edition <a href="https://us21.campaign-archive.com/?u=f1586a8f88c058352d03ee000&id=51e62cb39c">here</a>!
                <br />
                Check out the December 2024 edition <a href="https://us21.campaign-archive.com/?u=f1586a8f88c058352d03ee000&id=f10ed27d8b">here</a>!
                <br />
                Check out the November 2024 edition <a href="https://us21.campaign-archive.com/?u=f1586a8f88c058352d03ee000&id=fdaa601c48">here</a>!
                <br />
                Check out the October 2024 edition <a href="https://us21.campaign-archive.com/?u=f1586a8f88c058352d03ee000&id=b5919fa0f6">here</a>!
                <br />
                Check out the Bonus September 2024 edition <a href="https://us21.campaign-archive.com/?u=f1586a8f88c058352d03ee000&id=86e9a7db0e">here</a>!
                <br />
                Check out the September 2024 edition <a href="https://us21.campaign-archive.com/?u=f1586a8f88c058352d03ee000&id=1cd27c8dae">here</a>!
            </p>
        </div>
    );
}

export default Newsletter;