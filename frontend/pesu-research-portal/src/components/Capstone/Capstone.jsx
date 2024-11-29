import React, { useEffect } from 'react';

const Capstone = () => {
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

            // Reset the color of all questions
            questions.forEach(question => {
                question.classList.remove('text-blue-800');
            });

            // Show the clicked answer
            const answerId = event.currentTarget.getAttribute('data-answer');
            const answer = document.getElementById(answerId);

            if (answer) {
                answer.classList.remove('hidden');
            }

            // Highlight the clicked question
            event.currentTarget.classList.add('text-blue-800');
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
            <div className="font-serif grid grid-cols-5 gap-2" style={{
                backgroundImage: "url(/img/pixelcut-export.jpg)",
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover', // Ensures the image covers the entire div
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '100vw', // Full viewport width
                height: '100vh', // Full viewport height
            }}>
                {/* Sidebar */}
                <div className="col-span-1 p-10 bg-white bg-opacity-80 min-h-screen justify-evenly">
                    <ul className="font-serif text-xl cursor-pointer gap-5 leading-10 text-center">
                        <li data-question='pdf1' data-answer='pdf1'>2018-2022 HANDBOOK</li>
                        <li data-question='pdf2' data-answer='pdf2'>2019-2023 HANDBOOK</li>
                    </ul>
                </div>

                {/* PDF Viewers - Hidden by Default */}
                <div className="col-span-4 p-5 bg-white opacity-90 rounded-lg min-h-screen hidden" id="pdf1" data-answer-content>
                    <iframe
                        src="2018-2022 HANDBOOK.pdf"
                        width="100%"
                        height="100%"
                        title="PDF Viewer"
                        className="w-full h-full"
                    ></iframe>
                </div>
                <div className="col-span-4 p-5 bg-white opacity-90 rounded-lg min-h-screen hidden" id="pdf2" data-answer-content>
                    <iframe
                        src="2019-2023 HANDBOOK.pdf"
                        width="100%"
                        height="100%"
                        title="PDF Viewer"
                        className="w-full h-full"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default Capstone;
