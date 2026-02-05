import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";

import sept25 from "../../resources/newsletters/sept25.webp";
import nov25 from "../../resources/newsletters/nov25.webp";

import jan26 from "../../resources/newsletters/jan26.webp";

const issuesSpring26 = [
  {
    title: 'January Issue',
    semester: 'Spring 2026',
    image: jan26,
    description: 'Welcome to 2026!  The past year has been a fantastic one for WECS. From hosting a wonderful AGM to board game and bingo nights to helpful exam review sessions, it’s been a whirlwind! Now, as we enter another year of not so patiently waiting for the cherry blossoms to bloom (and listening to the never ending noise of the ECS construction),  we are alongside you every step of the way! The most amazing thing about this faculty is the community students have built within it and we are, as always, thrilled to meet you, connect with you, and survive our undergrads together. So stick around and read through the newsletter to see what we’ve got planned this month!',
    link: 'https://us21.campaign-archive.com/?u=f1586a8f88c058352d03ee000&id=a7e758135c'
  }
]

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
        Spring 2026 — Check out what we’ve been up to this semester!
      </h2>

      <Row xs={1} md={2} className="g-4">
        {issuesSpring26.map((issue, idx) => (
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

      <h2 className="mb-4 mt-5 text-center">
        Fall 2025 — Check out what we were up to last semester!
      </h2>

      <Row xs={1} md={2} className="g-4">
        {issuesFall.map((issue, idx) => (
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
