import React, { useState } from 'react';
import "./styles/Faq.css"
const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What is React?',
      answer: 'React is a JavaScript library for building user interfaces.',
    },
    {
      question: 'What is a component?',
      answer: 'A component in React is an independent, reusable piece of UI.',
    },
    {
      question: 'What is a component?',
      answer: 'A component in React is an independent, reusable piece of UI.',
    },
    {
      question: 'What is a component?',
      answer: 'A component in React is an independent, reusable piece of UI.',
    },
    {
      question: 'What is a component?',
      answer: 'A component in React is an independent, reusable piece of UI.',
    },
    {
      question: 'What is a component?',
      answer: 'A component in React is an independent, reusable piece of UI.',
    },
    // Add more FAQs as needed
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id='faq' className="faq-container">
      <h1 className="faq-heading">FAQ</h1>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleFaq(index)}>
            {faq.question}
            <span className="faq-icon">{openIndex === index ? '-' : '+'}</span>
          </div>
          {openIndex === index && (
            <div className="faq-answer">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default Faq;
