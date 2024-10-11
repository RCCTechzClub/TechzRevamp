'use client';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle, faLightbulb, faHandsHelping, faUserGraduate, faCode, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const faqs = [
  {
    emoji: <FontAwesomeIcon icon={faQuestionCircle} />,
    question: "What resources does the club offer for new members?",
    answer: "The club provides access to exclusive resources, including workshops, mentorship programs, and coding challenges tailored for new members to enhance their skills.",
  },
  {
    emoji: <FontAwesomeIcon icon={faLightbulb} />,
    question: "How can I improve my skills through the club?",
    answer: "Participating in our study groups, hackathons, and collaborative projects allows you to learn from peers and experienced members, significantly boosting your skills.",
  },
  {
    emoji: <FontAwesomeIcon icon={faHandsHelping} />,
    question: "Are there mentorship opportunities available?",
    answer: "Yes, we connect experienced members with newcomers to provide guidance and support throughout your learning journey in the club.",
  },
  {
    emoji: <FontAwesomeIcon icon={faUserGraduate} />,
    question: "Does the club host study groups or workshops?",
    answer: "Absolutely! We regularly host study groups and workshops on various topics, including software development, design, and emerging technologies.",
  },
  {
    emoji: <FontAwesomeIcon icon={faCode} />,
    question: "How can I stay informed about club events and updates?",
    answer: "You can stay updated by following our newsletters, joining our online forums, and attending our regular meetings and events.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null); 

  const toggleFAQ = (index: number) => { 
    setOpen(open === index ? null : index);
  };

 
  const isDarkMode = true;

  return (
    <div
      className={`h-max-screen w-full ${
        isDarkMode 
          ? 'dark:bg-[#243369] bg-[#243369] dark:bg-grid-white/[0.1] bg-grid-black/[0.1]'
          : 'bg-gradient-to-r from-gray-500 to-blue-200' 
      } relative flex items-center justify-center py-2`}
    >
<div className={`absolute pointer-events-none inset-0 flex items-center justify-center 
    ${isDarkMode ? 'dark:bg-[#060916] bg-[#060916] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]' : 'dark:bg-[#060916] bg-[#060916] [mask-image:radial-gradient(ellipse_at_center,transparent_90%,black)]'} 
    `}>
</div>

      <div className="w-full max-w-3xl mx-auto px-6 md:px-10">
        <h2 className="text-3xl md:text-5xl text-center text-white font-bold mb-10">Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div key={index}  className={`mb-4 pb-5 ${isDarkMode ? 'text-white' : 'text-blackbg-gradient-to-r from-gray-500 to-blue-200'} `}>
            <button
              onClick={() => toggleFAQ(index)}
              className={`w-full text-left text-lg font-medium flex justify-between items-center p-1 rounded-md hover:bg-gray-700 transition duration-150 ${
                isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'
              }`}
            >
              <span className="flex items-center gap-4">
                <div className="w-10 h-10 border rounded-md text-white border-slate-300 flex items-center justify-center dark:text-gray-200">
                  {faq.emoji}
                </div>
                <span className={`text-white ${isDarkMode ? 'text-white' : 'text-black'}`}>
                  {faq.question}
                </span>
              </span>
              <FontAwesomeIcon
                icon={open === index ? faChevronUp : faChevronDown}
                className="text-white"
              />
            </button>
            {open === index && (
              <p className={`mt-2 ${isDarkMode ? 'text-white' : 'text-black'} pl-8 md:pl-14`}>
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
