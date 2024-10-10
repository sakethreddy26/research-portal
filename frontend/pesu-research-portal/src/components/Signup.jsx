import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Container, Box, TextField, Button, Grid, MenuItem, Select, Paper, InputLabel, FormControl, Stepper, Step, StepLabel } from '@mui/material';
import { styled } from '@mui/material/styles';
import Navbar from './Navbar';

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(4),
    backgroundColor: 'rgba(13, 71, 161, 0.9)', // Increased opacity from 0.7 to 0.9
    color: '#fff',
    borderRadius: theme.shape.borderRadius * 2,
}));

const StyledTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: 'white',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'white',
        },
        '&:hover fieldset': {
            borderColor: 'white',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'white',
        },
    },
});

const StyledSelect = styled(Select)({
    '&.MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'white',
        },
        '&:hover fieldset': {
            borderColor: 'white',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'white',
        },
    },
});

const FullHeightContainer = styled('div')({
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundImage: 'url(/img/pixelcut-export.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
});

const WhiteStepLabel = styled(StepLabel)(({ theme }) => ({
    '& .MuiStepLabel-label': {
        color: theme.palette.common.white,
    },
    '& .MuiStepLabel-label.Mui-active': {
        color: theme.palette.common.white,
    },
    '& .MuiStepLabel-label.Mui-completed': {
        color: theme.palette.common.white,
    },
}));

const Signup = () => {
    const [activeStep, setActiveStep] = useState(0);
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
    const [departments, setDepartments] = useState([]);

    const campusDepartments = {
        ec: ['CSE', 'ECE', 'CSE (AI & ML)', 'Science and Humanities'],
        rr: ['CSE', 'ECE', 'CSE (AI & ML)', 'EEE', 'Mechanical', 'Biotechnology', 'Science and Humanities']
    };

    useEffect(() => {
        if (formData.campus) {
            setDepartments(campusDepartments[formData.campus]);
            // Reset department if it's not available in the new campus
            if (!campusDepartments[formData.campus].includes(formData.dept)) {
                setFormData(prevData => ({ ...prevData, dept: '' }));
            }
        }
    }, [formData.campus]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
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

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log(data);

            if (!data.result) {
                alert("Signup failed. Please check your input.");
                return;
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

    const steps = ['Personal Information', 'Professional Details', 'Additional Information'];

    const getStepContent = (step) => {
        switch (step) {
            case 0:
                return (
                    <>
                        <StyledTextField
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
                        <StyledTextField
                            fullWidth
                            label="Password"
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            margin="normal"
                            variant="outlined"
                            InputLabelProps={{ style: { color: 'white' } }}
                            InputProps={{ style: { color: 'white' } }}
                        />
                        <StyledTextField
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
                        <StyledTextField
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
                    </>
                );
            case 1:
                return (
                    <>
                        <FormControl fullWidth margin="normal">
                            <InputLabel id="campus-label" style={{ color: 'white' }}>Campus</InputLabel>
                            <StyledSelect
                                labelId="campus-label"
                                id="campus"
                                name="campus"
                                value={formData.campus}
                                onChange={handleChange}
                                label="Campus"
                                style={{ color: 'white' }}
                            >
                                <MenuItem value="ec">EC</MenuItem>
                                <MenuItem value="rr">RR</MenuItem>
                            </StyledSelect>
                        </FormControl>
                        <FormControl fullWidth margin="normal">
                            <InputLabel id="department-label" style={{ color: 'white' }}>Department</InputLabel>
                            <StyledSelect
                                labelId="department-label"
                                id="department"
                                name="dept"
                                value={formData.dept}
                                onChange={handleChange}
                                label="Department"
                                style={{ color: 'white' }}
                                disabled={!formData.campus}
                            >
                                {departments.map((dept) => (
                                    <MenuItem key={dept} value={dept}>{dept}</MenuItem>
                                ))}
                            </StyledSelect>
                        </FormControl>
                        <StyledTextField
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
                        <FormControl fullWidth margin="normal">
                            <InputLabel id="designation-label" style={{ color: 'white' }}>Designation</InputLabel>
                            <StyledSelect
                                labelId="designation-label"
                                id="designation"
                                name="designation"
                                value={formData.designation}
                                onChange={handleChange}
                                label="Designation"
                                style={{ color: 'white' }}
                            >
                                <MenuItem value="professor">Professor</MenuItem>
                                <MenuItem value="hod">HOD</MenuItem>
                                <MenuItem value="research_scholar">Research Scholar</MenuItem>
                            </StyledSelect>
                        </FormControl>
                    </>
                );
            case 2:
                return (
                    <>
                        <StyledTextField
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
                        <StyledTextField
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
                        <StyledTextField
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
                        <StyledTextField
                            fullWidth
                            label="Total Experience Before Joining (years)"
                            name="totalExpBfrJoin"
                            type="number"
                            value={formData.totalExpBfrJoin}
                            onChange={handleChange}
                            margin="normal"
                            variant="outlined"
                            InputLabelProps={{ style: { color: 'white' } }}
                            InputProps={{ style: { color: 'white' } }}
                        />
                        <StyledTextField
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
                    </>
                );
            default:
                return 'Unknown step';
        }
    };

    return (
        <FullHeightContainer>
            <Navbar />
            <AppBar position="static" sx={{ backgroundColor: '#0D47A1' }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Faculty Signup Portal
                    </Typography>
                </Toolbar>
            </AppBar>

            <Container maxWidth="md" sx={{ 
                flex: 1,
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                py: 4, // Add some padding to top and bottom
            }}>
                <StyledPaper elevation={10}>
                    <Typography variant="h4" gutterBottom align="center" sx={{ mb: 4 }}>
                        Faculty Signup
                    </Typography>
                    <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 4 }}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <WhiteStepLabel>{label}</WhiteStepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <Box component="form" onSubmit={(e) => { e.preventDefault(); handleSignup(); }} noValidate>
                        {getStepContent(activeStep)}
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
                            <Button
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                variant="contained"
                                color="primary"
                            >
                                Back
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={activeStep === steps.length - 1 ? handleSignup : handleNext}
                            >
                                {activeStep === steps.length - 1 ? 'Sign Up' : 'Next'}
                            </Button>
                        </Box>
                    </Box>
                </StyledPaper>
            </Container>
        </FullHeightContainer>
    );
};

export default Signup;