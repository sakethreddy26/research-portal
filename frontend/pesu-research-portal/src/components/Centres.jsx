import Navbar from "../components/Navbar"
import React, { useEffect} from 'react';



const Centres = () => {
    useEffect(() => {
        const questions = document.querySelectorAll('[data-question]');
        const answers = document.querySelectorAll('[data-answer-content]');
        if (questions.length === 0 || answers.length === 0) {
            console.error('Questions or answers not found');
            return;
        }    
    
        // Function to toggle visibility of the answer
        const toggleAnswer = (event) => {
            // Hide all answers first
            answers.forEach(answer => {
                answer.classList.add('hidden');
            });

            questions.forEach(question => {
                question.classList.remove('text-blue-600');
            });
            // Show the clicked answer
            const answerId = event.currentTarget.getAttribute('data-answer');
            const answer = document.getElementById(answerId);
            
            if (answer) {
                answer.classList.remove('hidden');
                
                }
                event.currentTarget.classList.add('text-blue-600');
            
            // Add the class to the clicked question
        
        };

        // Add event listeners to each question
        questions.forEach(question => {
            question.addEventListener('click', toggleAnswer);   
        });

        // Cleanup function to remove event listeners
        return () => {
            questions.forEach(question => {
                question.removeEventListener('click', toggleAnswer);
            });
        };
    }, []); // Empty dependency array ensures this effect runs once


    return (
        <div>
            <div>
                <Navbar />
            </div>

     
            <div className="grid grid-cols-4 gap-2" style={{
                    backgroundImage: "url(/img/pixelcut-export.jpg)",
                    backgroundSize: 'cover', // Ensures the image covers the entire div
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    width: '100vw', // Full viewport width
                    height: '100vh', // Full viewport height
                    overflow: 'hidden' // Hide any overflow
                }}>
            <div className="col-span-1 p-10  bg-white bg-opacity-80  w-4/5  h-full justify-evenly">

                <ul className="font-serif text-lg leading-10 cursor-pointer flex flex-col items-center justify-center">
                    <li className="hover:text-blue-600" data-question='q1' data-answer="a1">RR Campus</li>
                    <li className="hover:text-blue-600" data-question='q2' data-answer="a2">EC Campus</li>
                    <li className="hover:text-blue-600" data-question='q3' data-answer="a3">HN Campus</li>
                </ul>

            </div>

            {/* Ring Road */}
            <div className="font-serif bold p-10 md:text-xl col-span-3 col-start-2 hidden" id="a1" data-answer-content>
               
                <div className=" bg-white opacity-90 rounded-lg">

               <a href="https://research.pes.edu/cloud-computing-big-data/" className="p-5 flex text-center gap-7  hover:text-blue-800 hover:shadow-xl">
                    
               <img className="object-fill h-6 w-6 mt-1" src="img-c/button.png" alt="" />
                    Centre for Cloud Computing & Big Data
               </a>

               <a href="https://research.pes.edu/knowledge-analytics-ont-ological-engineering-kanoe/" className="p-5 flex text-center gap-7  hover:text-blue-800 hover:shadow-xl">
               
               <img className="object-fill h-6 w-6 mt-1 " src="img-c/button.png" alt="" />
                    Knowledge Analytics & Ont-ological Engineering (KANOE)
               </a>

               <a href="https://research.pes.edu/center-for-pattern-recognition/" className="p-5 flex text-center gap-7  hover:text-blue-800 hover:shadow-xl">
               
               <img className="object-fill h-6 w-6 mt-1 " src="img-c/button.png" alt="" />
                    Center for Pattern Recognition
               </a>

               <a href="https://research.pes.edu/crsst/" className="p-5 flex text-center gap-7  hover:text-blue-800 hover:shadow-xl">
                    
               <img className="object-fill h-6 w-6 mt-1 " src="img-c/button.png" alt="" />
                    Centre for Research in Space Science and Technology (CRSST)
               </a>

               <a href="https://research.pes.edu/center-for-data-sciences-and-applied-machine-learning/" className="p-5 flex text-center gap-7  hover:text-blue-800 hover:shadow-xl">
                    
               <img className="object-fill h-6 w-6 mt-1 " src="img-c/button.png" alt="" />
                    Center for Data Sciences and Applied Machine Learning (CDSAML)
               </a>

               <a href="https://www.isfcr.pes.edu/?_gl=1*w5oypt*_gcl_au*ODg4MTQ3NDUwLjE3MjExMzUwMzI.*_ga*MTA5NTIyMjU0MS4xNzEzMDIxODYz*_ga_BK9HRDTZR1*MTcyMTIwNzYyMy4yNi4xLjE3MjEyMDgxNTkuMjYuMC4w" className="p-5 flex text-center gap-7  hover:text-blue-800 hover:shadow-xl">
                    
               <img className="object-fill h-6 w-6 mt-1 " src="img-c/button.png" alt="" />
                    Center of Excellence in Information Security, Forensics and Cyber Resilience (C- ISFCR)
               </a>

               <a href="https://www.iot.pes.edu/?_gl=1*4px0su*_gcl_au*ODg4MTQ3NDUwLjE3MjExMzUwMzI.*_ga*MTA5NTIyMjU0MS4xNzEzMDIxODYz*_ga_BK9HRDTZR1*MTcyMTIwNzYyMy4yNi4xLjE3MjEyMDgxNTkuMjYuMC4w" className="p-5 flex text-center gap-7 hover:text-blue-800 hover:shadow-xl">
                    
               <img className="object-fill h-6 w-6 mt-1 " src="img-c/button.png" alt="" />
                    Center of Excellence in Interest of Things (C-IoT)
               </a>

               </div>

            </div>
            


            {/* Electronic City */}
            <div className="font-serif p-10 md:text-lg  col-start-2 col-span-3 hidden  gap-4" id="a2" data-answer-content>

            <div className=" bg-white opacity-90 rounded-lg">

               
                <a href="https://cie.pes.edu/" className="p-3 flex text-center gap-10  hover:text-blue-800 hover:shadow-xl">
                    <img className="object-fill h-6 w-6 mt-1" src="img-c/button.png" alt="CIE" />

                    CIE - CENTRE FOR INNOVATION AND ENTREPRENEURSHIP
                </a>
                <a href="https://www.pesuventurelabs.com/" className="p-3 flex text-center gap-10   hover:text-blue-800 hover:shadow-xl ">
                    <img className="object-fill h-6 w-6 mt-1" src="img-c/button.png" alt="PVL" />
                    PVL - PESU VENTURE LABS
                </a>

                <a href="https://research.pes.edu/centre-of-data-modelling-analytics-and-visualization-codmav/" className="p-3 flex text-center gap-10   hover:text-blue-800 hover:shadow-xl ">
                    <img className="object-fill h-6 w-6 mt-1" src="img-c/button.png" alt="CoDMAV" />
                    CoDMAV - CENTRE FOR DATA MODELLING ANALYTICS AND VISUALISATION
                </a>

                <a href="https://research.pes.edu/centre-of-cognitive-computing-and-computational-intelligence-c3i/" className="p-3 flex text-center gap-10  hover:text-blue-800 hover:shadow-xl ">
                    <img className="object-fill h-6 w-6 mt-1" src="img-c/button.png" alt="C3I" />
                    C3I - CENTRE OF COGNITIVE COMPUTING AND COMPUTATIONAL INTELLIGENCE
                </a>

                <a href="https://research.pes.edu/center-for-computer-networks-and-cyber-security-ccncs/" className="p-3 flex text-center gap-10 hover:text-blue-800 hover:shadow-xl ">
                    <img className="object-fill h-6 w-6 mt-1" src="img-c/button.png" alt="CCNCS" />
                    CCNCS - CENTRE FOR COMPUTER NETWORKS AND CYBER SECURITY</a>

                    </div>

            </div>

            {/* Hanumanthanagar Campus */}

            <div  className="font-serif bold p-10 md:text-lg col-span-3 col-start-2 hidden" id="a3" data-answer-content>
                
  
            </div>

            </div>
        
        </div>
     
    );
}

export default Centres;