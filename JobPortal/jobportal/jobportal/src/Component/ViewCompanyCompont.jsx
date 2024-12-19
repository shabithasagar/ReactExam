import { Box, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Button } from '@mui/material';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const ViewCompanyCompont = () => {
    const [Jobdetail, setJobdetail] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchTasks = () => {
        setLoading(true);
        axios.get('https://localhost:7019/api/Job/employee')
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
        axios.delete(`https://localhost:7019/api/Job/company/${id}`)
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
                    Company Employee Details
                </Typography>
            </Box>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Employee Name</TableCell>
                            <TableCell>Address</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Experience</TableCell>
                            <TableCell>Current Job</TableCell>
                            <TableCell>Highest Degree</TableCell>
                            <TableCell>Expected Salary</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Jobdetail.map((employee) => (
                            <TableRow key={employee.id}>
                                <TableCell>{employee.id}</TableCell>
                                <TableCell>{employee.employeename}</TableCell>
                                <TableCell>{employee.address}</TableCell>
                                <TableCell>{employee.email}</TableCell>
                                <TableCell>{employee.experiance}</TableCell>
                                <TableCell>{employee.currentjob}</TableCell>
                                <TableCell>{employee.highestdegree}</TableCell>
                                <TableCell>{employee.expesal}</TableCell>
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

export default ViewCompanyCompont;
