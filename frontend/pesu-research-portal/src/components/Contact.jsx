import React from 'react'
import Navbar from "./Navbar";
const Contact = () => {
  return (
    <div>
        <div>
                <Navbar/>
        </div>
        <div className="grid grid-cols-5 gap-2 overflow-y-auto " style={{
                    backgroundImage: "url(/img/pixelcut-export.jpg)",
                    backgroundAttachment: 'fixed',
                    backgroundSize: 'cover', // Ensures the image covers the entire div
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    width: '100vw', // Full viewport width
                    height: '100vh', // Full viewport height
                    //overflow: 'hidden' // Hide any overflow
                }}>
        

                <div className='flex grid-cols-3 mt-80 ml-20'>
                    <div className='bg-white col-span-1 h-80  justify-evenly text-center p-10 pl-20 pr-20 mt-60 ml-36 mr-20'>
                        <p className='text-sky-800 font-semibold text-xl p-5'>SATELLITE
                        TECHNOLOGIES</p>
                        <p className='flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-10 pl-3">
                            <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
                            </svg>
                            
                            <span className='pt-3 pl-3'>Dr. V. Sambasiva Rao</span>
                        </p>
                        <p className='flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10 pl-3">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>

                            <span className='pt-2 pl-3'>vsrao@pes.edu</span>
                        </p>

                    </div>
                    <div className='bg-white col-span-1 h-80  justify-evenly text-center p-10 pl-20 pr-20 pt-7 mt-60 ml-36 mr-20'>
                        <p className='text-sky-800 font-semibold text-xl p-5'>SIGNAL PROCESSING & SYSTEM ENGINEERING</p>
                        <p className='flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-10 pl-3">
                            <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
                            </svg>
                            
                            <span className='pt-3 pl-3'>Dr. J. Manikandan</span>
                        </p>
                        <p className='flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10 pl-3">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>

                            <span className='pt-2 pl-3'>manikandanj@pes.edu</span>
                        </p>

                    </div>
                    <div className='bg-white col-span-1 h-80  justify-evenly text-center p-10  pl-20 pr-20 mt-60 ml-36 mr-20'>
                        <p className='text-sky-800 font-semibold text-xl p-5'>Research Dean</p>
                        {/* <p className='flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-10 pl-3">
                            <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
                            </svg>
                            
                            <span className='pt-3 pl-3'>Dr. V. Sambasiva Rao</span>
                        </p> */}
                        <p className='flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10 pl-3">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>

                            <span className='pt-2 pl-3'>dean.research@pes.edu</span>
                        </p>

                    </div>
                </div> 

                
            </div>   
        </div>
        
  )
}

export default Contact