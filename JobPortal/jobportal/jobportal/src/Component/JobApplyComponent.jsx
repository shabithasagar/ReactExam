import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import axios from 'axios';

const JobApplyComponent = () => {
    const [formData, setFormData] = useState({
        employeename: '',
        address: '',
        email: '',
        experiance: '',
        currentjob: '',
        highestdegree: '',
        expesal: '',
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        axios.post('https://localhost:7019/api/Job/apply', formData)
            .then(response => {
                setLoading(false);
                setSuccess("Application submitted successfully!");
                setFormData({
                    employeename: '',
                    address: '',
                    email: '',
                    experiance: '',
                    currentjob: '',
                    highestdegree: '',
                    expesal: '',
                });
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    };

    return (
        <Container sx={{ marginTop: 4 }}>
            <Box display="flex" justifyContent="center" marginBottom={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Job Application Form
                </Typography>
            </Box>
            <form onSubmit={handleSubmit}>
                <TextField
                    name="employeename"
                    label="Employee Name"
                    fullWidth
                    margin="normal"
                    value={formData.employeename}
                    onChange={handleChange}
                />
                <TextField
                    name="address"
                    label="Address"
                    fullWidth
                    margin="normal"
                    value={formData.address}
                    onChange={handleChange}
                />
                <TextField
                    name="email"
                    label="Email"
                    fullWidth
                    margin="normal"
                    value={formData.email}
                    onChange={handleChange}
                />
                <TextField
                    name="experiance"
                    label="Experience"
                    fullWidth
                    margin="normal"
                    value={formData.experiance}
                    onChange={handleChange}
                />
                <TextField
                    name="currentjob"
                    label="Current Job"
                    fullWidth
                    margin="normal"
                    value={formData.currentjob}
                    onChange={handleChange}
                />
                <TextField
                    name="highestdegree"
                    label="Highest Degree"
                    fullWidth
                    margin="normal"
                    value={formData.highestdegree}
                    onChange={handleChange}
                />
                <TextField
                    name="expesal"
                    label="Expected Salary"
                    fullWidth
                    margin="normal"
                    value={formData.expesal}
                    onChange={handleChange}
                />
                {error && <Typography color="error">{error}</Typography>}
                {success && <Typography color="success.main">{success}</Typography>}
                <Box display="flex" justifyContent="center" marginTop={2}>
                    <Button type="submit" variant="contained" color="primary" disabled={loading}>
                        {loading ? "Submitting..." : "Submit"}
                    </Button>
                </Box>
            </form>
        </Container>
    );
};

export default JobApplyComponent;
