// Projects.jsx
import React from 'react';
const imageUrl = import.meta.env.BASE_URL + 'imgs/about-me-photo.jpg';

export const AboutMe = () => {
  return ( 
    <div id="about" style={styles.container}>
      <div style={styles.content}>
      <div style={styles.imageContainer}>
      <img src={imageUrl} alt="About Pic" style={styles.image} />
        </div>
        <div style={styles.textContainer}>
          <h3 id="aboutTitle">ABOUT ME</h3>
          <h2>Full-Stack Developer based in Brighton, UK 📍</h2>
          <p>I'm a full-stack Developer currently using Javascript, HTML5, CSS. I enjoy creating and developing clean code and a pleasing UI/UX for my users.<br></br><br></br>
              My main stack currently is the MERN stack; MongoCB, Express.js, React.js & Node.js.</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px', // Adjust the spacing from the top as needed
    padding: '100px',
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '1000px',
    margin: '0 auto',
    flexWrap: 'wrap', // Allow wrapping for mobile view
  },
  textContainer: {
    flex: 1,
    margin: '20px', // Updated margin for better spacing
    color: '#363638',
    minWidth: '300px', // Ensure minimum width for smaller screens
    textAlign: 'left',
  },
  imageContainer: {
    flex: 1,
    margin: '20px', // Updated margin for better spacing
    minWidth: '300px', // Ensure minimum width for smaller screens
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '20px',
    position: 'relative',
    zIndex: 1,
  },
};


export default AboutMe;