import React from 'react';
import { useParams } from 'react-router-dom';
import blogs from '../../resources/events blog/EventsBlogEntries'

const imageStyle = {
    maxWidth: '300px',
    maxHeight: '300px',
}

const BlogPost = () => {
  const { id } = useParams();
  const blog = blogs.find(blog => blog.id === parseInt(id));

  if (!blog) {
    return <h2>Blog post not found</h2>;
  }

  return (
    <div>
      <h1>{blog.title}</h1>
      <img src={blog.image} alt={blog.title} style={imageStyle} />
      <p>{blog.fullText}</p>
    </div>
  );
};

export default BlogPost;
