import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TreksSection from './components/TreksSection';
import PassesSection from './components/PassesSection';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import BookingModal from './components/BookingModal'; 

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false); // 2. Centered global booking state

  useEffect(() => {
    // Simulating a 2.5 second asset loading lifecycle period
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      {!loading && (
        <main className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-himavan-gold selection:text-zinc-950 relative">
          {/* 3. Handled modal actions for Navbar triggers */}
          <Navbar onBookClick={() => setIsModalOpen(true)} />
          
          <Hero />
          
          {/* 4. Handled modal actions for Trek Card details button clicks */}
          <TreksSection onBookClick={() => setIsModalOpen(true)} />
     
          <PassesSection onBookClick={() => setIsModalOpen(true)} />
          <Footer />
          <ScrollToTop />

          {/* 5. Appended global modal portal node at the root layer */}
          <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </main>
      )}
    </>
  );
}