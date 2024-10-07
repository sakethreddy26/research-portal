import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Container, Box, TextField, Button, Grid, Paper } from '@mui/material';
import Navbar from './Navbar';

const Signup = () => {
    const [formData, setFormData] = useState({
        empId: '',
        password: '',
        name: '',
        phno: '',
        dept: '',
        campus: '',
        panNo: '',
        qualification: '',
        designation: '',
        expertise: '',
        dateOfJoining: '',
        totalExpBfrJoin: '',
        googleScholarId: '',
        sId: '',
        oId: '',
        profileImg: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSignup = async () => {
        try {
            const response = await fetch("http://localhost:4000/v1/api/faculty/signup", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const contentType = response.headers.get('content-type');
            if (!contentType || !contentType.includes('application/json')) {
                throw new Error('Received non-JSON response');
            }

            const data = await response.json();
            console.log(data);

            if (!data.result) {
                alert("Signup failed. Please check your input.");
                throw new Error('Network response was not ok');
            }

            alert("Successfully signed up");
            setFormData({
                empId: '',
                password: '',
                name: '',
                phno: '',
                dept: '',
                campus: '',
                panNo: '',
                qualification: '',
                designation: '',
                expertise: '',
                dateOfJoining: '',
                totalExpBfrJoin: '',
                googleScholarId: '',
                sId: '',
                oId: '',
                profileImg: '',
            });
            window.location.href = "/login";
        } catch (error) {
            console.error('Signup error:', error);
            alert('Signup failed. Please try again.');
        }
    };

    return (
        <div>
            <Navbar />
            <AppBar position="static" sx={{ backgroundColor: '#0D47A1' }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Faculty Signup Portal
                    </Typography>
                </Toolbar>
            </AppBar>

            {/* Signup Form */}
            <Container maxWidth="" sx={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundImage: 'url(/img/pixelcut-export.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
                <Grid container justifyContent="center">
                    <Grid item xs={12} sm={8} md={6}>
                        <Paper elevation={10} sx={{ padding: 4, backgroundColor: 'rgba(13, 71, 161, 0.7)', color: '#fff' }}>
                            <Typography variant="h4" gutterBottom align="center">
                                Signup
                            </Typography>
                            <Box component="form" onSubmit={(e) => { e.preventDefault(); handleSignup(); }} noValidate>
                                <TextField
                                    fullWidth
                                    label="Employee ID"
                                    name="empId"
                                    value={formData.empId}
                                    onChange={handleChange}
                                    required
                                    margin="normal"
                                    variant="outlined"
                                    InputLabelProps={{ style: { color: 'white' } }}
                                    InputProps={{ style: { color: 'white' } }}
                                />
                                <TextField
                                    fullWidth
                                    label="Password"
                                    name="password"
                                    type="password" // <-- Password field added here
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                    margin="normal"
                                    variant="outlined"
                                    InputLabelProps={{ style: { color: 'white' } }}
                                    InputProps={{ style: { color: 'white' } }}
                                />
                                <TextField
                                    fullWidth
                                    label="Name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    margin="normal"
                                    variant="outlined"
                                    InputLabelProps={{ style: { color: 'white' } }}
                                    InputProps={{ style: { color: 'white' } }}
                                />
                                <TextField
                                    fullWidth
                                    label="Phone Number"
                                    name="phno"
                                    type="tel"
                                    value={formData.phno}
                                    onChange={handleChange}
                                    required
                                    margin="normal"
                                    variant="outlined"
                                    InputLabelProps={{ style: { color: 'white' } }}
                                    InputProps={{ style: { color: 'white' } }}
                                />
                                <TextField
                                    fullWidth
                                    label="Department"
                                    name="dept"
                                    value={formData.dept}
                                    onChange={handleChange}
                                    required
                                    margin="normal"
                                    variant="outlined"
                                    InputLabelProps={{ style: { color: 'white' } }}
                                    InputProps={{ style: { color: 'white' } }}
                                />
                                <TextField
                                    fullWidth
                                    label="Campus"
                                    name="campus"
                                    value={formData.campus}
                                    onChange={handleChange}
                                    required
                                    margin="normal"
                                    variant="outlined"
                                    InputLabelProps={{ style: { color: 'white' } }}
                                    InputProps={{ style: { color: 'white' } }}
                                />
                                <TextField
                                    fullWidth
                                    label="PAN Number"
                                    name="panNo"
                                    value={formData.panNo}
                                    onChange={handleChange}
                                    type="text"
                                    margin="normal"
                                    variant="outlined"
                                    InputLabelProps={{ style: { color: 'white' } }}
                                    InputProps={{ style: { color: 'white' } }}
                                />
                                <TextField
                                    fullWidth
                                    label="Qualification"
                                    name="qualification"
                                    value={formData.qualification}
                                    onChange={handleChange}
                                    margin="normal"
                                    variant="outlined"
                                    InputLabelProps={{ style: { color: 'white' } }}
                                    InputProps={{ style: { color: 'white' } }}
                                />
                                <TextField
                                    fullWidth
                                    label="Designation"
                                    name="designation"
                                    value={formData.designation}
                                    onChange={handleChange}
                                    margin="normal"
                                    variant="outlined"
                                    InputLabelProps={{ style: { color: 'white' } }}
                                    InputProps={{ style: { color: 'white' } }}
                                />
                                <TextField
                                    fullWidth
                                    label="Expertise"
                                    name="expertise"
                                    value={formData.expertise}
                                    onChange={handleChange}
                                    margin="normal"
                                    variant="outlined"
                                    InputLabelProps={{ style: { color: 'white' } }}
                                    InputProps={{ style: { color: 'white' } }}
                                />
                                <TextField
                                    fullWidth
                                    label="Date of Joining"
                                    name="dateOfJoining"
                                    type="date"
                                    value={formData.dateOfJoining}
                                    onChange={handleChange}
                                    margin="normal"
                                    variant="outlined"
                                    InputLabelProps={{ shrink: true, style: { color: 'white' } }}
                                    InputProps={{ style: { color: 'white' } }}
                                />
                                <TextField
                                    fullWidth
                                    label="Total Experience Before Joining"
                                    name="totalExpBfrJoin"
                                    type="number"
                                    value={formData.totalExpBfrJoin}
                                    onChange={handleChange}
                                    margin="normal"
                                    variant="outlined"
                                    InputLabelProps={{ style: { color: 'white' } }}
                                    InputProps={{ style: { color: 'white' } }}
                                />
                                <TextField
                                    fullWidth
                                    label="Google Scholar ID"
                                    name="googleScholarId"
                                    value={formData.googleScholarId}
                                    onChange={handleChange}
                                    margin="normal"
                                    variant="outlined"
                                    InputLabelProps={{ style: { color: 'white' } }}
                                    InputProps={{ style: { color: 'white' } }}
                                />
                                <TextField
                                    fullWidth
                                    label="Profile Image URL"
                                    name="profileImg"
                                    type="url"
                                    value={formData.profileImg}
                                    onChange={handleChange}
                                    margin="normal"
                                    variant="outlined"
                                    InputLabelProps={{ style: { color: 'white' } }}
                                    InputProps={{ style: { color: 'white' } }}
                                />
                                <Box mt={3} textAlign="center">
                                    <Button type="submit" variant="contained" color="primary" size="large">
                                        Signup
                                    </Button>
                                </Box>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Signup;
