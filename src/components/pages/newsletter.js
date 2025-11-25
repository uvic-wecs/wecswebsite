import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";

import apr25 from "../../resources/newsletters/apr25.webp";
import march25 from "../../resources/newsletters/march25.webp";
import feb25 from "../../resources/newsletters/feb25.webp";
import jan25 from "../../resources/newsletters/jan25.webp";
import june25 from "../../resources/newsletters/june25.webp";

import sept25 from "../../resources/newsletters/sept25.png";
import nov25 from "../../resources/newsletters/nov25.png";


const issuesFall = [
  {
    title: 'September Issue',
    semester: 'Fall 2025',
    image: sept25,
    description: 'And just like that, another semester starts! As the weather turns from warm and sunny to a gorgeous fall chill, WECS is once again honoured to welcome you into a new semester with open arms and all the support we can give! Our upcoming AGM is one of the ways’s we like to kick off the semester with a great start, so keep reading for the full list of upcoming events, and more about the AGM. From all of us at WECS, we hope this is a fantastic semester for you! We will be alongside you, ready to lend a hand at any point in this journey! Enjoy the weather, and our beautiful campus, and let’s dive in to a new school year together!',
    link: 'https://us21.campaign-archive.com/?u=f1586a8f88c058352d03ee000&id=e072efef33'
  },
  {
    title: 'November Issue',
    semester: 'Fall 2025',
    image: nov25,
    description: 'As the weather gets colder and the leaves fall, our campus transforms into a thousand shades of brightly coloured foliage. Each student in our faculty is like one of these shimmering leaves - unique and extraordinary, and WECS is here to help each and every one shine their brightest. Over the last month, we’ve focused on helping students get a leg up in the job search, developing key resume and cover letter skills, as well as helping them build their own portfolio sites. We’ve also hosted fun events (we all need some relaxation between endless midterms), and some review sessions (for those aforementioned midterms). As we head into reading break, remember to pause to appreciate this gorgeous fall, relax and remember that WECS is always here to support you!',
    link: 'https://us21.campaign-archive.com/?u=f1586a8f88c058352d03ee000&id=caabf431c9'
  }
];


const issues = [
  {
    title: 'June Issue',
    semester: 'Summer 2025',
    image: june25,
    description: 'Happy Pride Month from all of us at WECS! We hope you’ve had an amazing month full of excitement, some relaxation after the last semester, and a lot of fun! This month’s newsletter is full of updates on what we’ve been up to, what’s coming next, and how you can get involved (including a few open positions we’re excited to share). Here’s to a summer full of connection, community, and support — now and always.',
    link: 'https://us21.campaign-archive.com/?u=f1586a8f88c058352d03ee000&id=1ff9b50fff'
  },
  {
    title: 'April Issue',
    semester: 'Spring 2025',
    image: apr25,
    description: `And just like that, another semester comes to an end! As we wrap things up, WECS is once again honoured to offer a wide variety of Final Exam Review Sessions to help you feel as confident as possible going into your exams. Keep reading for the full list of upcoming sessions—plus a few extra surprises along the way. From all of us, we wish you a fantastic exam semester. We’re here to help—and to remind you to take some moments to relax, recharge in the sun, celebrate Earth Day, and keep an eye out for George the Peacock on his daily walk!`,
    link: 'https://us21.campaign-archive.com/?u=f1586a8f88c058352d03ee000&id=f28300cfee'
  },
  {
    title: 'March Issue',
    semester: 'Spring 2025',
    image: march25,
    description: `Spring has sprung! No more trudging to your 8:30 AM in the dark or stepping out of ECS at 5 PM only to find it's basically midnight. As campus bursts into colour—from daffodils to cherry blossoms (and that one dramatic purple tree by the fountain)—WECS is here to help you bloom too! We’ve got exciting opportunities, incredible events, and more coming your way! So grab your sunglasses, find a sunny spot on the quad, and dive in.`,
    link: 'https://us21.campaign-archive.com/?u=f1586a8f88c058352d03ee000&id=5f9cd1fb98'
  },
  {
    title: 'February Issue',
    semester: 'Spring 2025',
    image: feb25,
    description: `Love is in the air - and so are midterms! Welcome to the February edition of The WECS Scoop! Whether you're falling for finite element analysis, crushing on control systems, or just trying to stay on good terms with your compiler, we’re here to add some sweetness to your month. From exciting WECS events (like our upcoming Gal-entines event) to open positions and community support, consider this your friendly reminder that you’re not debugging or stress-testing life alone. Wishing you a semester full of good vibes, great ideas, and low structural strain!`,
    link: 'https://us21.campaign-archive.com/?u=f1586a8f88c058352d03ee000&id=981abb26c7'
  },
  {
    title: 'January Issue',
    semester: 'Spring 2025',
    image: jan25,
    description: `Welcome to the first WECS Scoop of 2025! I hope your break was restful, fun and everything you needed! As we hit the ground running with this new term, whether your New Year’s resolution is to spend more time in the library, or to never step foot in the library again, I'm here to tell you about the fun WECS events coming up, open positions with us and remind you that we’ve got your back and are wishing you your best semester yet!`,
    link: 'https://us21.campaign-archive.com/?u=f1586a8f88c058352d03ee000&id=51e62cb39c'
  }
];

