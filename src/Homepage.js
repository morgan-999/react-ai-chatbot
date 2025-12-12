import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = ({MLKLogo}) => {
  const OFFLINE_IMAGE_PATH_FRAGMENT = './Offline - MLK.png';
  const isOffline = MLKLogo.endsWith(OFFLINE_IMAGE_PATH_FRAGMENT);
  const linkTo = isOffline ? '#' : '/chat';
  const linkStyle = {
    pointerEvents: isOffline ? 'none' : 'auto',
    cursor: isOffline ? 'default' : 'pointer',
    opacity: isOffline ? 0.7 : 1,
    display: 'inline-block'
  };

  return (
    <div style={{ color: 'white', padding: '20px', maxWidth: '900px', margin: '0 auto' }}>
      
      {/* Hero Section with Logo */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <Link to={linkTo} style={linkStyle}>
          <img
            src={MLKLogo}
            alt="Martin Luther King Jr. portrait"
            style={{ width: '150px', height: 'auto', borderRadius: '50%', marginBottom: '20px'}}
          />
        </Link>
        <h1 style={{ fontSize: '2.5em', marginBottom: '10px' }}>Dr. Martin Luther King Jr.</h1>
        <p style={{ fontSize: '1.2em', color: 'rgba(255, 255, 255, 0.9)' }}>
          Baptist Minister & Civil Rights Leader (1929-1968)
        </p>
        <Link 
          to={linkTo} 
          style={{
            ...linkStyle,
            textDecoration: 'none',
            display: 'inline-block',
            marginTop: '20px',
            padding: '12px 30px',
            backgroundColor: '#61dafb',
            color: '#000',
            borderRadius: '25px',
            fontWeight: 'bold',
            fontSize: '1.1em'
          }}
        >
          Start a Conversation
        </Link>
      </div>

      {/* About Section */}
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '15px',
        padding: '30px',
        marginBottom: '30px'
      }}>
        <h2 style={{ marginTop: '0', fontSize: '2em' }}>About Dr. King</h2>
        <p style={{ lineHeight: '1.8', fontSize: '1.1em', color: 'rgba(255, 255, 255, 0.95)' }}>
          Dr. Martin Luther King Jr. was a Baptist minister and the most prominent leader of the American Civil Rights Movement from 1955 until his assassination in 1968. He is best known for advancing civil rights through nonviolence and civil disobedience, inspired by his Christian beliefs and the teachings of Mahatma Gandhi.
        </p>
        <p style={{ lineHeight: '1.8', fontSize: '1.1em', color: 'rgba(255, 255, 255, 0.95)' }}>
          Born on January 15, 1929, in Atlanta, Georgia, Dr. King played a pivotal role in ending the legal segregation of African Americans in the United States. His leadership in the Montgomery Bus Boycott (1955-1956) brought him to national prominence and demonstrated the power of nonviolent protest.
        </p>
      </div>

      {/* Key Achievements Section */}
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '15px',
        padding: '30px',
        marginBottom: '30px'
      }}>
        <h2 style={{ marginTop: '0', fontSize: '2em' }}>Key Achievements</h2>
        
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ fontSize: '1.3em', marginBottom: '8px' }}>"I Have a Dream" Speech (1963)</h3>
          <p style={{ lineHeight: '1.8', color: 'rgba(255, 255, 255, 0.95)' }}>
            Delivered at the March on Washington for Jobs and Freedom on August 28, 1963, to over 250,000 people. This iconic speech called for an end to racism and became a defining moment of the Civil Rights Movement.
          </p>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ fontSize: '1.3em', marginBottom: '8px' }}>Nobel Peace Prize (1964)</h3>
          <p style={{ lineHeight: '1.8', color: 'rgba(255, 255, 255, 0.95)' }}>
            At age 35, Dr. King became the youngest person at the time to receive the Nobel Peace Prize for his nonviolent resistance to racial prejudice in America.
          </p>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ fontSize: '1.3em', marginBottom: '8px' }}>Civil Rights Act of 1964</h3>
          <p style={{ lineHeight: '1.8', color: 'rgba(255, 255, 255, 0.95)' }}>
            Dr. King's activism was instrumental in the passage of the Civil Rights Act, which outlawed discrimination based on race, color, religion, sex, or national origin.
          </p>
        </div>

        <div>
          <h3 style={{ fontSize: '1.3em', marginBottom: '8px' }}>Voting Rights Act of 1965</h3>
          <p style={{ lineHeight: '1.8', color: 'rgba(255, 255, 255, 0.95)' }}>
            Following the Selma to Montgomery marches, this landmark legislation prohibited racial discrimination in voting, a major victory for the Civil Rights Movement.
          </p>
        </div>
      </div>

      {/* Legacy Section */}
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '15px',
        padding: '30px',
        marginBottom: '30px'
      }}>
        <h2 style={{ marginTop: '0', fontSize: '2em' }}>Legacy</h2>
        <p style={{ lineHeight: '1.8', fontSize: '1.1em', color: 'rgba(255, 255, 255, 0.95)' }}>
          Dr. King was assassinated on April 4, 1968, in Memphis, Tennessee, but his legacy lives on. In 1986, Martin Luther King Jr. Day became a federal holiday, observed on the third Monday of January each year. His philosophy of nonviolent resistance continues to inspire civil rights movements worldwide.
        </p>
        <p style={{ lineHeight: '1.8', fontSize: '1.1em', color: 'rgba(255, 255, 255, 0.95)' }}>
          His words and actions remain a powerful reminder of the ongoing struggle for equality, justice, and human dignity for all people.
        </p>
      </div>

      {/* Call to Action */}
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <p style={{ fontSize: '1.2em', marginBottom: '20px' }}>
          Learn more about Dr. King's philosophy and teachings through conversation.
        </p>
        <Link 
          to={linkTo} 
          style={{
            ...linkStyle,
            textDecoration: 'none',
            display: 'inline-block',
            padding: '12px 30px',
            backgroundColor: '#61dafb',
            color: '#000',
            borderRadius: '25px',
            fontWeight: 'bold',
            fontSize: '1.1em'
          }}
        >
          Chat with MLK
        </Link>
      </div>

    </div>
  );
};

export default Homepage;