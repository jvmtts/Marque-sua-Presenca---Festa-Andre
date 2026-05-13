import React from 'react';
import { motion } from 'framer-motion';
import { Flame } from 'lucide-react';

const PremiumKnife = ({ className }) => (
  <svg viewBox="0 0 100 400" className={className} style={{ overflow: 'visible' }}>
    <defs>
      {/* High-resolution texture patterns for a premium look */}
      <pattern id="knifeTexture" patternUnits="userSpaceOnUse" width="100" height="400">
        <image 
          href="https://images.unsplash.com/photo-1621516082481-37f07094b8e2?q=80&w=100&h=400&auto=format&fit=crop&blur=1" 
          width="100" 
          height="400" 
          preserveAspectRatio="xMidYMid slice"
        />
      </pattern>
      <pattern id="knifeHandleTexture" patternUnits="userSpaceOnUse" width="100" height="150" y="220">
        <image 
          href="https://images.unsplash.com/photo-1596700030113-149d52b12399?q=80&w=100&h=150&auto=format&fit=crop" 
          width="100" 
          height="150" 
          preserveAspectRatio="xMidYMid slice"
        />
      </pattern>
    </defs>
    
    {/* Blade (Metal) */}
    <path d="M 50,220 L 50,40 Q 50,10 65,10 Q 100,80 100,220 Z" fill="url(#knifeTexture)" stroke="#4b5563" strokeWidth="0.5"/>
    {/* Specular highlight ridge line */}
    <path d="M 50,40 Q 50,10 65,10 Q 100,80 100,220" fill="none" stroke="#ffffff" strokeWidth="2" opacity="0.6"/>
    
    {/* Guard (Brushed Steel) */}
    <rect x="44" y="220" width="32" height="12" rx="4" fill="#9ca3af" stroke="#4b5563" strokeWidth="0.5"/>
    <rect x="44" y="220" width="32" height="5" fill="#f3f4f6" opacity="0.9" />
    
    {/* Handle (Rich Wood Texture) */}
    <path d="M 50,232 L 70,232 L 72,330 Q 72,340 60,340 L 60,340 Q 48,340 48,330 Z" fill="url(#knifeHandleTexture)" stroke="#1f2937" strokeWidth="0.5"/>
    
    {/* Brass Rivets with depth */}
    <circle cx="60" cy="255" r="3.5" fill="#bfa36f" stroke="#78350f" strokeWidth="0.5"/>
    <circle cx="60" cy="255" r="1" fill="#ffffff" opacity="0.5"/> {/* Specular highlight */}

    <circle cx="60" cy="285" r="3.5" fill="#bfa36f" stroke="#78350f" strokeWidth="0.5"/>
    <circle cx="60" cy="285" r="1" fill="#ffffff" opacity="0.5"/>

    <circle cx="60" cy="315" r="3.5" fill="#bfa36f" stroke="#78350f" strokeWidth="0.5"/>
    <circle cx="60" cy="315" r="1" fill="#ffffff" opacity="0.5"/>
  </svg>
);

