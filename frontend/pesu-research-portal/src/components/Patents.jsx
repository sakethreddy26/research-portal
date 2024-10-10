import Navbar from "../components/Navbar";
import React, { useEffect } from "react";

const Patents = () => {
  useEffect(() => {
    const questions = document.querySelectorAll("[data-question]");

    const toggleAnswer = (event) => {
      const answerId = event.currentTarget.getAttribute("data-answer");
      const answer = document.getElementById(answerId);
      if (answer) {
        answer.classList.toggle("hidden");
      }
    };

    questions.forEach((question) => {
      question.addEventListener("click", toggleAnswer);
    });

    return () => {
      questions.forEach((question) => {
        question.removeEventListener("click", toggleAnswer);
      });
    };
  }, []);

  useEffect(() => {
    const questions = document.querySelectorAll("[data-question1]");
    const answers = document.querySelectorAll("[data-answer-content1]");
    if (questions.length === 0 || answers.length === 0) {
      console.error("Questions or answers not found");
      return;
    }

    // Function to toggle visibility of the answer
    const toggleAnswer = (event) => {
      // Hide all answers first
      answers.forEach((answer) => {
        answer.classList.add("hidden");
      });

      questions.forEach((question) => {
        question.classList.remove("text-blue-600");
      });
      // Show the clicked answer
      const answerId = event.currentTarget.getAttribute("data-answer1");
      const answer = document.getElementById(answerId);

      if (answer) {
        answer.classList.remove("hidden");
      }
      event.currentTarget.classList.add("text-blue-600");

      // Add the class to the clicked question
    };

    // Add event listeners to each question
    questions.forEach((question) => {
      question.addEventListener("click", toggleAnswer);
    });

    // Cleanup function to remove event listeners
    return () => {
      questions.forEach((question) => {
        question.removeEventListener("click", toggleAnswer);
      });
    };
  }, []); // Empty dependency array ensures this effect runs once

  return (
    <div
      className="relative min-h-screen bg-cover bg-center opacity-100 overflow-y-auto grid"
      style={{
        backgroundImage: "url(/img/pixelcut-export.jpg)",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        //width: "100vw",
        //height: "100vh",
        //overflow: "hidden",
      }}
    >
      <div>
        <Navbar />
      </div>
      <div className="flex">
        <div className="col-span-1 justify-evenly text-center bg-white bg-opacity-80 min-w-72 min-h-screen p-5">
          <ul className="font-serif text-xl leading-10 cursor-pointer p-15">
            
            <li
              className="hover:text-blue-600"
              data-question1="pp"
              data-answer1="ppa"
            >
              Patent Processes
            </li>
            <li
              className="hover:text-blue-600"
              data-question1="pb"
              data-answer1="ppb"
            >
              Patents Published
            </li>
            <li
              className="hover:text-blue-600"
              data-question1="p"
              data-answer1="pa"
            >
              Patents Claimed
            </li>
          </ul>
        </div>

        {/* ******************process*********** */}
        {/* https://www.uspto.gov/ */}
        {/* https://www.epo.org/en */}
        {/* https://www.ipindia.gov.in/ */}

        <div
          className="hidden col-span-3 flex-auto mr-10 ml-7 p-5 bg-white bg-opacity-90 font-serif"
          id="ppa"
          data-answer-content1
        >
          <div>
            <div className="flex">
              <div>
                <h2 className="font-bold mb-5">
                  Process of Claiming a Patent in India
                </h2>
                <img
                  src="img/patent-procedure.png"
                  alt="An overview of the process of filing a Patent in India"
                  className="mb-5"
                />
              </div>
              <div className=" text-blue-500 underline p-10 ml-96 text-xl leading-10">
                <a href="https://www.uspto.gov/">USA Patents</a> <br />
                <a href="https://www.epo.org/en">European Patents</a> <br />
                <a href="https://www.ipindia.gov.in/">Indian Patents</a> <br />
              </div>
            </div>
            <div className="space-y-5 text-lg">
              <div>
                <p
                  className="font-bold cursor-pointer"
                  data-question="q1"
                  data-answer="a1"
                >
                  1. What is a Patent?
                </p>
                <p className="pl-10 hidden" id="a1">
                  A Patent is a statutory right for an invention granted for a
                  limited period of time to the patentee by the Government, in
                  exchange of full disclosure of his invention for excluding
                  others, from making, using, selling, importing the patented
                  product or process for producing that product for those
                  purposes without his consent.
                </p>
              </div>
              <div>
                <p
                  className="font-bold cursor-pointer"
                  data-question="q2"
                  data-answer="a2"
                >
                  2. What is the term of a patent in the Indian system?
                </p>
                <p className="pl-10 hidden" id="a2">
                  The term of every patent granted is 20 years from the date of
                  filing of application. However, for application filed under
                  national phase under Patent Cooperation Treaty (PCT), the term
                  of patent will be 20 years from the international filing date
                  accorded under PCT.
                </p>
              </div>
              <div>
                <p
                  className="font-bold cursor-pointer"
                  data-question="q3"
                  data-answer="a3"
                >
                  3. Does Indian Patent give protection worldwide?
                </p>
                <p className="pl-10 hidden" id="a3">
                  No. Patent protection is a territorial right and therefore it
                  is effective only within the territory of India. There is no
                  concept of global patent. However, filing an application in
                  India enables the applicant to file a corresponding
                  application for same invention in convention countries or
                  under PCT, within or before expiry of twelve months from the
                  filing date in India. Patents should be obtained in each
                  country where the applicant requires protection of his
                  invention.
                </p>
              </div>
              <div>
                <p
                  className="font-bold cursor-pointer"
                  data-question="q4"
                  data-answer="a4"
                >
                  4. What can be patented?
                </p>
                <p className="pl-10 hidden" id="a4">
                  An invention relating either to a product or process that is
                  new, involving inventive step and capable of industrial
                  application can be patented. However, it must not fall into
                  the categories of inventions that are non- patentable under
                  sections 3 and 4 of the Act.
                </p>
              </div>
              <div>
                <p
                  className="font-bold cursor-pointer"
                  data-question="q5"
                  data-answer="a5"
                >
                  5. Who can apply for a patent?
                </p>
                <p className="pl-10 hidden" id="a5">
                  A patent application can be filed either by true and first
                  inventor or his assignee, either alone or jointly with any
                  other person. However, legal representative of any deceased
                  person can also make an application for patent.
                </p>
              </div>
              <div>
                <p
                  className="font-bold cursor-pointer"
                  data-question="q6"
                  data-answer="a6"
                >
                  6. What time lines are to be adhered to while prosecuting a
                  patent application in India?
                </p>
                <p className="pl-10 hidden" id="a6">
                  Following are some of the important time lines during the
                  prosecution of a patent application.
                  <img src="img/patent-timeline.png" alt="Patent Timeline" />
                </p>
              </div>
              <div>
                <p
                  className="font-bold cursor-pointer"
                  data-question="q7"
                  data-answer="a7"
                >
                  7. Where to File a Patent Application?
                </p>
                <p className="pl-10 hidden" id="a7">
                  1. Physical filing : You can apply for any one of the Indian
                  patent offices, which are located in Chennai, Delhi, Mumbai,
                  or Kolkata, at the counter of the jurisdictional patent
                  office. The Patent application can be submitted at the
                  appropriate patent office and is determined based on the
                  applicant's region/location. For the applicant, who is
                  non-resident or has no residence or has no place of business
                  in India, the address for service in India or place of
                  business of his patent agent determines the appropriate patent
                  office where applications for a patent can be filed. Suppose,
                  as an applicant, you do not have a place of residence,
                  domicile, or place of business in India. Accordingly, the
                  place for filing your application will depend on the address
                  you have furnished for the service. For example, patent
                  applications are submitted at the Chennai Patent Office when
                  the address for services is Intepat, Bangalore. It is
                  important to note that, ordinarily, once the appropriate
                  office has been decided, it cannot be changed.
                  <br />
                  <strong>2. E-Filling :</strong> This can be done using the
                  e-filing portal of the patent office.
                  <br />
                  Physical Documents for applying at Indian Patent Office:
                  <br />
                  1. Form-1: Application for grant of a patent [in duplicate]
                  <br />
                  2. Form-2: Provisional or complete specification. If the
                  provisional specification is filed, it must be followed by the
                  complete specification within 12 months [in duplicate]
                  <br />
                  3. Drawings (if necessary) [in duplicate]
                  <br />
                  4. Form-3: Statement and undertaking for the corresponding
                  foreign patent applications [in duplicate]
                  <br />
                  5. Form-5 Declaration of inventorship: This is submitted
                  either with the provisional specification followed by the
                  complete specification or, in the case of convention/PCT
                  national phase applications [in duplicate]
                  <br />
                  6. Form-9: Request for early publication (optional) [in
                  duplicate]
                  <br />
                  7. Form-18: Request for examination (optional) [in duplicate]
                  <br />
                  8. Form-26: A power of attorney (if filed through a Patent
                  Agent) [Form-26]
                  <br />
                  9. statutory patent fees - DD/Cheque and
                  <br />
                  10. A certified copy of the priority document (In case
                  priority is claimed). Priority documents must be filed in the
                  following cases:
                  <br />
                  <span className="pl-10">
                    - Convention application (under Paris Convention)
                    <br />
                    - PCT National Phase application wherein requirements of
                    Rule 17.1(a or b) has not been fulfilled
                    <br />- Priority documents must be filed along with the
                    application or before the expiry of 18 months from the date
                    of priority to enable the early publication of the
                    application.
                  </span>
                  <br />
                  Documents required for E-filing:
                  <br />
                  <span className="pl-10">
                    i. Pre-requisites:
                    <br />
                    - Login ID and password;
                    <br />
                    - Digital signature;
                    <br />- Sufficient balance in the payment gateway.
                  </span>
                </p>
              </div>
              <div>
                <p>
                  Link to Guidelines of claiming a Patent{" "}
                  <span
                    className="text-blue-500 underline pl-3 cursor-pointer"
                    data-question="lp"
                    data-answer="pdf"
                    data-answer-content
                  >
                    Here
                  </span>
                </p>
                <div
                  className="p-5  bg-white opacity-90 mr-10 rounded-lg hidden min-h-screen"
                  id="pdf"
                  data-answer-content
                >
                  {/* PDF Viewer */}
                  <iframe
                    src="appdx-c-patents.pdf"
                    width="100%"
                    height="100%"
                    title="PDF Viewer"
                    className="w-full min-h-screen"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ******************** */}
        <div
          className="hidden bg-white opacity-90 p-10 font-serif m-10 rounded text-xl  w-1/2 h-1/2 leading-10"
          id="pa"
          data-answer-content1
        >
          <p>Click Below to Download the form to apply for patents</p>
          <a
            href="patent-form.docx"
            className="text-blue-800 hover:underline"
            download
          >
            Patent Form
          </a>
          <p>You can edit the docx and submit it!</p>
          <p>Upload the filled form :</p>
          <label htmlForfor="file " className="text-lg text-center mr-10">
            Select a file:
            <input type="file" id="file" name="file" className="ml-10" />
          </label>{" "}
          <br /> <br />
          <button className="bg-sky-800 text-white font-serif text-lg p-3">
            Submit
          </button>
        </div>
        {/* **********Published************** */}
        <div
          className="hidden col-span-3 mr-10 ml-7 p-5 font-serif  rounded-lg leading-4 "
          id="ppb"
          data-answer-content1
        >
          <div className="bg-transparent ">
            
          </div>
          <br />
          <div className="bg-transparent mt-10 flex-wrap   leading-7" id="ppb">
            <div className="opacity-90 bg-white rounded p-10 pt-4 leading-8 grid grid-cols-4">
              <div className="block w-auto col-span-3">
                <p className="text-xl text-black pl-5">
                  Title : A SHOPPING TROLLEY WITH AUTOMATIC BILLING SYSTEM
                </p>
                <p className="text-lg text-black pl-5 ">Deepti C</p>
                <p className="text-xl text-black pl-5">
                  Patent Number : 541176
                </p>
                <p className="text-lg text-black pl-5 ">
                  Year of Award : 07/06/2024
                </p>
              </div>
              <div className="col-span-1 ">
                <a
                  href="https://drive.google.com/file/d/1b7W9i5Fl0iwnI_-OHWrt_ozehG0Vw367/view?usp=sharing"
                  className=" text-lg text-blue-600 underline "
                >
                  Link to Patent Published Certificate
                </a>
              </div>
            </div>
          </div>

          <div className="bg-transparent mt-10 flex-wrap leading-7" id="ppb">
            <div className="opacity-90 bg-white rounded p-10 pt-4 leading-8 grid grid-cols-4">
              <div className="block w-auto col-span-3">
                <p className="text-xl text-black pl-5">Title : FRUIT PICKER</p>
                <p className="text-lg text-black pl-5 ">Dr.Suja C M</p>
                <p className="text-xl text-black pl-5 ">
                  Patent Number : 409651-001
                </p>
                <p className="text-lg text-black pl-5 ">
                  Year of Award : 02/05/2024
                </p>
              </div>
              <div className="col-span-1">
                <a
                  href="https://drive.google.com/file/d/1MaY6AQ6vh7p8pmznTol1oPGwus2gtu8d/view?usp=sharing"
                  className="text-lg text-blue-600 underline "
                >
                  Link to Patent Published Certificate
                </a>
              </div>
            </div>
          </div>

          <div className="bg-transparent mt-10 flex-wrap leading-7" id="ppb">
            <div className="opacity-90 bg-white rounded p-10 pt-4 leading-8 grid grid-cols-4">
              <div className="block w-auto col-span-3">
                <p className="text-xl text-black pl-5">
                  Title : BLOCKCHAIN AND IOT BASED ELECTRONICS HEALTH RECORD
                  DEVICE
                </p>
                <p className="text-lg text-black pl-5 ">
                  Prof.Surbhi Choudhary
                </p>
                <p className="text-xl text-black pl-5">
                  Patent Number : 415054-001
                </p>
                <p className="text-lg text-black pl-5">
                  Year of Award : 13/06/2024
                </p>
              </div>
              <div className="col-span-1">
                <a
                  href="https://drive.google.com/file/d/1Qp39yg64O7r45sng_Vl03thijVBdKh0-/view"
                  className="text-lg text-blue-600 underline "
                >
                  Link to Patent Published Certificate
                </a>
              </div>
            </div>
          </div>
          <div className="bg-transparent mt-10 flex-wrap leading-7" id="ppb">
            <div className="opacity-90 bg-white rounded p-10 pt-4 leading-8 grid grid-cols-4 gap-5">
              <div className="block w-auto col-span-3">
                <p className="text-xl text-black pl-5 uppercase">
                  Title : An author strain independent scoring system to measure
                  scientific independence
                </p>
                <p className="text-lg text-black pl-5 ">Dr. Sudeepa Roy Dey</p>
                <p className="text-xl text-black pl-5">
                  Patent Number : 20 2022 101 927.4(german)
                </p>
                <p className="text-lg text-black pl-5">Year of Award : 2022</p>
              </div>
              <div className="col-span-1">
                <a href="#" className="text-lg text-blue-600 underline ">
                  Link to Patent Published Certificate
                </a>
              </div>
            </div>
          </div>

          <div className="bg-transparent mt-10 flex-wrap leading-7" id="ppb">
            <div className="opacity-90 bg-white rounded p-10 pt-4 leading-8 grid grid-cols-4 gap-5">
              <div className="block w-auto col-span-3">
                <p className="text-xl text-black pl-5 uppercase">
                  Title : A System For Streaming And Storing The Heterogeneous
                  Streamed Sensor Data Using Microservices Architecture Model
                </p>
                <p className="text-lg text-black pl-5 ">DJ Ruby Dinakar</p>
                <p className="text-xl text-black pl-5">
                  Patent Number : 202022103462 (German)
                </p>
                <p className="text-lg text-black pl-5">Year of Award : 2022</p>
              </div>
              <div className="col-span-1">
                <a href="#" className="text-lg text-blue-600 underline ">
                  Link to Patent Published Certificate
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Patents;
