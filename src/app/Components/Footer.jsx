import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faInstagram, 
  faFacebook, 
  faYoutube, 
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <>
       <div className="footer bg-black px-[2%] sm:px-[8%] pt-[50px] lg:pt-[90px]">
        <div className="content-footer">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-3">
              <div className="text-white logo text-2xl uppercase font-semibold">
                <a href="#" className="unbounded-font">
                  Sky<span className="unbounded-font">Fare</span>
                </a>
              </div>
              <p className="text-[#ffffffb3] mt-4">
                Badung, Bali-ji. Desa Swangan, No. 11 Nusa Dua, 81566
              </p>

              <div className="footer-icons flex gap-3 mt-5">
                <FontAwesomeIcon icon={faInstagram} className="text-[#ffffffb3] text-[20px] hover:text-white transition duration-300 cursor-pointer" />
                <FontAwesomeIcon icon={faFacebook} className="text-[#ffffffb3] text-[20px] hover:text-white transition duration-300 cursor-pointer" />
                <FontAwesomeIcon icon={faYoutube} className="text-[#ffffffb3] text-[20px] hover:text-white transition duration-300 cursor-pointer" />
                <FontAwesomeIcon icon={faXTwitter} className="text-[#ffffffb3] text-[20px] hover:text-white transition duration-300 cursor-pointer" />
              </div>
            </div>

            <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-12 gap-10">

              <div className="md:col-span-3 space-y-3">
                <h2 className="text-white text-2xl unbounded-font mb-6">Page</h2>
                <ul className="space-y-2 list-none">
                  <li><a href="#" className="text-[#ffffffb3] hover:text-white transition-colors duration-300">FAQ</a></li>
                  <li><a href="#" className="text-[#ffffffb3] hover:text-white transition-colors duration-300">About Us</a></li>
                  <li><a href="#" className="text-[#ffffffb3] hover:text-white transition-colors duration-300">Services</a></li>
                  <li><a href="#" className="text-[#ffffffb3] hover:text-white transition-colors duration-300">Contact Us</a></li>
                </ul>
              </div>
              <div className="md:col-span-3 space-y-3">
                <h2 className="text-white text-2xl unbounded-font mb-6">Links</h2>
                <ul className="space-y-2 list-none">
                  <li><a href="#" className="text-[#ffffffb3] hover:text-white transition-colors duration-300">Privacy Policy</a></li>
                  <li><a href="#" className="text-[#ffffffb3] hover:text-white transition-colors duration-300">Blog</a></li>
                  <li><a href="#" className="text-[#ffffffb3] hover:text-white transition-colors duration-300">Careers</a></li>
                  <li><a href="#" className="text-[#ffffffb3] hover:text-white transition-colors duration-300">Terms and Conditions</a></li>
                </ul>
              </div>

              <div className="md:col-span-6 space-y-3max-w-md">
                <h2 className="text-white text-2xl unbounded-font mb-6">Our newsletter</h2>
                <p className="text-[#ffffffb3] text-sm">
                  lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc.
                </p>

                <form className="flex items-center border border-[#ffffffb3] rounded-full mt-4 overflow-hidden">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 px-4 py-3 text-sm bg-transparent text-white placeholder-[#ffffff80] focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-white text-black font-semibold xl:px-6 py-3 hover:bg-gray-200 md:px-2"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-[#ffffffb3] mt-10 py-8 text-white text-center text-sm">
          &copy; {new Date().getFullYear()} Skyfare. All rights reserved.
        </div>
      </div>
    </>
  )
}
