import React from 'react';
import { useParams } from 'react-router-dom';
import blogs from '../../resources/events blog/EventsBlogEntries'

const titleStyle = {
  textAlign: 'center',
}

const previewStyle = {
  display: 'flex',
  alignItems: 'center',
  border: '1px solid #ccc',
  padding: '20px',
  width: '90%',
};

const containerStyle = {
  display: 'flex',
  flexDirection: 'column', // Stack the elements vertically
  alignItems: 'center', // Center align items
  gap: '20px',
  padding: '20px'
};


const BlogPost = () => {
  const { id } = useParams();
  const blog = blogs.find(blog => blog.id === parseInt(id));

  if (!blog) {
    return <h2>Blog post not found</h2>;
  }

  return (
    <div style={containerStyle}>
      <div style={previewStyle}>
        <div>
          <h1 style={titleStyle}>{blog.title}</h1>
          <p>{blog.fullText}</p>
        </div>
      </div>

    </div>

  );
};

export default BlogPost;
