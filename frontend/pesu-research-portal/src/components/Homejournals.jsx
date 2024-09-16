import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, IconButton, Box } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const HomePublications = () => {
    const [recentConferences, setRecentConferences] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animationState, setAnimationState] = useState('enter');

    const getAllPublications = async () => {
        try {
            const response = await fetch("http://localhost:4000/v1/api/getAllPublications/", {
                method: "GET",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const res = await response.json();
            const conferences = res.filter(item => item["Publication Type"] === "Article");

            const sortedConferences = conferences.sort((a, b) => {
                const dateA = new Date(a["Pub.Date"]);
                const dateB = new Date(b["Pub.Date"]);
                if (isNaN(dateA.getTime())) return 1;
                if (isNaN(dateB.getTime())) return -1;
                return dateB - dateA;
            });

            const recentFiveConferences = sortedConferences.slice(0, 5);
            setRecentConferences(recentFiveConferences);
        } catch (error) {
            console.error("Error fetching data:", error);
            setRecentConferences([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getAllPublications();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimationState('exit');
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % recentConferences.length);
                setAnimationState('enter');
            }, 500); // Match the duration of the animation
        }, 2000); // Change card every 2 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, [recentConferences.length]);

    const handleNext = () => {
        setAnimationState('exit');
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % recentConferences.length);
            setAnimationState('enter');
        }, 2000); // Match the duration of the animation
    };

    const handlePrevious = () => {
        setAnimationState('exit');
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + recentConferences.length) % recentConferences.length);
            setAnimationState('enter');
        }, 2000); // Match the duration of the animation
    };

    if (loading) {
        return <Typography>Loading...</Typography>;
    }

    if (recentConferences.length === 0) {
        return <Typography>No recent publications found.</Typography>;
    }

    const currentPublication = recentConferences[currentIndex];

    // Conditional class names for animation
    const cardClasses = `transition-transform transition-opacity duration-500 ${animationState === 'exit' ? 'opacity-0 translate-y-full' : 'opacity-100 translate-y-0'}`;

    return (
        <div>
            <Typography variant="h3" color="white" align="center" gutterBottom>
                Recent Journals
            </Typography>
            <Box 
                sx={{ 
                    height: '400px',
                    width: '100%', 
                    backgroundColor: 'lightgray',
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center',
                    position: 'relative'
                }}
            >
                <IconButton 
                    onClick={handlePrevious} 
                    sx={{ position: 'absolute', left: 0, zIndex: 1 }}
                >
                    <ArrowBackIcon />
                </IconButton>
                <div
                    className={cardClasses}
                    style={{ width: '80%' }}
                >
                    <Card
                        sx={{ 
                            height: '300px',  
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <CardContent>
                            <Typography variant="h6">
                            {currentPublication["Title_y"] ? currentPublication["Title_y"] : 'No title available'}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                {currentPublication["Journal"] || ''}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                {currentPublication["Pub.Date"] || ''}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                DOI: {currentPublication["DOI"] || ''}
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
                <IconButton 
                    onClick={handleNext} 
                    sx={{ position: 'absolute', right: 0, zIndex: 1 }}
                >
                    <ArrowForwardIcon />
                </IconButton>
            </Box>
        </div>
    );
};

export default HomePublications;
