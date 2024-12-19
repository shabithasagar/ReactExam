import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Card, CardContent, CardActions, Alert } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProfileEmployeComponent = () => {
    const [employeename, setEmployeeName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [experience, setExperience] = useState('');
    const [currentJob, setCurrentJob] = useState('');
    const [highestDegree, setHighestDegree] = useState('');
    const [expectedSalary, setExpectedSalary] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const handleRegister = async (event) => {
        event.preventDefault();
        setError('');
        setSuccess(false);

        const newEmployee = {
            employeename: employeename,
            Address: address,
            email: email,
            experiance: experience,
            currentjob: currentJob,
            highestdegree: highestDegree,
            expesal: expectedSalary
        };

        try {
            const response = await axios.post('https://localhost:7019/api/Job/registerEmployee', newEmployee);
            if (response.status === 200) {
                setSuccess(true);
                setEmployeeName('');
                setAddress('');
                setEmail('');
                setExperience('');
                setCurrentJob('');
                setHighestDegree('');
                setExpectedSalary('');
                // Redirect to view employees or another appropriate page
                navigate('/viewcompany');
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
                height: '150vh',
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
                        Register New Employee
                    </Typography>
                    <TextField
                        required
                        fullWidth
                        id="employeename"
                        label="Employee Name"
                        margin="normal"
                        value={employeename}
                        onChange={(e) => setEmployeeName(e.target.value)}
                    />
                    <TextField
                        required
                        fullWidth
                        id="address"
                        label="Address"
                        margin="normal"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    <TextField
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        margin="normal"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        required
                        fullWidth
                        id="experience"
                        label="Experience"
                        margin="normal"
                        value={experience}
                        onChange={(e) => setExperience(e.target.value)}
                    />
                    <TextField
                        required
                        fullWidth
                        id="currentJob"
                        label="Current Job"
                        margin="normal"
                        value={currentJob}
                        onChange={(e) => setCurrentJob(e.target.value)}
                    />
                    <TextField
                        required
                        fullWidth
                        id="highestDegree"
                        label="Highest Degree"
                        margin="normal"
                        value={highestDegree}
                        onChange={(e) => setHighestDegree(e.target.value)}
                    />
                    <TextField
                        required
                        fullWidth
                        id="expectedSalary"
                        label="Expected Salary"
                        margin="normal"
                        value={expectedSalary}
                        onChange={(e) => setExpectedSalary(e.target.value)}
                    />
                    {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
                    {success && <Alert severity="success" sx={{ mt: 2 }}>Employee registered successfully!</Alert>}
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

export default ProfileEmployeComponent; // Ensure default export is present
