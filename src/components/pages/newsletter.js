// import React from 'react';
// import march25 from "../../resources/newsletters/march25.png";
// import feb25 from "../../resources/newsletters/feb25.png";
// import jan25 from "../../resources/newsletters/jan25.png";

// import { Col, Container, Row } from 'react-bootstrap';

// const textStyle = {
//     textAlign: "center"
// };

// const Newsletter = () => {
//     return (
//         <div>
//             <h1 style={textStyle}>WECS Newsletter</h1>
//             <p style={textStyle}>Our newsletters are a great way to keep up with the resources, opportunities, and events available to you through WECS each month.
//                 <br />
//                 Sign up <a href="https://instagram.us21.list-manage.com/subscribe?u=f1586a8f88c058352d03ee000&id=544c4e006e">here</a> to have them sent to your email and never miss an issue!
//             </p>

//             <h3>Spring 2025 Issues</h3>
//             <p>
//                 Take a look at what we've been up to this semester!
//             </p>
//             <h4>March Issue</h4>
//             <Container>
//                 <Row>
//                     <Col xs={12} md={5}>
//                         <img alt="March Newsletter" src={march25} height="300px" />
//                     </Col>
//                     <Col xs={12} md={7}>
//                         <p>
//                         Spring has sprung! No more trudging to your 8:30 AM in the dark or stepping out of ECS at 5 PM only to find it's basically midnight. 
//                         As campus bursts into colour—from daffodils to cherry blossoms (and that one dramatic purple tree by the fountain)—WECS is here to help you  bloom too! 
//                         We’ve got exciting opportunities, incredible events, and more coming your way! So grab your sunglasses, find a sunny spot on the quad, and dive in.
//                             <br /><br />
//                             Continue reading <a href="https://us21.campaign-archive.com/?u=f1586a8f88c058352d03ee000&id=5f9cd1fb98">here</a>!
//                         </p>
//                     </Col>
//                 </Row>
//             </Container>
//             <Container>
//                 <Row>
//                     <h4>February Issue</h4>
//                     <Col xs={12} md={8}>
//                         <p>
//                         Love is in the air - and so are midterms! Welcome to the February edition of The WECS Scoop! 
//                         Whether you're falling for finite element analysis, crushing on control systems, or just trying to stay on good terms with your compiler, we’re here to add some sweetness to your month. 
//                         From exciting WECS events (like our upcoming Gal-entines event) to open positions and community support, consider this your friendly reminder that you’re not debugging or stress-testing life alone. 
//                         Wishing you a semester full of good vibes, great ideas, and low structural strain!
//                         <br /><br />
//                         Continue reading <a href="https://us21.campaign-archive.com/?u=f1586a8f88c058352d03ee000&id=981abb26c7">here</a>!
//                         </p>
//                     </Col>
//                     <Col xs={12} md={4}>
//                         <img alt="February Newsletter" src={feb25} height="300px" />
//                     </Col>
//                 </Row>
//             </Container>
//             <Container>
//                 <Row>
//                     <h4>January Issue</h4>
//                     <Col xs={12} md={5}>
//                         <img alt="January Newsletter" src={jan25} height="300px" />
//                     </Col>
//                     <Col xs={12} md={7}>
//                         <p>
//                         Welcome to the first WECS Scoop of 2025! I hope your break was restful, fun and everything you needed!
//                         As we hit the ground running with this new term,  whether your New Year’s resolution is to spend more time in the library, 
//                         or to never step foot in the library again, I'm here to tell you about the fun WECS events coming up, open positions with us and 
//                         remind you that we’ve got your back and are wishing you your best semester yet!
//                         <br /><br />
//                         Continue reading <a href="https://us21.campaign-archive.com/?u=f1586a8f88c058352d03ee000&id=51e62cb39c">here</a>!
//                         </p>
//                     </Col>
//                 </Row>

//             </Container>
//             <br />
//             <h4>Older Issues</h4>
//             <p>
//                 Check out the December 2024 edition <a href="https://us21.campaign-archive.com/?u=f1586a8f88c058352d03ee000&id=f10ed27d8b">here</a>!
//                 <br />
//                 Check out the November 2024 edition <a href="https://us21.campaign-archive.com/?u=f1586a8f88c058352d03ee000&id=fdaa601c48">here</a>!
//                 <br />
//                 Check out the October 2024 edition <a href="https://us21.campaign-archive.com/?u=f1586a8f88c058352d03ee000&id=b5919fa0f6">here</a>!
//                 <br />
//                 Check out the Bonus September 2024 edition <a href="https://us21.campaign-archive.com/?u=f1586a8f88c058352d03ee000&id=86e9a7db0e">here</a>!
//                 <br />
//                 Check out the September 2024 edition <a href="https://us21.campaign-archive.com/?u=f1586a8f88c058352d03ee000&id=1cd27c8dae">here</a>!
//             </p>
//         </div>
//     );
// }

