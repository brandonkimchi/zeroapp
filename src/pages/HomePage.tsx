import React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { CheckCircle, Phone, Mail } from "lucide-react"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function HomePage() {
  return (
    <div className="flex flex-col bg-white text-gray-900 font-sans">
      {/* Header */}
      <Header />

      {/* Hero Section with light grey background */}
      <section className="bg-gray-50">
        <div className="container mx-auto px-6 lg:px-20 pt-40 pb-32 grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-8">
              Sustainable Door Solutions for Your{" "}
              <span className="text-green-600">Future</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 mb-10 max-w-xl">
              Premium eco-friendly doors that combine exceptional durability,
              energy efficiency, and environmental responsibility for modern
              homes.
            </p>
            <Link
              to="/contact"
              className="px-8 py-4 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition"
            >
              Get a Free Quote
            </Link>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <img
              src="https://images.unsplash.com/photo-1560185008-b033106af510"
              alt="Modern Door"
              className="rounded-2xl shadow-lg w-full max-w-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 lg:px-20 py-28 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-14"
        >
          Key <span className="text-green-600">Features</span> of Our Doors
        </motion.h2>
        <div className="grid md:grid-cols-4 gap-12">
          {[
            {
              title: "Eco-Friendly & Healthy",
              desc: "Made with FRP, carbon fiber, wood fiber, and eco-friendly plant fibers, processed with advanced German technology.",
            },
            {
              title: "Premium Materials",
              desc: "Meets E0-grade environmental standards with low formaldehyde emissions.",
            },
            {
              title: "Durable & Stable",
              desc: "Strong, stable performance with excellent resistance to moisture, fire, and wear.",
            },
            {
              title: "Easy To Clean",
              desc: "Non-absorbent, smooth surface that doesn’t bubble or peel.",
            },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="p-8 bg-gray-50 rounded-xl shadow hover:shadow-lg transition"
            >
              <CheckCircle className="w-12 h-12 text-green-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Project Highlight */}
      <section className="container mx-auto px-6 lg:px-20 py-28">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-green-700 text-white rounded-2xl p-12 grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h3 className="text-3xl font-semibold mb-6">
              Carbon Neutral Installation Process
            </h3>
            <ul className="space-y-4 text-lg">
              <li>✔️ Zero-waste installation</li>
              <li>✔️ Electric vehicle fleet</li>
              <li>✔️ Verified carbon-offset programs</li>
            </ul>
          </div>
          <img
            src="https://images.unsplash.com/photo-1604014237827-09f8a1ecfba2"
            alt="Project"
            className="rounded-xl shadow-lg"
          />
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-6 lg:px-20 py-28 grid md:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-8">
            Ready to Transform Your Home?
          </h2>
          <p className="text-gray-600 mb-8">
            Get in touch for a free consultation and quote.
          </p>
          <p className="flex items-center space-x-3 mb-4">
            <Phone className="text-green-600 w-5 h-5" /> <span>(123) 555-6787</span>
          </p>
          <p className="flex items-center space-x-3">
            <Mail className="text-green-600 w-5 h-5" />{" "}
            <span>zeroapp@doors.com</span>
          </p>
        </motion.div>
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-10 rounded-xl shadow-lg space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="p-3 border rounded-lg w-full"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="p-3 border rounded-lg w-full"
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="p-3 border rounded-lg w-full"
          />
          <input
            type="tel"
            placeholder="Phone"
            className="p-3 border rounded-lg w-full"
          />
          <select className="p-3 border rounded-lg w-full">
            <option>Front Door Replacement</option>
            <option>Patio Door</option>
            <option>Custom Door</option>
          </select>
          <textarea
            placeholder="Message"
            rows={4}
            className="p-3 border rounded-lg w-full"
          />
          <button
            type="submit"
            className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
          >
            Send Message
          </button>
        </motion.form>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
