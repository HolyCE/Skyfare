"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faAngleRight, 
    faClose, 
    faLocationDot, 
    faUser, 
    faUsers,
    faAngleDown,
    faAngleUp
} from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";
import Link from "next/link";
import toursData from "../ToursData.json"
import {useState} from "react";
import { useRef, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// Splash images for About section
const About01 = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop";
const About02 = "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&h=600&fit=crop";
const About03 = "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=600&fit=crop";

// Splash images for Authors section
const Author01 = "https://randomuser.me/api/portraits/women/68.jpg";
const Author02 = "https://randomuser.me/api/portraits/men/75.jpg";
const Author03 = "https://randomuser.me/api/portraits/women/45.jpg";
const Author04 = "https://randomuser.me/api/portraits/men/32.jpg";

// Splash images for Blog section
const BlogPage01 = "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&h=600&fit=crop";
const BlogPage02 = "https://images.unsplash.com/photo-1542259009477-d625272157b7?w=800&h=600&fit=crop";
const BlogPage03 = "https://images.unsplash.com/photo-1506953829328-6150af2e0fec?w=800&h=600&fit=crop";

export default function Index() {
  const [selectedTour, setSelectedTour] = useState(null);

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
    {/* Hero Section */}
    <div className="hero h-screen min-h-screen flex justify-center items-center z-10">
        <div className="hero-content relative text-center">
            <h1 className="xl:text-8xl lg:text-7xl md:text-6xl text-4xl unbounded-font font-bold text-white">
                Explore the World,<br /> with Skyfare
            </h1>
            <p className="pt-3 text-[#ffffffb3] md:pb-10 pb-5 text-xl">Planning for a trip? We will organize your trip with the best places and within best budget!</p>
            <button className="btn bg-white group text-[#193555] hover:bg-[#193555] hover:text-white font-black px-5 py-5 w-auto rounded-full cursor-pointer transition-colors duration-200 ">
                <a href="#" className="unbounded-font text-sm xl:text-md uppercase group-hover:text-white transition-colors duration-300 tracking-wider">
                    View all Tours
                </a>
            </button>
        </div>
    </div>

    {/* Tours Section */}
    <div className="travel px-[2%] sm:px-[8%] lg:px-[12%] py-[80px] lg:py-[120px] flex flex-col gap-10 lg:gap-14">
        <div className="travel-content text-center">
            <h1 className="unbounded-font text-4xl font-semibold pb-3">Find Out The Best Travel Choices in Asia</h1>
            <p className="w-[60%] mx-auto text-[#193555]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.
            </p>
        </div>
        <div className="travel-wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {toursData.map((tour)=> (
                <Link href={`/TourDetails/${tour.id}`} key={tour.id}>
                    <div className="travel-item rounded-xl overflow-hidden relative group transition-all duration-300">
                        <Image 
                           src={tour.Images} 
                           alt={tour.title} 
                           width={400} 
                           height={300} 
                           className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                        />

                        <div className="travel-content absolute bottom-0 left-0 flex justify-between items-center w-full p-3 z-10 bg-gradient-to-t from-black/70 to-transparent">
                           <div>
                              <h2 className="text-xl font-semibold unbounded-font pb-1 text-white">
                                {tour.title}
                              </h2>
                              <p className="text-xs text-[#ffffff91] flex items-center gap-1">
                                <FontAwesomeIcon icon={faLocationDot} />
                                {tour.location}
                              </p>
                           </div>
                           <h4 className="text-xl font-bold unbounded-font text-right text-white">
                               <span className="text-[#ffffff91] text-xs font-normal">
                                Start from
                               </span>{""}
                               <br />
                               {tour.price}
                           </h4>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    </div>

    {/*About Us */}
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

    {/* Testimonials*/}
    <div className="testimonials bg-[#0e0700] px-[2%] sm:px-[8%] lg:px-[12%] py-[50px] lg:py-[90px]">
        <div className="pb-10 testimonials-context flex justify-between lg:flex-row flex-col gap-3 lg:gap-0 item-start w-full">
            <h2 className="xl:w-[50%] w-full text-white text-4xl leading-tight unbounded-font">Discover A Mesmerizing Nature Landscape & <br />Stunning Culture</h2>
            <div className="xl:w-[50%] w-full">
                <p className="text-[#ffffff91] pb-5 text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.
                </p>
                <button className="btn bg-white group text-[#193555] hover:bg-[#193555] hover:text-white font-black px-5 py-5 w-auto rounded-full cursor-pointer transition-colors duration-200 ">
                    <a href="#" className="unbounded-font text-sm xl:text-md uppercase group-hover:text-white transition-colors duration-300 tracking-wider">
                        Learn More
                    </a>
                </button>
            </div>
        </div>
        <Swiper
            spaceBetween={20}
            slidesPerView={3}
            breakpoints={{
                1199:{ slidesPerView: 3 },
                767:{ slidesPerView: 2 },
                575:{ slidesPerView: 1 },
            }}
            loop={true}
        >
            <SwiperSlide>
                <div className="testimonial-item bg-[#193555] text-white p-5 sm:p-6 rounded-2xl h-[250px] sm:h-[220px] flex sm:flex-col justify-between">
                    <p className="text-sm sm:text-base mb-4 line-clamp-4">
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate."
                    </p>
                    <h3 className="text-base sm:text-lg font-bold">John Doe</h3>
                    <p className="text-xs text-[#ffffff91]">Traveler</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="testimonial-item bg-[#193555] text-white p-5 sm:p-6 rounded-2xl h-[250px] sm:h-[220px] flex sm:flex-col justify-between">
                    <p className="text-sm sm:text-base mb-4 line-clamp-4">
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate."
                    </p>
                    <h3 className="text-base sm:text-lg font-bold">Jane Smith</h3>
                    <p className="text-xs text-[#ffffff91]">Adventurer</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="testimonial-item bg-[#193555] text-white p-5 sm:p-6 rounded-2xl h-[250px] sm:h-[220px] flex sm:flex-col justify-between">
                    <p className="text-sm sm:text-base mb-4 line-clamp-4">
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate."
                    </p>
                    <h3 className="text-base sm:text-lg font-bold">Bob Johnson</h3>
                    <p className="text-xs text-[#ffffff91]">Explorer</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="testimonial-item bg-[#193555] text-white p-5 sm:p-6 rounded-2xl h-[250px] sm:h-[220px] flex sm:flex-col justify-between">
                    <p className="text-sm sm:text-base mb-4 line-clamp-4">
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate."
                    </p>
                    <h3 className="text-base sm:text-lg font-bold">Alice Williams</h3>
                    <p className="text-xs text-[#ffffff91]">Globetrotter</p>
                </div>
            </SwiperSlide>
             <SwiperSlide>
                <div className="testimonial-item bg-[#193555] text-white p-5 sm:p-6 rounded-2xl h-[250px] sm:h-[220px] flex flex-col justify-between">
                    <p className="text-sm sm:text-base mb-4 line-clamp-4">
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate."
                    </p>
                    <h3 className="text-base sm:text-lg font-bold">Alice Williams</h3>
                    <p className="text-xs text-[#ffffff91]">Globetrotter</p>
                </div>
            </SwiperSlide>
             <SwiperSlide>
                <div className="testimonial-item bg-[#193555] text-white p-5 sm:p-6 rounded-2xl h-[250px] sm:h-[220px] flex sm:flex-col justify-between">
                    <p className="text-sm sm:text-base mb-4 line-clamp-4">
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate."
                    </p>
                    <h3 className="text-base sm:text-lg font-bold">Alice Williams</h3>
                    <p className="text-xs text-[#ffffff91]">Globetrotter</p>
                </div>
            </SwiperSlide>
             <SwiperSlide>
                <div className="testimonial-item bg-[#193555] text-white p-5 sm:p-6 rounded-2xl h-[250px] sm:h-[220px] flex sm:flex-col justify-between">
                    <p className="text-sm sm:text-base mb-4 line-clamp-4">
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate."
                    </p>
                    <h3 className="text-base sm:text-lg font-bold">Alice Williams</h3>
                    <p className="text-xs text-[#ffffff91]">Globetrotter</p>
                </div>
            </SwiperSlide>
             <SwiperSlide>
                <div className="testimonial-item bg-[#193555] text-white p-5 sm:p-6 rounded-2xl h-[250px] sm:h-[220px] flex sm:flex-col justify-between">
                    <p className="text-sm sm:text-base mb-4 line-clamp-4">
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate."
                    </p>
                    <h3 className="text-base sm:text-lg font-bold">Alice Williams</h3>
                    <p className="text-xs text-[#ffffff91]">Globetrotter</p>
                </div>
            </SwiperSlide>
            
        </Swiper>
    </div>

    {/* Blog */}
    <div className="blog px-[2%] sm:px-[8%] lg:px-[12%] py-[50px] lg:py-[90px]">
        <div className="w-full pb-5">
            <h1 className="unbounded-font text-4xl font-semibold pb-3">Our Lastest Blog</h1>
            <p className="text-[#193555]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.
            </p>
        </div>

        <div className="blog-wrapper grid gird-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3">
            <div className="blog-card">
                <Image 
                  src={BlogPage01} 
                  alt="BlogPage01" 
                  width={400} 
                  height={300}
                  className="rounded-[20px]" 
                />
                <div className="blog-content mt-3">
                    <h2 className="text-lg font-semibold unbounded-font sm:text-xl mt-6 mb-2">Top 10 Travel Destinations in Asia for 2024</h2>
                    <p className="text-sm text-[#7a7a7a]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.
                    </p>
                </div>
            </div>
            <div className="blog-card">
                <Image 
                  src={BlogPage02} 
                  alt="BlogPage02" 
                  width={400} 
                  height={300}
                  className="rounded-[20px]" 
                />
                <div className="blog-content mt-3">
                    <h2 className="text-lg font-semibold unbounded-font sm:text-xl mt-6 mb-2">How to Plan a Budget-Friendly Trip to Asia</h2>
                    <p className="text-sm text-[#7a7a7a]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.
                    </p>
                </div>
            </div>
            <div className="blog-card">
                <Image 
                  src={BlogPage03} 
                  alt="BlogPage03" 
                  width={400} 
                  height={300}
                  className="rounded-[20px]" 
                />
                <div className="blog-content mt-3">
                    <h2 className="text-lg font-semibold unbounded-font sm:text-xl mt-6 mb-2">Cultural Etiquette Tips for Travelers in Asia</h2>
                    <p className="text-sm text-[#7a7a7a]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.
                    </p>
                </div>
            </div>
        </div>
    </div>

    {/*Experience*/}
    <div className="experience px-[2%] sm:px-[8%] lg:px-[12%] py-[50px] lg:py-[90px] bg-[#0e0700]">
        <div className="experience-content flex justify-between lg:flex-row flex-col gap-3 lg:gap-0 item-start w-full">
            <h2 className="xl:w=[50%] w-full text-white text-2xl md:text-5xl leading-tight unbounded-font">Enjoy Our Best Quality Tour & Experience</h2>
            <div className="xl:w-[40%] w-full">
                <p className="text-[#ffffff91] pb-5 text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.
                </p>
                <button className="btn bg-white group text-[#193555] hover:bg-[#193555] hover:text-white font-black px-5 py-5 w-auto rounded-full cursor-pointer transition-colors duration-200 ">
                    <a href="#" className="unbounded-font text-sm xl:text-md uppercase group-hover:text-white transition-colors duration-300 tracking-wider">
                        Learn More
                    </a>
                </button>
            </div>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-10 mx-auto w-[100%] lg:mx-auto lg:w-[80%]">
            {faqData.map((item, index) =>{
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
                    <div key={index} className="border-b border-gray-700">
                        <button
                            onClick={() => toggle(index)}
                            className="w-full cursor-pointer text-left flex justify-between items-center py-4 font-semibold text-white"
                        >
                           <span>{item.question}</span> 
                           <FontAwesomeIcon icon={isOpen ? faAngleUp : faAngleDown} className="ml-2 "  />
                        </button>

                        <div
                        style={{maxHeight: `${height}px`}} 
                        className="transition-all duration-500 ease-in-out overflow-hidden"
                        >
                            <div ref={contentRef}>
                                <p className="text-gray-400 px-2 mb-4">{item.answer}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>

    {/*Contact Banner*/}
    <div className="contact-banner flex justify-center items-center">
        <div className="contact-banner-content relative text-center">
            <h1 className="xl:text-5xl lg:text-7xl text-4xl unbounded-font font-bold text-white">Get Closer With Us & <br/> Get Special Promos</h1>
            <p className="text-[#ffffffb3] pb-10 pt-6 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.
            </p>
            <button className="btn bg-white group text-[#193555] hover:bg-[#193555] hover:text-white font-black px-5 py-5 w-auto rounded-full cursor-pointer transition-colors duration-200 ">
                <a href="#" className="unbounded-font text-sm xl:text-md uppercase group-hover:text-white transition-colors duration-300 tracking-wider">
                    Contact Us
                </a>
            </button>
        </div>
    </div>
    </>
  )
}