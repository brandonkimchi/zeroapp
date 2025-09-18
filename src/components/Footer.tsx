import React from "react"
import zerologo from "../assets/images/zerologo.png"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 lg:px-20 py-12 grid md:grid-cols-4 gap-12">
        {/* Brand Section */}
        <div>
          <img src={zerologo} alt="ZeroApp Doors" className="h-10 mb-4" />
          <p className="text-sm leading-relaxed">
            Sustainable door solutions for modern, eco-friendly homes.
            Combining innovation, design, and environmental responsibility.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold text-white mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-green-500 transition">Door Installation</li>
            <li className="hover:text-green-500 transition">Custom Doors</li>
            <li className="hover:text-green-500 transition">Maintenance</li>
            <li className="hover:text-green-500 transition">Sustainability</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold text-white mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-green-500 transition">About Us</li>
            <li className="hover:text-green-500 transition">Certifications</li>
            <li className="hover:text-green-500 transition">Careers</li>
            <li className="hover:text-green-500 transition">Blog</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-white mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li>(123) 555-6787</li>
            <li>zeroapp@doors.com</li>
            <li>123 Green Valley Drive, Eco City</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 py-6 text-center text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()} ZeroApp Doors. All rights reserved. |{" "}
          <a href="/privacy" className="hover:text-green-500 transition">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="/terms" className="hover:text-green-500 transition">
            Terms of Service
          </a>
        </p>
      </div>
    </footer>
  )
}
