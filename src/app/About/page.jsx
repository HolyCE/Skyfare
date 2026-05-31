"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faDoorClosed,
    faMoneyBillWave,
    faShieldHalved,
    faAngleRight, 
    faAngleDown,
    faAngleUp,
    faPlay,
    faMapMarkerAlt,
    faUsers,
    faGlobe,
    faHotel,
    faUmbrellaBeach,
    faHiking,
    faCamera,
    faClock
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

// Splash images for About section
const About01 = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop";
const About02 = "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&h=600&fit=crop";
const About03 = "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=600&fit=crop";

// Splash images for Authors section
const Author01 = "https://randomuser.me/api/portraits/women/68.jpg";
const Author02 = "https://randomuser.me/api/portraits/men/75.jpg";
const Author03 = "https://randomuser.me/api/portraits/women/45.jpg";
const Author04 = "https://randomuser.me/api/portraits/men/32.jpg";

// Splash images for Tour Company section
const TourCompany01 = "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=600&fit=crop";
const TourCompany02 = "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&h=600&fit=crop";
const TourCompany03 = "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop";

// Splash images for Adventure section
const Adventure01 = "https://images.unsplash.com/photo-1682686580391-615b1f28e5ee?w=800&h=600&fit=crop";

export default function Page() {
    const [openIndex, setOpenIndex] = useState(null);
    
    // Create refs and height states for each FAQ item
    const [heights, setHeights] = useState({});
    const contentRefs = useRef({});

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // Update heights when openIndex changes
    useEffect(() => {
        if (openIndex !== null && contentRefs.current[openIndex]) {
            setHeights(prev => ({
                ...prev,
                [openIndex]: contentRefs.current[openIndex].scrollHeight
            }));
        } else if (openIndex === null) {
            setHeights({});
        }
    }, [openIndex]);

    const faqData = [
        {
            question: "1. What is included in the tour package?",
            answer: "Our tour packages typically include accommodation, transportation, guided tours, and some meals. Specific inclusions may vary based on the package you choose."
        },
        {
            question: "2. Can I customize my tour itinerary?",
            answer: "Yes, we offer customizable tour itineraries to cater to your preferences. You can contact our customer service team to discuss your specific requirements."
        },
        {
            question: "3. What is the cancellation policy?",
            answer: "Our cancellation policy varies depending on the tour package. Generally, cancellations made within 7 days of the tour date may be subject to a cancellation fee. Please refer to our terms and conditions for more details."
        },
        {
            question: "4. Are there any age restrictions for the tours?",
            answer: "Some tours may have age restrictions due to safety reasons or specific activities involved. Please check the tour details for any age-related requirements."
        },
        {
            question: "5. Do I need travel insurance for the tour?",
            answer: "While travel insurance is not mandatory, we highly recommend it to protect yourself against unforeseen circumstances such as trip cancellations, medical emergencies, or lost belongings."
        }
    ];

    return (
        <>
            {/*Page Title */}
            <div className="section-banner px-[2%] sm:px-[8%] lg:px-[12%] py-[50px] lg:py-[90px] min-h-[450px] lg:min-h-[500px] z-20 relative">
                <h2 className="text-4xl font-normal z-10 relative text-white text-center w-full unbounded-font">
                    About Us
                </h2>
                <ul className="text-white z-10 flex items-center gap-8 section-list">
                    <li className="text-sm relative">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="text-sm relative">
                        <FontAwesomeIcon icon={faAngleRight} className="absolute -left-6 top-0.5" />
                        <Link href="#">ToursDetails</Link>
                    </li>
                </ul>
            </div>

            {/*About Page*/}
            <div className="about lg:py-[90px] px-[2%] sm:px-[8%] py-[80px] lg:px-[12%] relative">
                    <div className="flex flex-col lg:flex-row w-full gap-5 lg:gap-0">
                        <div className="lg:w-[50%]">
                            <div className="about-section flex flex-col">
                                <div className="about-heading lg:px-[12%]">
                                    <h1 className="text-2xl xl:text-4xl font-bold mb-4">Begin Your New Life Experience With Exploring New Destination</h1>
                                    <p className="mb-3 w-[90%] text-[#7a7a7a] text-sm">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.
                                    </p>
                                    <p className="w-[90%] text-[#7a7a7a] text-sm">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt hic expedita praesentium, repellendus tenetur mollitia doloremque magnam autem adipisci illum minima dignissimos voluptates repudiandae dolores quas harum necessitatibus nihil molestiae.
                                    </p>
                                </div>
                                <div className="about-image mt-8 hidden lg:flex w-[90%] h-[600px] relative">
                                   <Image 
                                     src={About01} 
                                     alt="About Us" 
                                     fill
                                     className="rounded-r-2xl object-cover" 
                                     sizes="(max-width: 768px) 100vw, 45vw"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-[50%]">
                            <div className="bg-[#000] text-white p-6 rounded-2xl flex md:flex-row justify-between md:gap-20">
                                <div className="autor-sec">
                                    <div className="flex -space-x3">
                                        <Image 
                                          src={Author01} 
                                          alt="Author 1" 
                                          width={50} 
                                          height={50}
                                          className="w-12 h-12 rounded-full border-2 border-black" 
                                        />
                                        <Image 
                                          src={Author02} 
                                          alt="Author 2" 
                                          width={50} 
                                          height={50}
                                          className="w-12 h-12 rounded-full border-2 border-black" 
                                        />
                                        <Image 
                                          src={Author03} 
                                          alt="Author 3" 
                                          width={50} 
                                          height={50}
                                          className="w-12 h-12 rounded-full border-2 border-black" 
                                        />
                                        <Image 
                                          src={Author04} 
                                          alt="Author 4" 
                                          width={50} 
                                          height={50}
                                          className="w-12 h-12 rounded-full border-2 border-black" 
                                        />
                                    </div>
                                    <h2 className="text-white mt-5 text-3xl">1234 &nbsp; +</h2>
                                </div>
                                <div className="customers">
                                    <h1 className="text-white text-2xl mt-2 mb-3">Customer Love The Tour Experiences</h1>
                                    <p className="text-[#7a7a7a]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
                                </div>
                            </div>
                            <div className="about-travel">
                                <Image 
                                  src={About02} 
                                  alt="About02" 
                                  width={600} 
                                  height={400} 
                                  className="rounded-2xl mt-10 object-cover" 
                                />
                            </div>
                            <div className="about-place flex sm:flex-row flex-col items-start gap-5 mt-10">
                                <Image 
                                  src={About03} 
                                  alt="About03" 
                                  width={600} 
                                  height={400} 
                                  className="rounded-2xl h-[350px] sm:w-[50%] w-full object-cover" 
                                />
                                <div className="bg-[#000] text-white p-6 rounded-2xl flex justify-between gap-20 sm:w-[300px] w-full">
                                    <div className="customers">
                                        <h1 className="text-white text-2xl mt-2 mb-3">Join Our Asian Travel Trip</h1>
                                        <p className="text-[#7a7a7a]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>

            {/*Tour Company*/}
            <div className="tour-company px-[2%] sm:px-[8%] py-[50px] lg:px-[12%] lg:py-[90px] flex flex-col items-center justify-center">
                <div className="tour-context">
                    <h1 className="text-center text-3xl lg:text-5xl font-semibold mb-5">We Are The Most Popular <br /> Travel & Tour Company</h1>
                    <p className="text-[#7a7a7a] text-center text-[15px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi est pariatur<br /> adipisci totam eligendi labore error fugiat rem, deserunt iure minus facere autem <br /> veritatis perspiciatis repudiandae nihil odio hic! Distinctio.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-15">
                    {/* Stat 1 - Travel Destination */}
                    <div className="flex gap-6 p-[20px] border border-[#ececec] rounded-2xl hover:shadow-lg transition-shadow">
                        <div className="tour-icon text-[#193555]">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-3xl" />
                        </div>
                        <div className="tour-text">
                            <h2 className="font-semibold text-2xl">928+</h2>
                            <span className="text-[#7a7a7a]">Travel Destination</span>
                        </div>
                    </div>

                    {/* Stat 2 - Happy Customers */}
                    <div className="flex gap-6 p-[20px] border border-[#ececec] rounded-2xl hover:shadow-lg transition-shadow">
                        <div className="tour-icon text-[#193555]">
                            <FontAwesomeIcon icon={faUsers} className="text-3xl" />
                        </div>
                        <div className="tour-text">
                            <h2 className="font-semibold text-2xl">15K+</h2>
                            <span className="text-[#7a7a7a]">Happy Customers</span>
                        </div>
                    </div>

                    {/* Stat 3 - Countries Covered */}
                    <div className="flex gap-6 p-[20px] border border-[#ececec] rounded-2xl hover:shadow-lg transition-shadow">
                        <div className="tour-icon text-[#193555]">
                            <FontAwesomeIcon icon={faGlobe} className="text-3xl" />
                        </div>
                        <div className="tour-text">
                            <h2 className="font-semibold text-2xl">50+</h2>
                            <span className="text-[#7a7a7a]">Countries Covered</span>
                        </div>
                    </div>

                    {/* Stat 4 - Hotels Available */}
                    <div className="flex gap-6 p-[20px] border border-[#ececec] rounded-2xl hover:shadow-lg transition-shadow">
                        <div className="tour-icon text-[#193555]">
                            <FontAwesomeIcon icon={faHotel} className="text-3xl" />
                        </div>
                        <div className="tour-text">
                            <h2 className="font-semibold text-2xl">2K+</h2>
                            <span className="text-[#7a7a7a]">Hotels Available</span>
                        </div>
                    </div>
                </div>

                {/* Added Image Section */}
                <div className="flex flex-col lg:flex-row gap-4 mt-10 w-full">
                    <div className="w-full lg:w-2/3">
                        <Image 
                            src={TourCompany01} 
                            alt="tour-company01" 
                            width={800}
                            height={500}
                            className="rounded-2xl w-full h-[300px] lg:h-[400px] object-cover"
                        />
                    </div>
                    <div className="w-full lg:w-1/3">
                        <Image 
                            src={TourCompany02} 
                            alt="tour-company02" 
                            width={400}
                            height={500}
                            className="rounded-2xl w-full h-[300px] lg:h-[400px] object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* Experience Section - FAQ Accordion */}
            <div className="experience px-[2%] sm:px-[8%] lg:px-[12%] py-[50px] lg:py-[90px] bg-[#0e0700]">
                <div className="experience-content flex justify-between lg:flex-row flex-col gap-3 lg:gap-0 items-start w-full">
                    <h2 className="xl:w-[50%] w-full text-white text-2xl md:text-5xl leading-tight unbounded-font">
                        Enjoy Our Best Quality Tour & Experience
                    </h2>
                    <div className="xl:w-[40%] w-full">
                        <p className="text-[#ffffff91] pb-5 text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.
                        </p>
                        <button className="btn bg-white group text-[#193555] hover:bg-[#193555] hover:text-white font-black px-5 py-5 w-auto rounded-full cursor-pointer transition-colors duration-200">
                            <span className="unbounded-font text-sm xl:text-md uppercase group-hover:text-white transition-colors duration-300 tracking-wider">
                                Learn More
                            </span>
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-8 mt-10 mx-auto w-[100%] lg:mx-auto lg:w-[80%]">
                    {faqData.map((item, index) => {
                        const isOpen = openIndex === index;
                        const currentHeight = heights[index] || 0;

                        return (
                            <div key={index} className="border-b border-gray-700">
                                <button
                                    onClick={() => toggle(index)}
                                    className="w-full cursor-pointer text-left flex justify-between items-center py-4 font-semibold text-white"
                                >
                                    <span>{item.question}</span>
                                    <FontAwesomeIcon icon={isOpen ? faAngleUp : faAngleDown} className="ml-2" />
                                </button>

                                <div
                                    style={{ maxHeight: isOpen ? `${currentHeight}px` : "0px" }}
                                    className="transition-all duration-500 ease-in-out overflow-hidden"
                                >
                                    <div ref={(el) => {
                                        if (el && !contentRefs.current[index]) {
                                            contentRefs.current[index] = el;
                                        }
                                    }}>
                                        <p className="text-gray-400 px-2 mb-4">{item.answer}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="banner mx-0 w-[100%] lg:mx-auto lg:w-[80%] relative mt-10">
                    <FontAwesomeIcon icon={faPlay} className="play-btn" />
                </div>
            </div>

            {/*Adventure Section - 4 Features */}
            <div className="adventure flex flex-col lg:flex-row px-[2%] sm:px-[8%] py-[50px] lg:px-[12%] lg:py-[90px] gap-10">
                <div className="w-full lg:w-[45%] adventure-content">
                    <h2 className="text-4xl font-semibold mb-2">Experience Your New Adventures With Us</h2>
                    <p className="text-[#7a7a7a] text-sm mb-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.
                    </p>
                    
                    {/* Feature 1 - Safe Traveling */}
                    <div className="adventure-section flex gap-5 mb-4">
                        <div className="adventure-icons">
                            <FontAwesomeIcon icon={faShieldHalved} className="text-white bg-[#0e0700] p-3 rounded-full text-[20px]" />
                        </div>
                        <div className="adventure-text">
                            <h3 className="text-xl font-semibold mb-1">Safe Traveling</h3>
                            <p className="text-[#7a7a7a]">
                                We prioritize your safety with top-notch equipment and experienced guides.
                            </p>
                        </div>
                    </div>

                    {/* Feature 2 - Best Price Guarantee */}
                    <div className="adventure-section flex gap-5 mb-4">
                        <div className="adventure-icons">
                            <FontAwesomeIcon icon={faMoneyBillWave} className="text-white bg-[#0e0700] p-3 rounded-full text-[20px]" />
                        </div>
                        <div className="adventure-text">
                            <h3 className="text-xl font-semibold mb-1">Best Price Guarantee</h3>
                            <p className="text-[#7a7a7a]">
                                Get the best deals and competitive prices on all our tour packages.
                            </p>
                        </div>
                    </div>

                    {/* Feature 3 - Expert Guides */}
                    <div className="adventure-section flex gap-5 mb-4">
                        <div className="adventure-icons">
                            <FontAwesomeIcon icon={faUsers} className="text-white bg-[#0e0700] p-3 rounded-full text-[20px]" />
                        </div>
                        <div className="adventure-text">
                            <h3 className="text-xl font-semibold mb-1">Expert Local Guides</h3>
                            <p className="text-[#7a7a7a]">
                                Our knowledgeable guides ensure you don't miss any hidden gems.
                            </p>
                        </div>
                    </div>

                    {/* Feature 4 - 24/7 Support */}
                    <div className="adventure-section flex gap-5 mb-4">
                        <div className="adventure-icons">
                            <FontAwesomeIcon icon={faClock} className="text-white bg-[#0e0700] p-3 rounded-full text-[20px]" />
                        </div>
                        <div className="adventure-text">
                            <h3 className="text-xl font-semibold mb-1">24/7 Customer Support</h3>
                            <p className="text-[#7a7a7a]">
                                We're always here to help you before, during, and after your trip.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-[55%] adventure-image relative h-[400px] lg:h-[500px]">
                    <Image 
                      src={Adventure01} 
                      alt="Adventure" 
                      fill
                      className="rounded-2xl object-cover" 
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>
            </div>
        </>
    );
}