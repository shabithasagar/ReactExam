import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Card, CardContent, CardActions, Alert } from '@mui/material';
import axios from 'axios'; import { useNavigate } from 'react-router-dom';

const ProfileCompanyComponent = () => {

    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [phoneno, setPhoneno] = useState('');
    const [website, setWebsite] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const handleRegister = async (event) => {
        event.preventDefault();
        setError('');
        setSuccess(false);

        const newCompany = {
            name: name,
            category: category,
            phoneno: phoneno,
            website: website
        };

        try {
            const response = await axios.post('https://localhost:7019/api/Job/registerCompany', newCompany);
            if (response.status === 200) {
                setSuccess(true);
                setName('');
                setCategory('');
                setPhoneno('');
                setWebsite('');
                // Redirect to view companies or another appropriate page
                navigate('/viewemployee');
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
                        Register New Company
                    </Typography>
                    <TextField
                        required
                        fullWidth
                        id="name"
                        label="Company Name"
                        margin="normal"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        required
                        fullWidth
                        id="category"
                        label="Category"
                        margin="normal"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />
                    <TextField
                        required
                        fullWidth
                        id="phoneno"
                        label="Phone Number"
                        margin="normal"
                        value={phoneno}
                        onChange={(e) => setPhoneno(e.target.value)}
                    />
                    <TextField
                        required
                        fullWidth
                        id="website"
                        label="Website"
                        margin="normal"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                    />
                    {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
                    {success && <Alert severity="success" sx={{ mt: 2 }}>Company registered successfully!</Alert>}
                </CardContent>
                <CardActions>
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={handleRegister}
                    >
                        Add
                    </Button>
                </CardActions>
            </Card>
        </Box>
    );
};


export default ProfileCompanyComponent
