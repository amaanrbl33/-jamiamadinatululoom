/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  BookOpen, 
  Heart, 
  Users, 
  ChevronRight,
  Instagram,
  Facebook,
  Twitter,
  Moon
} from 'lucide-react';
import { SCHOOL_NAME, CONTACT_INFO, IMAGES } from './constants';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <AnimatePresence>
                {scrolled && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex items-center"
                  >
                    <span className="text-lg md:text-xl font-serif font-bold text-islamic-green">
                      {SCHOOL_NAME}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-islamic-gold ${scrolled ? 'text-gray-700' : 'text-white'}`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile Nav Toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`${scrolled ? 'text-gray-700' : 'text-white'}`}
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden bg-white shadow-xl absolute top-full left-0 w-full py-4 px-4"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 text-lg font-medium text-gray-800 border-b border-gray-100 last:border-0"
                >
                  {link.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#002e00]">
        {/* Atmospheric Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-islamic-green/40"></div>
          <div className="islamic-pattern absolute inset-0 opacity-10"></div>
          
          {/* Decorative Radial Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-islamic-gold/5 rounded-full blur-[120px]"></div>
          
          {/* Stars */}
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-40 animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`
              }}
            ></div>
          ))}
        </div>
        
        {/* Crescent Moon */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
          animate={{ opacity: 0.8, scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-20 right-10 md:top-32 md:right-32 z-10 text-islamic-gold"
        >
          <Moon size={80} fill="currentColor" strokeWidth={0.5} className="drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]" />
        </motion.div>

        {/* Minarets Silhouette */}
        <div className="absolute bottom-0 left-0 w-full z-0 pointer-events-none opacity-30">
          <svg viewBox="0 0 1440 400" className="w-full h-auto translate-y-8" preserveAspectRatio="none">
            <defs>
              <linearGradient id="minaret-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
              </linearGradient>
            </defs>
            {/* Mosque Silhouette */}
            <path 
              fill="url(#minaret-grad)" 
              d="M0,400 L0,300 L100,300 L100,100 L120,100 L120,300 L200,300 L200,250 Q300,50 400,250 L400,300 L500,300 L500,50 L520,50 L520,300 L600,300 L600,200 Q720,0 840,200 L840,300 L920,300 L920,50 L940,50 L940,300 L1040,300 L1040,250 Q1140,50 1240,250 L1240,300 L1340,300 L1340,100 L1360,100 L1360,300 L1440,300 L1440,400 Z"
            />
          </svg>
        </div>
        
        <div className="relative z-10 text-center px-4 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <span className="text-islamic-gold font-bold tracking-[0.3em] uppercase text-sm mb-6 block">Established 1998</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-8 leading-[1.1] tracking-tight text-center px-4">
              {SCHOOL_NAME}
            </h1>
            <div className="h-1 w-24 bg-islamic-gold mb-8"></div>
            <p className="text-lg md:text-2xl text-islamic-cream/90 mb-12 max-w-3xl mx-auto font-light italic text-center">
              "Nurturing Faith, Inspiring Excellence"
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="#contact"
                className="px-10 py-5 bg-islamic-gold text-islamic-green rounded-full font-bold hover:bg-white transition-all shadow-2xl transform hover:scale-105"
              >
                Enroll Now
              </a>
              <a
                href="#about"
                className="px-10 py-5 bg-white/10 backdrop-blur-md text-white border border-white/30 rounded-full font-semibold hover:bg-white/20 transition-all"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-islamic-gold">
          <ChevronRight size={32} className="rotate-90" />
        </div>
      </section>

      {/* Features/Stats */}
      <section className="py-16 bg-islamic-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
                <BookOpen size={32} className="text-islamic-gold" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quranic Studies</h3>
              <p className="text-gray-300">Deep understanding of the Holy Quran and its teachings.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
                <Users size={32} className="text-islamic-gold" />
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Faculty</h3>
              <p className="text-gray-300">Dedicated scholars and teachers committed to student growth.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
                <Heart size={32} className="text-islamic-gold" />
              </div>
              <h3 className="text-xl font-bold mb-2">Character Building</h3>
              <p className="text-gray-300">Focusing on Akhlaq and spiritual development of every child.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white relative overflow-hidden">
        <div className="islamic-pattern absolute inset-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-islamic-green font-bold tracking-widest uppercase text-sm mb-4 block">Overview</span>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">Jamia Madinatul Uloom</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Jamia Madinatul Uloom is an Islamic educational institution dedicated to foundational religious studies and the memorization of the Holy Quran. Nestled in a serene, rural landscape surrounded by lush agricultural fields, the campus provides a peaceful and distraction-free environment that is highly conducive to deep spiritual and academic focus.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-islamic-green/10 rounded-xl flex items-center justify-center">
                  <BookOpen className="text-islamic-green" />
                </div>
                <h3 className="text-2xl font-serif text-gray-900">Educational Curriculum</h3>
              </div>
              <div className="space-y-6">
                <div className="bg-islamic-cream/20 p-6 rounded-2xl border-l-4 border-islamic-gold">
                  <h4 className="font-bold text-gray-900 mb-2">Quran Nazra</h4>
                  <p className="text-gray-600">Students are taught the accurate and fluent reading of the Holy Quran with proper Tajweed (rules of pronunciation).</p>
                </div>
                <div className="bg-islamic-cream/20 p-6 rounded-2xl border-l-4 border-islamic-gold">
                  <h4 className="font-bold text-gray-900 mb-2">Hifz-ul-Quran</h4>
                  <p className="text-gray-600">A dedicated program for students committing the entire Quran to memory. The tranquil surroundings provide the quietude necessary for the rigorous repetition and concentration required for Hifz.</p>
                </div>
                <div className="bg-islamic-cream/20 p-6 rounded-2xl border-l-4 border-islamic-gold">
                  <h4 className="font-bold text-gray-900 mb-2">Arabic Language</h4>
                  <p className="text-gray-600">The school teaches the Arabic language, equipping students with the foundational skills needed to understand the Quran, Hadith, and classical Islamic literature.</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src={IMAGES[4].url}
                alt="About Our School"
                className="rounded-2xl shadow-2xl w-full h-full object-cover min-h-[400px]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-islamic-gold rounded-2xl -z-10"></div>
            </div>
          </div>

          <div className="space-y-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-islamic-green/10 rounded-xl flex items-center justify-center">
                <MapPin className="text-islamic-green" />
              </div>
              <h3 className="text-2xl font-serif text-gray-900">Campus and Facilities</h3>
            </div>
            
            <p className="text-lg text-gray-600 mb-8">
              Based on the visual layout of the campus, Jamia Madinatul Uloom features functional, modest architecture tailored to the daily needs of its students and staff:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Residential Hostel",
                  desc: "The institution functions as a boarding school, offering hostel facilities for its students. The long rows of rooms visible on the campus likely serve as dormitories and living quarters, fostering a close-knit community of learners."
                },
                {
                  title: "Wudu (Ablution) Area",
                  desc: "A prominently featured, purpose-built ablution area with multiple taps runs alongside the main building. This ensures students can comfortably perform wudu before daily prayers and Quranic recitation."
                },
                {
                  title: "Traditional Architecture",
                  desc: "The main buildings feature classic arched verandas and whitewashed walls, keeping the interiors relatively cool. Exposed rebar on the roof indicates potential plans for future expansion."
                },
                {
                  title: "Open Courtyard",
                  desc: "A vast, open dirt courtyard connects the various buildings. This space allows for fresh air, outdoor gatherings, and recreation for the students during their breaks."
                },
                {
                  title: "Essential Utilities",
                  desc: "Overhead water tanks are strategically placed to ensure a consistent water supply for the living quarters and the ablution areas."
                }
              ].map((facility, idx) => (
                <div key={idx} className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-islamic-green mb-3">{facility.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{facility.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 p-8 bg-islamic-green text-white rounded-3xl text-center">
              <p className="text-xl font-serif italic">
                "In summary, Jamia Madinatul Uloom stands as a dedicated center for Islamic learning, combining a comprehensive Quranic and Arabic curriculum with the essential boarding facilities needed to nurture a disciplined and focused student body."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-islamic-cream/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <span className="text-islamic-green font-bold tracking-widest uppercase text-sm mb-4 block">Our Campus</span>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900">Gallery</h2>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {IMAGES.map((image, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg bg-white"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.caption}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-4">
                  <p className="text-gray-800 font-medium">{image.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-islamic-green rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 lg:p-20 text-white">
              <h2 className="text-4xl font-serif mb-8">Get in Touch</h2>
              <p className="text-islamic-cream/80 mb-12 text-lg">
                Have questions about admissions or our programs? We're here to help. Reach out to us through any of these channels.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="text-islamic-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-islamic-cream/60 uppercase tracking-wider mb-1">Call Us</p>
                    <p className="text-xl font-medium">{CONTACT_INFO.phone1}</p>
                    <p className="text-xl font-medium">{CONTACT_INFO.phone2}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="text-islamic-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-islamic-cream/60 uppercase tracking-wider mb-1">Email Us</p>
                    <p className="text-xl font-medium break-all">{CONTACT_INFO.email}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="text-islamic-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-islamic-cream/60 uppercase tracking-wider mb-1">Visit Us</p>
                    <p className="text-xl font-medium">{CONTACT_INFO.address}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 bg-white p-12 lg:p-20">
              {formSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center space-y-6"
                >
                  <div className="w-20 h-20 bg-islamic-green/10 rounded-full flex items-center justify-center text-islamic-green">
                    <Heart size={40} fill="currentColor" />
                  </div>
                  <h3 className="text-2xl font-serif text-gray-900">JazakAllah Khair!</h3>
                  <p className="text-gray-600">Thank you for reaching out. We have received your message and will get back to you soon.</p>
                  <button 
                    onClick={() => setFormSubmitted(false)}
                    className="text-islamic-green font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form 
                  className="space-y-6"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setFormSubmitted(true);
                  }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <input
                        required
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-islamic-green focus:border-transparent outline-none transition-all"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <input
                        required
                        type="email"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-islamic-green focus:border-transparent outline-none transition-all"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                    <input
                      required
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-islamic-green focus:border-transparent outline-none transition-all"
                      placeholder="Admissions Inquiry"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-islamic-green focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full py-4 bg-islamic-green text-white rounded-xl font-bold hover:bg-islamic-green/90 transition-all shadow-lg"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <h2 className="text-2xl font-serif font-bold text-islamic-gold mb-6">{SCHOOL_NAME}</h2>
              <p className="text-gray-400 max-w-md mb-8">
                Dedicated to providing a high standard of education while fostering a deep connection to Islamic values and traditions.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-islamic-gold transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-islamic-gold transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-islamic-gold transition-colors">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-islamic-gold transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-islamic-gold transition-colors">About Us</a></li>
                <li><a href="#gallery" className="hover:text-islamic-gold transition-colors">Gallery</a></li>
                <li><a href="#contact" className="hover:text-islamic-gold transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6">Contact Info</h4>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-islamic-gold" />
                  <span>{CONTACT_INFO.phone1}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={16} className="text-islamic-gold" />
                  <span className="break-all">{CONTACT_INFO.email}</span>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin size={16} className="text-islamic-gold" />
                  <span>{CONTACT_INFO.address}</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/10 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} {SCHOOL_NAME}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
