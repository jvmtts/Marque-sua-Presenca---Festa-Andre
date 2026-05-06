import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, CalendarClock, Beer } from 'lucide-react';

const EmberDeadline = ({ date }) => {
  return (
    <div className="relative w-full flex flex-col items-center justify-center pt-8 pb-4 mt-6">
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-20 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#fbbf24] rounded-full blur-[1px]"
            initial={{ opacity: 0, y: 30, x: 0, scale: 0.5 }}
            animate={{
              opacity: [0, 1, 0],
              y: [-10, -80 - Math.random() * 40],
              x: [0, (i % 2 === 0 ? 25 : -25) + Math.random() * 15],
              scale: [0.5, 1.3, 0.5]
            }}
            transition={{
              duration: 2.5 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      <h3 className="text-rock-muted font-semibold uppercase tracking-[0.3em] text-sm mb-2 relative z-10 drop-shadow-md">
        Confirmar até o dia
      </h3>

      <motion.div
        animate={{
          filter: [
            "drop-shadow(0px 0px 8px rgba(234, 88, 12, 0.5))",
            "drop-shadow(0px 0px 25px rgba(239, 68, 68, 1))",
            "drop-shadow(0px 0px 8px rgba(234, 88, 12, 0.5))"
          ]
        }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10"
      >
        <h2 className="text-[6rem] md:text-[9rem] font-vintage font-bold tracking-widest leading-none text-transparent bg-clip-text bg-gradient-to-b from-[#fef08a] via-[#ea580c] to-[#991b1b]">
          {date}
        </h2>
      </motion.div>
      
      <div className="w-40 md:w-60 h-1 bg-gradient-to-r from-transparent via-[#ea580c] to-transparent mt-4 opacity-60"></div>
    </div>
  );
};

export default function EventInfo() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
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
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Beer size={16} />
          </motion.div>
          <p className="text-xs uppercase tracking-widest font-semibold">Cerveja Gelada & Rock</p>
        </div>
      </div>

      <div className="md:col-span-2 bg-rock-red/90 backdrop-blur-sm py-8 px-6 text-center relative border-2 border-rock-red outline outline-2 outline-offset-4 outline-rock-red/30 mt-2 shadow-2xl overflow-hidden">
        
        <div className="flex justify-center items-center gap-1 mb-4">
          <motion.div
            animate={{ 
              rotate: [-15, 12, -15],
              x: [-12, 4, -12],
              y: [0, -8, 0]
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <Beer className="text-rock-gold drop-shadow-md scale-x-[-1]" size={42} strokeWidth={1.5} />
          </motion.div>
          
          <motion.div
            animate={{ 
              rotate: [15, -12, 15],
              x: [12, -4, 12],
              y: [0, -8, 0]
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <Beer className="text-rock-gold drop-shadow-md" size={42} strokeWidth={1.5} />
          </motion.div>
        </div>
        
        <h3 className="text-2xl md:text-3xl font-vintage text-white uppercase tracking-wider mb-3 drop-shadow-md">
          Traga sua bebida e venha curtir!
        </h3>
        <p className="text-rock-gold text-xs md:text-sm tracking-[0.2em] uppercase font-bold">
          O churrasco e o som já estão garantidos
        </p>
      </div>

      <div className="md:col-span-2">
        <EmberDeadline date="11/05" />
      </div>

    </motion.section>
  );
}