import Navbar from "../components/Navbar"
import React, { useEffect} from 'react';
const ResearchSupport = () => {
    useEffect(() => {
        const questions = document.querySelectorAll('[data-question]');
        
        // Function to toggle visibility of the answer
        const toggleAnswer = (event) => {
            const answerId = event.currentTarget.getAttribute('data-answer');
            const answer = document.getElementById(answerId);
            if (answer) {
                answer.classList.toggle('hidden');
            }
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
        <div class="font-serif">  
        <h1 class="text-4xl text-center p-6">RESEARCH SUPPORT</h1>

        <section id="blocks">
            <article class="p-5 text-center text-2xl m-2">
                <p>Welcome to PES Research Support, your essential resource for mastering the art of academic publishing. Whether you're starting your first research project or looking to refine your scholarly skills, this platform serves as your comprehensive toolkit. From crafting a compelling thesis to conducting rigorous literature reviews and structuring your methodology, our resources provide step-by-step guidance at every stage to empower yourself with the knowledge and tools needed to succeed in your academic journey.
                </p>
            </article>

            <header className="bg-sky-800 text-white p-4 font-bold w-full mt-1 mb-1 columns-3 text-center">
                <h2 class="col-span-1 cursor-pointer" data-question="c" data-answer="p1">RESEARCH PAPER FOR CONFERENCES</h2>
                <h2 class="col-span-2 cursor-pointer" data-question="j1" data-answer="p2">RESEARCH PAPER FOR JOURNALS</h2>
                <h2 class="col-span-3 cursor-pointer" data-question="j2" data-answer="p3">LEVELS OF JOURNALS</h2>
            </header><br />

            <article  class="p-5 hidden" id="p1">
                <h2 class="text-center text-3xl p-4 m-2"> RESEARCH PAPER FOR CONFERENCES </h2>
                <p class="text-xl text-center m-4">A conference research paper is a piece of writing that an author submits to conference organizers. The papers offer a preview of the work the researcher wants to present to let others in their field know about it and solicit feedback that could generate ideas for improvement.</p> <br />
                <h3 class="text-center text-3xl text-gray-700">How to structure a conference paper:</h3>
                <p class="text-center text-xl m-2">Conference papers should be structured around the prime objectives of the research being conducted and the summary of its findings. Most conference papers start by introducing the purpose of the research, the methodology, the results of the study, and references of the sources used. </p> <br />
                <h3 class="text-center text-3xl m-2 text-gray-700">The title page</h3> <br />
                <p class="text-xl text-center">The title page is used to identify the main pieces of information needed in order to identify and evaluate a conference paper. It includes the title of the paper, which should clearly identify the focus of the research being presented. The title page should also include the author's name, credentials, the research institution they are affiliated with, the submission date, and the name of the conference for which the paper is being submitted. </p> <br />
                <h3 class="text-center text-3xl m-2 text-gray-700">The abstract</h3> <br />
                <p class=" text-xl text-center">Conference papers begin with an abstract. An abstract is a short summary of the prime objective of your research, your hypothesis, the way you plan to conduct the study, the results, and the conclusions. Most abstracts are one or two paragraphs and kept under 250 words, but it's not always the case so it's best to check the guidelines provided by the conference organizers.</p> <br />
                <h3 class="text-center text-3xl m-2 text-gray-700">The research methodology</h3><br />
                <p class=" text-xl text-center">n order for conference organizers to review and evaluate a conference paper, they must understand the methods used by the researcher to conduct the study being presented. Include a section in your paper that clearly (but briefly) describes your methodology, including any dominant theories that the methods are based on. </p> <br />
                <h3 class="text-center text-3xl m-2 text-gray-700">The results</h3> <br />
                <p class="text-xl text-center">Clearly outline the results of the study, drawing data-driven conclusions. Present the insights uncovered by the research and how they can be used to advance your field of study. This will generate interest from other researchers in your field, potentially leading to partnerships or funding opportunities down the road. </p> <br />
                <h3 class="text-center text-3xl m-2 text-gray-700">The references</h3> <br />
                <p class="text-xl text-center">Most conferences will clearly outline the type of references they expect in their call-for-papers or advertisement soliciting research submissions. Follow these guidelines to reference the work used to inform your research. </p>

                <article>
                    
                </article>
                
            </article>

            <article  class="p-5 hidden" id="p2">
                <h2 class="text-center text-3xl p-4 m-2"> RESEARCH PAPER FOR JOURNALS </h2>
                <p class="text-xl text-center m-4">Journal papers are scholarly articles published in academic journals, and undergo a rigorous peer-review process to ensure the quality, validity, and significance of the research. They contribute to the existing body of knowledge by presenting new theories, methodologies, empirical studies, or literature reviews.</p>
                <h3 class="text-center text-3xl text-gray-700">How to structure a journal paper:</h3>
                <p class="text-center text-xl m-2"> Most academic journals conventionally accept original research articles in the following format: Abstract, followed by the Introduction, Methods, Results, and Discussion sections, also known as the IMRaD, which is a brilliant way of structuring a research paper outline in a simplified and layered format.</p> <br />
                <h3 class="text-center text-3xl m-2 text-gray-700">Abstract</h3> <br />
                <p class="text-xl text-center">All information provided in the abstract must be present in the manuscript, it should include a stand-alone summary of the research, the main findings, the abbreviations should be defined separately in this section, and this section should be clear, decluttered, and concise. </p> <br />
                <h3 class="text-center text-3xl m-2 text-gray-700">Introduction</h3> <br />
                <p class=" text-xl text-center">This section should begin with a background of the study topic, i.e., what is already known, moving on to the knowledge gaps that exist, and finally, end with how the present study aims to fill these gaps, or any hypotheses that the authors may have proposed.</p> <br />
                <h3 class="text-center text-3xl m-2 text-gray-700">Methods</h3><br />
                <p class=" text-xl text-center">The ultimate factor to consider while producing the methods section is reproducibility; this section should be detailed enough for other researchers to reproduce your study and validate your results. It should include ethical information (ethical board approval, informed consent, etc.) and must be written in the past tense. </p> <br />
                <h3 class="text-center text-3xl m-2 text-gray-700">Results</h3> <br />
                <p class="text-xl text-center">This section typically presents the findings of the study, with no explanations or interpretations. Here, the findings are simply stated alongside figures or tables mentioned in the text in the correct sequential order. Because you are describing what you found, this section is also written in the past tense. </p> <br />
                <h3 class="text-center text-3xl m-2 text-gray-700">Discussion and conclusion
                </h3> <br />
                <p class="text-xl text-center">This section begins with a summary of your findings and is meant for you to interpret your results, compare them with previously published papers, and elaborate on whether your findings are comparable or contradictory to previous literature. <br />
                This section also contains the strengths and limitations of your study, and the latter can be used to suggest future research. End this section with a conclusion paragraph, briefly summarizing and highlighting the main findings and novelty of your study.</p> <br />
                <h3 class="text-center text-3xl m-2 text-gray-700">Citing References</h3> <br />
                <p class="text-xl text-center">Most sections of your paper majorly rely on external sources of information that have already been published. Therefore, it is absolutely indispensable to extract and cite these statements from appropriate, credible, recent, and relevant literature to support your claims. </p> <br />

            </article>

            <article class="p-5 hidden" id="p3">
                <h2 class="text-center text-3xl p-4 m-2"> LEVELS OF JOURNALS </h2>
                <p class="text-center text-xl m-2 p-4 text-gray-800">Scientific journals are classified and ranked, and these classifications and rankings are key for authors, publishers and journal editors. The ranking of journals is common in academia and journal rankings count when a researcher is putting forward their file for retention, tenure and promotion. Researchers aim to publish in top-tier and high-ranking journals. So it is important for them to know how a journal is classified and ranked.</p>
                <p class="text-center text-xl m-2 text-gray-800">The number of citations for journal publications is an influencing factor, called the impact factor, which is used to rank journal ranks. Journals are also categorised into four quartiles: Q1, Q2, Q3 and Q4. Journals in Q1 and Q2 are considered top-tier journals while the lower-tier journals are classified as Q3 and Q4. Q1 and Q2 journals have a higher impact factor than Q3 and Q4 ranked journals.
                </p>
                <p> <h3 class="p-3 text-center text-black text-xl">- High-impact journals:</h3> 
                    <div class="text-center text-xl text-gray-700">
                    - Indexed in databases like SCI, Scopus, or PubMed. <br />
                    - Highly respected with stringent acceptance criteria. <br />
                    - Rigorous peer-review process. <br />
                    
                <h3 class="text-black p-3">- Mid-tier journals:</h3>
                    - Well-regarded but may have a broader scope. <br />
                    - Less rigorous review standards compared to top-tier journals.<br />
                
                <h3 class="text-black p-3">- Lower-tier or emerging journals:</h3>
                    - Focus on niche areas or emerging fields.<br />
                    - Faster publication process.<br />
                    - Less stringent review process. <br />
                    </div>
                </p>
            </article> <br />
        </section>
    </div>
    
        </div>
    );
}

export default ResearchSupport;