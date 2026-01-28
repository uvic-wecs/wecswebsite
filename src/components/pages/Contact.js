import React from 'react';
import { FaEnvelope, FaInstagram, FaLinkedin, FaTree } from 'react-icons/fa';
import './contact.css';
import '../contact/ContactForm'
import ContactForm from '../contact/ContactForm';

function Contact() {
  return (
    <div className="contact-page">
      <header className="contact-hero">
        <h1>Contact Us</h1>
        <p>
          If you're interested in learning more about our open positions, our events, or our club in general, we'd love to hear from you!
        </p>
      </header>
      <section className="contact-info">
        {/* Clickable card for Email */}
        <a href="mailto:uvicwecs.official@gmail.com" className="contact-card">
          <FaEnvelope size={70} />
          <p>Email us</p>
        </a>

        {/* Clickable card for Instagram */}
        <a href="https://www.instagram.com/uvicwecs/?hl=en" className="contact-card">
          <FaInstagram size={70} />
          <p>Check out our Instagram page</p>
        </a>

        {/* Clickable card for LinkedIn */}
        <a href="https://www.linkedin.com/company/uvic-wecs/posts/?feedView=all" className="contact-card">
          <FaLinkedin size={75} />
          <p>Connect with us on LinkedIn</p>
        </a>

        {/* Clickable card for Linktree */}
        <a href="https://linktr.ee/uvicwecs.official" className="contact-card">
          <FaTree size={70} />
          <p>Browse our Link Tree</p>
        </a>
      </section>

      <section className="contact-resources">
        <p>
          Looking for academic materials? Check out our {' '}
          <a href="https://drive.google.com/drive/folders/1ZMR8czpqLXWb6H-zDW35d1xOM5wE_mjN">Google Drive</a>.
          We have awesome materials for several first year courses and we're developing materials for select second year courses as well! 
          Keep an eye out, they are coming soon!
        </p>
      </section>
      <ContactForm />
    </div>
  );
}

export default Contact;

