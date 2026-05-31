import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import toursData from "../../ToursData.json";
import { notFound } from "next/navigation";
import BookingSidebar from "./sidebar";

export default async function page({ params }) {
  const { id } = await params;
  const tour = toursData.find((t) => t.id.toString() === id);

  if (!tour) return notFound();

  return (
    <>
      <div className="section-banner px-[2%] sm:px-[8%] lg:px-[12%] py-[50px] lg:py-[90px] min-h-[450px] lg:min-h-[500px] z-20 relative">
        <h2 className="text-4xl font-normal z-10 relative text-white text-center w-full unbounded-font">
          {tour.title}
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

      <div className="tour-details-container w-full flex flex-col lg:flex-row justify-between items-start px-[2%] sm:px-[8%] lg:px-[12%] py-[50px] lg:py-[90px] gap-5 relative">
        <div className="xl:w-[70%] lg:w-[60%] w-full relative">
          {tour.mainImage && (
            <div className="relative w-full h-[400px]">
              <Image
                src={tour.mainImage}
                alt={tour.title}
                fill
                className="object-cover rounded-xl"
                priority
              />
            </div>
          )}
          
          <div className="tour-details-content pt-4">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl sm:text-3xl font-[500] pb-1">{tour.title}</h2>
                <span className="text-[#94a3b8] text-sm">
                  <FontAwesomeIcon icon={faLocationDot} />
                  {tour.location}
                </span>
              </div>
              <h4 className="text-xl font-semibold unbounded-font text-right">
                <span className="text-gray-500 text-xs font-normal">
                  Start from
                </span>
                <br />
                {tour.price}
              </h4>
            </div>

            <h4 className="text-lg sm:text-xl font-semibold pb-3 pt-4">
              Tour Description:
            </h4>
            <p className="text-[#94a3b8] text-sm pb-2">
              This is a wonderful trip to {tour.title}, located in {tour.location}. 
              Enjoy the culture, food, breath-taking sight. The Price starts from{" "}
              {tour.price}
            </p>
            <p className="text-[#94a3b8] text-sm pb-2">
              The advantage of its Latin origin and the relative meaninglessness of Lorum is that 
              the text does not attract attention to itself or distracts the viewers attention 
              to the layout
            </p>
            
            <h4 className="text-lg sm:text-xl font-semibold pb-4 pt-4">
              Leave a Comment:
            </h4>
            
            {/* Fixed Comment Form - Name & Email on same line */}
            <form className="contact-form w-full">
              <div className="w-full mb-5">
                {/* Row for Name and Email - side by side */}
                <div className="flex flex-col sm:flex-row gap-3 mb-5">
                  <div className="flex flex-col w-full">
                    <label className="text-md font-medium pb-1">Name</label>
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="border-2 border-gray-200 outline-none rounded-md px-3 py-2 focus:border-[#193555] transition-colors" 
                      required
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <label className="text-md font-medium pb-1">Email</label>
                    <input 
                      type="email" 
                      placeholder="Your Email" 
                      className="border-2 border-gray-200 outline-none rounded-md px-3 py-2 focus:border-[#193555] transition-colors" 
                      required
                    />
                  </div>
                </div>
                
                {/* Comment box - full width on next line */}
                <div className="flex flex-col w-full mb-5">
                  <label className="text-md font-medium pb-1">Your Comment</label>
                  <textarea 
                    placeholder="Write your comment here..." 
                    rows="5"
                    className="border-2 border-gray-200 outline-none rounded-md px-3 py-2 focus:border-[#193555] transition-colors resize-vertical"
                    required
                  ></textarea>
                </div>
                
                {/* Submit Button */}
                <button 
                  type="submit" 
                  className="btn text-white bg-[#193555] font-bold px-6 w-full py-4 rounded-md cursor-pointer transition-colors duration-300 hover:bg-[#0f2a44]"
                >
                  <span className="text-sm xl:text-md uppercase tracking-wider">
                    Send Message
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>

        <BookingSidebar tour={tour} />
      </div>
    </>
  );
}