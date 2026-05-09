import React, { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShow(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-bem-brown-dark text-white p-4 z-[9999] shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
      <div className="max-w-[1240px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div className="text-[14px] md:text-[15px] font-light">
          Utilizamos cookies para melhorar a sua experiência no nosso site. Ao continuar navegando, você concorda com a nossa{' '}
          <a href="/politica-de-privacidade" className="text-bem-gold underline hover:text-white transition-colors">
            Política de Privacidade
          </a>.
        </div>
        <button 
          onClick={handleAccept}
          className="bg-bem-gold text-bem-brown-dark font-bold py-2 px-6 rounded-full hover:bg-white transition-colors whitespace-nowrap"
        >
          Aceito
        </button>
      </div>
    </div>
  );
}