// export default Newsletter;
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import march25 from "../../resources/newsletters/march25.png";
import feb25 from "../../resources/newsletters/feb25.png";
import apr25 from "../../resources/newsletters/apr25.png";

const issues = [
  {
    title: 'March Issue',
    season: 'Spring 2025',
    image: march25,
    description: `Spring has sprung! No more trudging to your 8:30 AM in the dark or stepping out of ECS at 5 PM only to find it's basically midnight. As campus bursts into colour—from daffodils to cherry blossoms (and that one dramatic purple tree by the fountain)—WECS is here to help you bloom too! We’ve got exciting opportunities, incredible events, and more coming your way! So grab your sunglasses, find a sunny spot on the quad, and dive in.`,
    link: 'https://us21.campaign-archive.com/?u=f1586a8f88c058352d03ee000&id=5f9cd1fb98'
  },
  {
    title: 'February Issue',
    season: 'Spring 2025',
    image: feb25,
    description: `Love is in the air - and so are midterms! Welcome to the February edition of The WECS Scoop! Whether you're falling for finite element analysis, crushing on control systems, or just trying to stay on good terms with your compiler, we’re here to add some sweetness to your month. From exciting WECS events (like our upcoming Gal-entines event) to open positions and community support, consider this your friendly reminder that you’re not debugging or stress-testing life alone. Wishing you a semester full of good vibes, great ideas, and low structural strain!`,
    link: 'https://us21.campaign-archive.com/?u=f1586a8f88c058352d03ee000&id=981abb26c7'
  },
  {
    title: 'January Issue',
    season: 'Spring 2025',
    image: jan25,
    description: `Welcome to the first WECS Scoop of 2025! I hope your break was restful, fun and everything you needed! As we hit the ground running with this new term, whether your New Year’s resolution is to spend more time in the library, or to never step foot in the library again, I'm here to tell you about the fun WECS events coming up, open positions with us and remind you that we’ve got your back and are wishing you your best semester yet!`,
    link: 'https://us21.campaign-archive.com/?u=f1586a8f88c058352d03ee000&id=51e62cb39c'
  }
];

export default function Newsletter() {
  return (
    <Container className="py-5">
      <header className="text-center mb-5">
        <h1>WECS Newsletter</h1>
        <p className="lead">
          Keep up with resources, opportunities, and events through WECS each month.
          <br />
          <a href="https://instagram.us21.list-manage.com/subscribe?u=f1586a8f88c058352d03ee000&id=544c4e006e">
            Sign up for email delivery
          </a>
        </p>
      </header>

      <h2 className="mb-4">Spring 2025 - Check out what we've been up to this semester!</h2>
      <Row xs={1} md={3} className="g-4">
        {issues.map((issue, idx) => (
          <Col key={idx}>
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={issue.image} alt={issue.title} className="img-fluid" />
              <Card.Body>
                <Card.Title>{issue.title}</Card.Title>
                <Card.Text>{issue.description}</Card.Text>
                <Button variant="primary" href={issue.link} target="_blank">
                  Read More
                </Button>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Season: {issue.season}</small>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>

      <section className="mt-5">
        <h2>Older Issues</h2>
        <ul>
          <li><a href="https://us21.campaign-archive.com/?u=f1586a8f88c058352d03ee000&id=f10ed27d8b">December 2024</a></li>
          <li><a href="https://us21.campaign-archive.com/?u=f1586a8f88c058352d03ee000&id=fdaa601c48">November 2024</a></li>
          <li><a href="https://us21.campaign-archive.com/?u=f1586a8f88c058352d03ee000&id=b5919fa0f6">October 2024</a></li>
          <li><a href="https://us21.campaign-archive.com/?u=f1586a8f88c058352d03ee000&id=86e9a7db0e">Bonus September 2024</a></li>
          <li><a href="https://us21.campaign-archive.com/?u=f1586a8f88c058352d03ee000&id=1cd27c8dae">September 2024</a></li>
        </ul>
      </section>
    </Container>
  );
}
