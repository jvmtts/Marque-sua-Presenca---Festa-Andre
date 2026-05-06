import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, ChevronDown, Plus, Minus } from 'lucide-react';

export default function RSVPForm() {
  const [formData, setFormData] = useState({ 
    name: '', 
    status: 'going',
    companionCount: 0,
    companions: [] 
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const statusOptions = [
    { value: "going", label: "Sim, eu vou!" },
    { value: "not_going", label: "Infelizmente não poderei ir" }
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    const finalData = {
      Convidado: formData.name,
      Status: formData.status === 'going' ? 'Confirmado' : 'Não vai',
      QuantidadeAcompanhantes: formData.status === 'going' ? formData.companionCount : 0,
      NomesAcompanhantes: formData.status === 'going' && formData.companions.length > 0 ? formData.companions.join(', ') : 'Nenhum'
    };
    
    try {
      const response = await fetch('https://formspree.io/f/xkoyoryr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(finalData)
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert('Ocorreu um erro ao enviar. Tente novamente.');
      }
    } catch (error) {
      alert('Erro de conexão. Verifique sua internet.');
    } finally {
      setIsLoading(false);
    }
  };

  const selectedStatus = statusOptions.find(opt => opt.value === formData.status) || statusOptions[0];

  const handleIncrement = () => {
    setFormData(prev => ({
      ...prev,
      companionCount: prev.companionCount + 1,
      companions: [...prev.companions, '']
    }));
  };

  const handleDecrement = () => {
    setFormData(prev => {
      if (prev.companionCount <= 0) return prev;
      const newCompanions = prev.companions.slice(0, prev.companionCount - 1);
      return {
        ...prev,
        companionCount: prev.companionCount - 1,
        companions: newCompanions
      };
    });
  };

  const handleCompanionChange = (index, value) => {
    const newCompanions = [...formData.companions];
    newCompanions[index] = value;
    setFormData({ ...formData, companions: newCompanions });
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="w-full bg-rock-card/90 backdrop-blur-sm border border-rock-border p-10 shadow-2xl relative mb-16"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-rock-red"></div>

      {isSubmitted ? (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-10"
        >
          <Flame className="mx-auto mb-6 text-rock-red" size={56} strokeWidth={1.5} />
          <h3 className="text-3xl font-vintage text-rock-gold mb-4 uppercase tracking-widest">
            {formData.status === "not_going" ? "Poxa, que pena!" : "Confirmado!"}
          </h3>
          <p className="text-rock-muted text-lg">
            {formData.status === "not_going" 
              ? "Fica para a próxima. O rock não para!" 
              : <span>Presença garantida, <span className="text-white font-semibold">{formData.name}</span>. Até lá! 🤘</span>}
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-vintage uppercase tracking-widest text-white mb-3 mt-2">Confirme sua presença</h2>
          </div>

          <div>
            <label className="block text-rock-muted text-xs mb-3 uppercase tracking-[0.2em] font-bold">
              Nome Completo
            </label>
            <input 
              type="text" 
              required={formData.status === "going"} 
              className="w-full bg-rock-bg/80 border border-rock-border text-white p-4 focus:outline-none focus:border-rock-gold transition-colors"
              placeholder="Digite seu nome"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-rock-muted text-xs mb-3 uppercase tracking-[0.2em] font-bold">
              Você irá ao evento?
            </label>
            
            <div className="relative" ref={dropdownRef}>
              <div 
                className={`w-full bg-rock-bg/80 border text-white p-4 flex justify-between items-center cursor-pointer transition-colors ${isDropdownOpen ? 'border-rock-gold' : 'border-rock-border hover:border-rock-gold/50'}`}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span>{selectedStatus.label}</span>
                <motion.div 
                  animate={{ rotate: isDropdownOpen ? 180 : 0 }} 
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="text-rock-gold"
                >
                  <ChevronDown size={20} />
                </motion.div>
              </div>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute z-50 w-full mt-2 bg-[#1a1a1a] border border-rock-border shadow-2xl overflow-hidden"
                  >
                    {statusOptions.map((option) => (
                      <div
                        key={option.value}
                        className={`p-4 cursor-pointer transition-colors hover:bg-[#252525] ${
                          formData.status === option.value ? 'text-rock-gold font-bold bg-[#202020]' : 'text-rock-text'
                        }`}
                        onClick={() => {
                          setFormData({ ...formData, status: option.value });
                          setIsDropdownOpen(false);
                        }}
                      >
                        {option.label}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <AnimatePresence>
            {formData.status === 'going' && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="flex flex-col gap-8 overflow-hidden"
              >
                <div>
                  <label className="block text-rock-muted text-xs mb-3 uppercase tracking-[0.2em] font-bold">
                    Quantos acompanhantes?
                  </label>
                  <div className="flex items-center justify-between w-full bg-rock-bg/80 border border-rock-border p-2">
                    <button
                      type="button"
                      onClick={handleDecrement}
                      className="w-12 h-12 flex items-center justify-center text-rock-muted hover:text-rock-red hover:bg-rock-card transition-all"
                    >
                      <Minus size={20} />
                    </button>
                    <span className="text-2xl font-vintage text-rock-gold w-12 text-center select-none">
                      {formData.companionCount}
                    </span>
                    <button
                      type="button"
                      onClick={handleIncrement}
                      className="w-12 h-12 flex items-center justify-center text-rock-muted hover:text-rock-gold hover:bg-rock-card transition-all"
                    >
                      <Plus size={20} />
                    </button>
                  </div>
                </div>

                <AnimatePresence>
                  {formData.companionCount > 0 && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="flex flex-col gap-4 overflow-hidden"
                    >
                      {Array.from({ length: formData.companionCount }).map((_, index) => (
                        <motion.div 
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          transition={{ duration: 0.3 }}
                        >
                          <label className="block text-rock-gold text-xs mb-3 uppercase tracking-[0.2em] font-bold">
                            Nome do Acompanhante {index + 1}
                          </label>
                          <input 
                            type="text" 
                            required
                            className="w-full bg-rock-bg/80 border border-rock-gold/30 text-white p-4 focus:outline-none focus:border-rock-gold transition-colors"
                            placeholder={`Nome completo do acompanhante ${index + 1}`}
                            value={formData.companions[index] || ''}
                            onChange={(e) => handleCompanionChange(index, e.target.value)}
                          />
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>

          <button 
            type="submit"
            disabled={isLoading}
            className={`mt-4 w-full bg-rock-text hover:bg-rock-gold text-rock-bg font-black uppercase tracking-[0.2em] py-5 transition-colors duration-300 relative ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {isLoading ? 'Enviando...' : 'Confirmar'}
          </button>
        </form>
      )}
    </motion.section>
  );
}