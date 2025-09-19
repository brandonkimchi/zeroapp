import React, { useRef } from "react"
import { motion } from "framer-motion"
import { CheckCircle, Phone, Mail } from "lucide-react"
import emailjs from "emailjs-com"
import Header from "../components/Header"
import Footer from "../components/Footer"
import doorImage from "../assets/images/door.jpg"

export default function HomePage() {
  const formRef = useRef<HTMLFormElement>(null)

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return

    emailjs
      .sendForm(
        "your_service_id",   // replace with EmailJS Service ID
        "your_template_id",  // replace with EmailJS Template ID
        formRef.current,
        "your_public_key"    // replace with EmailJS Public Key
      )
      .then(
        () => {
          alert("✅ Message sent successfully!")
          formRef.current?.reset()
        },
        (error) => {
          alert("❌ Failed to send message. Try again later.")
          console.error(error)
        }
      )
  }

  return (
    <div className="flex flex-col bg-white text-gray-900 font-sans">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section id="home">
        <div className="container mx-auto px-6 lg:px-20 pt-40 pb-32 grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-8">
              Sustainable Door Solutions for Your{" "}
              <span style={{ color: "#005d28" }}>Future</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 mb-10 max-w-xl">
              Premium eco-friendly doors that combine exceptional durability,
              energy efficiency, and environmental responsibility for modern
              homes.
            </p>
            <a
              href="#contact"
              className="px-8 py-4 text-white font-semibold rounded-lg shadow transition"
              style={{ backgroundColor: "#005d28" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#004520")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#005d28")
              }
            >
              Get a Quote
            </a>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <img
              src={doorImage}
              alt="Modern Door"
              className="rounded-2xl shadow-lg w-full max-w-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-28">
        <div className="container mx-auto px-6 lg:px-20">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-4xl font-bold text-center mb-20"
          >
            Key <span style={{ color: "#005d28" }}>Features</span> of Our Doors
          </motion.h2>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
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
                desc: "Non-absorbent, smooth surface that doesn't bubble or peel.",
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className="group bg-white p-8 rounded-lg shadow-sm hover:shadow-lg border border-gray-200 transition-all duration-500 cursor-pointer relative overflow-hidden"
              >
                <div
                  className="w-14 h-14 rounded-lg flex items-center justify-center group-hover:scale-105 transition-all duration-300 mb-6"
                  style={{ backgroundColor: "#005d28" }}
                >
                  <CheckCircle className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Door Construction Section */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-6 lg:px-20">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-4xl font-bold text-center mb-20"
          >
            Advanced <span style={{color: '#005d28'}}>Multi-Layer Construction</span>
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* 3D Visualization */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="w-full max-w-lg mx-auto">
                <svg viewBox="0 0 600 450" className="w-full h-auto">
                  {/* Layer 4 - Bottom Layer */}
                  <motion.g
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    {/* Top face */}
                    <path d="M100 340 L400 340 L480 260 L180 260 Z" fill="#2A3A38" stroke="#1A2A28" strokeWidth="2"/>
                    {/* Right face */}
                    <path d="M400 340 L480 260 L480 300 L400 380 Z" fill="#1A2A28" stroke="#0A1A18" strokeWidth="2"/>
                    {/* Front face */}
                    <path d="M100 340 L400 340 L400 380 L100 380 Z" fill="#222A28" stroke="#1A2A28" strokeWidth="2"/>
                  </motion.g>

                  {/* Layer 3 - Core Layer */}
                  <motion.g
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    {/* Top face */}
                    <path d="M100 250 L400 250 L480 170 L180 170 Z" fill="#5B6A68" stroke="#4B5A58" strokeWidth="2"/>
                    {/* Right face */}
                    <path d="M400 250 L480 170 L480 210 L400 290 Z" fill="#4B5A58" stroke="#3B4A48" strokeWidth="2"/>
                    {/* Front face */}
                    <path d="M100 250 L400 250 L400 290 L100 290 Z" fill="#555A58" stroke="#4B5A58" strokeWidth="2"/>
                  </motion.g>

                  {/* Layer 2 - Surface Layer */}
                  <motion.g
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    {/* Top face */}
                    <path d="M100 160 L400 160 L480 80 L180 80 Z" fill="#7A8A78" stroke="#6A7A68" strokeWidth="2"/>
                    {/* Right face */}
                    <path d="M400 160 L480 80 L480 120 L400 200 Z" fill="#6A7A68" stroke="#5A6A58" strokeWidth="2"/>
                    {/* Front face */}
                    <path d="M100 160 L400 160 L400 200 L100 200 Z" fill="#707A68" stroke="#6A7A68" strokeWidth="2"/>
                  </motion.g>

                  {/* Layer 1 - Top Layer */}
                  <motion.g
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {/* Top face */}
                    <path d="M100 70 L400 70 L480 -10 L180 -10 Z" fill="#B8C5B0" stroke="#A8B5A0" strokeWidth="2"/>
                    {/* Right face */}
                    <path d="M400 70 L480 -10 L480 30 L400 110 Z" fill="#A8B5A0" stroke="#98A590" strokeWidth="2"/>
                    {/* Front face */}
                    <path d="M100 70 L400 70 L400 110 L100 110 Z" fill="#B0B5A0" stroke="#A8B5A0" strokeWidth="2"/>
                  </motion.g>
                </svg>
              </div>
            </motion.div>

            {/* Layer Descriptions - Matching your exact format */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {[
                {
                  title: "Top Layer",
                  desc: "Thousand-ton press finish",
                  delay: 0.2
                },
                {
                  title: "Surface Layer", 
                  desc: "Melamine-urea-formaldehyde decorative film",
                  delay: 0.4
                },
                {
                  title: "Core Layer",
                  desc: "FRP/Carbon fiber-reinforced polymer",
                  delay: 0.6
                },
                {
                  title: "Bottom Layer",
                  desc: "Moisture resistant balance layer",
                  delay: 0.8
                }
              ].map((layer, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: layer.delay }}
                  className="flex items-start gap-4 group cursor-pointer"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-all duration-300" style={{backgroundColor: '#005d28'}}>
                    <span className="text-white font-bold text-lg">{idx + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300">
                      {layer.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {layer.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Projects Section */}
      <section id="projects" className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 lg:px-20">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-4xl font-bold text-center mb-12"
          >
            Our <span style={{ color: "#005d28" }}>Projects</span>
          </motion.h2>

          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {Array(4)
              .fill(null)
              .map((_, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="snap-center flex-shrink-0 w-[75%] md:w-[50%] lg:w-[35%] bg-white rounded-xl shadow hover:shadow-lg transition flex items-center justify-center h-64"
                >
                  <span className="text-gray-500 text-lg font-semibold">
                    Coming Soon
                  </span>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="container mx-auto px-6 lg:px-20 py-28 grid md:grid-cols-2 gap-16 items-start"
      >
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-8">
            Ready to Transform Your Home?
          </h2>
          <p className="text-gray-600 mb-8">
            Get in touch for a consultation and quote.
          </p>
          <p className="flex items-center space-x-3 mb-4">
            <Phone style={{ color: "#005d28" }} className="w-5 h-5" />
            <span>+65 86442667</span>
          </p>
          <p className="flex items-center space-x-3">
            <Mail style={{ color: "#005d28" }} className="w-5 h-5" />
            <span>zerodoor.sg@gmail.com</span>
          </p>
        </motion.div>

        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-10 rounded-xl shadow-lg space-y-6"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Name"
            className="p-3 border rounded-lg w-full"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            className="p-3 border rounded-lg w-full"
            required
          />
          <input
            type="tel"
            name="user_phone"
            placeholder="Phone"
            className="p-3 border rounded-lg w-full"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={4}
            className="p-3 border rounded-lg w-full"
            required
          />
          <button
            type="submit"
            className="w-full py-3 text-white font-semibold rounded-lg transition"
            style={{ backgroundColor: "#005d28" }}
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
