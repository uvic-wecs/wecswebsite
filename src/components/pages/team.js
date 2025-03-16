import React, { useState } from 'react';
import { Link } from "react-router-dom";

import Emily from "../../resources/Emily.JPG";
import Charli from "../../resources/Charli.jpg";
import Tobi from "../../resources/Tobi.png";
import Jenny from "../../resources/Jenny.jpg";
import Grace from "../../resources/Grace.jpg";
import Ella from "../../resources/Ella.jpg";
import Malsha from "../../resources/Malsha.JPG";
import Sam from "../../resources/Sam.webp";
import Sydney from "../../resources/Sydney.jpg";
import Alice from "../../resources/Alice.webp";
import Christina from "../../resources/Christina.avif";
import Fernanda from "../../resources/Fernanda.jpeg";
import Natasha from "../../resources/Natasha.avif";
import Amy from "../../resources/Amy.jpg";
import Helena from "../../resources/Helena.JPG"

import wecsLogo from "../../resources/WECS Logo.png";
import pinkBackground from "../../resources/Pink Powder.jpg";
import wecsTeam from "../../resources/WECS Team.jpg";
import { Col, Container, Row, Image } from 'react-bootstrap';

const emilyBio = { src: Emily, title: 'Emily - President', description: 'Hello everyone and welcome to WECS! I’m very excited to be leading this team of amazing women. We have some great plans and look forward to meeting all of you! If you see me on campus, say hi! I will probably talk about my current netflix obsession or maybe my newest plant, but I’m sure we can find time to discuss WECS.' };
const charliBio = { src: Charli, title: 'Charli - Vice President', description: 'When I first started at UVic, I had no idea what writing code even meant, but it turns out that this coding thing is pretty cool! I\'m excited to be able to support other women in engineering and computer science this year and I hope to see you all at our upcoming events!' };
const isabellaBio = { src: pinkBackground, title: 'Isabella - VP Finance', description: '' };
const tobiBio = { src: Tobi, title: 'Tobi - VP Marketing', description: 'Hi everyone! I’m Tobi, a second-year student majoring in computer science and psychology combined. I love cats and tv-shows, and I moved here from Ireland but have now been living in Canada for six years. I am very excited to be a part of WECS and enhance our community within Engineering and Computer Science!' };
const tanviBio = { src: pinkBackground, title: 'Tanvi - Inclusivity Director', description: '' };
const jennyBio = { src: Jenny, title: 'Jenny - Media Director', description: 'This is my first year as a WECS member and I\'m excited to join. I hope to expand the community and help out as many students as possible! In my free time, I enjoy hiking and painting!' };
const fernandaBio = { src: Fernanda, title: 'Fernanda - Media Director', description: '' };
const ellaBio = { src: Ella, title: 'Ella - Website Director', description: 'My name is Ella and I\'m a fourth-year Software Engineering student. I\'m so excited to improve the WECS website and help build a welcoming community for women and gender non-conforming individuals in engineering and computer science as Website Director!' };
const graceBio = { src: Grace, title: 'Grace - Newsletter Director', description: 'Hello! My name is Grace and I’m going into my second year of Math and Comp Sci, and joined WECS May 2024. I’m looking forward to working with everyone and getting to use my creative skills making the newsletter!' };
const abbyBio = { src: pinkBackground, title: 'Abby - Discord Director', description: '' };
const malshaBio = { src: Malsha, title: 'Malsha - VP Community', description: 'Hi there! My name is Malsha and I am a third year mechanical engineering student. I joined WECS in April of 2024. I can’t wait to get to know you and for us to come together and have our voices heard :)' };
const fareessBio = { src: pinkBackground, title: 'Fareess - Community Events Director', description: 'Hi, my name is Fareess and I am currently a first year student at UVIC. I am originally from Calgary Alberta; I am super excited to be a part of WECS.' };
const helenaBio = { src: Helena, title: 'Helena - Community Events Director', description: "" };
const natashaBio = { src: Natasha, title: 'Natasha - Community Events Director', description: "Hey! Im Natasha! I started as a psychology student but webdev brought me to my combined major! I have interests in UI/UX, databases, and HCI. I can’t wait to create events with this team!" };
const samBio = { src: Sam, title: 'Sam - Operations Director', description: 'Hello! My name is Sam and I’m in my third year studying civil engineering and philosophy/ethics. I’ve been part of WECS since late 2023 and I’m super excited to continue to help foster a community for students here at UVic :)' };
const christinaBio = { src: Christina, title: 'Accepting Applications - VP Professional Development', description: "Hi! I’m Christina, a third-year Computer Science major with a Mathematics minor. I’m excited to be part of WECS and to work with such an inspiring group of people. I can’t wait to support everyone in growing their professional skills and exploring all the amazing opportunities ahead!" };
const athaliahBio = { src: pinkBackground, title: 'Athaliah - Speaker Series Director', description: "" };
const sydneyBio = { src: Sydney, title: 'Sydney - VP Academia', description: 'Hey, my name is Sydney and I joined WECS in May 2024. I’m in my third year of software engineering and I’m excited to get involved with WECS and run some awesome events! I get excited about Star Trek and slugs and I love arts and crafts!' };
const claireBio = { src: pinkBackground, title: 'Claire - Academic Materials Director', description: 'Hi everyone! I am a 3rd year CompSci student this year. I was recently introduced to WECS by Charli and am excited to work with the team to grow the community here at UVic. I’ve always been interested in STEM and only discovered my love for programming last year; I really enjoy being a part of this community.' };
const natalieBio = {
  src: wecsLogo, title: 'Natalie - Review Sessions Director', description: <p>The Review Sessions Director is responsible for managing the review sessions. This includes maintaining a list of midterm and final exam dates, finding upper-year students to lead and support sessions, organizing the sessions, and delegating tasks to WECS members as needed.  <br /> <br />
    The Academia Committee organizes events, seminars and workshops that focus on improving the academic performance of students. In doing so, the committee provides all students, irrespective of gender, who attend events with the confidence and tools to succeed in their courses. <br /> <br />
  </p>
};
const emmaBio = {
  src: wecsLogo, title: 'Emma - Study Director', description: <p>The Study Director is responsible for managing the study hour sessions and study groups. This includes running weekly sessions, finding upper-year support students, and organizing coffee, tea and snacks. <br /> <br />
    The Academia Committee organizes events, seminars and workshops that focus on improving the academic performance of students. In doing so, the committee provides all students, irrespective of gender, who attend events with the confidence and tools to succeed in their courses. <br /> <br />
  </p>
};
const vpOutreachPosition = {src: wecsLogo, title: 'Accepting Applications - VP Outreach', description: <p>The VP Outreach is responsible for managing the outreach team, including Corporate and Partnership Directors . This includes running bi-weekly or weekly meetings with all committee members, goal setting, and task delegation. VP Outreach will collaborate with the President to ensure that all activities align with our organization’s goals and scope. <br /> <br />
          The Corporate Directors are responsible for finding corporate partners for events and operations. They attend networking events and cold email to find new partners.  <br /> <br />
          The Partnership Director is responsible for managing our relationship with other clubs and organizations. Their responsibilities can range from email communications and updates to event planning and execution. We have existing relationships that need to be maintained and each director is expected to create and manage new relationships. <br /> <br />
          For more information, check out our <Link to="/positions">open positions</Link> page.</p>
      };
