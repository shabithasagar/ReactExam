import { Box, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Button } from '@mui/material';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const ViewEmployeComponent = () => {
    const [Jobdetail, setJobdetail] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchTasks = () => {
        setLoading(true);
        axios.get('https://localhost:7019/api/Job/company')
            .then(response => {
                setJobdetail(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    };

    const handleDelete = (id) => {
        axios.delete(`https://localhost:7019/api/Job/${id}`)
            .then(response => {
                setJobdetail(prevDetails => prevDetails.filter(emp => emp.id !== id));
            })
            .catch(error => {
                setError(error.message);
            });
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    if (loading) {
        return <Typography>Loading...</Typography>;
    }

    if (error) {
        return <Typography>Error: {error}</Typography>;
    }

    return (
        <Container sx={{ marginTop: 4 }}>
            <Box display="flex" justifyContent="center" marginBottom={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Company Details
                </Typography>
            </Box>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Category</TableCell>
                            <TableCell>Phone Number</TableCell>
                            <TableCell>Website</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Jobdetail.map((employee) => (
                            <TableRow key={employee.id}>
                                <TableCell>{employee.id}</TableCell>
                                <TableCell>{employee.name}</TableCell>
                                <TableCell>{employee.category}</TableCell>
                                <TableCell>{employee.phoneno}</TableCell>
                                <TableCell>{employee.website}</TableCell>
                                <TableCell>
                                    <Button onClick={() => handleDelete(employee.id)}>Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default ViewEmployeComponent;
