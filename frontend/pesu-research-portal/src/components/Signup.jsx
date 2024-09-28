import React, { useState } from 'react';
import Navbar from './Navbar';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [designation, setDesignation] = useState('');
    const [education, setEducation] = useState('');
    const [department, setDepartment] = useState('');
    const [campus, setCampus] = useState('');
    const [responsibilities, setResponsibilities] = useState('');

    const handleSignup = async () => {
        try {
            const response = await fetch("http://localhost:4000/v1/api/faculty/signup", {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                    designation: designation.split(',').map(item => item.trim()),
                    education: education.split(',').map(item => item.trim()),
                    department,
                    campus,
                    responsibilities: responsibilities.split(',').map(item => item.trim())
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
                alert("Signup failed. Please check your input.");
                throw new Error('Network response was not ok');
            }

            alert("Successfully signed up");
            setName('');
            setEmail('');
            setPassword('');
            setDesignation('');
            setEducation('');
            setDepartment('');
            setCampus('');
            setResponsibilities('');
            window.location.href = "/login";
        } catch (error) {
            console.error('Signup error:', error);
            alert('Signup failed. Please try again.');
        }
    };

    return (
        <div className="relative min-h-screen bg-cover bg-center" >
            <Navbar/>
            <div
                className="relative flex justify-center items-center bg-cover bg-center"
                style={{
                backgroundImage: "url(/img/pixelcut-export.jpg)",
                backgroundSize: 'cover', // Ensures the image covers the entire div
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '100vw', // Full viewport width
                height: '100vh', // Full viewport height
                backgroundAttachment: 'fixed', 
                // opacity:'0.6'
                }}
            >
            <div className="relative text-white bg-cyan-950 bg-opacity-60  p-6 max-w-xs mx-auto rounded-md shadow-md"  style={{ marginRight: '5rem' }}>
                <div className="font-bold text-4xl text-center mb-4">
                    <h2>Signup</h2>
                </div>
                <div className="m-5">
                    <form className="p-3  p-2" onSubmit={(e) => { e.preventDefault(); handleSignup(); }}>
                        <div>
                            <label>Name:</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="text-black mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>
                        <br />
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
                        <div>
                            <label>Designation (comma separated):</label>
                            <input
                                type="text"
                                value={designation}
                                onChange={(e) => setDesignation(e.target.value)}
                                className="text-black mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>
                        <br />
                        <div>
                            <label>Education (comma separated):</label>
                            <input
                                type="text"
                                value={education}
                                onChange={(e) => setEducation(e.target.value)}
                                className="text-black mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>
                        <br />
                        <div>
                            <label>Department:</label>
                            <input
                                type="text"
                                value={department}
                                onChange={(e) => setDepartment(e.target.value)}
                                required
                                className="text-black mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>
                        <br />
                        <div>
                            <label>Campus:</label>
                            <input
                                type="text"
                                value={campus}
                                onChange={(e) => setCampus(e.target.value)}
                                required
                                className="text-black mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>
                        <br />
                        {/* <div>
                            <label>Responsibilities (comma separated):</label>
                            <input
                                type="text"
                                value={responsibilities}
                                onChange={(e) => setResponsibilities(e.target.value)}
                                className="text-black mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div> */}
                        <br />
                        <div className='flex justify-center'>
                            <button type="submit" className="bg-blue-600 w-44 text-white font-bold rounded-md hover:bg-blue-700 mt-4 py-2">Signup</button>
                        </div>
                    </form>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Signup;
