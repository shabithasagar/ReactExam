import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Card, CardContent, CardActions, Alert } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginComponent = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post('https://localhost:7019/api/Job/login', {
                userid: 0,
                username: username,
                password: password,
                email: "",
                post: ""
            });
            if (response.status === 200) {
                const role = response.data.role;
                if (role === 'Admin') {
                    navigate('/viewcompany');
                } else if (role === 'Company') {
                    navigate('/addcompany');
                }
                else {
                    navigate('/jobapply');
                }
            }
        } catch (err) {
            if (err.response) {
                console.error('Error response:', err.response);
                setError(err.response.data.message || 'Invalid username or password');
            } else if (err.request) {
                console.error('Error request:', err.request);
                setError('Server did not respond');
            } else {
                console.error('Error message:', err.message);
                setError('An unknown error occurred');
            }
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
                        Login
                    </Typography>
                    <TextField
                        required
                        fullWidth
                        id="outlined-required"
                        label="Username"
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
                    {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
                </CardContent>
                <CardActions>
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={handleLogin}
                    >
                        Login
                    </Button>
                </CardActions>
            </Card>
        </Box>
    );
};

export default LoginComponent;
