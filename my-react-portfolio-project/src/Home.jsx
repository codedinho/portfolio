import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faHtml5, faCss3Alt, faJsSquare, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

export const Home = () => {
  const imageUrl = import.meta.env.BASE_URL + 'imgs/profile-headshot-charlie.png';

  return (
    <div id="home" style={styles.container}>
      <div style={styles.content}>
        <div style={styles.imageContainer}>
          <div className="blob-frame">
            <img src={imageUrl} id="prof-pic-blob" alt="Profile Pic" style={styles.image} />
          </div>
        </div>
        <div style={styles.textContainer}>
          <h1>Full-Stack JS<br />Developer 👋</h1>
          <p>Hi, I'm Charlie. A passionate Full-Stack Developer based in Brighton, UK. 📍</p>
          <div style={styles.iconContainer}>
            <h4 id="textStacktext">Tech Stack  |
              <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" target="_blank" rel="noopener noreferrer" className="icon-link-html" id="icon-link">
                <FontAwesomeIcon icon={faHtml5} style={styles.icon} />
              </a>
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer" className="icon-link-css" id="icon-link">
                <FontAwesomeIcon icon={faCss3Alt} style={styles.icon} />
              </a>
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer" className="icon-link-js" id="icon-link">
                <FontAwesomeIcon icon={faJsSquare} style={styles.icon} />
              </a>
              <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" className="icon-link-react" id="icon-link">
                <FontAwesomeIcon icon={faReact} style={styles.icon} />
              </a>
              <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer" className="icon-link-git" id="icon-link">
                <FontAwesomeIcon icon={faGithub} style={styles.icon} />
              </a>
              <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer" className="icon-link-mongo" id="icon-link">
              <FontAwesomeIcon icon={faDatabase} style={styles.icon} />
            </a>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px', // Adjust the spacing from the top as needed
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
    flex: 1.5,
    margin: '20px', // Updated margin for better spacing
    color: '#363638',
    minWidth: '300px', // Ensure minimum width for smaller screens
    textAlign: 'center',
  },
  imageContainer: {
    flex: 1,
    margin: '20px', // Updated margin for better spacing
    minWidth: '300px', // Ensure minimum width for smaller screens
  },
  image: {
    width: '120%',
    height: 'auto',
    position: 'relative',
    justifyContent: 'center',
    right: '25px',
    bottom: '10px',
    zIndex: '1',
    opacity: '1',
  },
  iconContainer: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'flex-start',
  },
  iconLink: {
    marginRight: '15px',
    color: 'gray',
  },
  icon: {
    marginTop: '20px',
    fontSize: '44px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '30px',
    height: '30px',
    padding: '5px',
    borderRadius: '10px',
  },
};

// Add media query for mobile view
if (window.matchMedia("(max-width: 600px)").matches) {
  styles.textContainer.textAlign = 'center';
}

export default Home;