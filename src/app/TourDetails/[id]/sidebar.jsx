'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faClose, faLocationDot, faUser, faUsers } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useRef, useEffect } from "react";

import toursData from "../../ToursData.json";
import "swiper/css";

export default function Sidebar({ tour }) {
  const [showForm, setShowForm] = useState(false);
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    phone: '',
    date: ''
  });
  const modalRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', bookingData);
    alert('Booking request sent! We will contact you soon.');
    setShowForm(false);
    setBookingData({
      name: '',
      email: '',
      phone: '',
      date: ''
    });
  };

  // Handle clicking outside the modal
  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setShowForm(false);
    }
  };

  // Add event listener when modal is open
  useEffect(() => {
    if (showForm) {
      document.addEventListener('mousedown', handleClickOutside);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [showForm]);

  return (
    <div className="xl:w-[30%] lg:w-[40%] w-full sticky top-0 right-0 border-0 border-gray-100 rounded-md py-5">
      <h4 className="text-lg font-semibold pb-1">Date:</h4>
      
      <form action="post">
        <div className="flex flex-col gap-2 mt-5">
          <label className="text-md font-medium pb-1">Adult:</label>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faUser} className="text-gray-500" />
            <input 
              type="number" 
              placeholder="1" 
              className="border-2 border-gray-100 outline-none rounded-md w-full" 
              required
            />
          </div>
        </div>
        
        <div className="flex flex-col gap-2 mt-5">
          <label className="text-md font-medium pb-1">Child:</label>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faUsers} className="text-gray-500" />
            <input 
              type="number" 
              placeholder="0" 
              className="border-2 border-gray-100 outline-none rounded-md w-full" 
              required
            />
          </div>
        </div>
      </form>
      
      <button 
        type="button" 
        className="btn text-white bg-[#193555] w-full font-bold py-4 rounded-md cursor-pointer transition-colors duration-300 mt-3" 
        onClick={() => setShowForm(true)}
      >
        <span className="text-sm xl:text-md uppercase transition-color duration-300 tracking-wider">
          Book Now
        </span>
      </button>
      
      <h4 className="text-lg font-semibold mt-5 pb-2">Recommendation Tours</h4>
      
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        className="travel-wrapper"
      >
        {toursData.map((tour) => (
          <SwiperSlide key={tour.id}>
            <Link href={`/TourDetails/${tour.id}`}>
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
                    </span>
                    <br />
                    {tour.price}
                  </h4>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Booking Modal with Blur Effect - Higher z-index to cover header */}
      {showForm && (
        <>
          {/* Blur overlay - higher z-index than header */}
          <div 
            className="fixed inset-0 backdrop-blur-md bg-white/30 z-[9999]"
            onClick={() => setShowForm(false)}
          />
          
          {/* Modal - even higher z-index, positioned lower on the page */}
          <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 pointer-events-none">
            <div 
              ref={modalRef}
              className="bg-white rounded-lg w-[500px] max-w-[90vw] max-h-[500px] pointer-events-auto shadow-2xl relative flex flex-col mt-20"
            >
              {/* Exit button */}
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10 bg-white rounded-full p-1 transition-colors duration-200"
                aria-label="Close"
              >
                <FontAwesomeIcon icon={faClose} size="lg" />
              </button>
              
              {/* Scrollable content area */}
              <div className="overflow-y-auto flex-1">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#193555] mb-4 text-center pr-6">
                    Complete Your Booking
                  </h3>
                  
                  <form onSubmit={handleBookingSubmit} className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={bookingData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full border-2 border-gray-100 rounded-md p-2 text-sm focus:outline-none focus:border-[#193555] transition-colors duration-200"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={bookingData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full border-2 border-gray-100 rounded-md p-2 text-sm focus:outline-none focus:border-[#193555] transition-colors duration-200"
                        placeholder="your@email.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={bookingData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full border-2 border-gray-100 rounded-md p-2 text-sm focus:outline-none focus:border-[#193555] transition-colors duration-200"
                        placeholder="Your phone number"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={bookingData.date}
                        onChange={handleInputChange}
                        required
                        className="w-full border-2 border-gray-100 rounded-md p-2 text-sm focus:outline-none focus:border-[#193555] transition-colors duration-200"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Special Requests (Optional)
                      </label>
                      <textarea
                        name="requests"
                        onChange={handleInputChange}
                        rows="2"
                        className="w-full border-2 border-gray-100 rounded-md p-2 text-sm focus:outline-none focus:border-[#193555] transition-colors duration-200"
                        placeholder="Any special requirements or requests?"
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-[#193555] text-white font-bold py-2 rounded-md hover:bg-[#0f243b] transition-colors duration-300 mt-2 text-sm"
                    >
                      Submit Booking
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}