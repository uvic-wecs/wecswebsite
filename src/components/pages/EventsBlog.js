import React from 'react';
import { Link } from 'react-router-dom';
import blogs from '../../resources/events blog/EventsBlogEntries';
import Image from 'react-bootstrap/Image';
import { Col, Container, Row } from 'react-bootstrap';
import './eventsBlog.css';

const EventsBlog = () => {
    return (
        <Container>
            <h2>Events Blog</h2>
            {blogs.map((blog) => (
                <Row key={blog.id} className="my-4 align-items-center custom-border py-3">
                    <Col xs={12} md={4} className="d-flex justify-content-center">
                        <Image src={blog.image} alt={blog.title} className="img-fluid" thumbnail style={{ maxHeight: '300px', maxWidth: '100%', objectFit: 'cover' }} />
                    </Col>
                    <Col xs={12} md={8}>
                        <h2 className="h4">
                            <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
                        </h2>
                        <p className="text-muted">{blog.preview}</p>
                    </Col>
                </Row>
            ))}
        </Container>
    );
};

export default EventsBlog;
