import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Card, CardContent, CardActions, Alert } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegisterComponent = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [post, setPost] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = async () => {
        try {
            const response = await axios.post('https://localhost:7019/api/Job/register', {
                username: username,
                password: password,
                email: email,
                post: post
            });
            // Assuming the API returns a status code of 200 on successful registration
            if (response.status === 200) {
                navigate('/login'); // Navigate to login page on successful registration
            }
        } catch (err) {
            setError('Registration failed. Please try again.');
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundImage: 'url(https://source.unsplash.com/random)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                backgroundBlendMode: 'darken',
            }}
        >
            <Card sx={{ maxWidth: 400, padding: 2, backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                <CardContent>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Registration
                    </Typography>
                    <TextField
                        required
                        fullWidth
                        id="outlined-required"
                        label="Name"
                        margin="normal"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextField
                        required
                        fullWidth
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        margin="normal"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <TextField
                        required
                        fullWidth
                        id="outlined-required"
                        label="Email"
                        margin="normal"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        required
                        fullWidth
                        id="outlined-required"
                        label="PostID"
                        margin="normal"
                        value={post}
                        onChange={(e) => setPost(e.target.value)}
                    />
                    {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
                </CardContent>
                <CardActions>
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={handleRegister}
                    >
                        Register
                    </Button>
                </CardActions>
            </Card>
        </Box>
    );
};

export default RegisterComponent;
