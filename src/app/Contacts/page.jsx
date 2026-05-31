import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { 
    faFacebookSquare,
    faTwitter,
    faInstagram,
    faYoutube,
    faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";  


export default function page() {
  return (
    <>
      <div className="section-banner px-[2%] sm:px-[8%] lg:px-[12%] py-[50px] lg:py-[90px] min-h-[450px] lg:min-h-[500px] z-20 relative">
        <h2 className="text-4xl font-normal z-10 relative text-white text-center w-full unbounded-font">Contact Us</h2>
        <ul className="text-white z-10 flex items-center gap-8 section-list">
          <li className="text-sm relative">
            <Link href="/">Home</Link>
          </li>
          <li className="text-sm relative">
            <FontAwesomeIcon icon={faAngleRight} className="absolute -left-6 top-0.5" />
            <Link href="#">Contact Us</Link>
          </li>
        </ul>
      </div>


      {/* Contact Page */}
      <div className="contact-page px-[2%] sm:px-[8%] lg:px-[12%] py-[50px] lg:py-[90px]">
        <div className="contact-section p-[50px] rounded-[20px] bg-[#0e0700] flex flex-col lg:flex-row">
          <div className="w-[40%]">
            <div className="contact-content mb-6">
              <span className="uppercase text-[#7a7a7a]">Office Address</span>
              <p className="text-white mt-3 text-[24px]">Eko Atlantic City</p>
            </div>
            <div className="contact-content mb-6">
              <span className="uppercase text-[#7a7a7a]">Office Phone Number</span>
              <p className="text-white mt-3 text-[24px]">+234 803 456 7890</p>
            </div>
            <div className="contact-content">
              <span className="uppercase text-[#7a7a7a]">Email address</span>
              <p className="text-white mt-3 text-[24px]">info@skyfare.com</p>
            </div>
            <div className="contact-content">
              <p className="mt-3 text-[24px] text-[#fff]">Follow us on social media</p>
              <div className="contact-icons flex gap-3 mt-3">
                <FontAwesomeIcon icon={faFacebookSquare} className="text-[22px] text-[#fff]" />
                <FontAwesomeIcon icon={faTwitter} className="text-[22px] text-[#fff]" />
                <FontAwesomeIcon icon={faInstagram} className="text-[22px] text-[#fff]" />
                <FontAwesomeIcon icon={faYoutube} className="text-[22px] text-[#fff]" />
              </div>
            </div>
          </div>
          <div className="w-[60%]">
            <form>
              <div className="mb-5">
                <label className="text-sm text-[#fff] mb-2 uppercase">Comments/ Questions</label>
                <textarea rows="5" placeholder="Write your comments or questions here..." className="w-full p-3 rounded-[10px] border border-[#ffffff80] focus:outline-none mt-2 text-[#7a7a7a]"></textarea>
              </div>
              <div className="flex flex-colmd:flex-row md:space-x-6 mb-5">
                <div className="flex-1 mb-5 md:mb-0">
                  <label className="text-sm text-[#fff] mb-2 uppercase">Name</label>
                  <input type="text" placeholder="Enter your name..." className="w-full p-3 rounded-[10px] border border-[#ffffff80] focus:outline-none mt-2 text-[#7a7a7a]" />
                </div>
                <div className="flex-1 mb-5 md:mb-0">
                  <label className="text-sm text-[#fff] mb-2 uppercase">Email Address</label>
                  <input type="email" placeholder="Enter your email..." className="w-full p-3 rounded-[10px] border border-[#ffffff80] focus:outline-none mt-2 text-[#7a7a7a]" />
                </div>
              </div>
              <button type="submit" className="mt-5 uppercase w-full px-6 py-3 bg-[#fff] rounded-[50px] font-semibold">Send Message</button>
            </form>
          </div>
        </div>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.901877609507!2d3.4161790741144484!3d6.40664062451211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8aad5bb5a705%3A0xaa16957b0e9176e4!2sEko%20Atlantic%20City%20View%20Point!5e0!3m2!1sen!2sng!4v1780238149193!5m2!1sen!2sng" width="100%" height="500" loading="lazy"></iframe>
    </>
  )
}

