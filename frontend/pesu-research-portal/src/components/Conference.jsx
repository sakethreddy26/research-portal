import Navbar from "./Navbar";
import React, { useEffect } from 'react';

const Conference = () => {
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
                <Navbar/>
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
                    <li className="hover:text-blue-600" data-question='q1' data-answer="c1">Levels of Conferences</li>
                    <li className="hover:text-blue-600" data-question='q2' data-answer="c2">Conference Paper Format</li>
                    <li className="hover:text-blue-600" data-question='' data-answer="">Reimbursement</li>
                    </ul>
                </div>
            
            <div className="col-span-4 col-start-2 row-start-1 p-5 hidden font-serif bg-white opacity-90 rounded-lg mr-10" id="c1" data-answer-content>
                    
                
            <h2 className="text-center text-3xl m-2"> LEVELS OF CONFERENCES </h2>

                
                <p className="text-center text-xl m-2 p-4 text-gray-800">Research conferences are often categorized based on their reputation and the quality of the papers they attract and publish. The A, B, C core rankings are a common way to classify conferences, typically in the fields of computer science and engineering. </p> <br />
    
                <div className="p-3 text-center text-xl hover: underline text-blue-500">
                <a href="https://www.core.edu.au/conference-portal">Click Here to know about Standard Conference Rankings</a>
                </div>
                <p> <h3 className="p-3 text-center text-black text-2xl">A-Core Conferences</h3>
                    <div className="text-center text-xl text-gray-700">
                    Reputation: Highest prestige, highly selective, and widely recognized in the academic community. <br />
                    Acceptance Rate: Generally low, often below 20%. <br />
                    Quality of Papers: Papers published here are usually considered top-tier and have significant impact in their fields. <br />
                    Some notable examples are: <br />
                    - Computer Science: IEEE Conference on Computer Vision and Pattern Recognition (CVPR), ACM Conference on Computer and Communications Security (CCS)<br />
                    - Engineering: IEEE International Solid-State Circuits Conference (ISSCC), American Control Conference (ACC).<br /> <br />

                <h3 className="text-black p-3 text-2xl">B-Core Conferences</h3>
                Reputation: Well-respected, moderately selective, and recognized within their respective fields.<br />
                    Acceptance Rate: Moderate, usually between 20% and 40%. <br />
                    Quality of Papers:Papers are considered solid contributions to their fields and are often cited. <br />
                    Some notable examples are: <br />
                    - Computer Science: International Conference on Information and Knowledge Management (CIKM), IEEE International Conference on Data Engineering (ICDE).<br />
                    - Engineering: IEEE International Conference on Communications (ICC), International Conference on Industrial Electronics (ICIE). <br /> <br />

                <h3 className="text-black p-3 text-2xl">C-Core Conferences</h3>
                Reputation: Known within specific subfields, less selective, and have a more regional or niche focus.<br />
                    Acceptance Rate: Higher, often above 40%.<br />
                    Quality of Papers: Papers are considered good contributions but may not have as wide an impact. <br />
                    Some notable examples are: <br />
                    - Computer Science: International Conference on Wireless Networks and Mobile Systems (WINSYS), International Conference on Advances in Computing and Communication (ICACC).<br />
                    - Engineering: IEEE International Symposium on Industrial Electronics (ISIE), International Conference on Control, Automation, Robotics and Vision (ICARCV).<br /> <br />
                    </div>
                </p>
            
            </div>

            <div className="col-span-4 col-start-2 row-start-1 p-5 hidden font-serif bg-white opacity-90 rounded-lg mr-10" id="c2" data-answer-content>
            <h2 className="text-center text-3xl m-2"> RESEARCH PAPER FOR CONFERENCES </h2>
                <p className="text-xl text-center m-4">A conference research paper is a piece of writing that an author submits to conference organizers. The papers offer a preview of the work the researcher wants to present to let others in their field know about it and solicit feedback that could generate ideas for improvement.</p>

                <h3 className="text-center text-3xl text-gray-700">How to structure a conference paper:</h3>
                <p className="text-center text-xl m-2"> Conference papers should be structured around the prime objectives of the research being conducted and the summary of its findings. Most conference papers start by introducing the purpose of the research, the methodology, the results of the study, and references of the sources used. </p> <br />

                <h3 className="text-center text-3xl m-1 text-gray-700">The Title Page</h3> <br />
                <p className="text-xl text-center">The title page is used to identify the main pieces of information needed in order to identify and evaluate a conference paper. It includes the title of the paper, which should clearly identify the focus of the research being presented. The title page should also include the author's name, credentials, the research institution they are affiliated with, the submission date, and the name of the conference for which the paper is being submitted.  </p> <br />

                <h3 className="text-center text-3xl m-1 text-gray-700">The Abstract</h3> <br />
                <p className="text-xl text-center">Conference papers begin with an abstract. An abstract is a short summary of the prime objective of your research, your hypothesis, the way you plan to conduct the study, the results, and the conclusions. Most abstracts are one or two paragraphs and kept under 250 words, but it's not always the case so it's best to check the guidelines provided by the conference organizers.</p> <br />

                <h3 className="text-center text-3xl m-2 text-gray-700">The Research Methodology</h3> <br />
                <p className=" text-xl text-center">In order for conference organizers to review and evaluate a conference paper, they must understand the methods used by the researcher to conduct the study being presented. Include a section in your paper that clearly (but briefly) describes your methodology, including any dominant theories that the methods are based on.</p> <br />

                <h3 className="text-center text-3xl m-2 text-gray-700">The Results</h3><br />
                <p className=" text-xl text-center">Clearly outline the results of the study, drawing data-driven conclusions. Present the insights uncovered by the research and how they can be used to advance your field of study. This will generate interest from other researchers in your field, potentially leading to partnerships or funding opportunities down the road. </p> <br />

                <h3 className="text-center text-3xl m-2 text-gray-700">The References</h3> <br />
                <p className="text-xl text-center">Most conferences will clearly outline the type of references they expect in their call-for-papers or advertisement soliciting research submissions. Follow these guidelines to reference the work used to inform your research.  </p> <br />
            </div>

            </div>
        </div>
    );
}

export default Conference;
