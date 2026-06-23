import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GiMountainCave } from 'react-icons/gi';
import { HiMenu, HiX } from 'react-icons/hi';
import BookingModal from './BookingModal'; // 1. Imported the new modal

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // 2. Modal open/close state logic

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuVariants = {
    hidden: { opacity: 0, y: -15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.25, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      y: -15,
      transition: { duration: 0.2, ease: "easeIn" }
    }
  };

  // Helper function to handle mobile form triggers smoothly
  const handleMobileBookingClick = () => {
    setIsOpen(false);       // Close the mobile navigation slide-out drawer
    setIsModalOpen(true);   // Launch the application modal dispatch box
  };

  return (
    <>
      {/* THE WRAPPER: 
        Starts transparent (gradient fading down), but blurs into a dark glass panel when you scroll down.
      */}
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 md:px-8 py-5 flex justify-between items-center ${
          isScrolled 
            ? 'bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/80 shadow-lg' 
            : 'bg-gradient-to-b from-zinc-950/90 via-zinc-950/40 to-transparent'
        }`}
      >
        {/* Brand Logo */}
        <div className="flex items-center gap-3 text-xl md:text-2xl font-black tracking-[0.15em] text-white">
          <GiMountainCave className="text-himavan-gold text-2xl md:text-3xl" />
          <span>HIMAVAN</span>
        </div>
        
        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wider text-zinc-300">
          <a href="#home" className="hover:text-white transition-colors duration-200 drop-shadow-md">HOME</a>
          <a href="#treks" className="hover:text-white transition-colors duration-200 drop-shadow-md">EXPEDITIONS</a>
          <a href="#passes" className="hover:text-white transition-colors duration-200 drop-shadow-md">HIGH PASSES</a>
          
          {/* THE BUTTON: Desktop form triggers attached to onClick layer here */}
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-himavan-gold text-zinc-950 px-6 py-2.5 rounded-xs font-bold tracking-wide bg-yellow-400 transition-all shadow-[0_4px_14px_0_rgba(226,182,89,0.39)] hover:shadow-[0_6px_20px_rgba(226,182,89,0.23)] hover:-translate-y-0.5 cursor-pointer block"
          >
            BOOK AN ESCAPE
          </button>
        </div>

        {/* Hamburger Trigger Menu Icon (Mobile Only) */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-white text-3xl focus:outline-hidden cursor-pointer drop-shadow-md"
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX className="text-himavan-gold" /> : <HiMenu />}
        </button>
      </nav>

      {/* Mobile Drawer Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-x-0 top-0 pt-28 pb-10 px-6 z-40 flex flex-col gap-6 md:hidden shadow-2xl bg-zinc-950/98 backdrop-blur-xl border-b border-zinc-900"
          >
            <div className="flex flex-col gap-4 text-base font-bold tracking-widest text-zinc-300">
              <a 
                href="#home" 
                onClick={() => setIsOpen(false)} 
                className="hover:text-himavan-gold py-2.5 border-b border-zinc-900/50 transition-colors"
              >
                HOME
              </a>
              <a 
                href="#treks" 
                onClick={() => setIsOpen(false)} 
                className="hover:text-himavan-gold py-2.5 border-b border-zinc-900/50 transition-colors"
              >
                EXPEDITIONS
              </a>
              <a 
                href="#passes" 
                onClick={() => setIsOpen(false)} 
                className="hover:text-himavan-gold py-2.5 border-b border-zinc-900/50 transition-colors"
              >
                HIGH PASSES
              </a>
            </div>

            {/* Mobile Escape Button - Calls handleMobileBookingClick variant */}
            <button 
              onClick={handleMobileBookingClick}
              className="w-full bg-himavan-gold text-zinc-950 py-3.5 mt-2 rounded-xs font-bold tracking-wide bg-yellow-400 transition-all text-center cursor-pointer shadow-lg shadow-yellow-500/10"
            >
              BOOK AN ESCAPE
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. The Modal component layer injected at the base of the layout trees */}
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}