// Projects.jsx
import React from 'react';

export const Projects = () => {
  return ( 
    <div id="projects" style={styles.container}>
      <div style={styles.content}>
        <div style={styles.textContainer}>
          <h3>PROJECTS</h3>
          <h2>Here's some of my latest work 👨‍💻</h2>
          <p>This is where the writeup goes</p>
        </div>
        <div style={styles.imageContainer}>
          <img src="your-project-image-url.jpg" alt="Project Image" style={styles.image} />
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


export default Projects;