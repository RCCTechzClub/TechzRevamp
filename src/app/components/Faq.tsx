'use client';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle, faLightbulb, faHandsHelping, faUserGraduate, faCode, faChevronDown, faChevronRight, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const faqs = [
  {
    emoji: <FontAwesomeIcon icon={faQuestionCircle} />, // Icon for general questions
    question: "What resources does the club offer for new members?",
    answer: "The club provides access to exclusive resources, including workshops, mentorship programs, and coding challenges tailored for new members to enhance their skills.",
  },
  {
    emoji: <FontAwesomeIcon icon={faLightbulb} />, // Icon for learning and improvement
    question: "How can I improve my skills through the club?",
    answer: "Participating in our study groups, hackathons, and collaborative projects allows you to learn from peers and experienced members, significantly boosting your skills.",
  },
  {
    emoji: <FontAwesomeIcon icon={faHandsHelping} />, // Icon for mentorship
    question: "Are there mentorship opportunities available?",
    answer: "Yes, we connect experienced members with newcomers to provide guidance and support throughout your learning journey in the club.",
  },
  {
    emoji: <FontAwesomeIcon icon={faUserGraduate} />, // Icon for study groups and workshops
    question: "Does the club host study groups or workshops?",
    answer: "Absolutely! We regularly host study groups and workshops on various topics, including software development, design, and emerging technologies.",
  },
  {
    emoji: <FontAwesomeIcon icon={faCode} />, // Icon for technology updates
    question: "How can I stay informed about club events and updates?",
    answer: "You can stay updated by following our newsletters, joining our online forums, and attending our regular meetings and events.",
  },
];


export default function FAQ() {
  const [open, setOpen] = useState(null);

  const toggleFAQ = (index: any) => {
    setOpen(open === index ? null : index);
  };

  return (
    <div
      className="h-[48rem] w-full dark:bg-[#243369] bg-[#243369] dark:bg-grid-white/[0.1] bg-grid-black/[0.1] relative flex items-center justify-center"
    >
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#060916] bg-[#060916] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="w-full max-w-3xl h-[40rem] mx-auto py-20 px-10 md:px-0">
        <h2 className="text-3xl md:text-5xl text-center text-white font-bold mb-14 text-wrap">Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4 pb-5">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left text-lg font-medium flex justify-between items-center"
            >
              <span className="flex items-center gap-2 justify-between w-full transform transition-all duration-150 ">
                <div className='flex gap-4 items-center text-lg'>
                  <div className='w-10 h-10 border rounded-md text-white border-slate-300 font-medium flex items-center flex-shrink-0 justify-center dark:text-gray-200'>
                    {faq.emoji} {/* Render the emoji or icon */}
                  </div>
                  <div className='text-white'>

                  {faq.question}
                  </div>
                </div>
                <FontAwesomeIcon
                  icon={open === index ? faChevronUp : faChevronDown}
                  className="mr-2 text-white"
                />
              </span>
            </button>
            {open === index && (
              <p className="mt-2 text-gray-400 pl-14 md:pr-4">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
