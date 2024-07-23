import Navbar from "../components/Navbar"
import React, { useEffect} from 'react';
const ResearchSupport = () => {
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
                question.classList.remove('text-blue-800');
            });
            // Show the clicked answer
            const answerId = event.currentTarget.getAttribute('data-answer');
            const answer = document.getElementById(answerId);
            
            if (answer) {
                answer.classList.remove('hidden');
                
                }
                event.currentTarget.classList.add('text-blue-800');
            
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

        <div className="font-serif grid grid-cols-5 gap-2 overflow-y-auto" style={{
                backgroundImage: "url(/img/pixelcut-export.jpg)",
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover', // Ensures the image covers the entire div
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '100vw', // Full viewport width
                height: '100vh', // Full viewport height
                //overflow: 'hidden' // Hide any overflow
        }}>  
        <div className="col-span-1 p-10 bg-white bg-opacity-80 min-h-screen justify-evenly">
            <ul className="font-serif text-lg cursor-pointer gap-5 leading-10 text-center">
                <li data-question='a' data-answer='b'>RESEARCH ETHICS</li>
                <li data-question='pdf' data-answer='pdf'>RESEARCH RETREAT INSIGHTS</li>
                <li data-question='c' data-answer='d'>COLLABORATIONS</li>
            </ul>
        </div> 

        <div className="col-span-4 col-start-2 ">
        <section id="blocks">
            
            <article className="p-5 hidden bg-white opacity-90 mr-10 rounded-lg min-h-screen" id="b" data-answer-content>
                <p className="text-center text-gray-800 text-2xl">Research ethics represents a set of principles and guidelines that scholars and researchers adhere to, ensuring that their inquiries and examinations uphold the highest standards of integrity, respect, and care. It's a commitment to ensuring that the pursuit of knowledge remains trustworthy and beneficial for participants and society. Embracing research ethics means prioritizing the well-being and rights of study participants, maintaining accuracy in data collection and reporting, and fostering a transparent and honest environment throughout the 
                research process.</p> <br />
                

                <h2 className="text-center text-3xl m-2 p-4 ">Principles of Ethical Research</h2>
                <p className="text-center text-xl m-2 p-4 text-gray-900">Certain principles in ethical research should be religiously followed by the researcher such that the outcomes are not harmed.</p>

                <p className="text-center text-xl m-2 p-4 space-y-30 text-gray-800">
                - Justice: This means that the benefits of the research outcome should be provided to one and all. <br />
                - Respect the rights and dignity of the participants: The participants whose data has been collected should be given privacy and confidentiality and the participant's identity is supposed to be kept anonymous. <br />
                - Integrity: The researchers should be fair, honest, and respectful to others because participants' emotions should not be hurt. <br />
                - Fidelity and responsibility: The researchers should be aware of their responsibilities and also they should contribute their findings to the welfare of society at large.<br />
                </p>

                <h2 className="text-center text-3xl m-2 p-4">Components of Ethical Research</h2>

                <p className="text-center text-xl m-2 p-4 text-gray-800 space-y-30">
                - Integrity: While conducting research, the researcher must be honest with his findings and research and hold on to the desired moral practices. <br className="mb-4"/>
                - Objectivity: There should be a well-defined objective for the research work being conducted and should be directional. <br className="mb-4"/>
                - Professional competency: The researcher should be competent enough to analyze and interpret the data correctly to depict the outcome's true nature.<br className="mb-4"/>
                - Confidentiality: The anonymity of the participants should be in place and protected so that this does not cause any harm to the participants in the future.<br className="mb-4"/>
                - Professional behavior: The researcher is expected to behave very professionally with the participants involved such that the outcome remains bias-free.<br className="mb-4"/>
                </p>

            </article> 

            <div className="p-5  bg-white opacity-90 mr-10 rounded-lg hidden min-h-screen" id="pdf" data-answer-content>
                            {/* PDF Viewer */}
                            <iframe
                                src="ResearchRetreat_Complete.pdf"
                                width="100%"
                                height="100%"
                                title="PDF Viewer"
                                className="w-full min-h-screen"
                            ></iframe>
                        </div>

                
        </section>
        </div > 
    </div>
    
        </div>
    );
}

export default ResearchSupport;