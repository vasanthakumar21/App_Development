// FAQ.js

import React, { useState } from 'react';
import './faq.css';

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: 'What is time management?',
      answer: 'Time management is the process of organizing and planning how to allocate your time effectively to accomplish specific tasks, projects, or goals. It involves setting priorities, creating schedules, and making efficient use of your available time.',
    },
    {
      question: 'How can I improve my time management skills?',
      answer: 'Setting clear goals and priorities.',
    },
    {
      question: ' Is it okay to take breaks when managing my time?',
      answer: 'Yes, taking regular breaks is essential for maintaining productivity and avoiding burnout. Short breaks during work can help recharge your focus and creativity. Consider techniques like the Pomodoro Technique, which includes scheduled breaks.',
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-container">
      {faqData.map((item, index) => (
        <div key={index} className={`faq-item ${index === activeIndex ? 'active' : ''}`}>
          <div className="faq-question" onClick={() => toggleAccordion(index)}>
            {item.question}
            <div className={`arrow ${index === activeIndex ? 'rotate' : ''}`}>&#9660;</div>
          </div>
          {index === activeIndex && <div className="faq-answer">{item.answer}</div>}
        </div>
      ))}
    </div>
  );
}

export default FAQ;
