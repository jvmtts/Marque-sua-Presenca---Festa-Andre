import React from 'react';
import { motion } from 'framer-motion';
import { Flame } from 'lucide-react';

const ThunderIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M13 2L3 14h9l-1 8 10-14h-8l2-8z" />
  </svg>
);

const GlowingFire = () => (
  <div className="relative flex justify-center items-end h-[220px] w-[220px] transform scale-75 md:scale-100 origin-bottom">
    <motion.div
      animate={{ opacity: [0.6, 1, 0.6], scale: [0.85, 1.15, 0.85] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      className="absolute bottom-4 w-40 h-20 bg-[#ff3300] blur-[32px] rounded-full z-0"
    />
    <motion.div
      animate={{ scale: [1, 1.03, 0.97, 1], rotate: [0, -2, 2, 0] }}
      transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
      className="absolute bottom-0 text-rock-red drop-shadow-[0_0_20px_rgba(153,27,27,1)] z-10"
    >
      <Flame size={220} fill="currentColor" strokeWidth={0.5} stroke="#3f0000" />
    </motion.div>
    <motion.div
      animate={{ scale: [1, 1.06, 0.94, 1], y: [0, -4, 0] }}
      transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
      className="absolute bottom-4 text-[#d97706] z-20"
    >
      <Flame size={145} fill="currentColor" strokeWidth={0} />
    </motion.div>
    <motion.div
      animate={{ scale: [1, 1.1, 0.9, 1], y: [0, -6, 0] }}
      transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
      className="absolute bottom-8 text-[#fbbf24] z-30"
    >
      <Flame size={80} fill="currentColor" strokeWidth={0} />
    </motion.div>
  </div>
);

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full flex flex-col items-center text-center mt-6 mb-4 overflow-hidden px-2 relative"
    >
      <p className="text-rock-text text-sm md:text-base tracking-[0.4em] uppercase font-bold drop-shadow-md z-30 relative mb-2">
        Rock 'n' Roll
      </p>

      <div className="relative flex justify-center items-start h-[260px] sm:h-[340px] md:h-[460px] w-full max-w-5xl mx-auto mt-2">
        <motion.img
          src="/tools.png"
          alt="Talheres de Churrasco"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute z-0 left-1/2 transform -translate-x-1/2 top-0 w-[320px] sm:w-[440px] md:w-[600px] h-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.9)]"
        />

        <div className="absolute z-10 top-[10%] sm:top-[12%] md:top-[15%] ml-[15px] sm:ml-[20px] md:ml-[30px]">
          <GlowingFire />
        </div>
      </div>

      <div className="flex justify-center w-full z-20 relative -mt-[80px] sm:-mt-[100px] md:-mt-[140px] mb-12 sm:mb-16">
        <div className="bg-rock-red text-white py-4 px-6 sm:py-6 md:px-32 relative [clip-path:polygon(0_0,100%_0,95%_50%,100%_100%,0_100%,5%_50%)] border-y-2 border-rock-red/50 drop-shadow-[0_25px_30px_rgba(0,0,0,1)]">
          <h2 className="text-[1.4rem] sm:text-3xl md:text-5xl font-vintage tracking-widest uppercase whitespace-nowrap drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
            Churrasco e 50tão
          </h2>
        </div>
      </div>

      <div className="flex items-center gap-4 mb-4 relative z-30">
        <div className="w-12 sm:w-16 h-px bg-rock-gold"></div>
        <span className="text-rock-text text-xl sm:text-2xl font-vintage uppercase tracking-widest">Do</span>
        <div className="w-12 sm:w-16 h-px bg-rock-gold"></div>
      </div>

      <div className="flex items-center justify-center gap-3 sm:gap-6 md:gap-10 mb-8 w-full relative z-30">
        <motion.div
          animate={{ 
            opacity: [1, 0.5, 1, 1, 0.7, 1],
            scale: [1, 1.15, 1, 1, 1.05, 1],
            filter: [
              'drop-shadow(0 0 10px rgba(180,133,63,0.3))',
              'drop-shadow(0 0 30px rgba(180,133,63,1))',
              'drop-shadow(0 0 10px rgba(180,133,63,0.3))',
              'drop-shadow(0 0 10px rgba(180,133,63,0.3))',
              'drop-shadow(0 0 20px rgba(180,133,63,0.7))',
              'drop-shadow(0 0 10px rgba(180,133,63,0.3))'
            ]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <ThunderIcon className="w-10 h-10 sm:w-14 sm:h-14 md:w-[72px] md:h-[72px] text-rock-gold transform -rotate-12" />
        </motion.div>
        
        <h1 className="text-6xl sm:text-7xl md:text-[10rem] font-vintage tracking-wider text-rock-text uppercase drop-shadow-[0_15px_15px_rgba(0,0,0,0.9)] leading-none">
          André
        </h1>
        
        <motion.div
          animate={{ 
            opacity: [1, 0.7, 1, 1, 0.5, 1],
            scale: [1, 1.05, 1, 1, 1.15, 1],
            filter: [
              'drop-shadow(0 0 10px rgba(180,133,63,0.3))',
              'drop-shadow(0 0 20px rgba(180,133,63,0.7))',
              'drop-shadow(0 0 10px rgba(180,133,63,0.3))',
              'drop-shadow(0 0 10px rgba(180,133,63,0.3))',
              'drop-shadow(0 0 30px rgba(180,133,63,1))',
              'drop-shadow(0 0 10px rgba(180,133,63,0.3))'
            ]
          }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <ThunderIcon className="w-10 h-10 sm:w-14 sm:h-14 md:w-[72px] md:h-[72px] text-rock-gold transform rotate-12" />
        </motion.div>
      </div>

      <div className="flex items-center gap-4 w-full max-w-md mt-4 relative z-30">
        <div className="h-px bg-rock-border flex-grow"></div>
        <p className="text-rock-gold tracking-[0.2em] md:tracking-[0.4em] font-bold uppercase text-xs md:text-base drop-shadow-md whitespace-nowrap">
          Churrasco + Rock
        </p>
        <div className="h-px bg-rock-border flex-grow"></div>
      </div>
    </motion.header>
  );
}