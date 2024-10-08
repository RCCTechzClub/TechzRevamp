import React from 'react';
import Link from 'next/link';

const NotFoundPage: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404 - Page Not Found</h1>
      <p style={styles.description}>
        Oops! The page you're looking for doesn't exist.
      </p>
      <div style={styles.imageContainer}>
        <img 
          src="https://app.svgator.com/assets/svgator.webapp/log-in-girl.svg" 
          alt="404 error" 
          style={{ width: '100%', maxWidth: '400px', height: 'auto', marginBottom: '20px' }} 
        />
      </div>
      <Link href="/" style={styles.homeLink}>
        Go back to Homepage
      </Link>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center' as const,
    padding: '50px',
    color: '#ffffff',
    backgroundColor: '#0f0f0f',
    minHeight: '100vh',
  },
  title: {
    fontSize: '3rem',
    marginBottom: '20px',
    color: '#9f9f9f',
  },
  description: {
    fontSize: '1.5rem',
    marginBottom: '30px',
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px',
  },
  homeLink: {
    fontSize: '1.2rem',
    color: '#9f9f9f',
    textDecoration: 'none',
    border: '2px solid #9f9f9f',
    padding: '10px 20px',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
  },
};

export default NotFoundPage;
