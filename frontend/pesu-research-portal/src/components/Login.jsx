import React, { useState } from 'react';
import Navbar from './Navbar';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await fetch("http://localhost:4000/v1/api/faculty/login", {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            // Check if the response is JSON
            const contentType = response.headers.get('content-type');
            if (!contentType || !contentType.includes('application/json')) {
                throw new Error('Received non-JSON response');
            }

            const data = await response.json();
            console.log(data);

            if (!data.result) {
                alert("Incorrect login credentials");
                throw new Error('Network response was not ok');
            }

            alert("Successfully logged in");
            setEmail('');
            setPassword('');
            window.location.href = "/profile";
        } catch (error) {
            console.error('Login error:', error);
            alert('Login failed. Please try again.');
        }
    };

    return (
        <div style={{
            backgroundImage: "url(/img/pixelcut-export.jpg)",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed', // Ensure the background is fixed
            width: '100vw',
            minHeight: '100vh',
          }}>
            {/* Dark overlay for the background */}
            {/* <div className="absolute inset-0 bg-gray-900 opacity-70"></div> */}

            <div className="relative text-white pb-36 z-10">
                <Navbar />
            </div>
            {/* <div>
            
            </div> */}

            {/* Login card */}
            <div className="relative text-white bg-cyan-950 bg-opacity-80 p-6 max-w-xs mx-auto rounded-md shadow-md z-10" style={{ marginRight: '10rem' }}>
                <div className="font-bold text-4xl text-center mb-4">
                    <h2>Login</h2>
                </div>
                <div className="m-5">
                    <form className="p-3 text-2xl p-2" onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
                        <div>
                            <label>Email:</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="text-black mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>
                        <br />
                        <div>
                            <label>Password:</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="text-black mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>
                        <br />
                        <div className='flex justify-center'>
                            <button type="submit" className="bg-blue-600 w-44 text-white font-bold rounded-md hover:bg-blue-700 mt-4 py-2">Login</button>
                        </div>
                        <div className='pt-10 underline'>
                            <a href="/signup" >New Registration</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
