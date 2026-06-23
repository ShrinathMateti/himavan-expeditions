import { motion } from 'framer-motion';
import { FiClock, FiLayers, FiMapPin } from 'react-icons/fi';

const TREK_DATA = [
  {
    id: 1,
    title: "Roopkund Trek",
    location: "Uttarakhand",
    duration: "8 Days",
    difficulty: "Hard",
    elevation: "15,750 ft",
    image: "https://trekos.in/wp-content/uploads/2024/09/Roopkund-Trek-Package-2.jpg"
  },
  {
    id: 2,
    title: "Kashmir Great Lakes",
    location: "Jammu & Kashmir",
    duration: "7 Days",
    difficulty: "Moderate",
    elevation: "13,750 ft",
    image: "https://cvsqtgaxsa.cloudimg.io/https://images.prismic.io/indiahike/80259-feature-Kashmir-Great-Lakes-Jeremy-Wee-Vishnusar-and-Kishansar-Lakes-View-from-Gadsar-Pass.jpg?&q=50&org_if_sml=1"
  },
  {
    id: 3,
    title: "Chadar Frozen River",
    location: "Ladakh",
    duration: "9 Days",
    difficulty: "Extreme",
    elevation: "11,150 ft",
    image: "https://media.licdn.com/dms/image/v2/C4D12AQF_UeAfGKwCsg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1520225041490?e=2147483647&v=beta&t=kxe9jE4vi3WXxdkV2nNgIyViW7PM8izL78V9iH-LJkc"
  },
  {
    id: 4,
    title: "Valley of Flowers",
    location: "Uttarakhand",
    duration: "6 Days",
    difficulty: "Easy-Mod",
    elevation: "14,400 ft",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTx4YC86vzCWaFAFtGsKydvEKRJib95lwpcXQhqBzP2ngVhcDTN6aQF14&s=10"
  },
  {
    id: 5,
    title: "Hampta Pass",
    location: "Himachal Pradesh",
    duration: "5 Days",
    difficulty: "Moderate",
    elevation: "14,100 ft",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2N-ZUHSsjVgOXXxNlt4I0LzLn6F9_WTLgHG1PC-gzJFqJ7EcGWBvgFpQ&s=10"
  },
  {
    id: 6,
    title: "Goechala Trek",
    location: "Sikkim",
    duration: "11 Days",
    difficulty: "Hard",
    elevation: "15,100 ft",
    image: "https://sikkimdarjeelingtourism.com/wp-content/uploads/2026/03/Goechala-trek.webp"
  },
  {
    id: 7,
    title: "Kedarkantha Trek",
    location: "Uttarakhand",
    duration: "6 Days",
    difficulty: "Easy",
    elevation: "12,500 ft",
    image: "https://kailashrath.com/_next/image?url=https%3A%2F%2Fkailash-rath-treks.s3.ap-south-1.amazonaws.com%2F2089bf23-4857-4-sTjai16B.webp&w=3840&q=75"
  },
  {
    id: 8,
    title: "Markha Valley",
    location: "Ladakh",
    duration: "8 Days",
    difficulty: "Hard",
    elevation: "17,060 ft",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMhjrtPI8ff22udaPQO3fMJs13xce_ahtPNENLonwkGSlIB9E0QvQ9YbU&s=10"
  },
  {
    id: 9,
    title: "Buran Ghati",
    location: "Himachal Pradesh",
    duration: "7 Days",
    difficulty: "Extreme",
    elevation: "15,000 ft",
    image: "https://cdn.trekthehimalayas.com/images/BuranGhatiTrek/Slider/376f40ed-b297-4db4-88db-cfad73d06e4d_1.webp"
  }
];

// Added onBookClick to the component props definition destructures
export default function TreksSection({ onBookClick }) {
  return (
    <section id="treks" className="relative py-28 w-full bg-zinc-950 overflow-hidden">
      {/* Ambient background glow for a premium feel */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-himavan-gold/5 blur-[120px] pointer-events-none" />

      {/* Centered content wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h3 className="text-himavan-gold font-bold uppercase tracking-[0.2em] text-xs mb-2">
            Seasonal Itineraries
          </h3>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">
            Most Iconic Indian Trails
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TREK_DATA.map((trek, idx) => (
            <motion.div 
              key={trek.id}
              className="bg-zinc-900/60 backdrop-blur-sm rounded-sm overflow-hidden border border-zinc-800/60 group hover:border-himavan-gold/40 hover:bg-zinc-900/80 transition-all duration-300 shadow-xl shadow-black/20"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: (idx % 3) * 0.1 }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={trek.image} 
                  alt={trek.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-4 right-4 bg-zinc-950/90 backdrop-blur-md text-himavan-gold text-xs font-bold px-3 py-1 rounded-xs tracking-wider uppercase">
                  {trek.difficulty}
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-1.5 text-zinc-400 text-xs mb-2 font-medium">
                  <FiMapPin className="text-himavan-gold" />
                  <span>{trek.location}</span>
                </div>
                <h4 className="text-xl font-bold text-zinc-100 mb-4 group-hover:text-himavan-gold transition-colors">
                  {trek.title}
                </h4>
                
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-zinc-800/60 text-sm text-zinc-400 mb-6">
                  <div className="flex items-center gap-2">
                    <FiClock className="text-zinc-500" />
                    <span>{trek.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiLayers className="text-zinc-500" />
                    <span>{trek.elevation}</span>
                  </div>
                </div>

                {/* Connected onClick action directly to the custom prop callback hook layout line below */}
                <button 
                  onClick={onBookClick}
                  className="w-full py-3 bg-zinc-800 hover:bg-himavan-gold text-zinc-200 hover:text-zinc-950 font-bold tracking-wide rounded-sm transition-all duration-300 cursor-pointer"
                >
                  VIEW DETAILS
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}