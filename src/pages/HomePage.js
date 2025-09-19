"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HomePage;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var lucide_react_1 = require("lucide-react");
var emailjs_com_1 = __importDefault(require("emailjs-com"));
var Header_1 = __importDefault(require("../components/Header"));
var Footer_1 = __importDefault(require("../components/Footer"));
var door_jpg_1 = __importDefault(require("../assets/images/door.jpg"));
function HomePage() {
    var formRef = (0, react_1.useRef)(null);
    var sendEmail = function (e) {
        e.preventDefault();
        if (!formRef.current)
            return;
        emailjs_com_1.default
            .sendForm("your_service_id", // replace with EmailJS Service ID
        "your_template_id", // replace with EmailJS Template ID
        formRef.current, "your_public_key" // replace with EmailJS Public Key
        )
            .then(function () {
            var _a;
            alert("✅ Message sent successfully!");
            (_a = formRef.current) === null || _a === void 0 ? void 0 : _a.reset();
        }, function (error) {
            alert("❌ Failed to send message. Try again later.");
            console.error(error);
        });
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col bg-white text-gray-900 font-sans", children: [(0, jsx_runtime_1.jsx)(Header_1.default, {}), (0, jsx_runtime_1.jsx)("section", { id: "home", children: (0, jsx_runtime_1.jsxs)("div", { className: "container mx-auto px-6 lg:px-20 pt-40 pb-32 grid md:grid-cols-2 gap-16 items-center", children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("h1", { className: "text-4xl lg:text-6xl font-extrabold leading-tight mb-8", children: ["Sustainable Door Solutions for Your", " ", (0, jsx_runtime_1.jsx)("span", { style: { color: "#005d28" }, children: "Future" })] }), (0, jsx_runtime_1.jsx)("p", { className: "text-lg lg:text-xl text-gray-600 mb-10 max-w-xl", children: "Premium eco-friendly doors that combine exceptional durability, energy efficiency, and environmental responsibility for modern homes." }), (0, jsx_runtime_1.jsx)("a", { href: "#contact", className: "px-8 py-4 text-white font-semibold rounded-lg shadow transition", style: { backgroundColor: "#005d28" }, onMouseEnter: function (e) {
                                        return (e.currentTarget.style.backgroundColor = "#004520");
                                    }, onMouseLeave: function (e) {
                                        return (e.currentTarget.style.backgroundColor = "#005d28");
                                    }, children: "Get a Quote" })] }), (0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { initial: { opacity: 0, x: 50 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.8 }, className: "flex justify-center", children: (0, jsx_runtime_1.jsx)("img", { src: door_jpg_1.default, alt: "Modern Door", className: "rounded-2xl shadow-lg w-full max-w-lg" }) })] }) }), (0, jsx_runtime_1.jsx)("section", { className: "bg-gray-50 py-28", children: (0, jsx_runtime_1.jsxs)("div", { className: "container mx-auto px-6 lg:px-20", children: [(0, jsx_runtime_1.jsxs)(framer_motion_1.motion.h2, { initial: { opacity: 0 }, whileInView: { opacity: 1 }, transition: { duration: 0.6 }, className: "text-3xl lg:text-4xl font-bold text-center mb-20", children: ["Key ", (0, jsx_runtime_1.jsx)("span", { style: { color: "#005d28" }, children: "Features" }), " of Our Doors"] }), (0, jsx_runtime_1.jsx)("div", { className: "grid lg:grid-cols-4 md:grid-cols-2 gap-8", children: [
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
                            ].map(function (feature, idx) { return ((0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.7, delay: idx * 0.1 }, className: "group bg-white p-8 rounded-lg shadow-sm hover:shadow-lg border border-gray-200 transition-all duration-500 cursor-pointer relative overflow-hidden", children: [(0, jsx_runtime_1.jsx)("div", { className: "w-14 h-14 rounded-lg flex items-center justify-center group-hover:scale-105 transition-all duration-300 mb-6", style: { backgroundColor: "#005d28" }, children: (0, jsx_runtime_1.jsx)(lucide_react_1.CheckCircle, { className: "w-7 h-7 text-white" }) }), (0, jsx_runtime_1.jsx)("h3", { className: "text-lg font-semibold text-gray-900 mb-4 leading-tight", children: feature.title }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-600 text-sm leading-relaxed", children: feature.desc })] }, idx)); }) })] }) }), (0, jsx_runtime_1.jsx)("section", { className: "py-28 bg-white", children: (0, jsx_runtime_1.jsxs)("div", { className: "container mx-auto px-6 lg:px-20", children: [(0, jsx_runtime_1.jsxs)(framer_motion_1.motion.h2, { initial: { opacity: 0 }, whileInView: { opacity: 1 }, transition: { duration: 0.6 }, className: "text-3xl lg:text-4xl font-bold text-center mb-20", children: ["Advanced ", (0, jsx_runtime_1.jsx)("span", { style: { color: '#005d28' }, children: "Multi-Layer Construction" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "grid lg:grid-cols-2 gap-16 items-center", children: [(0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { initial: { opacity: 0, x: -50 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.8 }, className: "relative", children: (0, jsx_runtime_1.jsx)("div", { className: "w-full max-w-lg mx-auto", children: (0, jsx_runtime_1.jsxs)("svg", { viewBox: "0 0 600 450", className: "w-full h-auto", children: [(0, jsx_runtime_1.jsxs)(framer_motion_1.motion.g, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.8 }, children: [(0, jsx_runtime_1.jsx)("path", { d: "M100 340 L400 340 L480 260 L180 260 Z", fill: "#2A3A38", stroke: "#1A2A28", strokeWidth: "2" }), (0, jsx_runtime_1.jsx)("path", { d: "M400 340 L480 260 L480 300 L400 380 Z", fill: "#1A2A28", stroke: "#0A1A18", strokeWidth: "2" }), (0, jsx_runtime_1.jsx)("path", { d: "M100 340 L400 340 L400 380 L100 380 Z", fill: "#222A28", stroke: "#1A2A28", strokeWidth: "2" })] }), (0, jsx_runtime_1.jsxs)(framer_motion_1.motion.g, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.6 }, children: [(0, jsx_runtime_1.jsx)("path", { d: "M100 250 L400 250 L480 170 L180 170 Z", fill: "#5B6A68", stroke: "#4B5A58", strokeWidth: "2" }), (0, jsx_runtime_1.jsx)("path", { d: "M400 250 L480 170 L480 210 L400 290 Z", fill: "#4B5A58", stroke: "#3B4A48", strokeWidth: "2" }), (0, jsx_runtime_1.jsx)("path", { d: "M100 250 L400 250 L400 290 L100 290 Z", fill: "#555A58", stroke: "#4B5A58", strokeWidth: "2" })] }), (0, jsx_runtime_1.jsxs)(framer_motion_1.motion.g, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.4 }, children: [(0, jsx_runtime_1.jsx)("path", { d: "M100 160 L400 160 L480 80 L180 80 Z", fill: "#7A8A78", stroke: "#6A7A68", strokeWidth: "2" }), (0, jsx_runtime_1.jsx)("path", { d: "M400 160 L480 80 L480 120 L400 200 Z", fill: "#6A7A68", stroke: "#5A6A58", strokeWidth: "2" }), (0, jsx_runtime_1.jsx)("path", { d: "M100 160 L400 160 L400 200 L100 200 Z", fill: "#707A68", stroke: "#6A7A68", strokeWidth: "2" })] }), (0, jsx_runtime_1.jsxs)(framer_motion_1.motion.g, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.2 }, children: [(0, jsx_runtime_1.jsx)("path", { d: "M100 70 L400 70 L480 -10 L180 -10 Z", fill: "#B8C5B0", stroke: "#A8B5A0", strokeWidth: "2" }), (0, jsx_runtime_1.jsx)("path", { d: "M400 70 L480 -10 L480 30 L400 110 Z", fill: "#A8B5A0", stroke: "#98A590", strokeWidth: "2" }), (0, jsx_runtime_1.jsx)("path", { d: "M100 70 L400 70 L400 110 L100 110 Z", fill: "#B0B5A0", stroke: "#A8B5A0", strokeWidth: "2" })] })] }) }) }), (0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { initial: { opacity: 0, x: 50 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.8 }, className: "space-y-8", children: [
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
                                    ].map(function (layer, idx) { return ((0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { initial: { opacity: 0, x: 30 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.6, delay: layer.delay }, className: "flex items-start gap-4 group cursor-pointer", children: [(0, jsx_runtime_1.jsx)("div", { className: "flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-all duration-300", style: { backgroundColor: '#005d28' }, children: (0, jsx_runtime_1.jsx)("span", { className: "text-white font-bold text-lg", children: idx + 1 }) }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h3", { className: "text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300", children: layer.title }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-600 leading-relaxed", children: layer.desc })] })] }, idx)); }) })] })] }) }), (0, jsx_runtime_1.jsx)("section", { id: "projects", className: "bg-gray-50 py-20", children: (0, jsx_runtime_1.jsxs)("div", { className: "container mx-auto px-6 lg:px-20", children: [(0, jsx_runtime_1.jsxs)(framer_motion_1.motion.h2, { initial: { opacity: 0 }, whileInView: { opacity: 1 }, transition: { duration: 0.6 }, className: "text-3xl lg:text-4xl font-bold text-center mb-12", children: ["Our ", (0, jsx_runtime_1.jsx)("span", { style: { color: "#005d28" }, children: "Projects" })] }), (0, jsx_runtime_1.jsx)("div", { className: "flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide", children: Array(4)
                                .fill(null)
                                .map(function (_, idx) { return ((0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: idx * 0.1 }, className: "snap-center flex-shrink-0 w-[75%] md:w-[50%] lg:w-[35%] bg-white rounded-xl shadow hover:shadow-lg transition flex items-center justify-center h-64", children: (0, jsx_runtime_1.jsx)("span", { className: "text-gray-500 text-lg font-semibold", children: "Coming Soon" }) }, idx)); }) })] }) }), (0, jsx_runtime_1.jsxs)("section", { id: "contact", className: "container mx-auto px-6 lg:px-20 py-28 grid md:grid-cols-2 gap-16 items-start", children: [(0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { initial: { opacity: 0, x: -40 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.8 }, children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-3xl font-bold mb-8", children: "Ready to Transform Your Home?" }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-600 mb-8", children: "Get in touch for a consultation and quote." }), (0, jsx_runtime_1.jsxs)("p", { className: "flex items-center space-x-3 mb-4", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Phone, { style: { color: "#005d28" }, className: "w-5 h-5" }), (0, jsx_runtime_1.jsx)("span", { children: "+65 86442667" })] }), (0, jsx_runtime_1.jsxs)("p", { className: "flex items-center space-x-3", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Mail, { style: { color: "#005d28" }, className: "w-5 h-5" }), (0, jsx_runtime_1.jsx)("span", { children: "zerodoor.sg@gmail.com" })] })] }), (0, jsx_runtime_1.jsxs)(framer_motion_1.motion.form, { ref: formRef, onSubmit: sendEmail, initial: { opacity: 0, x: 40 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.8 }, className: "bg-white p-10 rounded-xl shadow-lg space-y-6", children: [(0, jsx_runtime_1.jsx)("input", { type: "text", name: "user_name", placeholder: "Name", className: "p-3 border rounded-lg w-full", required: true }), (0, jsx_runtime_1.jsx)("input", { type: "email", name: "user_email", placeholder: "Email", className: "p-3 border rounded-lg w-full", required: true }), (0, jsx_runtime_1.jsx)("input", { type: "tel", name: "user_phone", placeholder: "Phone", className: "p-3 border rounded-lg w-full" }), (0, jsx_runtime_1.jsx)("textarea", { name: "message", placeholder: "Message", rows: 4, className: "p-3 border rounded-lg w-full", required: true }), (0, jsx_runtime_1.jsx)("button", { type: "submit", className: "w-full py-3 text-white font-semibold rounded-lg transition", style: { backgroundColor: "#005d28" }, children: "Send Message" })] })] }), (0, jsx_runtime_1.jsx)(Footer_1.default, {})] }));
}
