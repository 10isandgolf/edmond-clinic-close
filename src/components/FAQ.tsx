
import { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-trio-charcoal">Frequently Asked Questions</h2>
          
          <div className="mb-8">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Business professionals discussing real estate investment"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
        
        <div>
          <Accordion type="single" collapsible className="w-full" defaultValue="item-0">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg md:text-xl font-medium text-trio-charcoal">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
