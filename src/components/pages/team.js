import React, { useState } from 'react';
import { Link } from "react-router-dom";

import Emily from "../../resources/executives/Emily.webp";
import Charli from "../../resources/executives/Charli.webp";
import Tobi from "../../resources/executives/Tobi.webp";
import Jenny from "../../resources/executives/Jenny.webp";
import Grace from "../../resources/executives/Grace.webp";
import Ella from "../../resources/executives/Ella.webp";
import Malsha from "../../resources/executives/Malsha.webp";
import Sydney from "../../resources/executives/Sydney.webp";
import Alice from "../../resources/executives/Alice.webp";
import Christina from "../../resources/executives/Christina.avif";
import Fernanda from "../../resources/executives/Fernanda.webp";
import Natasha from "../../resources/executives/Natasha.avif";
import Amy from "../../resources/executives/Amy.webp";
import Helena from "../../resources/executives/Helena.webp";
import Fareess from "../../resources/executives/Fareess.webp";
import Abby from "../../resources/executives/Abby.webp";
import Pavit from "../../resources/executives/Pavit.webp";
import Emma from "../../resources/executives/Emma.webp";
import Tanvi from "../../resources/executives/Tanvi.webp";
import EmilyMinnie from "../../resources/executives/Emily and Minnie.webp";
import Natalie from "../../resources/executives/Natalie.webp";

import wecsLogo from "../../resources/executives/WECS Logo.webp";
import pinkBackground from "../../resources/executives/Pink Powder.webp";
import wecsTeam from "../../resources/executives/WECS Team.webp";
import { Col, Container, Row, Image } from 'react-bootstrap';


