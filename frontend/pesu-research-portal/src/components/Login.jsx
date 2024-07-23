// import React, { useState } from 'react';
// import Navbar from './Navbar';

// const Login = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');

//     const handleLogin = async () => {
//         try {
//             const response = await fetch("http://localhost:4000/v1/api/login", {
//                 method: 'POST',
//                 credentials: 'include',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     username,
//                     password,
//                 }),
//             });
//             const data = await response.json();
//             console.log(data)
//             if (!data.data.status) {
//                 alert("Incorrect login credentials");
//                 throw new Error('Network response was not ok');
//             }
//             alert("Successfully logged in");
//             setUsername('');
//             setPassword('');
//             window.location.href="/profile"
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     return (
//         <div className="relative min-h-screen bg-cover bg-center opacity-100" style={{ backgroundImage: 'url(https://www.pesuacademy.com/Academy/images/login_bg_acdemy.jpg)' }}>
//             {/* <div className="absolute inset-0 bg-black opacity-30"></div>  */}
//             <div className="text-black pb-36">
//                 <Navbar />
//             </div>
//             <div className="relative  text-white  bg-cyan-950 bg-opacity-60 p-6 max-w-xs mx-auto  rounded-md shadow-md" style={{marginRight:'10rem'}}>
//                 <div className="font-bold text-4xl  text-center mb-4">
//                     <h2>Login</h2>
//                 </div>
//                 <div className="m-5">
//                     <form className="p-3 text-2xl p-2" onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
//                         <div>
//                             <label>Username:</label>
//                             <input
//                                 type="text"
//                                 value={username}
//                                 onChange={(e) => setUsername(e.target.value)}
//                                 required
//                                 className="text-black mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                             />
//                         </div>
//                         <br />
//                         <div>
//                             <label>Password:</label>
//                             <input
//                                 type="password"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                                 required
//                                 className="text-black mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                             />
//                         </div>
//                         <br />
//                         <div className='flex justify-center'>
//                             <button type="submit" className=" bg-blue-600 w-44 text-white font-bold rounded-md hover:bg-blue-700 mt-4 py-2">Login</button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;


// import React, { useState } from 'react';
// import Navbar from './Navbar';

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleLogin = async () => {
//         try {
//             const response = await fetch("http://localhost:4000/v1/api/login", {
//                 method: 'POST',
//                 credentials: 'include',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     email,
//                     password,
//                 }),
//             });
//             const data = await response.json();
//             console.log(data);
//             if (!data.result) {
//                 alert("Incorrect login credentials");
//                 throw new Error('Network response was not ok');
//             }
//             alert("Successfully logged in");
//             setEmail('');
//             setPassword('');
//             window.location.href = "/profile";
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     return (
//         <div className="relative min-h-screen bg-cover bg-center opacity-100" style={{ backgroundImage: 'url(https://www.pesuacademy.com/Academy/images/login_bg_acdemy.jpg)' }}>
//             <div className="text-black pb-36">
//                 <Navbar />
//             </div>
//             <div className="relative text-white bg-cyan-950 bg-opacity-60 p-6 max-w-xs mx-auto rounded-md shadow-md" style={{ marginRight: '10rem' }}>
//                 <div className="font-bold text-4xl text-center mb-4">
//                     <h2>Login</h2>
//                 </div>
//                 <div className="m-5">
//                     <form className="p-3 text-2xl p-2" onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
//                         <div>
//                             <label>Email:</label>
//                             <input
//                                 type="email"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 required
//                                 className="text-black mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                             />
//                         </div>
//                         <br />
//                         <div>
//                             <label>Password:</label>
//                             <input
//                                 type="password"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                                 required
//                                 className="text-black mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                             />
//                         </div>
//                         <br />
//                         <div className='flex justify-center'>
//                             <button type="submit" className="bg-blue-600 w-44 text-white font-bold rounded-md hover:bg-blue-700 mt-4 py-2">Login</button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;


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
        <div className="relative min-h-screen bg-cover bg-center opacity-100" style={{
            backgroundImage: "url(/img/pixelcut-export.jpg)",
            backgroundSize: 'cover', // Ensures the image covers the entire div
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '100vw', // Full viewport width
            height: '100vh', // Full viewport height
            overflow: 'hidden' // Hide any overflow
        }}>
            <div className="text-black pb-36">
                <Navbar />
            </div>
            <div className="relative text-white bg-cyan-950 bg-opacity-60 p-6 max-w-xs mx-auto rounded-md shadow-md" style={{ marginRight: '10rem' }}>
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
                            <a href="/signup" >New Faculty?</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;