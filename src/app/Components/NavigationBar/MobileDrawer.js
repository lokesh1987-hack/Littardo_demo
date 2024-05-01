import { useState } from 'react'; 
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import Accordion from '@Components/Accordion'

function MobileDrawer({ isOpen, onClose }) {
  const [accordions, setAccordion] = useState([
    {
      key: 1,
      title: "What is GeeksforGeeks?",
      data: `GeeksforGeeks is a one stop solution  
                      for all computer science students.`,
      isOpen: false,
    },
    {
      key: 2,
      title: "What GeeksforGeeks offer us?",
      data: `GeeksforGeeks offers Free Tutorials,  
                      Millions of Articles, Live, Online and  
                      Classroom Courses,Frequent Coding Competitions,  
                      Webinars by Industry Experts, Internship  
                      opportunities and Job Opportunities.`,
      isOpen: false,
    },
    {
      key: 3,
      title: "Which is the best portal to study Computer Science?",
      data: `GeeksforGeeks is the best Computer Science portal  
                      for geeks. It contains well written, well thought  
                      and well explained computer science and programming  
                      articles.`,
      isOpen: false,
    },
  ]);

  const toggleAccordion = (accordionkey) => {
    const updatedAccordions = accordions.map((accord) => {
      if (accord.key === accordionkey) {
        return { ...accord, isOpen: !accord.isOpen };
      } else {
        return { ...accord, isOpen: false };
      }
    });

    setAccordion(updatedAccordions);
  };

  return (
    <div
      className={`fixed flex flex-col justify-start items-center z-100 top-0 right-0 h-full w-full bg-white text-black transition-transform duration-300 transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div>
        <button className="absolute right-7 top-4 p-3" onClick={onClose}>
          <FontAwesomeIcon className="text-5xl" icon={faXmark} />
        </button>
      </div>
      <div className="p-2 mt-20">
        {accordions.map((accordion) => (
          <Accordion
            key={accordion.key}
            title={accordion.title}
            data={accordion.data}
            isOpen={accordion.isOpen}
            toggleAccordion={() => toggleAccordion(accordion.key)}
          />
        ))}
      </div>
    </div>
  );
}
export default MobileDrawer;