// Remove default link styling so the entire card is clickable but text/image don't show the blue underline, etc.
const removeLinkStyling = {
  textDecoration: 'none',
  color: 'inherit',
};


export default function Newsletter() {
  return (
    <Container className="py-2">
      <header className="text-center mb-4">
        <h1>WECS Newsletter</h1>
        <p className="lead">
          Keep up with resources, opportunities, and events through WECS each month.
          <br />
          <a href="https://instagram.us21.list-manage.com/subscribe?u=f1586a8f88c058352d03ee000&id=544c4e006e" target="_blank" rel="noreferrer">
            Sign up for email delivery
          </a>
        </p>
      </header>

      <h2 className="mb-4 text-center">
        Fall 2025 — Check out what we’ve been up to this semester!
      </h2>

      <Row xs={1} md={2} className="g-4">
        {issuesFall.map((issue, idx) => (
          <Col key={idx}>
            <Link
              to={issue.link}
              style={removeLinkStyling}
            >
              <Card className="h-100 d-flex flex-column shadow-sm">
                <div style={{ height: 400, overflow: 'hidden' }}>
                  <Card.Img
                    variant="top"
                    src={issue.image}
                    alt={issue.title}
                    style={{
                      objectFit: 'cover',
                      objectWidth: 'cover',
                      height: '100%',
                      width: '100%',
                    }}
                  />
                </div>
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{issue.title}</Card.Title>
                  <Card.Text className="flex-grow-1">
                    {issue.description}
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="mt-auto">
                  <small className="text-muted">Semester: {issue.semester}</small>
                </Card.Footer>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>


      <h2 className="mb-4 mt-5 text-center">
        Spring 2025
      </h2>
      <Row xs={1} md={2} className="g-4">
        {issues.map((issue, idx) => (
          <Col key={idx}>
            <Link
              to={issue.link}
              style={removeLinkStyling}
              target='_blank'
            >
              <Card className="h-100 d-flex flex-column shadow-sm">
                <div style={{ height: 400, overflow: 'hidden' }}>
                  <Card.Img
                    variant="top"
                    src={issue.image}
                    alt={issue.title}
                    style={{
                      objectFit: 'cover',
                      objectWidth: 'cover',
                      height: '100%',
                      width: '100%',
                    }}
                  />
                </div>
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{issue.title}</Card.Title>
                  <Card.Text className="flex-grow-1">
                    {issue.description}
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="mt-auto">
                  <small className="text-muted">Semester: {issue.semester}</small>
                </Card.Footer>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
