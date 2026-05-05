import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, CalendarClock, Beer } from 'lucide-react';

export default function EventInfo() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
    >
      <div className="bg-rock-card/80 backdrop-blur-sm p-8 text-center relative border-2 border-rock-border border-dashed">
        <div className="absolute -top-3 -left-3 w-6 h-6 bg-black rounded-full border-b-2 border-r-2 border-rock-border border-dashed transform rotate-45"></div>
        <div className="absolute -top-3 -right-3 w-6 h-6 bg-black rounded-full border-b-2 border-l-2 border-rock-border border-dashed transform -rotate-45"></div>
        <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-black rounded-full border-t-2 border-r-2 border-rock-border border-dashed transform -rotate-45"></div>
        <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-black rounded-full border-t-2 border-l-2 border-rock-border border-dashed transform rotate-45"></div>

        <CalendarClock className="mx-auto mb-4 text-rock-red" size={32} strokeWidth={1.5} />
        <p className="text-rock-muted text-xs uppercase tracking-[0.3em] mb-3 font-semibold">Sábado</p>
        <p className="text-5xl font-vintage text-rock-gold mb-3">16/05</p>
        <p className="text-rock-text text-sm uppercase tracking-widest font-semibold">A partir das 18h</p>
      </div>

      <div className="bg-rock-card/80 backdrop-blur-sm p-8 text-center relative border-2 border-rock-border border-dashed">
        <div className="absolute -top-3 -left-3 w-6 h-6 bg-black rounded-full border-b-2 border-r-2 border-rock-border border-dashed transform rotate-45"></div>
        <div className="absolute -top-3 -right-3 w-6 h-6 bg-black rounded-full border-b-2 border-l-2 border-rock-border border-dashed transform -rotate-45"></div>
        <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-black rounded-full border-t-2 border-r-2 border-rock-border border-dashed transform -rotate-45"></div>
        <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-black rounded-full border-t-2 border-l-2 border-rock-border border-dashed transform rotate-45"></div>

        <MapPin className="mx-auto mb-4 text-rock-red" size={32} strokeWidth={1.5} />
        <p className="text-rock-muted text-xs uppercase tracking-[0.3em] mb-3 font-semibold">Local</p>
        <p className="text-3xl font-vintage text-rock-gold mb-4 uppercase mt-2">Rua Guapeu, 39</p>
        <div className="flex justify-center items-center gap-2 text-rock-muted">
          <Beer size={16} />
          <p className="text-xs uppercase tracking-widest font-semibold">Cerveja Gelada & Rock</p>
        </div>
      </div>
    </motion.section>
  );
}