import React from 'react';
import Navbar from './Navbar';

const Home = () => {
    const navigateToLogin=()=>{
        window.location.href="/login"
    }
    return (
        <div className="relative min-h-screen bg-cover bg-center opacity-100" style={{
            backgroundImage: "url(/img/pixelcut-export.jpg)", // Change this to your home background image
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh',
            overflow: 'hidden'
        }}>
            <div className="text-black pb-36">
                <Navbar />
            </div>
            <div className="relative text-white bg-cyan-950 b   g-opacity-60 p-6 max-w-4xl mx-auto rounded-md shadow-md mt-10">
                <div className="font-bold text-4xl text-center mb-4">
                    <h1>WELCOME TO PESU RESEARCH PORTAL</h1>
                </div>
                <div className="m-5 text-2xl p-2">
                    <p className="mb-4 text-center">please login to continue</p>
                    <div className="flex justify-center">
                        <button className="bg-blue-600 w-44 text-white font-bold rounded-md hover:bg-blue-700 mt-4 py-2 mx-2" onClick={navigateToLogin()}>login</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
