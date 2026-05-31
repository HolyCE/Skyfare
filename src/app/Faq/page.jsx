"use client"

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight,faAngleDown, faAngleUp} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import { useState, useRef, useEffect } from "react";

function Page() {
  const [openIndex, setOpenIndex] = useState(null);
  const [height, setHeight] = useState([]);
  const contentRefs = useRef([]);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "1. How far in advance should I book my tour?",
      answer: "We recommend booking your tour at least 2-3 months in advance to secure the best availability and pricing. For peak seasons, booking 4-6 months ahead is ideal."
    },
    {
      question: "2. Do I need a visa for international travel?",
      answer: "Visa requirements vary by destination and your country of citizenship. Our team provides visa guidance and assistance for all our tour packages."
    },
    {
      question: "3. What is your best price guarantee?",
      answer: "If you find the same tour package at a lower price within 7 days of booking, we'll match the price and give you an additional 10% discount."
    },
    {
      question: "4. Can I request a specific tour guide?",
      answer: "Yes, you can request a specific tour guide based on availability. We'll do our best to accommodate your preference at no extra charge."
    },
    {
      question: "5. What languages do your tour guides speak?",
      answer: "Our guides are multilingual and speak English, Spanish, French, German, Mandarin, Japanese, and Arabic. Request your preferred language when booking."
    },
    {
      question: "6. Are meals included in the tour package?",
      answer: "Most packages include breakfast and selected meals. Full meal plans can be added for an additional fee. Specific inclusions are listed in each tour itinerary."
    }
  ];

  useEffect(() => {
    const heights = contentRefs.current.map((ref) => (ref ? ref.scrollHeight : 0));
    setHeight(heights);
  }, []);

  return (
    <>
    {/*Page Title */}
    <div className="section-banner px-[2%] sm:px-[8%] lg:px-[12%] py-[50px] lg:py-[90px] min-h-[450px] lg:min-h-[500px] z-20 relative">
      <h2 className="text-6xl font-normal z-10 relative text-white text-center w-full unbounded-font">
        Faq's
      </h2>
      <ul className="text-white z-10 flex items-center gap-8 section-list">
        <li className="text-sm relative">
          <Link href="/">Home</Link>
        </li>
        <li className="text-sm relative">
          <FontAwesomeIcon icon={faAngleRight} className="absolute -left-6 top-0.5" />
            <Link href="#">Faq's</Link>
        </li> 
      </ul>
    </div>

    {/*Experience - New White Background Design */}
    <div className="experience px-[2%] sm:px-[8%] lg:px-[12%] py-[50px] lg:py-[90px] bg-white">
        <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-[#193555] mb-4 unbounded-font">
                Frequently Asked Questions
            </h2>
            <p className="text-[#7a7a7a] text-base">
                Find answers to common questions about our tours, booking process, and travel experiences.
                Can't find what you're looking for? Contact our support team.
            </p>
        </div>

        <div className="grid grid-cols-1 gap-4 mt-10 mx-auto w-[100%] lg:mx-auto lg:w-[85%]">
            {faqData.map((item, index) => {
                const isOpen = openIndex === index;
                const contentRef = useRef(null);
                const [height, setHeight] = useState(0);

                useEffect(() => {
                    if(isOpen && contentRef.current){
                        setHeight(contentRef.current.scrollHeight);
                    }
                    else{
                        setHeight(0);
                    }
                }, [isOpen]);

                return (
                    <div key={index} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-300">
                        <button
                            onClick={() => toggle(index)}
                            className="w-full cursor-pointer text-left flex justify-between items-center p-5 font-semibold text-[#193555] bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
                        >
                            <span className="text-base md:text-lg">{item.question}</span>
                            <FontAwesomeIcon 
                                icon={isOpen ? faAngleUp : faAngleDown} 
                                className={`ml-2 text-[#193555] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                            />
                        </button>

                        <div
                            style={{maxHeight: `${height}px`}} 
                            className="transition-all duration-500 ease-in-out overflow-hidden bg-white"
                        >
                            <div ref={contentRef} className="p-5 pt-0">
                                <p className="text-[#7a7a7a] leading-relaxed">{item.answer}</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>

        {/* Contact Support Section */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
            <p className="text-[#7a7a7a] mb-3">Still have questions?</p>
            <button className="bg-[#193555] text-white hover:bg-[#0f243b] font-semibold px-8 py-3 rounded-full transition-colors duration-200">
                Contact Our Support Team
            </button>
        </div>
    </div>

    </>
  )
}

export default Page