import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Guitar } from 'lucide-react';

export default function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full flex flex-col items-center text-center mt-8 mb-8"
    >
      <div className="border-y border-rock-border py-3 px-8 mb-8 w-full max-w-lg bg-rock-bg/40 backdrop-blur-sm">
        <p className="text-rock-muted text-xs tracking-[0.3em] uppercase font-semibold shadow-black drop-shadow-md">
          Dia de boas histórias, bom churrasco e Rock 'n' Roll
        </p>
      </div>
      
      <div className="flex items-center gap-6 mb-4 text-rock-gold drop-shadow-lg">
        <Guitar size={36} strokeWidth={1.5} />
        <Flame size={48} strokeWidth={1.5} className="text-rock-red" />
        <Guitar size={36} strokeWidth={1.5} />
      </div>

      <div className="flex justify-center w-full mb-4 drop-shadow-xl">
        <div className="bg-rock-red text-white py-3 px-12 relative [clip-path:polygon(0_0,100%_0,90%_50%,100%_100%,0_100%,10%_50%)]">
          <h2 className="text-xl md:text-2xl font-vintage tracking-widest uppercase mt-1 drop-shadow-md">
            Churrasco do
          </h2>
        </div>
      </div>

      <h1 className="text-7xl md:text-[8rem] font-vintage tracking-wider text-rock-text uppercase drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)] mb-8 leading-none">
        André
      </h1>
      
      <div className="flex items-center gap-4 w-full max-w-sm">
        <div className="h-px bg-rock-border flex-grow"></div>
        <p className="text-rock-gold tracking-[0.4em] font-bold uppercase text-sm drop-shadow-md">
          Churrasco + Rock
        </p>
        <div className="h-px bg-rock-border flex-grow"></div>
      </div>
    </motion.header>
  );
}