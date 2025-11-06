import { useParams } from 'react-router-dom';
import blogs from '../../resources/events blog/EventsBlogEntries';
import './eventsBlog.css';
import { Col, Container, Row } from 'react-bootstrap';

const titleStyle = {
  textAlign: 'center',
}

const BlogPost = () => {
  const { id } = useParams();
  const blog = blogs.find(blog => blog.id === parseInt(id));

  if (!blog) {
    return <h2>Blog post not found</h2>;
  }

  return (
    <Container className="custom-border">
      <Row>
        <Col xs={12}>
          <h1 style={titleStyle}>{blog.title}</h1>
          <p>{blog.fullText}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default BlogPost;
