import { useState } from 'react';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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
import Natasha from "../../resources/executives/Natasha.avif";
import Amy from "../../resources/executives/Amy.webp";
import Helena from "../../resources/executives/Helena.webp";
import Fareess from "../../resources/executives/Fareess.webp";
import Abby from "../../resources/executives/Abby.webp";
import Pavit from "../../resources/executives/Pavit.webp";
import Emma from "../../resources/executives/Emma.webp";
import Tanvi from "../../resources/executives/Tanvi.webp";
import Natalie from "../../resources/executives/Natalie.webp";

import wecsLogo from "../../resources/executives/WECS Logo.webp";
import pinkBackground from "../../resources/executives/Pink Powder.webp";
import wecsTeam from "../../resources/executives/WECS Team.webp";
import { Col, Container, Row, Image } from 'react-bootstrap';
import './team.css';



const emilyBio = {
  src: Emily, title: <p>President - Emily</p>,
  shortDescription: <p>Hello everyone and welcome to WECS! I'm Emily, a 3rd(ish) year Software Engineering student.
    I revived...</p>,
  description: <p>
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
  src: Charli, title: <p>Vice President - Charli</p>, description: <p>
    Hey, I'm Charli and I'm a 4th year computer science and math honours student here at UVic!
    I joined WECS when Emily revived the club back in 2023 and spent a few semesters organizing final exam review sessions before moving into the Vice President role.
    Now I mostly do random things! I made this website, so hopefully you think it's cool.
    I'm also passionate about feminism, intersectionality, and advocacy so I'm often reaching out to other groups on campus to collaborate and learn!
  </p>,
  shortDescription: <p>Hey, I'm Charli and I'm a 4th year computer science and math honours student here at UVic!
    I joined WECS...</p>
};
const tobiBio = { src: Tobi, title: <p>VP Marketing - Tobi</p>, description: <p>Hi everyone! I’m Tobi, a third-year combined Psychology and Computer Science major. I have been part of WECS since its revival in 2023 as VP Marketing, and as of Fall 2024, HR Director. I love working with the team and am excited to continue working towards our goals of building community and creating opportunities for gender minorities in ECS!</p>, shortDescription: <p>Hi everyone! I’m Tobi, a third-year combined Psychology and Computer Science major. I have been part of...</p> };
const tanviBio = { src: Tanvi, title: <p>Inclusivity Director - Tanvi</p>, description: <p>Hey everyone! I'm Tanvi, a first-year Engineering student. I love to read, draw, and paint, and I'm super excited to be a part of WECS! I hope to work towards making the community a safe and welcoming environment!</p>, shortDescription: <p>Hey everyone! I'm Tanvi, a first-year Engineering student. I love to read, draw, and paint, and I'm super excited... </p> };
const jennyBio = { src: Jenny, title: <p>Media Director - Jenny</p>, description: <p>Hey everyone! My name is Jenny and I help create designs and post them to our social media! I’m excited to continue working with WECS to help build community for underrepresented groups in engineering!</p>, shortDescription: <p>Hey everyone! My name is Jenny and I help create designs and post them to our social media! I’m excited to...</p> };
const ellaBio = { src: Ella, title: <p>Website Director - Ella</p>, description: <p>My name is Ella and I'm a fourth-year Software Engineering student. I'm so excited to improve the WECS website and help build a welcoming community for women and gender non-conforming individuals in engineering and computer science as Website Director!</p>, shortDescription: <p>My name is Ella and I'm a fourth-year Software Engineering student. I'm so excited to improve the WECS website and...</p> };
const graceBio = { src: Grace, title: <p>Newsletter Director - Grace</p>, description: <p>Hi! I'm Grace, a Computer Science and Math major creeping up on my third year! I've been writing and designing the WECS newsletter since May 2024, and I love using my creative skills to keep our community updated and connected. I’m super excited to see where the newsletter takes me next and to keep sharing fun and engaging updates with you all!</p>, shortDescription: <p>Hi! I'm Grace, a Computer Science and Math major creeping up on my third year! I've been writing and designing the WECS newsletter since...</p> };
const abbyBio = { src: Abby, title: <p>Discord Director - Abby</p>, description: <p>Hey there! My name is Abby, I’m a first-year Computer Science major here at UVIC. Whenever I’m not debugging my programs, you can find me somewhere in the mountains with my friends! I’m super excited to be a part of the WECS community as your Discord Director, and I can’t wait to see what you guys bring to our server. See you out there!</p>, shortDescription: <p>Hey there! My name is Abby, I’m a first-year Computer Science major here at UVIC. Whenever I’m not debugging...</p> };
const malshaBio = { src: Malsha, title: <p>Vice President - Malsha</p>, description: <p>Hi there! My name is Malsha and I am a third year mechanical engineering student. I joined WECS in April of 2024. I can’t wait to get to know you and for us to come together and have our voices heard :)</p>, shortDescription: <p>Hi there! My name is Malsha and I am a third year mechanical engineering student. I joined WECS in April of 2024...</p> };
const fareessBio = { src: Fareess, title: <p>Community Events Director - Fareess</p>, description: <p>Hi, my name is Fareess and I am currently a first year student at UVIC. I am originally from Calgary Alberta; I am super excited to be a part of WECS.</p>, shortDescription: <p>Hi, my name is Fareess and I am currently a first year student at UVIC. I am originally from Calgary...</p> };
const helenaBio = { src: Helena, title: <p>Community Events Director - Helena</p>, description: <p>Hi! I'm Helena, a second-year Mechanical Engineering student with a keen interest in Aerospace Engineering and Energy Systems. I'm passionate about inspiring the next generation of engineers to push boundaries, leverage every resource available, and explore the limitless possibilities that engineering has to offer.</p>, shortDescription: <p>Hi! I'm Helena, a second-year Mechanical Engineering student with a keen interest in Aerospace Engineering and...</p> };
const natashaBio = { src: Natasha, title: <p>Community Events Director - Natasha</p>, description: <p>Hey! I'm Natasha! I started as a psychology student but webdev brought me to my combined major! I have interests in UI/UX, databases, and HCI. I can’t wait to create events with this team!</p>, shortDescription: <p>Hey! I'm Natasha! I started as a psychology student but webdev brought me to my combined major...</p> };
const samBio = { src: pinkBackground, title: <p>Operations Director - Sam</p>, description: <p> Hi! My name is Sam and I’m in my third studying civil engineering and minoring in applied ethics. I’ve been apart if WECS since late 2023 and I’m super excited to help foster a sense of community for students here at UVic!</p>, shortDescription: <p>Hi! My name is Sam and I’m in my third studying civil engineering and minoring in applied ethics. I’ve been apart if WECS since...</p> };
const christinaBio = { src: Christina, title: <p>VP Professional Development - Christina</p>, description: <p>Hi! I’m Christina, a third-year Computer Science major with a Mathematics minor. I’m excited to be part of WECS and to work with such an inspiring group of people. I can’t wait to support everyone in growing their professional skills and exploring all the amazing opportunities ahead!</p>, shortDescription: <p>Hi! I’m Christina, a third-year Computer Science major with a Mathematics minor. I’m excited to be part of WECS and to work...</p> };
const athaliahBio = { src: pinkBackground, title: <p>Professional Development Events Director - Athaliah</p>, description: <p></p> };
const sydneyBio = { src: Sydney, title: <p>VP Academia - Sydney</p>, description: <p>Hey, my name is Sydney and I joined WECS in May 2024. I’m in my fourth year of software engineering and I’m excited to get involved with WECS and run some awesome events! I get excited about Star Trek and slugs and I love arts and crafts!</p>, shortDescription: <p>Hey, my name is Sydney and I joined WECS in May 2024. I’m in my fourth year of software engineering...</p> };
const natalieBio = {
  src: Natalie, title: <p>Review Sessions Director - Natalie</p>, description: <p>Hi everyone! I’m Natalie a mechanical engineering student. I joined WECS in March 2025 and I’m excited to be a part of this community. When I’m not studying I enjoy spending time near the ocean or working on creative projects.</p>, shortDescription: <p>Hi everyone! I’m Natalie a mechanical engineering student. I joined WECS in March 2025...</p>
};
const emmaBio = {
  src: Emma, title: <p>Study Director - Emma</p>, description: <p>Hi all! I’m Emma and I’m our study director. I joined WECS at the start of 2025! And look forward to meeting all of you and coordinating some fantastic study sessions. In my free time you can find me on the Ice at the gym or with my wonder weiner dog!
  </p>, shortDescription: <p>Hi all! I’m Emma and I’m our study director. I joined WECS at the start of 2025! And look forward to meeting all of you and...</p>
};
const vpOutreachPosition = {
  src: wecsLogo, title: <p>Accepting Applications - VP Outreach</p>, description: <p>The VP Outreach is responsible for managing the outreach team, including Corporate and Partnership Directors . This includes running bi-weekly or weekly meetings with all committee members, goal setting, and task delegation. VP Outreach will collaborate with the President to ensure that all activities align with our organization’s goals and scope. <br /> <br />
    The Corporate Directors are responsible for finding corporate partners for events and operations. They attend networking events and cold email to find new partners.  <br /> <br />
    The Partnership Director is responsible for managing our relationship with other clubs and organizations. Their responsibilities can range from email communications and updates to event planning and execution. We have existing relationships that need to be maintained and each director is expected to create and manage new relationships. <br /> <br />
    For more information, check out our <Link to="/positions">open positions</Link> page.</p>
};
const aliceBio = { src: Alice, title: <p>Corporate Outreach Director - Alice</p>, description: <p>Hi all! Super excited to be working to find like-minded sponsors to support our activities. In my free time I like to read. Hope to see everyone soon!</p>, shortDescription: <p>Hi all! Super excited to be working to find like-minded sponsors to support our activities. In my free time I like to...</p> };
const amyBio = { src: Amy, title: <p>Corporate Outreach Director - Amy</p>, description: <p>Hi everyone! I am in my second year of biomedical engineering. I am passionate about empowering young women in STEM and creating an inclusive community. I can't wait to explore and support the exciting opportunities ahead!</p>, shortDescription: <p>Hi everyone! I am in my second year of biomedical engineering. I am passionate about empowering young women in STEM and creating an inclusive...</p> };
const pavitBio = {
  src: Pavit, title: <p>Corporate Outreach Director - Pavit</p>, description: <p>Hi everyone! I’m Pavit, a first year engineering student. In my free time I enjoy reading or spending time outdoors, I especially love going on hikes. I am very excicted to be a part of WECS and hope to work towards creating a welcoming and nuturing environment.</p>, shortDescription: <p>Hi everyone! I’m Pavit, a first year engineering student. In my free time I enjoy reading or spending time outdoors, I especially love...</p>
};
const partnershipPosition = {
  src: wecsLogo, title: <p>Accepting Applications - Partnership Director</p>, description: <p>The Partnership Director is responsible for managing communication between WECS and other UVic-related groups. This includes other UVic Clubs and Course Unions, the ESS, the UVSS, and the Engineering and Computer Science Departments. The Partnership Director will collaborate with the VP Outreach to ensure WECS is informed of internal events and communications. <br /> <br />
    For more information, check out our <Link to="/positions">open positions</Link> page.</p>
};
const externalOutreachPosition = {
  src: wecsLogo, title: <p>Accepting Applications - External Outreach Director</p>, description: <p>The VP External Outreach is responsible for managing the communication between WECS and groups and organizations outside of UVic. This includes local high schools, and community groups and organizations (Rotary). The External Outreach Director will collaborate with the VP Outreach to ensure WECS is informed of external events and communications. <br /> <br />
    For more information, check out our <Link to="/positions">open positions</Link> page.</p>
};

const marloBio = {
  src: wecsLogo, title: <p>POSITION - Marlo</p>, description: <p></p>, shortDescription: <p></p>
};

const romiBio = {
  src: wecsLogo, title: <p>POSITION - Romi</p>, description: <p></p>, shortDescription: <p></p>
};

const christinaMBio = {
  src: wecsLogo, title: <p>POSITION - Christina</p>, description: <p></p>, shortDescription: <p></p>
};

const rodiatBio = {
  src: wecsLogo, title: <p>POSITION - Rodiat</p>, description: <p></p>, shortDescription: <p></p>
};

const layanBio = {
  src: wecsLogo, title: <p>POSITION - Layan</p>, description: <p></p>, shortDescription: <p></p>
};

const aashnaBio = {
  src: wecsLogo, title: <p>POSITION - Aashna</p>, description: <p></p>, shortDescription: <p></p>
};

const dilpreetBio = {
  src: wecsLogo, title: <p>POSITION - Dilpreet</p>, description: <p></p>, shortDescription: <p></p>
};

const cathyBio = {
  src: wecsLogo, title: <p>POSITION - Cathy</p>, description: <p></p>, shortDescription: <p></p>
};

const muskanBio = {
  src: wecsLogo, title: <p>POSITION - Muskan</p>, description: <p></p>, shortDescription: <p></p>
};

const TeamMemberCard = ({ photoSrc, title, shortDescription, fullDescription }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Container className="custom-card-container">
      <Card className="custom-card">
        <div className="image-wrapper">
          <Card.Img src={photoSrc} className="team-photo" />
        </div>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {expanded ? fullDescription : shortDescription}
          </Card.Text>
          <div className="d-flex justify-content-end">
            <Button
              className="custom-pink-button"
              onClick={(e) => {
                setExpanded(!expanded);
                e.currentTarget.blur();
              }}
            >
              {expanded ? 'Show Less' : 'Read More'}
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
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
    <>
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
          <Col xs={12} md={4}>
            <TeamMemberCard
              photoSrc={emilyBio.src}
              title={emilyBio.title}
              shortDescription={emilyBio.shortDescription}
              fullDescription={emilyBio.description}
            />
          </Col>
          <Col xs={12} md={4}>
            <TeamMemberCard
              photoSrc={charliBio.src}
              title={charliBio.title}
              shortDescription={charliBio.shortDescription}
              fullDescription={charliBio.description}
            />
          </Col>

          <Col xs={12} md={4} >
            <TeamMemberCard
              photoSrc={malshaBio.src}
              title={malshaBio.title}
              shortDescription={malshaBio.shortDescription}
              fullDescription={malshaBio.description}
            />
          </Col>
        </Row>

        <Row className='my-3'>
          <h3>Administration Team</h3>
          <Col xs={12} md={4} >
            <TeamMemberCard // VP FINANCE
              photoSrc={charliBio.src}
              title={charliBio.title}
              shortDescription={charliBio.shortDescription}
              fullDescription={charliBio.description}
            />
          </Col>
          <Col xs={12} md={4} >
            <TeamMemberCard // HR DIRECTOR
              photoSrc={charliBio.src}
              title={charliBio.title}
              shortDescription={charliBio.shortDescription}
              fullDescription={charliBio.description}
            />
          </Col>
          <Col xs={12} md={4} >
            <TeamMemberCard
              photoSrc={tanviBio.src}
              title={tanviBio.title}
              shortDescription={tanviBio.shortDescription}
              fullDescription={tanviBio.description}
            />
          </Col>
        </Row>

        <Row className='my-3'>
          <h3>Marketing Team</h3>
          <Col xs={12} md={4} >
            <TeamMemberCard
              photoSrc={tobiBio.src}
              title={tobiBio.title}
              shortDescription={tobiBio.shortDescription}
              fullDescription={tobiBio.description}
            />
          </Col>
          <Col xs={12} md={4} >
            <TeamMemberCard
              photoSrc={jennyBio.src}
              title={jennyBio.title}
              shortDescription={jennyBio.shortDescription}
              fullDescription={jennyBio.description}
            />
          </Col>
          <Col xs={12} md={4} >
            <TeamMemberCard
              photoSrc={charliBio.src}
              title={charliBio.title}
              shortDescription={charliBio.shortDescription}
              fullDescription={charliBio.description}
            />
          </Col>
        </Row>

        <Row className='my-3'>
          <Col xs={12} md={4} >
            <TeamMemberCard
              photoSrc={ellaBio.src}
              title={ellaBio.title}
              shortDescription={ellaBio.shortDescription}
              fullDescription={ellaBio.description}
            />
          </Col>
          <Col xs={12} md={4} >
            <TeamMemberCard
              photoSrc={graceBio.src}
              title={graceBio.title}
              shortDescription={graceBio.shortDescription}
              fullDescription={graceBio.description}
            />
          </Col>
          <Col xs={12} md={4} >
            <TeamMemberCard
              photoSrc={abbyBio.src}
              title={abbyBio.title}
              shortDescription={abbyBio.shortDescription}
              fullDescription={abbyBio.description}
            />
          </Col>
        </Row>

        <Row className='my-3'>
          <h3>Community Team</h3>
          <Col xs={12} md={4} >
            <TeamMemberCard
              photoSrc={malshaBio.src}
              title={malshaBio.title}
              shortDescription={malshaBio.shortDescription}
              fullDescription={malshaBio.description}
            />
          </Col>
          <Col xs={12} md={4} >
            <TeamMemberCard
              photoSrc={helenaBio.src}
              title={helenaBio.title}
              shortDescription={helenaBio.shortDescription}
              fullDescription={helenaBio.description}
            />
          </Col>
          <Col xs={12} md={4} >
            <TeamMemberCard
              photoSrc={natashaBio.src}
              title={natashaBio.title}
              shortDescription={natashaBio.shortDescription}
              fullDescription={natashaBio.description}
            />
          </Col>
          <Col xs={12} md={6} >
            <TeamMemberCard
              photoSrc={samBio.src}
              title={samBio.title}
              shortDescription={samBio.shortDescription}
              fullDescription={samBio.description}
            />
          </Col>
          <Col xs={12} md={6} >
            <TeamMemberCard
              photoSrc={fareessBio.src}
              title={fareessBio.title}
              shortDescription={fareessBio.shortDescription}
              fullDescription={fareessBio.description}
            />
          </Col>
        </Row>

        <Row className='my-3'>
          <h3>Professional Development Team</h3>
          <Col xs={12} md={3} >
            <TeamMemberCard
              photoSrc={aashnaBio.src}
              title={aashnaBio.title}
              shortDescription={aashnaBio.shortDescription}
              fullDescription={aashnaBio.description}
            />
          </Col>
          <Col xs={12} md={3} >
            <TeamMemberCard
              photoSrc={athaliahBio.src}
              title={athaliahBio.title}
              shortDescription={athaliahBio.shortDescription}
              fullDescription={athaliahBio.description}
            />
          </Col>
          <Col xs={12} md={3} >
            <TeamMemberCard
              photoSrc={marloBio.src}
              title={marloBio.title}
              shortDescription={marloBio.shortDescription}
              fullDescription={marloBio.description}
            />
          </Col>
          <Col xs={12} md={3} >
            <TeamMemberCard
              photoSrc={muskanBio.src}
              title={muskanBio.title}
              shortDescription={muskanBio.shortDescription}
              fullDescription={muskanBio.description}
            />
          </Col>
        </Row>

        <Row className='my-3'>
          <h3>Academia Team</h3>
          <Col xs={12} md={3} >
            <TeamMemberCard
              photoSrc={sydneyBio.src}
              title={sydneyBio.title}
              shortDescription={sydneyBio.shortDescription}
              fullDescription={sydneyBio.description}
            />
          </Col>
          <Col xs={12} md={3} >
            <TeamMemberCard
              photoSrc={charliBio.src}
              title={charliBio.title}
              shortDescription={charliBio.shortDescription}
              fullDescription={charliBio.description}
            />
          </Col>
          <Col xs={12} md={3} >
            <TeamMemberCard
              photoSrc={natalieBio.src}
              title={natalieBio.title}
              shortDescription={natalieBio.shortDescription}
              fullDescription={natalieBio.description}
            />
          </Col>
          <Col xs={12} md={3} >
            <TeamMemberCard
              photoSrc={emmaBio.src}
              title={emmaBio.title}
              shortDescription={emmaBio.shortDescription}
              fullDescription={emmaBio.description}
            />
          </Col>
        </Row>

        <Row className='my-3'>
          <h3>Outreach Team</h3>
          <Col xs={12} md={4} >
            <TeamMemberCard
              photoSrc={vpOutreachPosition.src}
              title={vpOutreachPosition.title}
              shortDescription={vpOutreachPosition.shortDescription}
              fullDescription={vpOutreachPosition.description}
            />
          </Col>
          <Col xs={12} md={4} >
            <TeamMemberCard
              photoSrc={aliceBio.src}
              title={aliceBio.title}
              shortDescription={aliceBio.shortDescription}
              fullDescription={aliceBio.description}
            />
          </Col>
          <Col xs={12} md={4} >
            <TeamMemberCard
              photoSrc={amyBio.src}
              title={amyBio.title}
              shortDescription={amyBio.shortDescription}
              fullDescription={amyBio.description}
            />
          </Col>

          <Col xs={12} md={4} >
            <TeamMemberCard
              photoSrc={pavitBio.src}
              title={pavitBio.title}
              shortDescription={pavitBio.shortDescription}
              fullDescription={pavitBio.description}
            />
          </Col>
          <Col xs={12} md={4} >
            <TeamMemberCard
              photoSrc={partnershipPosition.src}
              title={partnershipPosition.title}
              shortDescription={partnershipPosition.shortDescription}
              fullDescription={partnershipPosition.description}
            />
          </Col>
          <Col xs={12} md={4} >
            <TeamMemberCard
              photoSrc={externalOutreachPosition.src}
              title={externalOutreachPosition.title}
              shortDescription={externalOutreachPosition.shortDescription}
              fullDescription={externalOutreachPosition.description}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PhotoGallery;
