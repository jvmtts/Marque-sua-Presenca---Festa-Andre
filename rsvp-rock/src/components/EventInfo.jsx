import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, CalendarClock, Beer } from 'lucide-react';

const VintageDeadline = ({ date }) => {
  return (
    <div className="bg-rock-card/80 backdrop-blur-sm py-10 px-6 md:px-12 text-center relative border-2 border-rock-red border-dashed mt-6">
      <div className="absolute -top-3 -left-3 w-6 h-6 bg-black rounded-full border-b-2 border-r-2 border-rock-red border-dashed transform rotate-45"></div>
      <div className="absolute -top-3 -right-3 w-6 h-6 bg-black rounded-full border-b-2 border-l-2 border-rock-red border-dashed transform -rotate-45"></div>
      <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-black rounded-full border-t-2 border-r-2 border-rock-red border-dashed transform -rotate-45"></div>
      <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-black rounded-full border-t-2 border-l-2 border-rock-red border-dashed transform rotate-45"></div>

      <div className="flex flex-col items-center justify-center">
        <h3 className="text-rock-red font-bold uppercase tracking-[0.4em] text-xs md:text-sm mb-6">
          Atenção ao Prazo
        </h3>
        
        <div className="flex items-center justify-center gap-4 md:gap-8 mb-2 w-full">
          <div className="h-px bg-rock-border flex-grow max-w-[100px]"></div>
          <p className="text-rock-text text-sm md:text-xl uppercase tracking-widest font-semibold whitespace-nowrap">
            Confirmar Até
          </p>
          <div className="h-px bg-rock-border flex-grow max-w-[100px]"></div>
        </div>

        <motion.div
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <h2 className="text-[5.5rem] md:text-[8rem] font-vintage text-rock-gold leading-none tracking-widest drop-shadow-[5px_5px_0_rgba(153,27,27,0.9)] mt-4 mb-6">
            {date}
          </h2>
        </motion.div>

        <p className="text-rock-muted text-xs md:text-sm tracking-[0.2em] uppercase font-bold">
          Impreterivelmente
        </p>
      </div>
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
        <VintageDeadline date="15/05" />
      </div>

    </motion.section>
  );
}