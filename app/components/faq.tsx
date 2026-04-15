"use client";

import { useState } from "react";

const faqData = [
  {
    question: "How can I learn a new programming language?",
    answer:
      "Start with the basics, practice every day, build small projects, and use documentation and tutorials to improve step by step.",
  },
  {
    question:
      "What is version control and why is it important for software development?",
    answer:
      "Version control helps developers track code changes, collaborate with others, and restore previous versions when needed.",
  },
  {
    question: "What is object-oriented programming (OOP)?",
    answer:
      "Object-oriented programming is a programming style based on objects, classes, inheritance, encapsulation, and reusability.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#e9e9e9] py-20">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="mb-10 text-center text-4xl font-bold text-[#0f172a]">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="overflow-hidden rounded-md bg-white">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between px-5 py-5 text-left text-[18px] font-semibold text-black"
                >
                  <span>{item.question}</span>
                  <span className="ml-4 text-3xl font-normal text-[#333] transition-transform duration-300">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-5 pb-5 text-[16px] leading-7 text-gray-600">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}