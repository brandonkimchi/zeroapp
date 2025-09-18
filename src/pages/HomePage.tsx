import React from "react"
import { Link } from "react-router-dom"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-700 to-blue-500 text-white">
        <div className="container mx-auto px-6 py-20 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Professional Door Installation Services
          </h1>
          <p className="max-w-2xl text-lg md:text-xl mb-8">
            High-quality, secure, and stylish door solutions for your home and business.
          </p>
          <Link
            to="/contact"
            className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition"
          >
            Get a Free Quote
          </Link>
        </div>
      </header>

      {/* Services Section */}
      <section className="container mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold mb-3">Residential Doors</h3>
          <p className="text-gray-600">
            Enhance your home’s security and style with expertly installed front,
            patio, and interior doors.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold mb-3">Commercial Doors</h3>
          <p className="text-gray-600">
            Reliable, durable, and secure door systems tailored for offices,
            shops, and industrial spaces.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold mb-3">Custom Solutions</h3>
          <p className="text-gray-600">
            From glass doors to fire-rated systems, we provide custom
            installations that fit your needs.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
            <p className="text-gray-700 mb-6">
              With years of expertise in the industry, we deliver top-notch
              door installation services that prioritize safety, aesthetics, and
              durability.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>✔️ Experienced and certified installers</li>
              <li>✔️ Premium-quality doors and materials</li>
              <li>✔️ Competitive pricing</li>
              <li>✔️ Fast, reliable, and clean installations</li>
            </ul>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1600585154356-596af9009c39"
              alt="Door Installation"
              className="rounded-xl shadow-md"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <footer className="bg-blue-700 text-white py-12 text-center">
        <h3 className="text-2xl font-bold mb-4">
          Ready to upgrade your doors?
        </h3>
        <Link
          to="/contact"
          className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition"
        >
          Contact Us Today
        </Link>
      </footer>
    </div>
  )
}
