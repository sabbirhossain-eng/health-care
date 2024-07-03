import { useState } from "react";
import Container from "../Shared/Container/Container";

const Faq = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (questionNumber) => {
    if (openQuestion === questionNumber) {
      setOpenQuestion(null);
    } else {
      setOpenQuestion(questionNumber);
    }
  };
  return (
    <div>
      <Container>
        <div className="mt-32">
        <button className="bg-white border border-black rounded-3xl px-4 py-2 mb-10 text-text-color">
              Faq
            </button>
            <div className="w-full mx-auto">
              <div className="">
                <h2 className="text-3xl font-bold leading-tight text-text-color sm:text-4xl lg:text-5xl">
                Frequntly Asked Question
                </h2>
              </div>
              <div className="mx-auto mt-8 space-y-4 md:mt-16">
                {[
                  {
                    question: "What are your office hours?",
                    answer:
                      "Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.",
                  },
                  {
                    question: 'How can I schedule an appointment?',
                    answer:
                      'You can schedule an appointment by calling our office, using our online scheduling system, or through our mobile app. We offer flexible scheduling options to fit your needs.',
                  },
                  {
                    question: 'Do you accept insurance?',
                    answer:
                      'Yes, we accept most major insurance plans. Please contact our office to verify whether we accept your specific insurance provider.',
                  },
                  {
                    question: 'What should I bring to my appointment?',
                    answer:
                      'Please bring your insurance card, a valid ID, any relevant medical records, and a list of current medications. If it’s your first visit, please arrive 15 minutes early to complete any necessary paperwork.',
                  },
                  {
                    question: 'Do you offer telemedicine appointments?',
                    answer:
                      'Yes, we offer telemedicine appointments for your convenience. You can schedule a virtual visit through our online portal or by calling our office. Telemedicine is a great option for follow-ups and non-urgent consultations.',
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="transition-all duration-200 bg-secondary shadow-lg cursor-pointer rounded-lg"
                  >
                    <button
                      type="button"
                      id={`question${index + 1}`}
                      data-state="closed"
                      className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                      onClick={() => toggleQuestion(index + 1)}
                    >
                      <span className="flex text-lg font-semibold text-black">
                        {item.question}
                      </span>
                      <svg
                        id={`arrow${index + 1}`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className={`w-6 h-6 text-gray-400 transition-transform duration-200 ${
                          openQuestion === index + 1 ? "rotate-180" : "rotate-0"
                        }`}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </button>
                    <div
                      id={`answer${index + 1}`}
                      style={{
                        display: openQuestion === index + 1 ? "block" : "none",
                      }}
                      className="px-4 pb-5 pt-5 bg-white border-t-2 rounded-lg"
                    >
                      <p>{item.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-center text-gray-600 textbase mt-9">
                Still have questions?{" "}
                <span className="cursor-pointer font-medium text-tertiary transition-all duration-200 hover:text-tertiary focus:text-tertiary hover-underline">
                  Contact our support
                </span>
              </p>
            </div>
        </div>
      </Container>
    </div>
  );
};

export default Faq;
