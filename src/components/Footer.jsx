import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiPhone, FiArrowUp } from "react-icons/fi";
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-zinc-950 border-t border-zinc-900 pt-20 pb-8 w-full overflow-hidden text-zinc-400">
      {/* Structural Inner Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Column 1: Brand Identifier */}
        <div className="space-y-4">
          <h3 className="text-white font-black tracking-widest text-xl uppercase">
            HIMAVAN<span className="text-himavan-gold">.</span>
          </h3>
          <p className="text-sm leading-relaxed text-zinc-500">
            Crafting raw, premium mountaineering experiences across the deep
            ridges and extreme high-altitude passes of the Indian Himalayas.
          </p>
          <div className="flex gap-4 pt-2">
            <a
              href="#"
              className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-himavan-gold hover:border-himavan-gold/50 transition-colors duration-300"
            >
              <FaInstagram size={14} />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-himavan-gold hover:border-himavan-gold/50 transition-colors duration-300"
            >
              <FaXTwitter size={14} />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-himavan-gold hover:border-himavan-gold/50 transition-colors duration-300"
            >
              <FaFacebookF size={14} />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-zinc-200 font-bold tracking-wider uppercase text-xs mb-6 border-l-2 border-himavan-gold pl-3">
            Explore
          </h4>
          <ul className="space-y-3 text-sm font-medium">
            <li>
              <a
                href="#treks"
                className="hover:text-himavan-gold transition-colors duration-200"
              >
                Iconic Trails
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-himavan-gold transition-colors duration-200"
              >
                High Altitude Passes
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-himavan-gold transition-colors duration-200"
              >
                Expeditions
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-himavan-gold transition-colors duration-200"
              >
                Safety Protocol
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        {/* Column 3: Contact Info */}
        <div>
          <h4 className="text-zinc-200 font-bold tracking-wider uppercase text-xs mb-6 border-l-2 border-himavan-gold pl-3">
            Basecamp Office
          </h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <FiMapPin className="text-himavan-gold mt-1 shrink-0" />
              <span className="text-zinc-500 leading-relaxed">
                Manali, Kullu District,
                <br />
                Himachal Pradesh, 175131
              </span>
            </li>
            <li className="flex items-center gap-3">
              <FiPhone className="text-himavan-gold shrink-0" />
              <span className="text-zinc-400 font-medium">+91 12334 44556</span>
            </li>
            <li className="flex items-center gap-3">
              <FiMail className="text-himavan-gold shrink-0" />
              <span className="text-zinc-400 font-medium">
                expeditions@example.com
              </span>
            </li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div>
          <h4 className="text-zinc-200 font-bold tracking-wider uppercase text-xs mb-6 border-l-2 border-himavan-gold pl-3">
            Dispatch Updates
          </h4>
          <p className="text-sm text-zinc-500 mb-4 leading-relaxed">
            Subscribe for seasonal route conditions, opening dates, and permit
            regulations.
          </p>
          <form className="flex rounded-sm overflow-hidden border border-zinc-800 focus-within:border-himavan-gold/50 transition-colors">
            <input
              type="email"
              placeholder="Your email address"
              className="bg-zinc-900/40 px-4 py-2.5 text-sm w-full outline-none text-zinc-200 placeholder-zinc-600"
            />
            <button className="bg-zinc-800 hover:bg-himavan-gold text-zinc-400 hover:text-zinc-950 px-4 font-bold tracking-wider text-xs transition-colors duration-300 uppercase shrink-0">
              Join
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Footer Credits Block */}
      <div className="border-t border-zinc-900/60 max-w-7xl mx-auto px-6 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
        <p>
          © {new Date().getFullYear()} Himavan Wilderness Expeditions. All
          rights reserved.
        </p>

        <div className="flex gap-6">
          <a href="#" className="hover:text-zinc-400 transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-zinc-400 transition-colors">
            Terms of Service
          </a>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-himavan-gold bg-zinc-900/40 hover:bg-zinc-900 border border-zinc-800/80 px-3 py-1.5 rounded-sm transition-colors cursor-pointer"
          >
            <span>Top</span>
            <FiArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}
