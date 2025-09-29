import React from 'react';
import { FaEnvelope, FaInstagram, FaLinkedin, FaTree } from 'react-icons/fa';
import './contact.css';
import '../contact/ContactForm'
import ContactForm from '../contact/ContactForm';

//Logos
import Ella from "../../resources/executives/Ella.webp";



function SponsorPage() {
  // Sponsor data
  const sponsors = [
    { name: 'Schneider Electric', logo: Ella },
    { name: 'Certn', logo: '/images/certn-logo.png' },
    { name: 'Aviary Tech', logo: '/images/aviary-tech-logo.png' }
  ];

  // Community partners data
  const partners = [
    { name: 'Greater Victoria School District', logo: '/images/gvsd-logo.png' },
    { name: 'Island Women in Science and Technology', logo: '/images/iwist-logo.png' },
    { name: 'Cinecenta', logo: '/images/cinecenta-logo.png' },
    { name: 'GEM (Gender Empowerment Mentorship)', logo: '/images/gem-logo.png' },
    { name: 'Her Campus', logo: '/images/hercampus-logo.png' },
    { name: 'Anti-Violence Project (AVP)', logo: '/images/avp-logo.png' }
  ];

  return (
    <div className="contact-page">
      <header className="contact-hero">
        <h1>Our Sponsors & Partners</h1>
        <p>
          Thank you to the sponsors and community partners who help make WECS possible.
           Your support allows us to host the events, workshops, and activities that 
           bring our community together – from study sessions and networking events to 
           tote bag paint nights and everything in between.
        </p>
      </header>

      {/* Sponsors Section */}
      <section className="contact-hero">
        <h2>Previous Sponsors</h2>
        <p>
          A huge thank you to the companies that have supported our events 
          and believed in our mission:
          Thanks for believing in what we're doing and helping fund our
          events. Your support lets us host hackathons, workshops, and all the activities that bring our community together.
        </p>
        <div className="contact-info">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="contact-card">
              <img src={sponsor.logo} alt={`${sponsor.name} logo`} style={{ maxWidth: '150px', maxHeight: '100px', objectFit: 'contain' }} />
              <p>{sponsor.name}</p>
            </div>
          ))}
        </div>
        <p>
          Your contributions help us create meaningful opportunities for women 
          and gender-non-conforming students in engineering and computer science.
        </p>
      </section>

      {/* Community Partners Section */}
      <section className="contact-hero">
        <h2>Community Partners</h2>
        <p>
          Big shoutout to the groups and organizations we've worked with who 
          help us build community and support our members:
          Thanks for collaborating with us and helping create a welcoming 
          space. Whether we're co-hosting events, sharing resources, or just 
          supporting each other's missions, we appreciate being part of a 
          bigger community working toward similar goals.
        </p>
        <div className="contact-info">
          {partners.map((partner, index) => (
            <div key={index} className="contact-card">
              <img src={partner.logo} alt={`${partner.name} logo`} style={{ maxWidth: '150px', maxHeight: '100px', objectFit: 'contain' }} />
              <p>{partner.name}</p>
            </div>
          ))}
        </div>
        <p>
          Whether it's collaborating on events, sharing resources, or just cheering us 
          on, we appreciate everyone who helps make WECS a welcoming space for our members.
        </p>
      </section>

      {/* Become a Sponsor Section */}
      <section className="contact-hero">
        <h2>Become a Sponsor</h2>
        <p>
          Whether you're a company looking to sponsor an event or an organization 
          interested in collaboration, we'd love to connect with you.
        </p>
         
        <div className="contact-resources">
          <h3>Why Sponsor WECS?</h3>
          <p>
            When you partner with us, you're directly supporting women and 
            gender-non-conforming students pursuing careers in tech. You're 
            showing that you value diversity in engineering and computer science, 
            and you're helping create opportunities for students to grow academically, 
            professionally, and as part of a community.
          </p>
          <ul style={{ textAlign: 'left', maxWidth: '600px', margin: '20px auto' }}>
            <li>Connect with talented students in engineering and computer science</li>
            <li>Support diversity and inclusion in tech</li>
            <li>Gain visibility at our events and on our platforms</li>
            <li>Make a meaningful impact in the local tech community</li>
          </ul>
        </div>

        <div className="contact-resources">
          <h3>Sponsorship Opportunities</h3>
          <p>
            Interested in sponsoring an event or exploring partnership opportunities? 
            We'd love to chat about how we can work together. Reach out to us using 
            any of the contact methods below! We offer various sponsorship levels for:
          </p>
          <ul style={{ textAlign: 'left', maxWidth: '600px', margin: '20px auto' }}>
            <li>Hackathons and coding events</li>
            <li>Professional development workshops</li>
            <li>Networking events</li>
            <li>Study sessions and exam prep programs</li>
          </ul>
        </div>

        <p style={{ marginTop: '30px', fontWeight: 'bold' }}>
          Ready to get involved? Contact us below to discuss sponsorship opportunities!
        </p>
      </section>

      {/* Contact Info Section */}
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

export default SponsorPage;

