/*
import React, { useState } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
*/
import Emily from "../../resources/Emily.JPG";
import Charli from "../../resources/Charli.jpg";
import Emma from "../../resources/Emma.JPEG";
import wecs from "../../resources/WECS Logo.png";
import pinkBackground from "../../resources/Pink Powder.jpg"

/*
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
*/
import React, { useState } from 'react';

const photoData = [
  {
    text: 'Presidential Team',
    photos: [
      { src: Emily, title: 'Emily - President', description: 'Hello everyone and welcome to WECS! I’m very excited to be leading this team of amazing women. We have some great plans and look forward to meeting all of you! If you see me on campus, say hi! I will probably talk about my current netflix obsession or maybe my newest plant, but I’m sure we can find time to discuss WECS.' },
      { src: Charli, title: 'Charli - Vice President', description: 'When I first started at UVic, I had no idea what writing code even meant, but it turns out that this coding thing is pretty cool! I\'m excited to be able to support other women in engineering and computer science this year and I hope to see you all at our upcoming events!' },
      { src: Emma, title: 'Emma - Vice President', description: 'Hello! My name is Emma and I am super excited to continue working with WECS after being a part of the revival in 2023. I am ready to contribute to the growing community we’ve got going and can’t wait to expand and reach out more to local communities and UVic students. If you see me around in the gym, or wandering campus, please feel free to have a chat!' },
      
    ],
  },
  {
    text: 'Administration Team',
    photos: [
      { src: pinkBackground, title: 'Isabella - VP Finance', description: '' },
      { src: 'photo3.jpg', title: 'Photo 3', description: 'Information about photo 3' },
      { src: 'photo4.jpg', title: 'Photo 4', description: 'Information about photo 4' },
      { src: 'photo5.jpg', title: 'Photo 5', description: 'Information about photo 5' },
    ],
  },
  // Add more rows as needed
];

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };

  const handleClose = () => {
    setSelectedPhoto(null);
  };

  return (
    <div style={styles.container}>
      {/* Title and Introduction */}
      <div style={styles.header}>
        <h1>WECS Team</h1>
        <p>Meet the wonderful team behind WECS</p>
      </div>

      {/* Photo Gallery Grid */}
      <div style={styles.gallery}>
        {photoData.map((row, rowIndex) => (
          <div style={styles.rowContainer}>
            <h3 style={styles.rowText}>{row.text}</h3>
            <div style={styles.row}>
              {row.photos.map((photo) => (
                <img
                 
                  src={photo.src}
                  alt={photo.title}
                  style={styles.thumbnail}
                  onClick={() => handlePhotoClick(photo)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Selected Photo */}
      {selectedPhoto && (
        <div style={styles.modalOverlay} onClick={handleClose}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <span style={styles.closeButton} onClick={handleClose}>×</span>
            <div style={styles.modalBody}>
              <img src={selectedPhoto.src} alt={selectedPhoto.title} style={styles.largeImage} />
              <div style={styles.description}>
                <h2>{selectedPhoto.title}</h2>
                <p>{selectedPhoto.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
  },
  header: {
    marginBottom: '20px',
    textAlign: 'center',
  },
  gallery: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  rowContainer: {
    width: '100%',
    marginBottom: '20px',
  },
  rowText: {
    textAlign: 'left',
    marginBottom: '10px',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  thumbnail: {
    maxWidth: '350px',
    maxHeight: '350px',
    margin: '10px',
    cursor: 'pointer',
    objectFit: 'contain',
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
    position: 'relative',
    maxWidth: '90%',
    maxHeight: '90%',
    display: 'flex',
    flexDirection: 'column',
  },
  modalBody: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  largeImage: {
    maxWidth: '50%',
    maxHeight: '80vh',
    width: 'auto',
    height: 'auto',
    marginRight: '20px',
    objectFit: 'contain',
  },
  description: {
    maxWidth: '40%',
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    fontSize: '24px',
    cursor: 'pointer',
  },
};

export default PhotoGallery;
