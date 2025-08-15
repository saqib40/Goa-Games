import { ChevronDown } from "lucide-react";
import type { FAQType } from "./FAQ";

interface FAQItemProps {
    faq: FAQType;
    index: number;
    toggleFAQ: (index: number) => void;
}

const FAQItem = ({ faq, index, toggleFAQ }: FAQItemProps) => (
    <div className="border-b border-gray-200 py-4">
      <button
        className="w-full flex justify-between items-center text-left text-lg font-semibold text-gray-800 focus:outline-none"
        onClick={() => toggleFAQ(index)}
      >
        <span>{faq.question}</span>
        <ChevronDown className={`transform transition-transform duration-300 ${faq.open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`grid transition-all duration-300 ease-in-out ${faq.open ? 'grid-rows-[1fr] mt-4' : 'grid-rows-[0fr]'}`}>
          <div className="overflow-hidden">
              <p className="text-gray-600 leading-relaxed pb-2">
                  {faq.answer}
              </p>
          </div>
      </div>
    </div>
);

export default FAQItem;