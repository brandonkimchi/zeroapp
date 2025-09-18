import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"
import zerologo from "../assets/images/zerologo.png"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Shrink header when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/100 backdrop-blur-md shadow py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="flex justify-between items-center px-12 lg:px-20">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src={zerologo}
            alt="ZeroApp Doors Logo"
            className="h-14 w-auto transition-transform duration-300 hover:scale-105"
          />
        </Link>

        {/* Desktop Nav */}
        <nav
          className={`hidden md:flex space-x-10 text-lg font-medium ${
            isScrolled ? "text-gray-900" : "text-white"
          }`}
        >
          {["Home", "About", "Services", "Contact"].map((item) => (
            <Link
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="relative group"
            >
              <span className="hover:text-blue-600 transition">{item}</span>
              <span
                className={`absolute left-0 -bottom-1 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  isScrolled ? "bg-blue-600" : "bg-white"
                }`}
              ></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden ${isScrolled ? "text-gray-900" : "text-white"}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg">
          <nav className="flex flex-col space-y-4 px-6 py-4 text-lg font-medium">
            {["Home", "About", "Services", "Contact"].map((item) => (
              <Link
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="hover:text-blue-600 transition text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
