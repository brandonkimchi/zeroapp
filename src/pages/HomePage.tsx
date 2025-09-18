import React from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900 font-sans">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center bg-gray-900 text-white">
        <img
          src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154"
          alt="Modern Door"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative z-10 px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Redefining Door Installation
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 mb-8">
            Where security meets design — premium doors that transform your
            space with elegance and strength.
          </p>
          <Link
            to="/contact"
            className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 container mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1628744874144-5f05d39b1c1e"
            alt="Residential"
            className="rounded-xl mb-6 shadow-lg"
          />
          <h3 className="text-2xl font-semibold mb-3">Residential</h3>
          <p className="text-gray-600">
            Elevate your home with stylish, durable, and secure doors crafted
            for comfort and design.
          </p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1600585154356-596af9009c39"
            alt="Commercial"
            className="rounded-xl mb-6 shadow-lg"
          />
          <h3 className="text-2xl font-semibold mb-3">Commercial</h3>
          <p className="text-gray-600">
            Advanced solutions for offices, retail, and industry — doors that
            protect and impress.
          </p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1604014237827-09f8a1ecfba2"
            alt="Custom"
            className="rounded-xl mb-6 shadow-lg"
          />
          <h3 className="text-2xl font-semibold mb-3">Custom</h3>
          <p className="text-gray-600">
            Tailored designs for unique spaces — glass, steel, or fire-rated,
            built just for you.
          </p>
        </div>
      </section>

      {/* About */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-extrabold mb-6">
              Craftsmanship You Can Trust
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Our team blends innovation with tradition to bring doors that
              redefine security and elegance. From consultation to installation,
              we ensure precision in every step.
            </p>
            <Link
              to="/about"
              className="px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition"
            >
              Learn More
            </Link>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154"
              alt="Craftsmanship"
              className="rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-900 text-white text-center">
        <h3 className="text-3xl md:text-5xl font-bold mb-6">
          Ready to Upgrade Your Space?
        </h3>
        <p className="text-lg mb-10 text-gray-300">
          Discover doors that are more than entryways — they’re statements of
          style and security.
        </p>
        <Link
          to="/contact"
          className="px-10 py-4 bg-white text-gray-900 font-semibold rounded-full shadow-lg hover:bg-gray-200 transition"
        >
          Contact Us Today
        </Link>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