const PremiumFork = ({ className }) => (
  <svg viewBox="0 0 100 400" className={className} style={{ overflow: 'visible' }}>
    <defs>
      {/* Texture pattern matching the knife handle */}
      <pattern id="forkHandleTexture" patternUnits="userSpaceOnUse" width="100" height="150" y="220">
        <image 
          href="https://images.unsplash.com/photo-1596700030113-149d52b12399?q=80&w=100&h=150&auto=format&fit=crop" 
          width="100" 
          height="150" 
          preserveAspectRatio="xMidYMid slice"
        />
      </pattern>
      {/* Texture matching the knife blade */}
      <pattern id="forkTexture" patternUnits="userSpaceOnUse" width="100" height="400">
        <image 
          href="https://images.unsplash.com/photo-1621516082481-37f07094b8e2?q=80&w=100&h=400&auto=format&fit=crop&blur=1" 
          width="100" 
          height="400" 
          preserveAspectRatio="xMidYMid slice"
        />
      </pattern>
    </defs>
    
    {/* Head (Metal Texture) */}
    <path d="
      M 56 220 L 56 160
      C 56 130, 31 130, 31 100
      L 31 20 L 37 10 L 43 20 L 43 80
      C 43 105, 54 105, 54 80
      L 54 20 L 60 10 L 66 20 L 66 80
      C 66 105, 77 105, 77 80
      L 77 20 L 83 10 L 89 20 L 89 100
      C 89 130, 64 130, 64 160
      L 64 220 Z
    " fill="url(#forkTexture)" stroke="#4b5563" strokeWidth="0.5"/>
    
    {/* Highlights for depth */}
    <path d="M 43 80 C 43 105, 54 105, 54 80" fill="none" stroke="#6b7280" strokeWidth="2" opacity="0.4" />
    <path d="M 66 80 C 66 105, 77 105, 77 80" fill="none" stroke="#6b7280" strokeWidth="2" opacity="0.4" />
    <path d="M 31 20 L 37 10 L 43 20" fill="none" stroke="#ffffff" strokeWidth="2" opacity="0.6"/>
    <path d="M 54 20 L 60 10 L 66 20" fill="none" stroke="#ffffff" strokeWidth="2" opacity="0.6"/>
    <path d="M 77 20 L 83 10 L 89 20" fill="none" stroke="#ffffff" strokeWidth="2" opacity="0.6"/>

    {/* Guard (Brushed Steel) */}
    <rect x="44" y="220" width="32" height="12" rx="4" fill="#9ca3af" stroke="#4b5563" strokeWidth="0.5"/>
    <rect x="44" y="220" width="32" height="5" fill="#f3f4f6" opacity="0.9" />
    
    {/* Handle (Rich Wood Texture) */}
    <path d="M 50 232 L 70 232 L 72 330 Q 72,340 60 340 L 60 340 Q 48,340 48 330 Z" fill="url(#forkHandleTexture)" stroke="#1f2937" strokeWidth="0.5"/>
    
    {/* Brass Rivets with depth */}
    <circle cx="60" cy="255" r="3.5" fill="#bfa36f" stroke="#78350f" strokeWidth="0.5"/>
    <circle cx="60" cy="255" r="1" fill="#ffffff" opacity="0.5"/>

    <circle cx="60" cy="285" r="3.5" fill="#bfa36f" stroke="#78350f" strokeWidth="0.5"/>
    <circle cx="60" cy="285" r="1" fill="#ffffff" opacity="0.5"/>

    <circle cx="60" cy="315" r="3.5" fill="#bfa36f" stroke="#78350f" strokeWidth="0.5"/>
    <circle cx="60" cy="315" r="1" fill="#ffffff" opacity="0.5"/>
  </svg>
);

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
      className="w-full flex flex-col items-center text-center mt-2 mb-4 overflow-hidden px-2"
    >
      <p className="text-rock-text text-sm md:text-base tracking-[0.4em] uppercase font-bold drop-shadow-md z-30 relative">
        Rock 'n' Roll
      </p>

      <div className="relative flex justify-center items-end h-[240px] sm:h-[320px] md:h-[420px] w-full max-w-5xl mt-4 md:mt-8 mx-auto">
        
        <motion.div
          animate={{ rotate: [-32, -36, -32] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute z-0 origin-[50%_90%] right-[52%] md:right-[54%] bottom-[-30px] md:bottom-[-90px]"
        >
          <PremiumKnife className="h-[260px] sm:h-[360px] md:h-[500px] w-auto drop-shadow-[0_20px_30px_rgba(0,0,0,1)]" />
        </motion.div>

        <div className="relative z-10 mb-6 md:mb-16">
          <GlowingFire />
        </div>

        <motion.div
          animate={{ rotate: [32, 36, 32] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute z-0 origin-[50%_90%] left-[52%] md:left-[54%] bottom-[-30px] md:bottom-[-90px]"
        >
          <PremiumFork className="h-[260px] sm:h-[360px] md:h-[500px] w-auto drop-shadow-[0_20px_30px_rgba(0,0,0,1)]" />
        </motion.div>
      </div>

      <div className="flex justify-center w-full z-20 relative -mt-6 sm:-mt-8 md:-mt-16 mb-6 sm:mb-8">
        <div className="bg-rock-red text-white py-4 px-6 sm:py-6 md:px-32 relative [clip-path:polygon(0_0,100%_0,95%_50%,100%_100%,0_100%,5%_50%)] border-y-2 border-rock-red/50 drop-shadow-[0_25px_30px_rgba(0,0,0,1)]">
          <h2 className="text-[1.4rem] sm:text-3xl md:text-5xl font-vintage tracking-widest uppercase whitespace-nowrap drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
            Churrasco e 50tão
          </h2>
        </div>
      </div>

      <div className="flex items-center gap-4 mb-2 mt-2">
        <div className="w-12 sm:w-16 h-px bg-rock-gold"></div>
        <span className="text-rock-text text-xl sm:text-2xl font-vintage uppercase tracking-widest">Do</span>
        <div className="w-12 sm:w-16 h-px bg-rock-gold"></div>
      </div>

      <div className="flex items-center justify-center gap-3 sm:gap-6 md:gap-10 mb-6 w-full">
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
        
        <h1 className="text-6xl sm:text-7xl md:text-[10rem] font-vintage tracking-wider text-rock-text uppercase drop-shadow-[0_15px_15px_rgba(0,0,0,0.9)] leading-none mt-2">
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

      <div className="flex items-center gap-4 w-full max-w-md mt-2">
        <div className="h-px bg-rock-border flex-grow"></div>
        <p className="text-rock-gold tracking-[0.2em] md:tracking-[0.4em] font-bold uppercase text-xs md:text-base drop-shadow-md whitespace-nowrap">
          Churrasco + Rock
        </p>
        <div className="h-px bg-rock-border flex-grow"></div>
      </div>
    </motion.header>
  );
}