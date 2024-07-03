import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import Navbar from './Navbar';

const Profile = () => {
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProfileFromCookie = () => {
            try {
                const profileCookie = Cookies.get('profile');
                if (profileCookie) {
                    const parsedProfile = JSON.parse(profileCookie);
                    setProfile(parsedProfile);
                    console.log(profileCookie)
                }
            } catch (error) {
                console.error('Error parsing profile cookie:', error);
            }
            setLoading(false);
        };

        fetchProfileFromCookie();
    }, []); 

    if (loading) {
        return <p>Loading profile...</p>;
    }

    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <h2>Profile Page</h2>
            <div>
                <p>Name: {profile.name}</p>
                <p>PRN: {profile.prn}</p>
                <p>SRN: {profile.srn}</p>
                <p>Program: {profile.program}</p>
                <p>Branch: {profile.branch}</p>
                <p>Semester: {profile.semester}</p>
                <p>Section: {profile.section}</p>
                <p>Email: {profile.email}</p>
                <p>Phone: {profile.phone}</p>
                <p>Campus: {profile.campus}</p>
            </div>
        </div>
    );
};

export default Profile;
