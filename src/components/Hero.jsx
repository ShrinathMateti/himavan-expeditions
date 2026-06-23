import { motion } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Immersive backdrop */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: `linear-gradient(to bottom, rgba(5, 11, 20, 0.1), rgba(5, 11, 20, 1)), url('https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1920&q=80')` 
        }}
      />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.p 
          className="text-himavan-gold text-xs md:text-sm tracking-[0.4em] uppercase font-semibold mb-4"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          The Realm of the Mountain Gods
        </motion.p>
        
        <motion.h2 
          className="text-5xl md:text-8xl font-black tracking-tight text-white mb-6 uppercase"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Walk With Kings
        </motion.h2>

        <motion.p 
          className="text-base md:text-xl text-zinc-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Himavan curates ultra-premium alpine expeditions across uncharted Indian ridges. True high-altitude trekking, guided by legends.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <a 
            href="#treks" 
            className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold px-8 py-3 rounded-sm hover:bg-white hover:text-zinc-950 transition-all duration-300"
          >
            Explore Trails
          </a>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-himavan-gold text-2xl"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
      >
        <FiChevronDown />
      </motion.div>
    </section>
  );
}