const aliceBio = { src: Alice, title: 'Alice - Corporate Outreach Director', description: 'Hi all! Super excited to be working in WECS to bring events and activities to the ENG community!  :) In my free time, I like to read manga and work on projects. Hope to see everyone soon!' };
const amyBio = { src: Amy, title: 'Amy - Corporate Outreach Director', description: '' };
const pavitBio = {
  src: pinkBackground, title: 'Accepting Applications - Partnership Director', description: <p>The Partnership Director is responsible for managing communication between WECS and other UVic-related groups. This includes other UVic Clubs and Course Unions, the ESS, the UVSS, and the Engineering and Computer Science Departments. The Partnership Director will collaborate with the VP Outreach to ensure WECS is informed of internal events and communications. <br /> <br />
    For more information, check out our <Link to="/positions">open positions</Link> page.</p>
};
const partnershipPosition = {
  src: wecsLogo, title: 'Accepting Applications - Partnership Director', description: <p>The Partnership Director is responsible for managing communication between WECS and other UVic-related groups. This includes other UVic Clubs and Course Unions, the ESS, the UVSS, and the Engineering and Computer Science Departments. The Partnership Director will collaborate with the VP Outreach to ensure WECS is informed of internal events and communications. <br /> <br />
    For more information, check out our <Link to="/positions">open positions</Link> page.</p>
};
const externalOutreachPosition = {
  src: wecsLogo, title: 'Accepting Applications - External Outreach Director', description: <p>The VP External Outreach is responsible for managing the communication between WECS and groups and organizations outside of UVic. This includes local high schools, and community groups and organizations (Rotary). The External Outreach Director will collaborate with the VP Outreach to ensure WECS is informed of external events and communications. <br /> <br />
    For more information, check out our <Link to="/positions">open positions</Link> page.</p>
};

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };

  const handleClose = () => {
    setSelectedPhoto(null);
  };

  return (
    <Container>
      <Row className='text-center'>
        <h1>Our Team</h1>
        <h4>Meet the wonderful team behind WECS!
          <br></br>
          Look out for our logo - those are our open positions!
        </h4>
        <Col xs={12} md={10} className='mx-auto'>
          <Image src={wecsTeam} alt="The WECS team" className="img-fluid" />
        </Col>

      </Row>

      <Row className='my-3'>
        <h3>Presidential Team</h3>
        <Col xs={12} md={6} className='text-center'>
          <Image src={emilyBio.src} alt={emilyBio.title} style={styles.thumbnail} onClick={() => handlePhotoClick(emilyBio)} />
        </Col>
        <Col xs={12} md={6} className='text-center'>
          <Image src={charliBio.src} alt={charliBio.title} style={styles.thumbnail} onClick={() => handlePhotoClick(charliBio)} />
        </Col>
      </Row>

      <Row className='my-3'>
        <h3>Administration Team</h3>
        <Col xs={12} md={4} className='text-center'>
          <Image src={isabellaBio.src} alt={isabellaBio.title} style={styles.thumbnail} onClick={() => handlePhotoClick(isabellaBio)} />
        </Col>
        <Col xs={12} md={4} className='text-center'>
          <Image src={tobiBio.src} alt={tobiBio.title} style={styles.thumbnail} onClick={() => handlePhotoClick(tobiBio)} />
        </Col>
        <Col xs={12} md={4} className='text-center'>
          <Image src={tanviBio.src} alt={tanviBio.title} style={styles.thumbnail} onClick={() => handlePhotoClick(tanviBio)} />
        </Col>
      </Row>

      <Row className='my-3'>
        <h3>Marketing Team</h3>
        <Col xs={12} md={4} className='text-center'>
          <Image src={tobiBio.src} alt={tobiBio.title} style={styles.thumbnail} onClick={() => handlePhotoClick(tobiBio)} />
        </Col>
        <Col xs={12} md={4} className='text-center'>
          <Image src={jennyBio.src} alt={jennyBio.title} style={styles.thumbnail} onClick={() => handlePhotoClick(jennyBio)} />
        </Col>
        <Col xs={12} md={4} className='text-center'>
          <Image src={fernandaBio.src} alt={fernandaBio.title} style={styles.thumbnail} onClick={() => handlePhotoClick(fernandaBio)} />
        </Col>
        <Col xs={12} md={4} className='text-center'>
          <Image src={ellaBio.src} alt={ellaBio.title} style={styles.thumbnail} onClick={() => handlePhotoClick(ellaBio)} />
        </Col>
        <Col xs={12} md={4} className='text-center'>
          <Image src={graceBio.src} alt={graceBio.title} style={styles.thumbnail} onClick={() => handlePhotoClick(graceBio)} />
        </Col>
        <Col xs={12} md={4} className='text-center'>
          <Image src={abbyBio.src} alt={abbyBio.title} style={styles.thumbnail} onClick={() => handlePhotoClick(abbyBio)} />
        </Col>
      </Row>

      <Row className='my-3'>
        <h3>Community Team</h3>
        <Col xs={12} md={4} className='text-center'>
          <Image src={malshaBio.src} alt={malshaBio.title} style={styles.thumbnail} onClick={() => handlePhotoClick(malshaBio)} />
        </Col>
        <Col xs={12} md={4} className='text-center'>
          <Image src={helenaBio.src} alt={helenaBio.title} style={styles.thumbnail} onClick={() => handlePhotoClick(helenaBio)} />
        </Col>
        <Col xs={12} md={4} className='text-center'>
          <Image src={natashaBio.src} alt={natashaBio.title} style={styles.thumbnail} onClick={() => handlePhotoClick(natashaBio)} />
        </Col>
        <Col xs={12} md={6} className='text-center'>
          <Image src={samBio.src} alt={samBio.title} style={styles.thumbnail} onClick={() => handlePhotoClick(samBio)} />
        </Col>
        <Col xs={12} md={6} className='text-center'>
          <Image src={fareessBio.src} alt={fareessBio.title} style={styles.thumbnail} onClick={() => handlePhotoClick(fareessBio)} />
        </Col>
      </Row>

      <Row className='my-3'>
        <h3>Professional Development Team</h3>
        <Col xs={12} md={6} className='text-center'>
          <Image src={christinaBio.src} alt={christinaBio.title} style={styles.thumbnail} onClick={() => handlePhotoClick(christinaBio)} />
        </Col>
        <Col xs={12} md={6} className='text-center'>
          <Image src={athaliahBio.src} alt={athaliahBio.title} style={styles.thumbnail} onClick={() => handlePhotoClick(athaliahBio)} />
        </Col>
      </Row>

      <Row className='my-3'>
        <h3>Academia Team</h3>
        <Col xs={12} md={3} className='text-center'>
          <Image src={sydneyBio.src} alt={sydneyBio.title} style={styles.thumbnail} onClick={() => handlePhotoClick(sydneyBio)} />
        </Col>
        <Col xs={12} md={3} className='text-center'>
          <Image src={claireBio.src} alt={claireBio.title} style={styles.thumbnail} onClick={() => handlePhotoClick(claireBio)} />
        </Col>
        <Col xs={12} md={3} className='text-center'>
          <Image src={natalieBio.src} alt={natalieBio.title} style={styles.thumbnail} onClick={() => handlePhotoClick(natalieBio)} />
        </Col>
        <Col xs={12} md={3} className='text-center'>
          <Image src={emmaBio.src} alt={emmaBio.title} style={styles.thumbnail} onClick={() => handlePhotoClick(emmaBio)} />
        </Col>
      </Row>

      <Row className='my-3'>
        <h3>Outreach Team</h3>
        <Col xs={12} md={4} className='text-center'>
          <Image src={vpOutreachPosition.src} alt={vpOutreachPosition.title} style={styles.thumbnail} onClick={() => handlePhotoClick(vpOutreachPosition)} />
        </Col>
        <Col xs={12} md={4} className='text-center'>
          <Image src={aliceBio.src} alt={aliceBio.title} style={styles.thumbnail} onClick={() => handlePhotoClick(aliceBio)} />
        </Col>
        <Col xs={12} md={4} className='text-center'>
          <Image src={amyBio.src} alt={amyBio.title} style={styles.thumbnail} onClick={() => handlePhotoClick(amyBio)} />
        </Col>

        <Col xs={12} md={4} className='text-center'>
          <Image src={pavitBio.src} alt={pavitBio.title} style={styles.thumbnail} onClick={() => handlePhotoClick(pavitBio)} />
        </Col>
        <Col xs={12} md={4} className='text-center'>
          <Image src={partnershipPosition.src} alt={partnershipPosition.title} style={styles.thumbnail} onClick={() => handlePhotoClick(partnershipPosition)} />
        </Col>
        <Col xs={12} md={4} className='text-center'>
          <Image src={externalOutreachPosition.src} alt={externalOutreachPosition.title} style={styles.thumbnail} onClick={() => handlePhotoClick(externalOutreachPosition)} />
        </Col>
      </Row>

      {selectedPhoto && (
        <div style={styles.modalOverlay} onClick={handleClose}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <span style={styles.closeButton} onClick={handleClose}>×</span>
            <Row className="g-4">
                <Col xs={12} md={6} className="d-flex justify-content-center">
                  <img
                    src={selectedPhoto.src}
                    alt={selectedPhoto.title}
                    className="img-fluid"
                    style={{ maxHeight: '400px', objectFit: 'contain' }}
                  />
                </Col>
                <Col xs={12} md={6} className="d-flex flex-column align-items-start">
                  <h2>{selectedPhoto.title}</h2>
                  <p>{selectedPhoto.description}</p>
                </Col>
              </Row>
          </div>
        </div>
      )}
    </Container>
  );
};

const styles = {
  thumbnail: {
    maxWidth: '350px',
    maxHeight: '300px',
    flex: '1 1 auto',
    margin: '10px',
    cursor: 'pointer',
    objectFit: 'contain',
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    position: 'relative',
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    maxWidth: '80%',
    maxHeight: '80%',
    overflowY: 'auto',
  },
  closeButton: {
    position: 'absolute',
    top: '0px',
    right: '10px',
    cursor: 'pointer',
    fontSize: '24px',
  },
};

export default PhotoGallery;
