import { Link } from 'react-router-dom';
import blogs from '../../resources/events blog/EventsBlogEntries';
import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './eventsBlog.css';

const onClickScroll = () => {
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
}

const EventsBlog = () => {
    return (
        <Container>
            <h2 style={{textAlign: 'center'}}>Events Blog</h2>
            <h5 style={{textAlign: 'center'}}>Check out some of the previous events we've hosted!</h5>
            {blogs.map((blog) => (
                <>
                    <Card style = {{ border: '3px solid #d3e5ff', paddingLeft: '2rem', paddingRight: '2rem'}}>
                        <Row key={blog.id} className="my-4 align-items-center py-3">
                            <Col xs={12} md={4} className="d-flex justify-content-center">
                                <Card.Img src={blog.image} alt={blog.title} style={{ maxHeight: '350px', maxWidth: '100%', objectFit: 'cover' }} />
                            </Col>
                            <Col xs={12} md={8}>
                                <h2 className="h4">
                                    <Link to={`/blog/${blog.id}`} onClick={onClickScroll}>{blog.title}</Link>
                                </h2>
                                <p className="text-muted">{blog.preview}</p>
                            </Col>
                        </Row>

                    </Card>
                    <p><br /></p>
                </>
            ))}
        </Container>
    );
};

export default EventsBlog;
