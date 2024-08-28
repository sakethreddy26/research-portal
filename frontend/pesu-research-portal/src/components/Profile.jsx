// src/Profile.js

import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';

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
                    alert("some error occured")
                    window.location.href="/login    "
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
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <Navbar />
            <div className="container w-3/12 mx-16 my-8 p-4 bg-white shadow-md rounded-lg">
                <h1 className="text-3xl font-bold mb-4">Profile</h1>
                {profile ? (
                    <div>
                        <img
                            src="https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg"
                            alt="Professor"
                            className="w-44 h-auto rounded-md mb-2"
                          />
                        <p><strong>Name:</strong> {profile.name}</p>
                        <p><strong>Email:</strong> {profile.email}</p>
                        <p><strong>Department:</strong> {profile.department}</p>
                        <p><strong>Campus:</strong> {profile.campus}</p>
                        <p><strong>Designation:</strong> {profile.designation.join(', ')}</p>
                        <p><strong>Education:</strong> {profile.education.join(', ')}</p>
                        <p><strong>Responsibilities:</strong> {profile.responsibilities.join(', ')}</p>   
                    </div>
                ) : (
                    <p>No profile data found.</p>
                )}
            </div>
        </div>
    );
};

export default Profile;
