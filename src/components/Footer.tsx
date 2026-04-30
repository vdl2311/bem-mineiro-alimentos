import { Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-bem-brown text-white/70 pt-14 px-10 pb-7 text-center border-t border-bem-gold/20">
      <a href="#" className="inline-block" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
         <img src="https://i.ibb.co/dC4ZB7c/logo-bem-mineiro-final-curvas1-1024x818.png" alt="Bem Mineiro" className="h-[100px] mb-[22px] mx-auto block" />
      </a>
      <div className="flex justify-center flex-wrap gap-7 mb-[22px]">
        <a href="#sobre" className="text-white/55 no-underline text-[13px] tracking-[0.05em] transition-colors duration-200 uppercase hover:text-bem-gold">Sobre nós</a>
        <a href="#produtos" className="text-white/55 no-underline text-[13px] tracking-[0.05em] transition-colors duration-200 uppercase hover:text-bem-gold">Produtos</a>
        <a href="#contato" className="text-white/55 no-underline text-[13px] tracking-[0.05em] transition-colors duration-200 uppercase hover:text-bem-gold">Fale conosco</a>
        <a href="#seja-parceiro" className="text-white/55 no-underline text-[13px] tracking-[0.05em] transition-colors duration-200 uppercase hover:text-bem-gold">Seja um ponto de venda</a>
        <a href="#" onClick={(e) => e.preventDefault()} className="text-white/55 no-underline text-[13px] tracking-[0.05em] transition-colors duration-200 uppercase hover:text-bem-gold">Política de Privacidade</a>
      </div>
      <div className="flex justify-center gap-3.5 mb-[30px]">
        <a href="https://www.facebook.com/paodequeijobemmineiro/" target="_blank" rel="noreferrer" className="flex items-center justify-center w-[42px] h-[42px] rounded-full bg-bem-gold/10 border border-bem-gold/30 text-bem-gold transition-colors duration-200 hover:bg-bem-gold hover:text-bem-brown-dark hover:border-bem-gold">
          <Facebook className="w-4 h-4" />
        </a>
        <a href="https://www.instagram.com/bemmineiroalimentos/" target="_blank" rel="noreferrer" className="flex items-center justify-center w-[42px] h-[42px] rounded-full bg-bem-gold/10 border border-bem-gold/30 text-bem-gold transition-colors duration-200 hover:bg-bem-gold hover:text-bem-brown-dark hover:border-bem-gold">
          <Instagram className="w-4 h-4" />
        </a>
        <a href="https://api.whatsapp.com/send?phone=5531986866067" target="_blank" rel="noreferrer" className="flex items-center justify-center w-[42px] h-[42px] rounded-full bg-bem-gold/10 border border-bem-gold/30 text-bem-gold transition-colors duration-200 hover:bg-bem-gold hover:text-bem-brown-dark hover:border-bem-gold">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        </a>
      </div>
      <div className="text-xs text-white/30 border-t border-bem-gold/15 pt-5 mt-2">© 2019 Bem Mineiro Alimentos · Todos os direitos reservados</div>
    </footer>
  );
}
