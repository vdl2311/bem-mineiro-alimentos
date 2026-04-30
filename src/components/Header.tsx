import { Facebook, Instagram } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('');

  const navLinks = [
    { name: 'Produtos', path: '#produtos' },
    { name: 'Onde encontrar', path: '#onde-encontrar' },
    { name: 'Seja um ponto de venda', path: '#seja-parceiro' },
    { name: 'Produção', path: '#producao' },
    { name: 'Sobre nós', path: '#sobre' },
    { name: 'Fale conosco', path: '#contato' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.querySelector(link.path));
      let currentActiveHash = '';

      sections.forEach(section => {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentActiveHash = '#' + section.id;
          }
        }
      });
      if (window.scrollY < 100) {
        currentActiveHash = '';
      }
      setActiveHash(currentActiveHash);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks]);

  const isActive = (path: string) => activeHash === path;

  return (
    <>
      <div className="bg-bem-brown-dark text-white flex justify-end gap-6 py-2 px-11 text-xs border-b-2 border-bem-gold">
        <a href="https://www.facebook.com/paodequeijobemmineiro/" target="_blank" rel="noreferrer" className="text-white/80 no-underline flex items-center gap-1.5 transition-colors duration-200 hover:text-bem-gold">
          <Facebook className="w-3.5 h-3.5" /> Facebook
        </a>
        <a href="https://www.instagram.com/bemmineiroalimentos/" target="_blank" rel="noreferrer" className="text-white/80 no-underline flex items-center gap-1.5 transition-colors duration-200 hover:text-bem-gold">
          <Instagram className="w-3.5 h-3.5" /> Instagram
        </a>
        <a href="https://api.whatsapp.com/send?phone=5531986866067" target="_blank" rel="noreferrer" className="text-white/80 no-underline flex items-center gap-1.5 transition-colors duration-200 hover:text-bem-gold">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          WhatsApp
        </a>
      </div>

      <nav className="bg-white/95 backdrop-blur-md flex items-center justify-between px-10 shadow-sm sticky top-0 z-50 border-b border-bem-gold/20">
        <a href="#" className="cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src="https://i.ibb.co/dC4ZB7c/logo-bem-mineiro-final-curvas1-1024x818.png" alt="Bem Mineiro" className="h-16 py-1.5 block" />
        </a>
        <ul className="hidden md:flex gap-2 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.path}>
              <a
                href={link.path}
                className={`block py-6 px-4 no-underline font-bold text-xs tracking-[0.07em] uppercase border-b-2 transition-all duration-300 ${isActive(link.path) ? 'text-bem-red border-bem-gold' : 'text-bem-text-mid border-transparent hover:text-bem-red hover:border-bem-gold/50'}`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="md:hidden flex flex-col gap-[5px] cursor-pointer p-2.5" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className="block w-[26px] h-0.5 bg-bem-red-dark rounded-sm"></span>
          <span className="block w-[26px] h-0.5 bg-bem-red-dark rounded-sm"></span>
          <span className="block w-[26px] h-0.5 bg-bem-red-dark rounded-sm"></span>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden flex flex-col bg-bem-warm-white border-b-4 border-bem-gold shadow-[0_4px_16px_rgba(100,0,0,0.1)] absolute w-full z-40">
          <a href="#" className="p-3.5 px-6 font-bold text-[13px] uppercase tracking-[0.06em] text-bem-text-mid border-b border-bem-gold/15 hover:text-bem-red hover:bg-bem-cream" onClick={() => setIsMenuOpen(false)}>🏠 Home</a>
          {navLinks.map((link) => (
             <a key={link.path} href={link.path} className="p-3.5 px-6 font-bold text-[13px] uppercase tracking-[0.06em] text-bem-text-mid border-b border-bem-gold/15 hover:text-bem-red hover:bg-bem-cream" onClick={() => setIsMenuOpen(false)}>
               {link.name}
             </a>
          ))}
        </div>
      )}
    </>
  );
}
