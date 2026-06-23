import { motion } from 'framer-motion';
import { FiWind, FiArrowRight } from 'react-icons/fi';

const PASSES_DATA = [
  {
    id: 1,
    name: "Kalindi Khal",
    elevation: "19,521 FT",
    region: "Uttarakhand",
    difficulty: "Expedition Level",
    image: "https://bluemountainscottages.com/wp-content/uploads/2021/03/Kalindi-Khal-Trek.jpg",
    description: "Connecting Gangotri to Badrinath, this is a legendary traverse across heavily crevassed glaciers. Reserved strictly for seasoned mountaineers."
  },
  {
    id: 2,
    name: "Auden's Col",
    elevation: "18,011 FT",
    region: "Garhwal Himalayas",
    difficulty: "Extreme Trek",
    image: "https://dq1q7qkthxkc0.cloudfront.net/UpdatedMedia/de8d9067-0d4c-459f-8b00-a4ede5eeeaf0.webp",
    description: "A highly demanding pass connecting the Rudragaira and Bhilangna valleys. Famous for its terrifying icefalls and razor-sharp ridges."
  },
  {
    id: 3,
    name: "Pin Parvati Pass",
    elevation: "17,457 FT",
    region: "Himachal Pradesh",
    difficulty: "Hard Traverse",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKMxQzk1NmNeikhczUjg-M_95Nzuuz_6p1shsi1XmWcGIFKj9-KZk6iPA&s=10",
    description: "A dramatic crossover from the lush green Parvati valley in Kullu to the stark, barren cold desert of the Pin valley in Spiti."
  },
];

// Added onBookClick to the component props definition destructures
export default function PassesSection({ onBookClick }) {
  return (
    <section id="passes" className="py-28 px-6 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-himavan-gold font-bold uppercase tracking-[0.2em] text-xs mb-3">
              <FiWind className="text-lg" />
              <span>The Death Zone Borderlines</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
              Extreme Altitude Passes
            </h2>
          </div>
          <p className="text-zinc-400 max-w-md text-sm md:text-base leading-relaxed">
            These are not standard trails. These high-altitude crossover passes demand technical gear, glacial navigation, and immense physical endurance.
          </p>
        </div>

        {/* Cinematic List Layout */}
        <div className="flex flex-col gap-8">
          {PASSES_DATA.map((pass, idx) => (
            <motion.div 
              key={pass.id}
              className="group relative flex flex-col md:flex-row bg-zinc-900/30 border border-zinc-800/60 rounded-xs overflow-hidden hover:border-himavan-gold/40 transition-all duration-500"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              {" "}
              {/* Image Side - 40% width on Desktop */}
              <div className="w-full md:w-2/5 h-64 md:h-auto relative overflow-hidden">
                <div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={pass.image} 
                  alt={pass.name}
                  className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>

              {/* Content Side - 60% width on Desktop */}
              <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-zinc-500 uppercase tracking-widest text-xs font-bold block mb-1">
                      {pass.region}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-black text-zinc-100 uppercase tracking-tight group-hover:text-himavan-gold transition-colors duration-300">
                      {pass.name}
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="text-himavan-gold font-black text-2xl md:text-3xl block">
                      {pass.elevation}
                    </span>
                  </div>
                </div>

                <p className="text-zinc-400 leading-relaxed mb-8 max-w-2xl">
                  {pass.description}
                </p>

                <div className="flex items-center justify-between mt-auto pt-6 border-t border-zinc-800/50">
                  <span className="bg-zinc-800/80 text-zinc-300 text-xs font-bold px-4 py-1.5 rounded-xs uppercase tracking-widest border border-zinc-700">
                    {pass.difficulty}
                  </span>
                  
                  {/* Connected the click action handler to pass the portal view modal upwards */}
                  <button 
                    onClick={onBookClick}
                    className="flex items-center gap-2 text-zinc-300 hover:text-himavan-gold font-bold text-sm tracking-widest uppercase transition-colors duration-300 cursor-pointer"
                  >
                    <span>View Itinerary</span>
                    <FiArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}