import { FaEnvelope, FaInstagram, FaLinkedin, FaTree } from 'react-icons/fa';
import './sponsors.css';
import '../contact/ContactForm'
import { Col, Container, Row, Image } from 'react-bootstrap';

//Sponsorship HerCode Hackathon
import HerCode from "../../resources/sponsors/CodeHer.webp";
import SponsorTier from "../../resources/sponsors/SponsorTiers.webp";

//Sponsorship logos
import Schneider from "../../resources/sponsors/Schneider.webp";
import Certn from "../../resources/sponsors/Certn1.webp";
import AviaryTech from "../../resources/sponsors/AviaryTech1.webp";


const SponsorPage = () => {

  return (
    <Container>
      <Row>
        <h1>Our Sponsors</h1>
        <p> Thank you to the sponsors who help make WECS possible.
          Your support allows us to host the events, workshops, and activities that
          bring our community together – from study sessions and networking events to
          tote bag paint nights and everything in between.</p>
      </Row>

      <Row>
        <h1>Why Sponsor WECS?</h1>
        <p>
          When you partner with us, you're directly supporting women and
          gender-non-conforming students pursuing careers in tech. You're
          showing that you value diversity in engineering and computer science,
          and you're helping create opportunities for students to grow academically,
          professionally, and as part of a community.
        </p>
        <ul style={{ listStyleType: 'circle' }}>
          <li>Connect with talented students in engineering and computer science</li>
          <li>Support diversity and inclusion</li>
          <li>Gain visibility at our events and on our platforms</li>
        </ul>
      </Row>
      <Row>
        <h1>Sponsorship Opportunities</h1>
        <p>
          Interested in sponsoring an event or exploring partnership opportunities?
          We'd love to chat about how we can work together. Reach out to us using
          any of the contact methods below! We offer various sponsorship levels for:
        </p>
        <ul style={{ listStyleType: 'circle' }}>
          <li>Hackathons</li>
          <li>Nerworking Events</li>
          <li>Professional Development Workshops (Website Development, Personal Project Creation)</li>
        </ul>
      </Row>

      <Row>
        <h1>Hackathon Sponsorship</h1>
        <h3>CodeHer+ Hack-a-thon - January 2026</h3>
        <p>
          We're excited to host our second annual hackathon this January!
          This two-day event brings together approximately 100 students for
          an intermediate-level competitive coding experience. Below you'll
          find details about the event and sponsorship opportunities.
        </p>
        <Col xs={12} md={6}>
          <Image src={HerCode} fluid />
        </Col>
        <Col xs={12} md={6}>
          <Image src={SponsorTier} fluid />
        </Col>
      </Row>

      <Row>
        <Col>
          <a href="mailto:uvicwecs.official@gmail.com" className="contact-card">
            <FaEnvelope size={70} />
            <p>Email us</p>
          </a>
        </Col>

        <Col>
          <a href="https://www.instagram.com/uvicwecs/?hl=en" className="contact-card">
            <FaInstagram size={70} />
            <p>Check out our Instagram page</p>
          </a>
        </Col>

        <Col>
          <a href="https://www.linkedin.com/company/uvic-wecs/posts/?feedView=all" className="contact-card">
            <FaLinkedin size={75} />
            <p>Connect with us on LinkedIn</p>
          </a>
        </Col>

        <Col>
          <a href="https://linktr.ee/uvicwecs.official" className="contact-card">
            <FaTree size={70} />
            <p>Browse our Link Tree</p>
          </a>
        </Col>

      </Row>
    </Container>
  )
}

export default SponsorPage