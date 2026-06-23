import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiCalendar, FiUsers, FiMapPin, FiMail, FiUser } from 'react-icons/fi';

export default function BookingModal({ isOpen, onClose }) {
  // Prevent scrolling on the body when modal is open
  if (isOpen) {
    if (typeof window !== 'undefined') document.body.style.overflow = 'hidden';
  } else {
    if (typeof window !== 'undefined') document.body.style.overflow = 'unset';
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-3 py-4 md:px-4 md:py-8">
          {/* Dark Blurred Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm cursor-pointer"
          />

          {/* Modal Content Box */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0.1 }}
            className="relative w-full max-w-2xl max-h-[85vh] md:max-h-[90vh] overflow-y-auto bg-zinc-900 border border-zinc-800 rounded-sm shadow-2xl shadow-black/50 z-10 custom-scrollbar"
          >
            {/* Close Button - Slightly smaller on mobile */}
            <button 
              onClick={onClose}
              className="absolute top-3 right-3 text-zinc-500 hover:text-white bg-zinc-800/50 hover:bg-zinc-800 p-1.5 md:p-2 rounded-sm transition-colors duration-200 z-20"
            >
              <FiX className="text-lg md:text-xl" />
            </button>

            {/* Adjusted responsive content padding: p-5 on mobile, p-10 on desktop */}
            <div className="p-5 md:p-10">
              <div className="mb-6 md:mb-8 pr-6">
                <h3 className="text-himavan-gold font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs mb-1">
                  Secure Your Spot
                </h3>
                {/* Responsive Heading Typography */}
                <h2 className="text-xl md:text-3xl font-black text-white uppercase tracking-tight">
                  Application Dispatch
                </h2>
                <p className="text-zinc-400 text-xs md:text-sm mt-1.5 leading-relaxed">
                  Submit your details below. Our basecamp team will review your experience level and contact you within 24 hours.
                </p>
              </div>

              {/* Tighter spacing grid layouts */}
              <form className="space-y-4 md:space-y-6" onSubmit={(e) => e.preventDefault()}>
                
                {/* Responsive Form Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-1.5">
                    <label className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-zinc-500 flex items-center gap-2">
                      <FiUser className="text-himavan-gold" /> Full Name
                    </label>
                    <input 
                      type="text" 
                      placeholder="Jane Doe"
                      className="w-full bg-zinc-950 border border-zinc-800 focus:border-himavan-gold focus:ring-1 focus:ring-himavan-gold/50 text-zinc-200 px-3 py-2.5 md:px-4 md:py-3 text-sm rounded-sm outline-none transition-all placeholder:text-zinc-700"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-zinc-500 flex items-center gap-2">
                      <FiMail className="text-himavan-gold" /> Email Address
                    </label>
                    <input 
                      type="email" 
                      placeholder="jane@example.com"
                      className="w-full bg-zinc-950 border border-zinc-800 focus:border-himavan-gold focus:ring-1 focus:ring-himavan-gold/50 text-zinc-200 px-3 py-2.5 md:px-4 md:py-3 text-sm rounded-sm outline-none transition-all placeholder:text-zinc-700"
                    />
                  </div>
                </div>

                {/* Route Selection Dropdown */}
                <div className="space-y-1.5">
                  <label className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-zinc-500 flex items-center gap-2">
                    <FiMapPin className="text-himavan-gold" /> Select Expedition
                  </label>
                  <div className="relative">
                    <select className="w-full appearance-none bg-zinc-950 border border-zinc-800 focus:border-himavan-gold focus:ring-1 focus:ring-himavan-gold/50 text-zinc-200 px-3 py-2.5 md:px-4 md:py-3 text-sm rounded-sm outline-none transition-all cursor-pointer">
                      <option value="" disabled selected className="text-zinc-700">Choose your route...</option>
                      <optgroup label="Iconic Treks" className="bg-zinc-900 text-zinc-400 font-bold text-xs">
                        <option value="roopkund" className="text-zinc-200 font-normal text-sm">Roopkund Trek</option>
                        <option value="goechala" className="text-zinc-200 font-normal text-sm">Goechala Trek</option>
                        <option value="kashmir" className="text-zinc-200 font-normal text-sm">Kashmir Great Lakes</option>
                      </optgroup>
                      <optgroup label="Extreme Passes" className="bg-zinc-900 text-zinc-400 font-bold text-xs">
                        <option value="kalindi" className="text-zinc-200 font-normal text-sm">Kalindi Khal Expedition</option>
                        <option value="audens" className="text-zinc-200 font-normal text-sm">Auden's Col</option>
                      </optgroup>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500 text-[10px]">
                      ▼
                    </div>
                  </div>
                </div>

                {/* Dates & Group Size Input Split */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-1.5">
                    <label className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-zinc-500 flex items-center gap-2">
                      <FiCalendar className="text-himavan-gold" /> Preferred Month
                    </label>
                    <input 
                      type="month" 
                      className="w-full bg-zinc-950 border border-zinc-800 focus:border-himavan-gold focus:ring-1 focus:ring-himavan-gold/50 text-zinc-200 px-3 py-2.5 md:px-4 md:py-3 text-sm rounded-sm outline-none transition-all [&::-webkit-calendar-picker-indicator]:invert"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-zinc-500 flex items-center gap-2">
                      <FiUsers className="text-himavan-gold" /> Group Size
                    </label>
                    <input 
                      type="number" 
                      min="1"
                      max="15"
                      placeholder="1"
                      className="w-full bg-zinc-950 border border-zinc-800 focus:border-himavan-gold focus:ring-1 focus:ring-himavan-gold/50 text-zinc-200 px-3 py-2.5 md:px-4 md:py-3 text-sm rounded-sm outline-none transition-all placeholder:text-zinc-700"
                    />
                  </div>
                </div>

                {/* Experience Assessment Textarea */}
                <div className="space-y-1.5">
                  <label className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-zinc-500 flex items-center gap-2">
                    Experience & Medical Notes
                  </label>
                  <textarea 
                    rows="3"
                    placeholder="Briefly describe your previous high-altitude experience..."
                    className="w-full bg-zinc-950 border border-zinc-800 focus:border-himavan-gold focus:ring-1 focus:ring-himavan-gold/50 text-zinc-200 px-3 py-2.5 md:px-4 md:py-3 text-sm rounded-sm outline-none transition-all resize-none placeholder:text-zinc-700"
                  ></textarea>
                </div>

                {/* Compact Custom Styled Submit Button */}
                <button 
                  type="submit"
                  className="w-full bg-himavan-gold text-zinc-950 py-3.5 md:py-4 mt-2 rounded-sm font-black tracking-widest text-xs md:text-sm uppercase bg-yellow-400 transition-all shadow-[0_4px_14px_0_rgba(226,182,89,0.2)] cursor-pointer"
                >
                  Submit Application
                </button>
                
                <p className="text-center text-[10px] text-zinc-600 mt-2">
                  By submitting, you agree to our extreme altitude liability waiver.
                </p>

              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}