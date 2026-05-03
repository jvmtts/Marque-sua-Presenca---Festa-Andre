import React from 'react';
import Header from './components/Header';
import EventInfo from './components/EventInfo';
import RSVPForm from './components/RSVPForm';
import bgFundo from './assets/fotoFundo.png'; 

export default function App() {
  return (
    <div 
      className="min-h-screen bg-rock-bg bg-cover bg-center bg-fixed flex flex-col items-center p-6 relative"
      style={{ backgroundImage: `url(${bgFundo})` }}
    >
      <div className="absolute inset-0 bg-black/45 pointer-events-none z-0"></div>
      
      <div className="w-full max-w-3xl flex flex-col items-center gap-10 relative z-10 py-8">
        <Header />
        <EventInfo />
        <RSVPForm />
      </div>
    </div>
  );
}