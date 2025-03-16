import tote1 from '../../resources/events blog/tote1.webp'
import tote2 from '../../resources/events blog/tote2.jpg'
import tote3 from '../../resources/events blog/tote3.webp'
import tote4 from '../../resources/events blog/tote4.webp'
import tote5 from '../../resources/events blog/tote5.webp'
import tote6 from '../../resources/events blog/tote6.webp'
import embracingFailurePanel from '../../resources/events blog/embracing failure panel.jpg'

import {Col, Container, Image, Row} from 'react-bootstrap';

const imageStyle = { maxWidth: '100%', height: 'auto' };

const blogs = [
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
