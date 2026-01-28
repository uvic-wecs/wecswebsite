import { useState } from 'react';
import { FaEnvelope, FaInstagram, FaLinkedin, FaTree, FaTimes } from 'react-icons/fa';
import './sponsors.css';
import '../contact/ContactForm'
import { Col, Container, Row, Image } from 'react-bootstrap';

// Hackathon sponsorship package
import CodeHer from "../../resources/sponsors/CodeHer.webp";
import SponsorTier from "../../resources/sponsors/SponsorTiers.webp";

const SponsorPage = () => {
  const [lightboxImage, setLightboxImage] = useState(null);

  const openLightbox = (image) => {
    setLightboxImage(image);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <Container className="sponsor-page">
      <Row className="hero-section">
        <Col>
          <h1 className="page-title">Our Sponsors</h1>
          <p className="hero-text">
            Thank you to the sponsors who help make WECS possible.
            Your support allows us to host the events, workshops, and activities that
            bring our community together – from study sessions and networking events to
            tote bag paint nights and everything in between.
          </p>
        </Col>
      </Row>

      <Row className="hackathon-section">
        <Col xs={12}>
          <h1 className="section-title">Hackathon Sponsorship</h1>
          <h3 className="hackathon-title">CodeHer+ Hack-a-thon - January 2026</h3>
          <p className="section-description">
            We're excited to host our second annual hackathon this January!
            This two-day event brings together approximately 100 students for
            an intermediate-level competitive coding experience. Below you'll
            find details about the event and sponsorship opportunities.
          </p>
        </Col>
        <Col xs={12} md={6} className="image-col">
          <div className='fade-in-images'>
            <Image 
              className='hackathon-info' 
              src={CodeHer} 
              fluid 
              onClick={() => openLightbox(CodeHer)}
              role="button"              tabIndex={0}
              onKeyPress={(e) => e.key === 'Enter' && openLightbox(CodeHer)}
            />
          </div>
        </Col>
        <Col xs={12} md={6} className="image-col">
          <div className='fade-in-images'>
            <Image 
              className='hackathon-info' 
              src={SponsorTier} 
              fluid 
              onClick={() => openLightbox(SponsorTier)}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => e.key === 'Enter' && openLightbox(SponsorTier)}
            />
          </div>
        </Col>
      </Row>

      <Row className="why-sponsor-section">
        <Col xs={12}>
          <h1 className="section-title">Why Sponsor WECS?</h1>
          <p className="section-description">
            When you partner with us, you're directly supporting women and
            gender-non-conforming students pursuing careers in engineering and computer science. You're
            showing that you value diversity in engineering and computer science,
            and you're helping create opportunities for students to grow academically,
            professionally, and as part of a community.
          </p>
          <ul className="benefits-list">
            <li>Connect with talented students in engineering and computer science</li>
            <li>Support diversity and inclusion</li>
            <li>Gain visibility at our events and on our platforms</li>
          </ul>
        </Col>
      </Row>

      <Row className="contact-section">
        <Col xs={12}>
          <h2 className="contact-heading">Get In Touch</h2>
        </Col>
        <Col xs={12} sm={6} lg={3}>
          <a href="mailto:uvicwecs.official@gmail.com" className="contact-card">
            <FaEnvelope className="contact-icon" />
            <p>Email us</p>
          </a>
        </Col>

        <Col xs={12} sm={6} lg={3}>
          <a href="https://www.instagram.com/uvicwecs/?hl=en" className="contact-card">
            <FaInstagram className="contact-icon" />
            <p>Check out our Instagram page</p>
          </a>
        </Col>

        <Col xs={12} sm={6} lg={3}>
          <a href="https://www.linkedin.com/company/uvic-wecs/posts/?feedView=all" className="contact-card">
            <FaLinkedin className="contact-icon" />
            <p>Connect with us on LinkedIn</p>
          </a>
        </Col>

        <Col xs={12} sm={6} lg={3}>
          <a href="https://linktr.ee/uvicwecs.official" className="contact-card">
            <FaTree className="contact-icon" />
            <p>Browse our Link Tree</p>
          </a>
        </Col>
      </Row>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">
            <FaTimes />
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={lightboxImage} alt="Fullscreen view" className="lightbox-image" />
          </div>
        </div>
      )}
    </Container>
  )
}

export default SponsorPage