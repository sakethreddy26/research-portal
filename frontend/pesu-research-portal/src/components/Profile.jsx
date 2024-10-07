// // src/Profile.js

// import React, { useEffect, useState } from 'react';
// import Navbar from './Navbar';

// const Profile = () => {
//     const [profile, setProfile] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchProfile = async () => {
//             try {
//                 const response = await fetch("http://localhost:4000/v1/api/faculty/profile", {
//                     method: 'GET',
//                     credentials: 'include',
//                     headers: {
//                         'Content-Type': 'application/json',
//                     },
//                 });

//                 if (!response.ok) {
//                     alert("some error occured")
//                     window.location.href="/login    "
//                     throw new Error('Network response was not ok');
//                 }

//                 const data = await response.json();
//                 setProfile(data);
//                 setLoading(false);
//             } catch (error) {
//                 console.error('Error fetching profile:', error);
//                 setError(error);
//                 setLoading(false);
//             }
//         };

//         fetchProfile();
//     }, []);

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (error) {
//         return <div>Error: {error.message}</div>;
//     }

//     return (
//         <div>
//             <Navbar />
//             <div className="container w-3/12 mx-16 my-8 p-4 bg-white shadow-md rounded-lg">
//                 <h1 className="text-3xl font-bold mb-4">Profile</h1>
//                 {profile ? (
//                     <div>
//                         <img
//                             src="https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg"
//                             alt="Professor"
//                             className="w-44 h-auto rounded-md mb-2"
//                           />
//                         <p><strong>Name:</strong> {profile.name}</p>
//                         <p><strong>Email:</strong> {profile.email}</p>
//                         <p><strong>Department:</strong> {profile.department}</p>
//                         <p><strong>Campus:</strong> {profile.campus}</p>
//                         <p><strong>Designation:</strong> {profile.designation.join(', ')}</p>
//                         <p><strong>Education:</strong> {profile.education.join(', ')}</p>
//                         <p><strong>Responsibilities:</strong> {profile.responsibilities.join(', ')}</p>   
//                     </div>
//                 ) : (
//                     <p>No profile data found.</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Profile;


// src/Profile.js

import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import {
    Container,
    Box,
    CircularProgress,
    Typography,
    Card,
    CardContent,
    Avatar,
    Grid,
    Alert,
    Button,
} from '@mui/material';

const Profile = () => {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await fetch("http://localhost:4000/v1/api/faculty/profile", {
                    method: 'GET',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    alert("Some error occurred");
                    window.location.href = "/login";
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setProfile(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching profile:', error);
                setError(error);
                setLoading(false);
            }
        };

        fetchProfile();
    }, []);

    if (loading) {
        return (
            <Container>
                <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                    <CircularProgress />
                </Box>
            </Container>
        );
    }

    if (error) {
        return (
            <Container>
                <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                    <Alert severity="error">Error: {error.message}</Alert>
                </Box>
            </Container>
        );
    }

    return (
        <div>
            <Navbar />
            <Box display="flex" justifyContent="center" mt={4}>
                <Card sx={{ width: 600, padding: 4, boxShadow: 3 }}>
                    <Box display="flex" alignItems="center" flexDirection="column" mb={3}>
                        <Avatar
                            src="https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg"
                            alt="Professor"
                            sx={{ width: 100, height: 100, mb: 2 }}
                        />
                        <Typography variant="h4" fontWeight="bold">
                            {profile.name}
                        </Typography>
                        <Typography variant="body1" color="textSecondary">
                            {profile.email}
                        </Typography>
                    </Box>
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Typography variant="h6" fontWeight="bold">
                                    Department
                                </Typography>
                                <Typography variant="body1">{profile.department}</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="h6" fontWeight="bold">
                                    Campus
                                </Typography>
                                <Typography variant="body1">{profile.campus}</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="h6" fontWeight="bold">
                                    Designation
                                </Typography>
                                <Typography variant="body1">{profile.designation.join(', ')}</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="h6" fontWeight="bold">
                                    Education
                                </Typography>
                                <Typography variant="body1">{profile.education.join(', ')}</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h6" fontWeight="bold">
                                    Responsibilities
                                </Typography>
                                <Typography variant="body1">{profile.responsibilities.join(', ')}</Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Box>
        </div>
    );
};

export default Profile;
