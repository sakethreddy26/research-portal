
import React, { useEffect } from 'react';

const ResearchGrants = () => {
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
                {/* <Navbar/> */}
            </div>
        

            <div className="grid grid-cols-5 gap-2 overflow-y-auto" style={{
                    backgroundImage: "url(/img/pixelcut-export.jpg)",
                    backgroundAttachment: 'fixed',
                    backgroundSize: 'cover', // Ensures the image covers the entire div
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    width: '100vw', // Full viewport width
                    height: '100vh', // Full viewport height
                    //overflow: 'hidden' // Hide any overflow
                }}>
                <div className="col-span-1 p-10  bg-white h-full justify-evenly text-center bg-opacity-80" >
                    <ul className="font-serif text-xl leading-10 cursor-pointer p-15">
                    <li className="hover:text-blue-600" data-question='q1' data-answer="a1">Internal Funding</li>
                    <li className="hover:text-blue-600" data-question='q2' data-answer="a2">External Funding</li>
                    </ul>
                </div>
            
            <div className="col-span-4 col-start-2 row-start-1 p-5 hidden font-serif bg-white opacity-90 rounded-lg mr-10" id="a1" data-answer-content>
                <p className="font-serif text-2xl">
                    Internal Funding Options at PES
                </p>
                
            
            
            </div>

            <div className="col-span-4 col-start-2 row-start-1 p-5 hidden font-serif bg-white opacity-90 rounded-lg mr-10" id="a2" data-answer-content>
                <p className="font-serif text-2xl">
                    External Funding Options
                </p>

            </div>
        </div>
        </div>
    );
}

export default ResearchGrants;