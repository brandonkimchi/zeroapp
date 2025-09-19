import React, { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import zerologo from "../assets/images/zerologo.png"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-gray-200 ${
        isScrolled ? "bg-white shadow py-3" : "bg-white py-5"
      }`}
    >
      <div className="flex justify-between items-center px-12 lg:px-20">
        {/* Logo → scroll to top */}
        <a href="#home" className="flex items-center space-x-2">
          <img
            src={zerologo}
            alt="ZeroApp Doors Logo"
            className="h-14 w-auto transition-transform duration-300 hover:scale-105"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-10 text-lg font-medium text-gray-900">
          <a href="#home" className="relative group">
            <span className="hover:text-green-600 transition">Home</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#projects" className="relative group">
            <span className="hover:text-green-600 transition">Projects</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#contact" className="relative group">
            <span className="hover:text-green-600 transition">Contact Us</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-900"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col space-y-4 px-6 py-4 text-lg font-medium text-gray-900">
            <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact Us</a>
          </nav>
        </div>
      )}
    </header>
  )
}
