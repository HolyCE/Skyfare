"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faUser,
  faBars,
  faTimes,
  faLock,
} from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faFlickr} from '@fortawesome/free-brands-svg-icons'
import {faXTwitter} from '@fortawesome/free-brands-svg-icons/faXTwitter'
import { useState, useEffect } from "react";
import Link from "next/link"; 

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  })
  return (
   <nav className={`navbar fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
  isScrolled ? 'shadow-md bg-white py-3 scrolled' : 'py-0'
}`}>
  {/* Nav Top (hidden on scroll with transition) */}
  <div className={`nav-top w-full flex justify-between items-center gap-3 px-[5%] sm:px-[5%] py-2 sm:py-3 lg:py-4 overflow-hidden transition-all duration-500 ease-in-out ${
    isScrolled ? 'max-h-0 opacity-0 py-0' : "max-h-[200px] opacity-100"
  }`}>
    <ul className="hidden lg:flex items-center gap-3 text-[#727272]">
      <li className="text-sm">
        <FontAwesomeIcon icon={faPhone} className="pr-1 text-[#8192a0]" />
        <span>+91 54 0352 3524</span>
      </li>
      <li className="text-sm">
        <FontAwesomeIcon icon={faEnvelope} className="pr-1 text-[#8192a0]" />
        <span>info@skyfare.com</span>
      </li>
    </ul>

    <div className="flex items-center justify-between lg:justify-center gap-3 text-[#727272] w-full lg:w-auto">
      <ul className="hidden lg:flex items-center gap-5">
        <li className="hover:text-blue-500 transition-colors duration-300 text-[#8192a0]"><FontAwesomeIcon icon={faFacebook} className="text-sm" /></li>
        <li className="hover:text-blue-500 transition-colors duration-300 text-[#8192a0]"><FontAwesomeIcon icon={faXTwitter} className="text-sm" /></li>
        <li className="hover:text-blue-500 transition-colors duration-300 text-[#8192a0]"><FontAwesomeIcon icon={faFlickr} className="text-sm" /></li>
      </ul>
      <ul className="hidden lg:flex items-center gap-4 ps-3">
        <li className="lg:text-md text-sm cursor-pointer">
          <i className="ri-lock-line pr-1 text-[#8192a0]"></i>
          <span>Login</span>
        </li>
        <li className="lg:text-md text-sm cursor-pointer">
          <FontAwesomeIcon icon={faUser} className="text-sm" />
          <span>Sign Up</span>
        </li>
      </ul>
    </div>
  </div>

  {/* Nav Bottom (main navigation) */}
  <div className={`w-full px-[5%] text-start lg:text-center relative flex justify-between items-center nav-menu-container transition-all duration-500 ease-in-out ${isScrolled ? 'bg-white' : 'bg-transparent'}`}>
    
    {/* Logo For Mobile - Left aligned */}
    <div className="lg:hidden flex logo text-2xl uppercase font-semibold">
      <a href="/" className="unbounded-font">Sky<span className="unbounded-font">fare</span></a>
    </div>  

    {/* Desktop Menu */}
    <ul className="nav-menu hidden lg:flex w-full justify-center items-center gap-14 py-5 relative">
      <li><Link href="/" className="active font-[500] hover:text-black transition-colors duration-500">Home</Link></li>
      <li><Link href="/About" className="font-[500] text-[#697e8a] hover:text-black transition-colors duration-500">About</Link></li>
      <li><Link href="/Tours" className="font-[500] text-[#697e8a] hover:text-black transition-colors duration-500">Tour</Link></li>
      <li>
        <div className="logo text-3xl uppercase font-semibold">
          <Link href="/" className="unbounded-font">Sky<span className="unbounded-font">fare</span></Link>
        </div>
      </li>
      <li><Link href="/Faq" className="font-[500] text-[#697e8a] hover:text-black transition-colors duration-500">Faq</Link></li>
      <li><Link href="/Blog" className="font-[500] text-[#697e8a] hover:text-black transition-colors duration-500">Blog</Link></li>
      <li><Link href="/Contacts" className="font-[500] text-[#697e8a] hover:text-black transition-colors duration-500">Contact</Link></li>
    </ul>

    {/* Mobile Toggle - Right aligned */}
    <div className="flex lg:hidden justify-center items-center">
      <div
        className="toggle-btn cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FontAwesomeIcon 
          icon={isOpen ? faTimes : faBars} 
          className='text-[#193555] text-xl' 
        />
      </div>
    </div>
  </div>

  {/* Mobile Menu Dropdown - Full width with edge alignment */}
  <ul className={`lg:hidden flex flex-col w-full px-[5%] gap-6 bg-[#f7f7f7] shadow-md absolute left-0 overflow-hidden transition-all duration-500 ease-in-out ${
    isOpen ? "max-h-[700px] top-full mt-0 opacity-100 py-6" : "max-h-0 opacity-0 py-0 top-full"
  }`}>
    <li><a href="/" className="font-[500] hover:text-black block w-full">Home</a></li>
    <li><a href="/About" className="font-[500] hover:text-black block w-full">About</a></li>
    <li><a href="/Tours" className="font-[500] hover:text-black block w-full">Tours</a></li>
    <li><a href="/Faq" className="font-[500] hover:text-black block w-full">Faq</a></li>
    <li><a href="/Blog" className="font-[500] hover:text-black block w-full">Blog</a></li>
    <li><a href="/Contacts" className="font-[500] hover:text-black block w-full">Contact</a></li>
    
    {/* Login/Sign Up in mobile menu - aligned with other items */}
    <li className="pt-4 border-t border-gray-300">
      <div className="flex items-center gap-6">
        <a href="#" className="font-[500] hover:text-black flex items-center gap-2">
          <FontAwesomeIcon icon={faLock} className="text-[#8192a0] text-sm" />
          <span>Login</span>
        </a>
        <a href="#" className="font-[500] hover:text-black flex items-center gap-2">
          <FontAwesomeIcon icon={faUser} className="text-[#8192a0] text-sm" />
          <span>Sign Up</span>
        </a>
      </div>
    </li>
    
    {/* Social Media Icons in mobile menu */}
    <li className="pt-2">
      <div className="flex items-center gap-4">
        <a href="#" className="text-[#8192a0] hover:text-blue-500 transition-colors"><FontAwesomeIcon icon={faFacebook} className="text-base" /></a>
        <a href="#" className="text-[#8192a0] hover:text-blue-500 transition-colors"><FontAwesomeIcon icon={faXTwitter} className="text-base" /></a>
        <a href="#" className="text-[#8192a0] hover:text-blue-500 transition-colors"><FontAwesomeIcon icon={faFlickr} className="text-base" /></a>
      </div>
    </li>
  </ul>
</nav>
  )
}