import { useState } from "react";
import FAQItem from "./FAQItem";

export interface FAQType {
    question: string;
    answer: string;
    open: boolean;
}

const FAQ = () => {
    const [faqs, setFaqs] = useState<FAQType[]>([
      {
        question: 'How do I register an account?',
        answer: 'You can register by clicking the "Register" button in the top-right corner. You will need to provide your mobile number and set a password to create your account.',
        open: false,
      },
      {
        question: 'Is Goa Games safe and secure?',
        answer: 'Absolutely. We use industry-standard encryption to protect your data and ensure all our games are fair and transparent. Your security is our top priority.',
        open: false,
      },
      {
        question: 'What is the minimum deposit amount?',
        answer: 'The minimum deposit amount is ₹100. We support various payment methods including UPI, Net Banking, and major wallets for your convenience.',
        open: false,
      },
      {
        question: 'How long do withdrawals take?',
        answer: 'Withdrawals are typically processed within 24 hours. However, it may take longer depending on the payment method and bank processing times.',
        open: false,
      },
    ]);
  
    const toggleFAQ = (index: number) => {
      setFaqs(
        faqs.map((faq, i) => {
          if (i === index) {
            return { ...faq, open: !faq.open };
          }
          return { ...faq, open: false }; // Optional: close other FAQs when one is opened
        })
      );
    };
  
    return (
      <section className="py-16 bg-sky-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <FAQItem key={index} faq={faq} index={index} toggleFAQ={toggleFAQ} />
            ))}
          </div>
        </div>
      </section>
    );
};

export default FAQ;