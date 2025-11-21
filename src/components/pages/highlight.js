import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

// Import images here as you add them
// Example: import coopImage from '../../resources/highlights/coop-announcement.webp';
// Example: import hackathonImage from '../../resources/highlights/hackathon-team.webp';

const hrStyle = {
    border: 'none',
    height: '5px',
    backgroundColor: '#B47EDE',
};

// ========================================
// BLOG POSTS - Add new posts at the TOP
// ========================================
const highlights = [

    {
        id: 3,
        date: "September 2025",
        title: "Member's Team takes First in Hackathon",
        content: "WECS member participated in Inspire hackathon taking home first prize with an AI based quiz generator. It was an incredible learning experience for everyone involved!",
        members: "Christina McNeice",
        image: null,
        imageAlt: "Hackathon team",
        link: null
    },

    {
        id: 2,
        date: "August 2025",
        title: "WECS Members Secure Co-op Positions",
        content: "We're excited to announce that several WECS members have landed co-op positions at leading tech companies this term! Their hard work and dedication have paid off, and we couldn't be prouder of their achievements.",
        image: null, // Add: coopImage when you have one
        imageAlt: "Co-op celebration",
        link: null // Optional: { url: "https://example.com", text: "Learn more →" }
    },

    {
        id: 1,
        date: "May 2024",
        title: "WECS Featured in The Martlet",
        content: "The Martlet featured WECS and gender diversity in UVic's Engineering and Computer Science \
            programs. President Emily Murray discussed reviving the club in October 2023 to create community \
            spaces where women and gender non-conforming students can connect. VP of Marketing Tobi Adepoju \
            shared her perspective on representation challenges and bringing BIPOC voices into WECS. Charli \
            Harrold and Alice Zou spoke about why diversity improves research outcomes, highlighting real-world \
            examples of tech failures due to lack of diverse testing. The article captures WECS's mission to \
            support non-male students through community building.",
        members: "Emily Murray, Charli Harrold, Tobi Adepoju, Alice Zou",
        image: null,
        imageAlt: "The Martlet article",
        link: {
            url: "https://martlet.ca/uvics-ecs-programs-have-a-gender-diversity-problem/",
            text: "Read the full article →"
        }
    }
];

function Highlight() {
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Team Highlights</h1>
            <Container>
                <p style={{ fontSize: "18px", textAlign: "center", color: "#666", marginBottom: "30px" }}>
                    Celebrating our achievements, milestones, and community moments
                </p>
                
                <hr style={hrStyle} />

                {highlights.map((post, index) => (
                    <div key={post.id}>
                        <Row>
                            {/* Image on LEFT for even-indexed posts */}
                            {post.image && index % 2 === 0 && (
                                <Col xs={12} md={6}>
                                    <img 
                                        alt={post.imageAlt} 
                                        src={post.image} 
                                        className="img-fluid"
                                        style={{ borderRadius: '8px', marginBottom: '20px' }}
                                    />
                                </Col>
                            )}
                            
                            {/* Content column */}
                            <Col xs={12} md={post.image ? 6 : 12}>
                                <p style={{ color: '#B47EDE', fontSize: '16px', marginBottom: '8px', fontWeight: '500' }}>
                                    {post.date}
                                </p>
                                <h2>{post.title}</h2>
                                <p style={{ fontSize: "20px" }}>
                                    {post.content}
                                </p>

                                
                                {/* Members section with styled color */}
                                {post.members && (
                                    <p style={{ 
                                        fontSize: "18px", 
                                        color: "#7A4CA8",  // Darker purple - noticeable but not extreme
                                        fontStyle: "italic",
                                        marginTop: "12px"
                                    }}>
                                        <span style={{ fontWeight: "500" }}>Members: </span>
                                        {post.members}
                                    </p>
                                )}
                                    
                                {/* Optional link */}
                                {post.link && (
                                    <a 
                                        href={post.link.url} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        style={{ 
                                            color: '#B47EDE', 
                                            fontSize: '18px',
                                            textDecoration: 'none',
                                            fontWeight: '500',
                                            display: 'inline-block',
                                            marginTop: '10px'
                                        }}
                                    >
                                        {post.link.text}
                                    </a>
                                )}
                            </Col>


                            {/* Image on RIGHT for odd-indexed posts */}
                            {post.image && index % 2 !== 0 && (
                                <Col xs={12} md={6}>
                                    <img 
                                        alt={post.imageAlt} 
                                        src={post.image} 
                                        className="img-fluid"
                                        style={{ borderRadius: '8px', marginBottom: '20px' }}
                                    />
                                </Col>
                            )}
                        </Row>
                        
                        {/* Divider between posts (not after the last one) */}
                        {index < highlights.length - 1 && <hr style={hrStyle} />}
                    </div>
                ))}

            </Container>
            <br />
        </div>
    );
}

export default Highlight;