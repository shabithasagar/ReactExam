// Logout.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Box, Button } from '@mui/material';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear user authentication data
    localStorage.removeItem('authToken'); // Replace 'authToken' with your actual token name
    // Redirect to login or home page after a delay
    setTimeout(() => {
      // Or the route you want to redirect to
    }, 3000);
  }, [navigate]);

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center'
      }}
    >
      <Box
        sx={{
          p: 4,
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: 'white',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          You are being logged out
        </Typography>
        <Typography variant="h6" component="p" gutterBottom>
          Redirecting to the login page...
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/login')}
        >
          Go to Login
        </Button>
      </Box>
    </Container>
  );
};

export default Logout;
