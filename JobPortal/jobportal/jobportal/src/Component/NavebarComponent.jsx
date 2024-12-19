import { AppBar, Box, Button, IconButton, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NavebarComponent = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>


            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >

                    </IconButton>
                    <Box sx={{ flexGrow: 1 }} />
                    <Link to={'/login'}><Button color="inherit" style={{ color: "white" }}>Login</Button></Link>
                    <Link to={'/signup'}><Button color="inherit" style={{ color: "white" }}>SignUp</Button></Link>
                    <Link to={'/viewcompany'}><Button color="inherit" style={{ color: "white" }}>Employee Profile</Button></Link>
                    <Link to={'/viewemployee'}><Button color="inherit" style={{ color: "white" }}>Company Profile</Button></Link>
                    <Link to={'/addcompany'}><Button color="inherit" style={{ color: "white" }}>Add Company </Button></Link>
                    <Link to={'/addemploye'}><Button color="inherit" style={{ color: "white" }}>Add Employee </Button></Link>
                    <Link to={'/jobapply'}><Button color="inherit" style={{ color: "white" }}>Job Apply </Button></Link>
                    <Link to={'/logout'}><Button color="inherit" style={{ color: "white" }}>Logout </Button></Link>
                </Toolbar>
            </AppBar>


        </Box>
    )
}

export default NavebarComponent
