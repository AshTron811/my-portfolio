/*
File: src/App.js
Description: Main application with routing to individual project pages.
*/
import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import SoilMoisturePage from "./pages/projects/SoilMoisturePage";
import CustomerSegmentationPage from "./pages/projects/CustomerSegmentationPage";
import GenAITrendsPage from "./pages/projects/GenAITrendsPage";
import { HashLink } from 'react-router-hash-link';

const projects = [
  { id: "soil-moisture", title: "Real-time Soil Moisture Prediction", img: "/imgs/proj1.jpg" },
  { id: "customer-segmentation", title: "Customer Segmentation and Prediction", img: "/imgs/proj2.jpg" },
  { id: "genai-trends", title: "Time Series Forecasting and GenAI Trend Analyser", img: "/imgs/proj3.jpg" },
];

function Home() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      {/* Navbar */}
      <nav className="flex items-center justify-between p-6 fixed w-full bg-white z-10">
        <span className="text-xl font-semibold">Ashutosh Sharma</span>
        <ul className="hidden md:flex space-x-8 text-lg">
          <li><HashLink smooth to="/#projects">Projects</HashLink></li>
          <li><HashLink smooth to="/#about">About</HashLink></li>
          <li><HashLink smooth to="/#contact">Contact</HashLink></li>
        </ul>
        <button className="md:hidden focus:outline-none" onClick={() => { /* mobile nav toggle */ }}>
          <svg width="24" height="24" fill="currentColor">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      <div className="h-20" />

      {/* Fullscreen Slider */}
      <section id="slider" className="relative w-full h-screen overflow-hidden cursor-pointer" onClick={() => navigate(`/projects/${projects[current].id}`)}>
        <AnimatePresence>
          {projects.map((proj, idx) => idx === current && (
            <motion.div key={idx} className="absolute top-0 left-0 w-full h-full"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
              <img src={proj.img} alt={proj.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <h2 className="text-white text-4xl md:text-6xl font-bold">{proj.title}</h2>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        {/* Slider Dots Controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={e => {
                e.stopPropagation();
                setCurrent(idx);
              }}
              className={`w-4 h-4 rounded-full ${idx === current ? 'bg-white' : 'bg-gray-400'} focus:outline-none`}
            />
          ))}
        </div>
      </section>

      {/* Hero Section */}
      <section id="hero" className="flex flex-col items-center justify-center text-center py-32">
        <motion.h1 className="text-5xl md:text-7xl font-bold" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          Driving Innovation Forward
        </motion.h1>
        <motion.p className="mt-6 text-lg max-w-xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.6 }}>
          I'm an AI enthusiast & developer showcasing expertise in Software Development, Artificial Intelligence, and Spatial Analytics.
        </motion.p>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-semibold mb-12 text-center">Featured Projects</h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {projects.map(proj => (
              <Link key={proj.id} to={`/projects/${proj.id}`} className="block bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
                <img src={proj.img} alt={proj.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-semibold mb-6 text-center">About Me</h2>
          <p className="max-w-3xl mx-auto text-center leading-relaxed">
            A Tata Imagination Challenge National Semi-finalist with credible certifications like Microsoft Certified: Azure AI Fundamentals and Computer Vision with Embedded Machine Learning, Ashutosh is a highly motivated and detail-oriented individual. His educational and industry experience in Computer Applications, Data Science, AI Algorithms and Spatial Analytics showcases a unique blend of Software Development skills with extensive knowledge in the Artificial Intelligence and Geospatial domain.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-semibold mb-6 text-center">Get In Touch</h2>
          <form className="max-w-xl mx-auto grid grid-cols-1 gap-6">
            <input type="text" name="name" placeholder="Your Name" className="p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400" />
            <input type="email" name="email" placeholder="Your Email" className="p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400" />
            <textarea name="message" placeholder="Message" rows="4" className="p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400" />
            <button type="submit" className="py-4 px-8 bg-gray-900 text-white rounded-2xl font-semibold hover:bg-gray-800 transition">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Ashutosh Sharma. All rights reserved.
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/soil-moisture" element={<SoilMoisturePage />} />
        <Route path="/projects/customer-segmentation" element={<CustomerSegmentationPage />} />
        <Route path="/projects/genai-trends" element={<GenAITrendsPage />} />
      </Routes>
    </Router>
  );
}