import Footer from '../footer/footer';
import React from 'react';
import { Link } from 'react-router-dom';
import wecsLogo from '../../resources/WECS Logo.png';
import tote1 from '../../resources/events blog/tote1.webp';
import blogs from '../../resources/events blog/EventsBlogEntries';
import Image from 'react-bootstrap/Image';

const EventsBlog = () => {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column', // Stack the elements vertically
        alignItems: 'center', // Center align items
        gap: '20px',
        padding: '20px'
    };

    const previewStyle = {
        display: 'flex',
        alignItems: 'center',
        border: '1px solid #ccc',
        padding: '20px',
        width: '75%', // Make the element take 80% width
        height: 'auto' // Allow height to adjust automatically
    };

    const imgStyle = {
        maxWidth: '40%', // Adjust the image width as desired
        height: 'auto',
        maxHeight: '300px',
        marginRight: '20px' // Add some space between the image and text
    };

    const textStyle = {
        flex: 1 // Allow the text to take up the remaining space
    };

    const h2Style = {
        fontSize: '24px',
        margin: '10px 0'
    };

    const pStyle = {
        fontSize: '16px',
        color: '#555'
    };

    return (
        <div>
            <h2>Events Blog</h2>
            <div style={containerStyle}>
                {blogs.map(blog => (
                    <div key={blog.id} style={previewStyle}>
                        <Image src={blog.image} alt={blog.title} style={imgStyle} thumbnail />
                        <div style={textStyle}>
                            <h2 style={h2Style}><Link to={`/blog/${blog.id}`}>{blog.title}</Link></h2>
                            <p style={pStyle}>{blog.preview}</p>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default EventsBlog;
