import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';

import Emily from "../../resources/executives/Emily.webp";
import Charli from "../../resources/executives/Charli.webp";
import Tobi from "../../resources/executives/Tobi.webp";
import Jenny from "../../resources/executives/Jenny.webp";
import Grace from "../../resources/executives/Grace.webp";
//import Ella from "../../resources/executives/Ella.webp";
import Malsha from "../../resources/executives/Malsha.webp";
import Sydney from "../../resources/executives/Sydney.webp";
import Alice from "../../resources/executives/Alice.webp";
import Christina from "../../resources/executives/Christina.webp";
import Amy from "../../resources/executives/Amy.webp";
import Helena from "../../resources/executives/Helena.webp";
import Fareess from "../../resources/executives/Fareess.webp";
import Abby from "../../resources/executives/Abby.webp";
import Pavit from "../../resources/executives/Pavit.webp";
import Tanvi from "../../resources/executives/Tanvi.webp";
import Natalie from "../../resources/executives/Natalie.webp";

import Cathy from "../../resources/executives/Cathy.webp";
import Dilpreet from "../../resources/executives/Dilpreet.webp";
import Romi from "../../resources/executives/Romi.webp";
import Aashna from "../../resources/executives/Aashna.webp";
import Rodiat from "../../resources/executives/Rodiat.webp";
import Siyanshi from "../../resources/executives/Siyanshi.webp";
import Livia from "../../resources/executives/Livia.webp";
import Vanya from "../../resources/executives/Vanya.webp";
import Nicole from "../../resources/executives/Nicole.webp";
import Hana from "../../resources/executives/Hana.webp";
import Purnima from "../../resources/executives/Purnima.webp";
//import ChristinaM from "../../resources/executives/ChristinaM.webp";


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
//const ellaBio = { src: Ella, title: <p>Website Director - Ella</p>, description: <p>My name is Ella and I'm a fourth-year Software Engineering student. I'm so excited to improve the WECS website and help build a welcoming community for women and gender non-conforming individuals in engineering and computer science as Website Director!</p>, shortDescription: <p>My name is Ella and I'm a fourth-year Software Engineering student. I'm so excited to improve the WECS website...</p> };
const graceBio = { src: Grace, title: <p>Newsletter Director - Grace</p>, description: <p>Hi! I'm Grace, a Computer Science and Math major creeping up on my third year! I've been writing and designing the WECS newsletter since May 2024, and I love using my creative skills to keep our community updated and connected. I’m super excited to see where the newsletter takes me next and to keep sharing fun and engaging updates with you all!</p>, shortDescription: <p>Hi! I'm Grace, a Computer Science and Math major creeping up on my third year! I've been writing and designing...</p> };
const abbyBio = { src: Abby, title: <p>Discord Director - Abby</p>, description: <p>Hey there! My name is Abby, I’m a first-year Computer Science major here at UVIC. Whenever I’m not debugging my programs, you can find me somewhere in the mountains with my friends! I’m super excited to be a part of the WECS community as your Discord Director, and I can’t wait to see what you guys bring to our server. See you out there!</p>, shortDescription: <p>Hey there! My name is Abby, I’m a first-year Computer Science major here at UVIC. Whenever I’m not debugging...</p> };
const malshaBio = { src: Malsha, title: <p>Vice President - Malsha</p>, description: <p>Hi there! My name is Malsha and I am a third year mechanical engineering student. I joined WECS in April of 2024. I can’t wait to get to know you and for us to come together and have our voices heard :)</p>, shortDescription: <p>Hi there! My name is Malsha and I am a third year mechanical engineering student. I joined WECS in April of 2024...</p> };
const fareessBio = { src: Fareess, title: <p>Community Events Director - Fareess</p>, description: <p>Hi, my name is Fareess and I am currently a first year student at UVIC. I am originally from Calgary Alberta; I am super excited to be a part of WECS.</p>, shortDescription: <p>Hi, my name is Fareess and I am currently a first year student at UVIC. I am originally from Calgary...</p> };
const helenaBio = { src: Helena, title: <p>Community Events Director - Helena</p>, description: <p>Hi! I'm Helena, a second-year Mechanical Engineering student with a keen interest in Aerospace Engineering and Energy Systems. I'm passionate about inspiring the next generation of engineers to push boundaries, leverage every resource available, and explore the limitless possibilities that engineering has to offer.</p>, shortDescription: <p>Hi! I'm Helena, a second-year Mechanical Engineering student with a keen interest in Aerospace Engineering and...</p> };
const samBio = { src: pinkBackground, title: <p>Operations Director - Sam</p>, description: <p> Hi! My name is Sam and I’m in my third studying civil engineering and minoring in applied ethics. I’ve been apart of WECS since late 2023 and I’m super excited to help foster a sense of community for students here at UVic!</p>, shortDescription: <p>Hi! My name is Sam and I’m in my third studying civil engineering and minoring in applied ethics. I’ve been apart of WECS since...</p> };
const christinaBio = { src: Christina, title: <p>VP Finance - Christina</p>, description: <p>Hi! I’m Christina, a third-year Computer Science major with a Mathematics minor. I’m excited to be part of WECS and to work with such an inspiring group of people. I can’t wait to support everyone in growing their professional skills and exploring all the amazing opportunities ahead!</p>, shortDescription: <p>Hi! I’m Christina, a third-year Computer Science major with a Mathematics minor. I’m excited to be part of WECS...</p> };
const athaliahBio = { src: pinkBackground, title: <p>Website Director - Athaliah</p>, description: <p>Hey there! I’m Athaliah, a fourth-year Psychology and Computer Science major. I’ve been with WECS since 2024, first starting in the Pro-D team. My hobbies include Salsa dancing, modding old tech and organizing my Spotify playlists ;)</p>, shortDescription: <p>Hey there! I’m Athaliah, a fourth-year Psychology and Computer Science major. I’ve been with WECS since 2024, first starting in the Pro-D team...</p> };
const sydneyBio = { src: Sydney, title: <p>VP Academia - Sydney</p>, description: <p>Hey, my name is Sydney and I joined WECS in May 2024. I’m in my fourth year of software engineering and I’m excited to get involved with WECS and run some awesome events! I get excited about Star Trek and slugs and I love arts and crafts!</p>, shortDescription: <p>Hey, my name is Sydney and I joined WECS in May 2024. I’m in my fourth year of software engineering...</p> };
const natalieBio = {
  src: Natalie, title: <p>Review Sessions Director - Natalie</p>, description: <p>Hi everyone! I’m Natalie a mechanical engineering student. I joined WECS in March 2025 and I’m excited to be a part of this community. When I’m not studying I enjoy spending time near the ocean or working on creative projects.</p>, shortDescription: <p>Hi everyone! I’m Natalie a mechanical engineering student. I joined WECS in March 2025...</p>
};
const aliceBio = { src: Alice, title: <p>Funding Director - Alice</p>, description: <p>Hi all! Super excited to be working to find like-minded sponsors to support our activities. In my free time I like to read. Hope to see everyone soon!</p>, shortDescription: <p>Hi all! Super excited to be working to find like-minded sponsors to support our activities. In my free time I like to...</p> };
const amyBio = { src: Amy, title: <p>Funding Director - Amy</p>, description: <p>Hi everyone! I am in my second year of biomedical engineering. I am passionate about empowering young women in STEM and creating an inclusive community. I can't wait to explore and support the exciting opportunities ahead!</p>, shortDescription: <p>Hi everyone! I am in my second year of biomedical engineering. I am passionate about empowering young women...</p> };
const pavitBio = {
  src: Pavit, title: <p>Media Director - Pavit</p>, description: <p>Hi everyone! I’m Pavit, a first year engineering student. In my free time I enjoy reading or spending time outdoors, I especially love going on hikes. I am very excicted to be a part of WECS and hope to work towards creating a welcoming and nuturing environment.</p>, shortDescription: <p>Hi everyone! I’m Pavit, a first year engineering student. In my free time I enjoy reading or spending time outdoors, I especially love...</p>
};
const romiBio = {
  src: Romi, title: <p>Website Director - Romi</p>, description: <p>I'm someone who loves exploring both logic and creativity — whether it's through writing code or cooking up something delicious in the kitchen. I enjoy spending my time solving problems with code, playing badminton to stay active, and discovering (or making) great food. I'm always up for a challenge, whether it's debugging a tricky program or trying out a new recipe!</p>, shortDescription: <p>I'm someone who loves exploring both logic and creativity — whether it's through writing code or cooking...</p>
};
/*const christinaMBio = {
  src: ChristinaM, title: <p>Website Manager - Christina</p>, description: <p>Hello! I'm Christina, a third-year Computer Science and Statistics student with a passion for developing community-driven technology and building meaningful, lasting relationships. When I'm not coding or analyzing data, you'll find me enjoying coffee with my cat Gizmo or exploring the beautiful coastline.</p>, shortDescription: <p>Hello! I'm Christina, a third-year Computer Science and Statistics student with a passion for developing community-driven technology...</p>
};*/
const rodiatBio = {
  src: Rodiat, title: <p>Editorial Director - Rodiat</p>, description: <p>
    Hi, I am Rodiat, I love being indoors, binging movies, reading comics, and sleeping, nice to meet you!</p>, shortDescription: <p>Hi, I am Rodiat, I love being indoors, binging movies, reading comics, and sleeping, nice to meet you!</p>
};
/*const layanBio = {
  src: pinkBackground, title: <p>Academic Materials Director - Layan</p>, description: <p><br /><br /><br /><br /></p>, shortDescription: <p><br /><br /><br /><br /></p>
};*/
const aashnaBio = {
  src: Aashna, title: <p>VP Professional Development - Aashna</p>, description: <p>Hi! I’m Aashna, and I'm so excited to be your Engineering Residence Education Leader this year! I’m a second-year Computer Science student with a passion for traveling, reading, and politics. I'm super excited to be a part of the WECS team and help build a supportive community!</p>, shortDescription: <p>Hi! I’m Aashna, and I'm so excited to be your Engineering Residence Education Leader this year! I’m a second-year Computer Science student with a passion... </p>
};
const dilpreetBio = {
  src: Dilpreet, title: <p> Funding Director - Dilpreet</p>, description: <p>Hi everyone! I joined WECS in June 2025 and am a 2nd year undecided engineering student hoping to declare into mechanical engineering. I enjoy walking and hiking around Victoria. I hope to positively contribute to WECS’ success and growth! </p>, shortDescription: <p>Hi everyone! I joined WECS in June 2025 and am a 2nd year undecided engineering student hoping to... </p>
};
const cathyBio = {
  src: Cathy, title: <p>Partnership Director - Cathy</p>, description: <p>Hi! I'm Cathy, the partnership director for wecs! I joined in May 2025 and have run a wecs x ecss board game event so far. In my free time, I like to go swimming and draw. I'm excited to collaborate with more clubs to run cool events this year! </p>, shortDescription: <p>Hi! I'm Cathy, the partnership director for wecs! I joined in May 2025 and have run a wecs x ecss board game event...</p>
};
const muskanBio = {
  src: pinkBackground, title: <p>Workshop Director - Muskan</p>, description: <p></p>, shortDescription: <p></p>
};
const vanyaBio = {
  src: Vanya, title: <p>Community Events Director - Vanya</p>, description: <p>Hi! I am Vanya and I am a third year Computer Science student with a minor in business. I am passionate about travelling and entrepreneurship. I am excited to be a part of WECS team and organize more fun and cool events.!</p>, shortDescription: <p>Hi! I am Vanya and I am a third year Computer Science student with a minor in business...</p>
};
const purnimaBio = {
  src: Purnima, title: <p>Community Events Director - Purnima</p>, description: <p>Hey! My name is Purnima and I am a Computer Science and Psychology double major student. I started the WECS club as of this semester, and am loving it so far. I have a lot of experience in making new and exciting events!</p>, shortDescription: <p>Hey! My name is Purnima and I am a Computer Science and Psychology double major student. I started the WECS club as of this semester, and am loving it so far...</p>
};
const hanaBio = {
  src: Hana, title: <p>Website Director - Hana</p>, description: <p>Hi! I’m Hana, a third-year Biology and Psychology student minoring in Data Science. I joined WECS in November 2025 and my main interests are UX/UI design and the intersection of art and technology. I'm passionate about making technology more accessible to all kinds of people, working with technology in creative ways, and sparking an interest in tech in young women! I’m excited to get involved with the website team and work on designing a great website!</p>, shortDescription: <p>Hi! I’m Hana, a third-year Biology and Psychology student minoring in Data Science...</p>
};
const katelynBio = {
  src: pinkBackground, title: <p>Workshop Director - Katelyn</p>, description: <p></p>, shortDescription: <p></p>
};
const cammieBio = {
  src: pinkBackground, title: <p>Website Director - Cammie</p>, description: <p>Hi, I’m Cammie! I’m in Victoria to study Computer Science here at UVic, but I am originally from Ontario! I am so excited to be a part of WECS and to learn from all these inspiring people. I hope to one day be someone that future students can learn from!</p>, shortDescription: <p>Hi, I’m Cammie! I’m in Victoria to study Computer Science here at UVic, but I am originally from Ontario... </p>
};
const siyanshiBio = {
  src: Siyanshi, title: <p>Review Sessions Director - Siyanshi</p>, description: <p>Hiii! I’m Siyanshi, a third-year Data Science student. I’m super excited to be a part of WECS and to work with such wonderful people. In my free time, I love to read and go for walks, and I’m looking forward to being part of a supportive, friendly community.</p>, shortDescription: <p>Hiii! I’m Siyanshi, a third-year Data Science student. I’m super excited to be a part of WECS...</p>
};
const liviaBio = {
  src: Livia, title: <p>Media Director - Livia</p>, description: <p>Hi everyone! I’m Livia, one of the Media Directors at WECS. I love creating designs and helping bring ideas to life through visuals, and I’m proud to be part of this amazing team! In my free time, I’m usually hanging out with my sisters and friends. A fun fact about me is that I’m a total horse girl!</p>, shortDescription: <p>Hi everyone! I’m Livia, one of the Media Directors at WECS. I love creating designs and helping bring ideas to life through visuals...</p>
};
const nicoleBio = {
  src: Nicole, title: <p>VP Community Events - Nicole</p>, description: <p>Hi everyone! I'm Nicole and I'm a 3rd year software engineering student. I'm super excited to be apart of the WECS team and I can't wait to meet you all!</p>, shortDescription: <p>Hi everyone! I'm Nicole and I'm a 3rd year software engineering student. I'm super excited to be apart of the WECS team...</p>
};


const mediaDirectorPosition = {
  src: wecsLogo, title: <p>Accepting Applications - Media Director</p>, description: <p>The Media Director is responsible for managing our current social media profiles (Instagram) and developing a new media profile for LinkedIn. They are also responsible for creating digital signage and posters. The Media Director will collaborate with the Marketing Team and President to maintain and improve our social media presence. <br /> <br />
    For more information, check out our <Link to="/positions">open positions</Link> page.</p>,
  shortDescription: <p>The Media Director is responsible for managing our current social media profiles (Instagram) and developing...</p>
};
const communityDirectorPosition = {
  src: wecsLogo, title: <p>Accepting Applications - Community Events Director</p>, description: <p>The Community Events Director is responsible for hosting community-based events. You report to the VP Community and will collaborate with them to ensure that all events align with our organization’s goals and scope. <br /> <br />
    For more information, check out our <Link to="/positions">open positions</Link> page.</p>,
  shortDescription: <p>The Community Events Director is responsible for hosting community-based events...</p>
};
const hrPosition = {
  src: pinkBackground, title: <p>HR Director - Currently Unfilled</p>, description: <p>Position will be filled in September by an internal WECS member.<br /><br /></p>, shortDescription: <p>Position will be filled in September by an internal WECS member. <br /><br /></p>
}

const TeamMemberCard = ({ photoSrc, title, shortDescription, fullDescription }) => {
  return (
    <Container className="custom-card-container">
      <Card className="custom-card">
        <div className="image-wrapper">
          <Card.Img src={photoSrc} className="team-photo" />
        </div>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text 
            style={{
              flex: 1,
              overflowY: 'auto',
              paddingRight: '8px'
            }}
          >
            {fullDescription}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};


const PhotoGallery = () => {
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
            <TeamMemberCard
              photoSrc={cathyBio.src}
              title={cathyBio.title}
              shortDescription={cathyBio.shortDescription}
              fullDescription={cathyBio.description}
            />
          </Col>
          <Col xs={12} md={4} >
            <TeamMemberCard
              photoSrc={hrPosition.src}
              title={hrPosition.title}
              shortDescription={hrPosition.shortDescription}
              fullDescription={hrPosition.description}
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
          <Col xs={12} md={3} >
            <TeamMemberCard
              photoSrc={tobiBio.src}
              title={tobiBio.title}
              shortDescription={tobiBio.shortDescription}
              fullDescription={tobiBio.description}
            />
          </Col>
          <Col xs={12} md={3} >
            <TeamMemberCard
              photoSrc={jennyBio.src}
              title={jennyBio.title}
              shortDescription={jennyBio.shortDescription}
              fullDescription={jennyBio.description}
            />
          </Col>
          <Col xs={12} md={3} >
            <TeamMemberCard
              photoSrc={pavitBio.src}
              title={pavitBio.title}
              shortDescription={pavitBio.shortDescription}
              fullDescription={pavitBio.description}
            />
          </Col>

          <Col xs={12} md={3} >
            <TeamMemberCard
              photoSrc={liviaBio.src}
              title={liviaBio.title}
              shortDescription={liviaBio.shortDescription}
              fullDescription={liviaBio.description}
            />
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={4} >
            <TeamMemberCard
              photoSrc={abbyBio.src}
              title={abbyBio.title}
              shortDescription={abbyBio.shortDescription}
              fullDescription={abbyBio.description}
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
              photoSrc={mediaDirectorPosition.src}
              title={mediaDirectorPosition.title}
              shortDescription={mediaDirectorPosition.shortDescription}
              fullDescription={mediaDirectorPosition.description}
            />
          </Col>
        </Row>

        <Row className='my-3'>
          <h3>Website Team</h3>
          <Col xs={12} md={4} >
            <TeamMemberCard
              photoSrc={romiBio.src}
              title={romiBio.title}
              shortDescription={romiBio.shortDescription}
              fullDescription={romiBio.description}
            />
          </Col>

          <Col xs={12} md={4}>
            <TeamMemberCard
              photoSrc={hanaBio.src}
              title={hanaBio.title}
              shortDescription={hanaBio.shortDescription}
              fullDescription={hanaBio.description}
            />
          </Col>

          <Col xs={12} md={4}>
            <TeamMemberCard
              photoSrc={cammieBio.src}
              title={cammieBio.title}
              shortDescription={cammieBio.shortDescription}
              fullDescription={cammieBio.description}
            />
          </Col>
        </Row>

        <Row className='my-3'>
          <Col xs={12} md={6} >
            <TeamMemberCard
              photoSrc={athaliahBio.src}
              title={athaliahBio.title}
              shortDescription={athaliahBio.shortDescription}
              fullDescription={athaliahBio.description}
            />
          </Col>

          <Col xs={12} md={6}>
            <TeamMemberCard
              photoSrc={rodiatBio.src}
              title={rodiatBio.title}
              shortDescription={rodiatBio.shortDescription}
              fullDescription={rodiatBio.description}
            />
          </Col>
        </Row>

        <Row className='my-3'>
          <h3>Community Team</h3>
          <Col xs={12} md={3} >
            <TeamMemberCard
              photoSrc={nicoleBio.src}
              title={nicoleBio.title}
              shortDescription={nicoleBio.shortDescription}
              fullDescription={nicoleBio.description}
            />
          </Col>
          <Col xs={12} md={3} >
            <TeamMemberCard
              photoSrc={helenaBio.src}
              title={helenaBio.title}
              shortDescription={helenaBio.shortDescription}
              fullDescription={helenaBio.description}
            />
          </Col>
          
          <Col xs={12} md={3} >
            <TeamMemberCard
              photoSrc={fareessBio.src}
              title={fareessBio.title}
              shortDescription={fareessBio.shortDescription}
              fullDescription={fareessBio.description}
            />
          </Col>

          <Col xs={12} md={3} >
            <TeamMemberCard
              photoSrc={vanyaBio.src}
              title={vanyaBio.title}
              shortDescription={vanyaBio.shortDescription}
              fullDescription={vanyaBio.description}
            />
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={4}>
            <TeamMemberCard
              photoSrc={purnimaBio.src}
              title={purnimaBio.title}
              shortDescription={purnimaBio.shortDescription}
              fullDescription={purnimaBio.description}
            />
          </Col>

          <Col xs={12} md={4} >
            <TeamMemberCard
              photoSrc={samBio.src}
              title={samBio.title}
              shortDescription={samBio.shortDescription}
              fullDescription={samBio.description}
            />
          </Col>

          <Col xs={12} md={4}>
            <TeamMemberCard
              photoSrc={communityDirectorPosition.src}
              title={communityDirectorPosition.title}
              shortDescription={communityDirectorPosition.shortDescription}
              fullDescription={communityDirectorPosition.fullDescription}
            />
          </Col>
        </Row>

        <Row className='my-3'>
          <h3>Professional Development Team</h3>
          <Col xs={12} md={4} >
            <TeamMemberCard
              photoSrc={aashnaBio.src}
              title={aashnaBio.title}
              shortDescription={aashnaBio.shortDescription}
              fullDescription={aashnaBio.description}
            />
          </Col>
          
          <Col xs={12} md={4} >
            <TeamMemberCard
              photoSrc={muskanBio.src}
              title={muskanBio.title}
              shortDescription={muskanBio.shortDescription}
              fullDescription={muskanBio.description}
            />
          </Col>

          <Col xs={12} md={4} >
            <TeamMemberCard
              photoSrc={katelynBio.src}
              title={katelynBio.title}
              shortDescription={katelynBio.shortDescription}
              fullDescription={katelynBio.description}
            />
          </Col>
        </Row>

        <Row className='my-3'>
          <h3>Academia Team</h3>
          <Col xs={12} md={4} >
            <TeamMemberCard
              photoSrc={sydneyBio.src}
              title={sydneyBio.title}
              shortDescription={sydneyBio.shortDescription}
              fullDescription={sydneyBio.description}
            />
          </Col>

          <Col xs={12} md={4} >
            <TeamMemberCard
              photoSrc={natalieBio.src}
              title={natalieBio.title}
              shortDescription={natalieBio.shortDescription}
              fullDescription={natalieBio.description}
            />
          </Col>

          <Col xs={12} md={4} >
            <TeamMemberCard
              photoSrc={siyanshiBio.src}
              title={siyanshiBio.title}
              shortDescription={siyanshiBio.shortDescription}
              fullDescription={siyanshiBio.description}
            />
          </Col>
        </Row>

        <Row className='my-3'>
          <h3>Funding Team</h3>
          <Col xs={12} md={3} >
            <TeamMemberCard // VP FINANCE
              photoSrc={christinaBio.src}
              title={christinaBio.title}
              shortDescription={christinaBio.shortDescription}
              fullDescription={christinaBio.description}
            />
          </Col>
          <Col xs={12} md={3} >
            <TeamMemberCard
              photoSrc={aliceBio.src}
              title={aliceBio.title}
              shortDescription={aliceBio.shortDescription}
              fullDescription={aliceBio.description}
            />
          </Col>
          <Col xs={12} md={3} >
            <TeamMemberCard
              photoSrc={amyBio.src}
              title={amyBio.title}
              shortDescription={amyBio.shortDescription}
              fullDescription={amyBio.description}
            />
          </Col>
          <Col xs={12} md={3} >
            <TeamMemberCard
              photoSrc={dilpreetBio.src}
              title={dilpreetBio.title}
              shortDescription={dilpreetBio.shortDescription}
              fullDescription={dilpreetBio.description}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PhotoGallery;