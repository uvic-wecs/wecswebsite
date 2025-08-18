import tote1 from '../../resources/events blog/tote1.webp'
import tote2 from '../../resources/events blog/tote2.jpg'
import tote3 from '../../resources/events blog/tote3.webp'
import tote4 from '../../resources/events blog/tote4.webp'
import tote5 from '../../resources/events blog/tote5.webp'
import tote6 from '../../resources/events blog/tote6.webp'
import embracingFailurePanel from '../../resources/events blog/embracing failure panel.jpg'
import pride1 from '../../resources/events blog/pride1.webp'
import pride2 from '../../resources/events blog/pride2.webp'

import { Col, Container, Image, Row } from 'react-bootstrap';

const imageStyle = { maxWidth: '100%', height: 'auto' };

const blogs = [
  {
    id: 3,
    title: <p>Pride Month Celebration: Carabiner Keychains and Button Making with WECS 🌈</p>,
    image: pride1,
    preview: <p>This June, WECS (Women in Engineering and Computer Science) proudly celebrated Pride Month with a creative and fun-filled event: Carabiner Keychains and Button Making.
      It was a joyful afternoon where members of our community came together to craft, connect, and celebrate the 2SLGBTQ+ community.</p>,
    fullText: <p>
      <span style={{ fontWeight: 'bold', color: 'pink', fontSize: '1.2em' }}>
        Why Pride Month Matters
      </span>
      <br />
      Pride Month takes place every June as a time dedicated to honoring and uplifting the 2SLGBTQ+ community. It is a month to reflect on the progress made, advocate for equal rights, and celebrate a world where everyone can embrace their authentic selves, regardless of gender identity or sexual orientation.
      Pride is also deeply rooted in history and activism. The month of June was chosen to commemorate the Stonewall Uprising of 1969. The Stonewall Inn, a popular queer bar in New York City, was frequently targeted by police because homosexuality was considered a crime at the time. On June 28th, a police raid at Stonewall escalated into a six-day uprising that united the queer community and became a pivotal moment in the fight for LGBTQ+ rights.

      <br /> <br />
      <span style={{ fontWeight: 'bold', color: 'pink', fontSize: '1.2em' }}>
        Pride at WECS
      </span>
      <br />
      At WECS, Pride is a reminder of the importance of inclusion and belonging. WECS is a space that welcomes everyone. Our mission is to support women and gender-non-conforming individuals in engineering and computer science at UVic. We are committed to creating a supportive environment where students and professionals can thrive, regardless of gender identity or sexual orientation.

      <br /> <br />
      <span style={{ fontWeight: 'bold', color: 'pink', fontSize: '1.2em' }}>
        Event Highlights
      </span>
      <br />
      Our Pride event was filled with color, creativity, and good vibes. Students had the chance to make personalized bracelets to pair with their carabiner keychains, choosing from a variety of beads, charms, and colors to express themselves. Many got creative with button-making, designing unique pins that reflected their identities, favourite Pride flags, and positive messages. Whether you made a rainbow keychain or a bold button design, everyone left with something handmade and meaningful!
      It was heartwarming to see students crafting, socializing, and building community together.

      Thank you to everyone who attended and helped make this event so special. Pride Month reminds us of how far we have come, but also how important it is to continue advocating for inclusivity and acceptance. At WECS, we celebrate diversity and community all year long. 💖
      <br /> <br />

      <Container fluid>
        <Row>
          <Col xs={6} className="text-center">
            <Image src={pride1} className="img-fluid"
              style={{ maxWidth: '80%', height: 'auto' }} rounded />
          </Col>
          <Col xs={6} className="text-center">
            <Image src={pride2} className="img-fluid"
              style={{ maxWidth: '80%', height: 'auto' }} rounded />
          </Col>
        </Row>
      </Container>
    </p>

  },
  {
    id: 1,
    title: <p>✨Tote Bag Paint Night✨</p>,
    image: tote2,
    preview: <p>On February 9th 2024, WECS hosted a tote bag paint night, offering a creative outlet for students to unwind and express themselves.
      Set in a relaxed atmosphere, participants were provided with all the necessary supplies to transform plain tote bags into personalized works of art.
      The evening was filled with laughter and lively discussions, as attendees shared experiences and ideas, both about their academic journeys and the masterpieces they were creating.</p>,
    fullText:
      <Container fluid>
        <Row>
          <Col>
            <p>On February 9th 2024, WECS hosted a tote bag paint night, offering a creative outlet for students to unwind and express themselves.
              Set in a relaxed atmosphere, participants were provided with all the necessary supplies to transform plain tote bags into personalized works of art.
              The evening was filled with laughter and lively discussions, as attendees shared experiences and ideas, both about their academic journeys and the masterpieces they were creating.
              <br /> <br />
              The paint night also served as a platform for networking, allowing students to connect with peers and seniors in a non-traditional setting.
              It highlighted the importance of community and support among women pursuing careers in STEM, showcasing that creativity and innovation go hand in hand.
              <br /> <br />
              By the end of the night, each participant left with a unique tote bag, a symbol of their creativity and a reminder of the empowering community they are a part of.
              This event was a testament to the club's commitment to fostering a supportive and inclusive environment for women in engineering and computer science.
              <br /> <br />
              Thank you to all of our attendees and the execs that made this event happen! We look forward to more fun community events in the coming months.</p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4} className="text-center">
            <Image src={tote2} className="img-fluid" style={imageStyle} rounded />
          </Col>
          <Col xs={12} md={4} className="text-center">
            <Image src={tote3} className="img-fluid" style={imageStyle} rounded />
          </Col>
          <Col xs={12} md={4} className="text-center">
            <Image src={tote1} className="img-fluid" style={imageStyle} rounded />
          </Col>
        </Row>
        <Row className="my-3">
          <Col xs={12} md={4} className="text-center">
            <Image src={tote4} className="img-fluid" style={imageStyle} rounded />
          </Col>
          <Col xs={12} md={4} className="text-center">
            <Image src={tote6} className="img-fluid" style={imageStyle} rounded />
          </Col>
          <Col xs={12} md={4} className="text-center">
            <Image src={tote5} className="img-fluid" style={imageStyle} rounded />
          </Col>
        </Row>
      </Container>
  },
  {
    id: 2,
    title: <p>🩷Embracing Failure & Resilience🩷</p>,
    image: embracingFailurePanel,
    preview: <p>On March 7, our WECS president, Emily Murray, hosted a panel of five accomplished University of Victoria faculty members for a discussion on overcoming setbacks and building resilience on their path to finding career success.
      The speakers included Dr. Celina Berg, Dr. Samira Gharehkhani, Dr. Laura Cowen, Dr. Alexandra Branzan Albu, and Dr. Asmita Sodhi.
      Each panelist shared personal stories of challenges faced in their academic and professional journeys, offering a rare glimpse into the realities of pursuing a career as a minority in STEM fields. </p>,
    fullText: <p>On March 7, our WECS president, Emily Murray, hosted a panel of five accomplished University of Victoria faculty members for a discussion on overcoming setbacks and building resilience on their path to finding career success.
      The speakers included Dr. Celina Berg, Dr. Samira Gharehkhani, Dr. Laura Cowen, Dr. Alexandra Branzan Albu, and Dr. Asmita Sodhi.
      Each panelist shared personal stories of challenges faced in their academic and professional journeys, offering a rare glimpse into the realities of pursuing a career as a minority in STEM fields.
      <br /><br />
      The event underscored the message that failure is not a setback but a stepping stone to success.
      Through engaging stories and practical advice, the panelists inspired attendees to embrace their own journeys, including the inevitable ups and downs, with confidence and resilience.
      This event was a testament to the strength and support within the WECS community.
      It highlighted the importance of creating safe and uplifting spaces for women and gender-non-conforming individuals in engineering and computer science, fostering a culture of learning, growth, and mutual support.
      <br /><br />
      Thank you to the panelists for graciously sharing their stories and insights and to Emily Murray for pulling it all together!
      <br /><br />
      <Container fluid>
        <Row>
          <Col xs={12} className="text-center">
            <Image src={embracingFailurePanel} className="img-fluid"
              style={{ maxWidth: '100%', height: 'auto' }} rounded />
          </Col>
        </Row>
      </Container>
    </p>

  }
];

export default blogs;
