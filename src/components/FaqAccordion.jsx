import React, { useState } from "react";

const faqData = [
  {
    question: "What should I look for when choosing a roofing contractor?",
    answer: `When selecting a roofing contractor, it's essential to prioritize experience, licensing, insurance, and a reputation for quality. Look for a contractor with a proven track record in your area and check reviews or ask for references. It’s also crucial to ensure that they are properly insured to protect against accidents or damage during the job. At Timberland Exteriors, we offer over 20 years of expertise, provide free estimates, and are fully licensed and insured to give you peace of mind.`,
  },
  {
    question: "How do I know if my roof needs to be repaired or replaced?",
    answer: `Common signs include missing or damaged shingles, leaks, water stains on your ceiling, and visible sagging. A professional inspection can help determine the best course of action.`,
  },
  {
    question:
      "What are the most common roofing materials, and how do I choose the best one for my home?",
    answer: `The most common materials are asphalt shingles, metal, tile, and wood. The best choice depends on your budget, climate, and desired appearance.`,
  },
  {
    question: "How long does a roof replacement take?",
    answer: `Most roof replacements take 1-3 days, depending on the size and complexity of the roof.`,
  },
  {
    question: "What should I expect during the roof replacement process?",
    answer: `You can expect some noise, debris, and workers on site. The contractor should keep you informed about progress and cleanup.`,
  },
  {
    question: "Do I need to be home during a roof installation?",
    answer: `It’s not required, but being available for questions or updates can be helpful.`,
  },
  {
    question: "How do I know if my roof is damaged after a storm?",
    answer: `Look for missing shingles, leaks, or debris on your roof. A professional inspection is recommended after severe weather.`,
  },
  {
    question: "What is the average cost of a roof replacement?",
    answer: `Costs vary based on material and roof size, but the national average ranges from $5,000 to $12,000.`,
  },
  {
    question: "Is roof maintenance necessary, and how often should I do it?",
    answer: `Yes, regular maintenance extends your roof’s life. Inspect your roof at least once a year and after major storms.`,
  },
  {
    question:
      "What are the hidden benefits of choosing a high-quality roofing material?",
    answer: `High-quality materials offer better durability, energy efficiency, and can increase your home’s value.`,
  },
];

const FaqAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="bg-white py-12 px-2 mt-4 md:px-0">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h2>
      <div className="max-w-4xl mx-auto">
        {faqData.map((faq, idx) => (
          <div key={idx} className="mb-2">
            <button
              onClick={() => handleToggle(idx)}
              className={`w-full flex justify-between items-center px-4 py-3 bg-gray-200 hover:bg-gray-300 transition-colors rounded-none border-b-2 border-white focus:outline-none`}
              aria-expanded={openIndex === idx}
              aria-controls={`faq-content-${idx}`}
            >
              <span className="font-semibold text-lg text-left">
                {faq.question}
              </span>
              <span
                className={`ml-4 flex items-center justify-center transition-transform duration-200 ${
                  openIndex === idx ? "rotate-180" : ""
                }`}
              >
                <svg
                  className="w-7 h-7 text-yellow-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={3}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </button>

            {openIndex === idx && (
              <div
                id={`faq-content-${idx}`}
                className="bg-white px-6 pb-4 pt-2 text-base text-gray-800 leading-relaxed"
              >
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqAccordion;
