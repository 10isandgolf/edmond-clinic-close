
import { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => {
  return (
    <div className="faq-item">
      <button
        className="w-full flex justify-between items-center text-left focus:outline-none"
        onClick={onClick}
      >
        <h3 className="text-lg md:text-xl font-medium text-trio-charcoal">{question}</h3>
        <svg
          className={`w-5 h-5 text-trio-teal transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`mt-2 text-gray-600 transition-all ${isOpen ? 'block opacity-100' : 'hidden opacity-0'}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqItems = [
    {
      question: "How do you handle tenant relations during the sale process?",
      answer: "We maintain open communication with the tenant while respecting their operational needs. Our approach includes strategic tenant notifications, coordinated property tours, and transparent dialogue regarding the transition. This ensures minimal disruption to their business while facilitating a smooth property sale."
    },
    {
      question: "Can you help find a 1031 exchange buyer?",
      answer: "Absolutely. We maintain a curated database of 1031 buyers actively seeking medical office properties. In the Edmond clinic sale, we specifically solicited offers from 1031 exchange buyers who needed to close within tight timelines, creating opportunities for both parties."
    },
    {
      question: "What are cap rate trends looking like for 2025?",
      answer: "Medical office cap rates are showing resilience compared to other commercial asset classes. For single-tenant NNN properties with credit tenants like Mercy Health, we're seeing rates in the 6.9-7.5% range. Oklahoma City metro continues to offer a value premium compared to primary markets, making it attractive to yield-focused investors."
    },
    {
      question: "What are your brokerage fees?",
      answer: "Our fee structure is competitive within the market while reflecting the comprehensive services we provide. For investment-grade properties, we typically work on a success-based commission structure. We're happy to discuss specific details during our value strategy call based on your property's unique characteristics and market position."
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-trio-charcoal">Frequently Asked Questions</h2>
        
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
