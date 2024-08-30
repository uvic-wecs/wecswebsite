import React, { useState } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';

import Emily from "../../resources/Emily.JPG";
import Charli from "../../resources/Charli.jpg"
import Emma from "../../resources/Emma.JPEG"

// Sample data for gallery
const photoData = [
  { 
    id: 1, 
    src: Emily, 
    title: 'Emily - President',
    description: 'This is a description of Photo 1. It provides more details about the image.',
  },
  { 
    id: 2, 
    src: Charli, 
    title: 'Charli - Vice President',
    description: 'This is a description of Photo 2. It provides more details about the image.',
  },
  { 
    id: 3, 
    src: Emma, 
    title: 'Emma - Vice President',
    description: 'This is a description of Photo 3. It provides more details about the image.',
  },
  { 
    id: 4, 
    src: 'https://via.placeholder.com/500x500', 
    title: 'Photo 4',
    description: 'This is a description of Photo 4. It provides more details about the image.',
  },
  { 
    id: 5, 
    src: 'https://via.placeholder.com/600x400', 
    title: 'Photo 5',
    description: 'This is a description of Photo 5. It provides more details about the image.',
  },
  { 
    id: 6, 
    src: 'https://via.placeholder.com/400x600', 
    title: 'Photo 6',
    description: 'This is a description of Photo 6. It provides more details about the image.',
  },
];


// Text snippets to display between rows
const rowTexts = [
  'This is some text between the first row of photos. It can be customized as needed.',
  'text',
  "other text",
];

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Function to handle photo clicks
  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };

  // Function to close the modal
  const handleClose = () => {
    setSelectedPhoto(null);
  };

  // Split the photos into rows of 2
  const chunkArray = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };

  const photoRows = chunkArray(photoData, 3); // Group photos in rows of 2

  return (
    <Container>
      {/* Title and Introduction */}
      <div className="text-center my-4">
        <h1>My Photo Gallery</h1>
        <p>Welcome to my photo gallery! Click on any image to learn more about it.</p>
      </div>

      {/* Photo Gallery with Text Between Rows */}
      {photoRows.map((row, index) => (
        <React.Fragment key={index}>
          <Row className="g-4">
            {row.map((photo) => (
              <Col
                key={photo.id}
                xs={12}
                sm={6}
                md={4}
                className="d-flex justify-content-center align-items-center"
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="img-fluid rounded shadow-sm"
                  style={{ maxWidth: '300px', maxHeight: '300px', cursor: 'pointer' }}
                  onClick={() => handlePhotoClick(photo)}
                />
              </Col>
            ))}
          </Row>

          {/* Add different text between each row of photos */}
          {index < rowTexts.length && (
            <div className="text-center my-3">
              <p>{rowTexts[index]}</p>
            </div>
          )}
        </React.Fragment>
      ))}

      {/* Modal for Selected Photo */}
      <Modal show={!!selectedPhoto} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedPhoto?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6}>
              <img
                src={selectedPhoto?.src}
                alt={selectedPhoto?.title}
                className="img-fluid"
                style={{ maxHeight: '80vh', objectFit: 'contain' }}
              />
            </Col>
            <Col md={6}>
              <p>{selectedPhoto?.description}</p>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default PhotoGallery;

