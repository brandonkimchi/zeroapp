import React from "react"
import { motion } from "framer-motion"
import { CheckCircle, Phone, Mail } from "lucide-react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import doorImage from "../assets/images/door.jpg"

export default function HomePage() {
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
              Get a Free Quote
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
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-10 rounded-xl shadow-lg space-y-6"
        >
          <input
            type="text"
            placeholder="Name"
            className="p-3 border rounded-lg w-full"
          />
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
          <textarea
            placeholder="Message"
            rows={4}
            className="p-3 border rounded-lg w-full"
          />
          <button
            type="submit"
            className="w-full py-3 text-white font-semibold rounded-lg transition"
            style={{ backgroundColor: "#005d28" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#004520")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#005d28")
            }
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
