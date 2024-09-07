import React, { useState } from 'react';
import Footer from '../footer/footer';

import Emily from "../../resources/Emily.JPG";
import Charli from "../../resources/Charli.jpg";
import Emma from "../../resources/Emma.JPEG";
import Tobi from "../../resources/Tobi.png";
import Jenny from "../../resources/Jenny.jpg";
import Grace from "../../resources/Grace.jpg";
import Ella from "../../resources/Ella.jpg";
import Malsha from "../../resources/Malsha.JPG";
import Sam from "../../resources/Sam.webp";
import Cristina from "../../resources/Cristina.jpg";
import Sydney from "../../resources/Sydney.jpg";
import Helena from "../../resources/Helena.JPG";
import Alice from "../../resources/Alice.webp";

import wecsLogo from "../../resources/WECS Logo.png";
import pinkBackground from "../../resources/Pink Powder.jpg";
import wecsTeam from "../../resources/WECS Team.jpg";

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
      { src: wecsLogo, title: 'Accepting Applications - HR', description: 'Apply here.' },
    ],
  },
  {
    text: 'Marketing Team',
    photos: [
      { src: Tobi, title: 'Tobi - VP Marketing', description: 'Hi everyone! I’m Tobi, a second-year student majoring in computer science and psychology combined. I love cats and tv-shows, and I moved here from Ireland but have now been living in Canada for six years. I am very excited to be a part of WECS and enhance our community within Engineering and Computer Science!' },
      { src: Jenny, title: 'Jenny - Media Director', description: 'This is my first year as a WECS member and I\'m excited to join. I hope to expand the community and help out as many students as possible! In my free time, I enjoy hiking and painting!' },
      { src: Ella, title: 'Ella - Website Director', description: 'My name is Ella and I\'m a third-year Software Engineering student. I\'m so excited to improve the WECS website and help build a welcoming community for women and gender non-conforming individuals in engineering and computer science as Website Director!' },
      { src: Grace, title: 'Grace - Newsletter Director', description: 'Hello! My name is Grace and I’m going into my second year of Math and Comp Sci, and joined WECS May 2024. I’m looking forward to working with everyone and getting to use my creative skills making the newsletter!' },
      
    ],
  },
  {
    text: 'Community Team',
    photos: [
      { src: Malsha, title: 'Malsha - VP Community', description: 'Hi there! My name is Malsha and I am a third year mechanical engineering student. I joined WECS in April of 2024. I can’t wait to get to know you and for us to come together and have our voices heard :)' },
      { src: Cristina, title: 'Cristina - Community Events Director', description: 'One of my favourite things about taking engineering at UVic is the strong sense of community present within the program. I hope to extend that community to any student in engineering and computer science looking for that extra support! In my free time I like being with my friends, listening to music, and exploring outside.' },
      { src: pinkBackground, title: 'Fareess - Community Events Director', description: 'Hi, my name is Fareess and I am currently a first year student at UVIC. I am originally from Calgary Alberta; I am super excited to be a part of WECS.' },
      { src: Sam, title: 'Sam - Operations Director', description: 'Hello! My name is Sam and I’m in my third year studying civil engineering and philosophy/ethics. I’ve been part of WECS since late 2023 and I’m super excited to continue to help foster a community for students here at UVic :)' },
      
    ],
  },
  {
    text: 'Professional Development Team',
    photos: [
      { src: wecsLogo, title: 'Accepting Applications - VP Professional Development', description: 'Apply here.' },
      { src: wecsLogo, title: 'Accepting Applications - Speaker Series Director', description: 'Apply here.' },
      
    ],
  },
  {
    text: 'Academia Team',
    photos: [
      { src: Sydney, title: 'Sydney - VP Academia', description: 'Hey, my name is Sydney and I joined WECS in May 2024. I’m in my third year of software engineering and I’m excited to get involved with WECS and run some awesome events! I get excited about Star Trek and slugs and I love arts and crafts!' },
      { src: pinkBackground, title: 'Claire - Academic Materials Director', description: 'Hi everyone! I am a 3rd year CompSci student this year. I was recently introduced to WECS by Charli and am excited to work with the team to grow the community here at UVic. I’ve always been interested in STEM and only discovered my love for programming last year; I really enjoy being a part of this community.' },
      { src: pinkBackground, title: 'Aislinn - Study Hour Director', description: '' },
      
    ],
  },
  {
    text: 'Outreach Team',
    photos: [
      { src: Helena, title: 'Helena - Internal Outreach Director', description: '' },
      { src: Alice, title: 'Alice - Corporate Outreach Director', description: 'Hi all! Super excited to be working in WECS to bring events and activities to the ENG community!  :) In my free time, I like to read manga and work on projects. Hope to see everyone soon!' },
      { src: wecsLogo, title: 'Accepting Applications - External Outreach Director', description: 'Apply here.' },
      
    ],
  }
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
        <h1>Our Team</h1>
        <p>Meet the wonderful team behind WECS!
          <br></br>
          Look out for our logo - those are our open positions!
          <img src={wecsTeam} height='441px' width='900px'/>
        </p>
      </div>

      {/* Photo Gallery Grid */}
      <div style={styles.gallery}>
        {photoData.map((row, rowIndex) => (
          <div key={rowIndex} style={styles.rowContainer}>
            <h2 style={styles.rowText}>{row.text}</h2>
            <div style={styles.row}>
              {row.photos.map((photo) => (
                <img
                  key={photo.id}
                  src={photo.src}
                  alt={photo.title}
                  className="img-fluid"
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
      <Footer />
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
    maxWidth: '350px', // Set a maximum width for the images
    maxHeight: '300px',
    flex: '1 1 auto',
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
