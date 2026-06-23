import { motion } from 'framer-motion';
import { GiMountainCave } from 'react-icons/gi';

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-zinc-950"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {/* Animated Mountain Icon */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 10 }}
        animate={{ 
          scale: [0.95, 1.05, 0.95], 
          opacity: 1,
          y: 0 
        }}
        transition={{ 
          scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          opacity: { duration: 0.8 },
          y: { duration: 0.8 }
        }}
        className="text-white text-7xl md:text-8xl mb-4 drop-shadow-[0_0_15px_rgba(226,182,89,0.1)]"
      >
        <GiMountainCave />
      </motion.div>
      
      {/* Brand Title With Letter-Spacing Tracking Reveal */}
      <motion.h1 
        className="text-2xl font-black tracking-[0.2em] text-zinc-100 uppercase"
        initial={{ opacity: 0, letterSpacing: "0.1em" }}
        animate={{ opacity: 1, letterSpacing: "0.3em" }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        HIMAVAN
      </motion.h1>

      <motion.p
        className="text-[10px] text-zinc-500 uppercase tracking-[0.4em] mt-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Alpine Expeditions
      </motion.p>
      
      {/* Custom Progress Bar Indicator */}
      <div className="w-36 h-[1.5px] bg-zinc-900 mt-6 rounded-full overflow-hidden border border-zinc-800/30">
        <motion.div 
          className="h-full bg-himavan-gold"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
}