const emilyBio = {
  src: Emily, title: <p>Emily - President</p>, description: <p>
    Hello everyone and welcome to WECS! I'm Emily, a 3rd(ish) year Software Engineering student.
    I revived this club in October 2023 in hopes to create a safe space for gender minorities in ECS, my team and I are constantly working to reach that goal.
    <br /><br />
    In my role as president, I work with my VP team to ensure all members of WECS are supported and have everything they need to do their job.
    I also promote WECS to external organizations through council meetings, speaking events, and advocacy.
    <br /><br />
    Outside of WECS, I also lead the Women in Engineering, Science, and Technology (WEST) student club, which provides women with engineering skill development through design projects.
    But outside of UVic and engineering, I don't have much time, but the time I do have is spent with my dog (please ask me about her- she is my favourite thing to talk about).
  </p>
};
const emilyBioWithMinnie = {
  src: EmilyMinnie, title: <p>Emily - President</p>, description: <p>
    Hello everyone and welcome to WECS! I'm Emily, a 3rd(ish) year Software Engineering student.
    I revived this club in October 2023 in hopes to create a safe space for gender minorities in ECS, my team and I are constantly working to reach that goal.
    <br /><br />
    In my role as president, I work with my VP team to ensure all members of WECS are supported and have everything they need to do their job.
    I also promote WECS to external organizations through council meetings, speaking events, and advocacy.
    <br /><br />
    Outside of WECS, I also lead the Women in Engineering, Science, and Technology (WEST) student club, which provides women with engineering skill development through design projects.
    But outside of UVic and engineering, I don't have much time, but the time I do have is spent with my dog (please ask me about her- she is my favourite thing to talk about).
  </p>
};
const charliBio = {
  src: Charli, title: <p>Charli - Vice President</p>, description: <p>
    Hey, I'm Charli and I'm a third(ish) year computer science honours student here at UVic!
    I joined WECS when Emily revived the club back in 2023 and spent a few semesters organizing final exam review sessions before moving into the Vice President role.
    Now I mostly do random things! I made this website, so hopefully you think it's cool.
    I'm also passionate about feminism, intersectionality, and advocacy so I'm often reaching out to other groups on campus to collaborate and learn!
  </p>
};
const isabellaBio = { src: pinkBackground, title: <p>Isabella - VP Finance</p>, description: <p></p> };
const tobiBio = { src: Tobi, title: <p>Tobi - VP Marketing</p>, description: <p>Hi everyone! I’m Tobi, a third-year combined Psychology and Computer Science major. I have been part of WECS since its revival in 2023 as VP Marketing, and as of Fall 2024, HR Director. I love working with the team and am excited to continue working towards our goals of building community and creating opportunities for gender minorities in ECS!</p> };
const tobiBioHR = { src: Tobi, title: <p>Tobi - HR</p>, description: <p>Hi everyone! I’m Tobi, a third-year combined Psychology and Computer Science major. I have been part of WECS since its revival in 2023 as VP Marketing, and as of Fall 2024, HR Director. I love working with the team and am excited to continue working towards our goals of building community and creating opportunities for gender minorities in ECS!</p> };
const tanviBio = { src: Tanvi, title: <p>Tanvi - Inclusivity Director</p>, description: <p>Hey everyone! I'm Tanvi, a first-year Engineering student. I love to read, draw, and paint, and I'm super excited to be a part of WECS! I hope to work towards making the community a safe and welcoming environment!</p> };
const jennyBio = { src: Jenny, title: <p>Jenny - Media Director</p>, description: <p>Hey everyone! My name is Jenny and I help create designs and post them to our social media! I’m excited to continue working with WECS to help build community for underrepresented groups in engineering!</p> };
const fernandaBio = { src: Fernanda, title: <p>Fernanda - Media Director</p>, description: <p>Hey everyone! I’m Fernanda Ezquerra Silva, a first year engineering student. I joined WECS in Fall 2024, and I’ve being loving it so far! I am looking forward to work with such amazing people.</p> };
const ellaBio = { src: Ella, title: <p>Ella - Website Director</p>, description: <p>My name is Ella and I\'m a fourth-year Software Engineering student. I\'m so excited to improve the WECS website and help build a welcoming community for women and gender non-conforming individuals in engineering and computer science as Website Director!</p> };
const graceBio = { src: Grace, title: <p>Grace - Newsletter Director</p>, description: <p>Hi! I'm Grace, a Computer Science and Math major creeping up on my third year! I've been writing and designing the WECS newsletter since May 2024, and I love using my creative skills to keep our community updated and connected. I’m super excited to see where the newsletter takes me next and to keep sharing fun and engaging updates with you all!</p> };
const abbyBio = { src: Abby, title: <p>Abby - Discord Director</p>, description: <p>Hey there! My name is Abby, I’m a first-year Computer Science major here at UVIC. Whenever I’m not debugging my programs, you can find me somewhere in the mountains with my friends! I’m super excited to be a part of the WECS community as your Discord Director, and I can’t wait to see what you guys bring to our server. See you out there!</p> };
const malshaBio = { src: Malsha, title: <p>Malsha - VP Community</p>, description: <p>Hi there! My name is Malsha and I am a third year mechanical engineering student. I joined WECS in April of 2024. I can’t wait to get to know you and for us to come together and have our voices heard :)</p> };
const fareessBio = { src: Fareess, title: <p>Fareess - Community Events Director</p>, description: <p>Hi, my name is Fareess and I am currently a first year student at UVIC. I am originally from Calgary Alberta; I am super excited to be a part of WECS.</p> };
const helenaBio = { src: Helena, title: <p>Helena - Community Events Director</p>, description: <p>Hi! I'm Helena, a second-year Mechanical Engineering student with a keen interest in Aerospace Engineering and Energy Systems. I'm passionate about inspiring the next generation of engineers to push boundaries, leverage every resource available, and explore the limitless possibilities that engineering has to offer.</p> };
const natashaBio = { src: Natasha, title: <p>Natasha - Community Events Director</p>, description: <p>Hey! I'm Natasha! I started as a psychology student but webdev brought me to my combined major! I have interests in UI/UX, databases, and HCI. I can’t wait to create events with this team!</p> };
const samBio = { src: pinkBackground, title: <p>Sam - Operations Director</p>, description: <p> Hi! My name is Sam and I’m in my third studying civil engineering and minoring in applied ethics. I’ve been apart if WECS since late 2023 and I’m super excited to help foster a sense of community for students here at UVic!</p> };
const christinaBio = { src: Christina, title: <p>Accepting Applications - VP Professional Development</p>, description: <p>Hi! I’m Christina, a third-year Computer Science major with a Mathematics minor. I’m excited to be part of WECS and to work with such an inspiring group of people. I can’t wait to support everyone in growing their professional skills and exploring all the amazing opportunities ahead!</p> };
const athaliahBio = { src: pinkBackground, title: <p>Athaliah - Speaker Series Director</p>, description: <p></p> };
const sydneyBio = { src: Sydney, title: <p>Sydney - VP Academia</p>, description: <p>Hey, my name is Sydney and I joined WECS in May 2024. I’m in my fourth year of software engineering and I’m excited to get involved with WECS and run some awesome events! I get excited about Star Trek and slugs and I love arts and crafts!</p> };
const claireBio = { src: pinkBackground, title: <p>Claire - Academic Materials Director</p>, description: <p>Hi everyone! I am a 3rd year CompSci student this year. I was recently introduced to WECS by Charli and am excited to work with the team to grow the community here at UVic. I’ve always been interested in STEM and only discovered my love for programming last year; I really enjoy being a part of this community.</p> };
const natalieBio = {
  src: Natalie, title: <p>Natalie - Review Sessions Director</p>, description: <p>Hi everyone!  I’m Natalie a mechanical engineering student. I joined WECS in March 2025 and I’m excited to be a part of this community. When I’m not studying I enjoy spending time near the ocean or working on creative projects.</p>
};
const emmaBio = {
  src: Emma, title: <p>Emma - Study Director</p>, description: <p>Hi all! I’m Emma and I’m our study director. I joined WECS at the start of 2025! And look forward to meeting all of you and coordinating some fantastic study sessions. In my free time you can find me on the Ice at the gym or with my wonder weiner dog!
  </p>
};
const vpOutreachPosition = {
  src: wecsLogo, title: <p>Accepting Applications - VP Outreach</p>, description: <p>The VP Outreach is responsible for managing the outreach team, including Corporate and Partnership Directors . This includes running bi-weekly or weekly meetings with all committee members, goal setting, and task delegation. VP Outreach will collaborate with the President to ensure that all activities align with our organization’s goals and scope. <br /> <br />
    The Corporate Directors are responsible for finding corporate partners for events and operations. They attend networking events and cold email to find new partners.  <br /> <br />
    The Partnership Director is responsible for managing our relationship with other clubs and organizations. Their responsibilities can range from email communications and updates to event planning and execution. We have existing relationships that need to be maintained and each director is expected to create and manage new relationships. <br /> <br />
    For more information, check out our <Link to="/positions">open positions</Link> page.</p>
};
const aliceBio = { src: Alice, title: <p>Alice - Corporate Outreach Director</p>, description: <p>Hi all! Super excited to be working to find like-minded sponsors to support our activities. In my free time I like to read. Hope to see everyone soon!</p> };
const amyBio = { src: Amy, title: <p>Amy - Corporate Outreach Director</p>, description: <p>Hi everyone! I am in my second year of biomedical engineering. I am passionate about empowering young women in STEM and creating an inclusive community. I can't wait to explore and support the exciting opportunities ahead!</p> };
const pavitBio = {
  src: Pavit, title: <p>Pavit - Corporate Outreach Director</p>, description: <p>Hi everyone! I’m Pavit, a first year engineering student. In my free time I enjoy reading or spending time outdoors, I especially love going on hikes. I am very excicted to be a part of WECS and hope to work towards creating a welcoming and nuturing environment.</p>
};
const partnershipPosition = {
  src: wecsLogo, title: <p>Accepting Applications - Partnership Director</p>, description: <p>The Partnership Director is responsible for managing communication between WECS and other UVic-related groups. This includes other UVic Clubs and Course Unions, the ESS, the UVSS, and the Engineering and Computer Science Departments. The Partnership Director will collaborate with the VP Outreach to ensure WECS is informed of internal events and communications. <br /> <br />
    For more information, check out our <Link to="/positions">open positions</Link> page.</p>
};
const externalOutreachPosition = {
  src: wecsLogo, title: <p>Accepting Applications - External Outreach Director</p>, description: <p>The VP External Outreach is responsible for managing the communication between WECS and groups and organizations outside of UVic. This includes local high schools, and community groups and organizations (Rotary). The External Outreach Director will collaborate with the VP Outreach to ensure WECS is informed of external events and communications. <br /> <br />
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
          <Image src={emilyBio.src} alt={emilyBio.title} style={styles.thumbnail} onClick={() => handlePhotoClick(emilyBioWithMinnie)} />
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
          <Image src={tobiBioHR.src} alt={tobiBioHR.title} style={styles.thumbnail} onClick={() => handlePhotoClick(tobiBioHR)} />
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
