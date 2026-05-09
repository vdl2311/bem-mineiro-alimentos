import React from 'react';
import regeneratedImage from '../assets/images/regenerated_image_1778282408468.jpg';
import { products, categories, BASE_URL } from '../data/products';
import { motion } from 'motion/react';

// Import banner images
import heroBg from '../assets/images/pao de queijo pagina principal.jpeg';
import promoTemos from '../assets/images/atual-1024x1024.jpeg';
import promoRecheado from '../assets/images/whatsapp-image-2021-12-03-at-172617-1-1024x1024.jpeg';
import promoLactose from '../assets/images/whatsapp-image-2021-12-03-at-172617-1024x1024.jpeg';
import promoPalito from '../assets/images/whatsapp-image-2021-12-03-at-172617-2-1024x1024.jpeg';

export default function Home() {
  const [lightboxImg, setLightboxImg] = React.useState<{src: string, name: string} | null>(null);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxImg(null);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="animate-fade-in-up">
      {/* Hero Section */}
      <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-bem-brown-dark/40 mix-blend-multiply z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-bem-brown-dark via-transparent to-black/30 z-10"></div>
        <div 
          className="absolute inset-0 bg-center bg-cover bg-no-repeat transition-transform duration-[20s] animate-ken-burns"
          style={{ backgroundImage: `url(${heroBg})` }}
        ></div>
        
        {/* Steam Effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-[15] hidden md:block">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bottom-[-150px] w-[250px] h-[600px] bg-white/30 rounded-[50%] blur-[60px]"
              style={{ left: `${(i * 10) - 10}%` }}
              initial={{ opacity: 0, y: 0, scale: 0.8, x: 0 }}
              animate={{
                opacity: [0, 0.7, 0.4, 0],
                y: -1400,
                scale: [0.8, 2.5, 4.5],
                x: [0, (i % 3 === 0 ? 80 : i % 3 === 1 ? -80 : 0), (i % 2 === 0 ? -40 : 40)],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                delay: i * 1.5,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        
        {/* Top/Bottom Borders */}
        <div className="absolute left-0 right-0 top-0 h-1 bg-bem-gold/80 z-20"></div>
        <div className="absolute left-0 right-0 bottom-0 h-1 bg-bem-gold/80 z-20"></div>
        
        <div className="relative z-20 text-center text-white py-16 px-6 max-w-4xl mx-auto">
          <h1 className="font-serif text-[clamp(3.5rem,7vw,5.5rem)] font-black text-white leading-[1.1] tracking-[-0.01em] mb-8 drop-shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
            Vai Bem Com <span className="text-bem-gold italic">Seu Dia!</span>
          </h1>
          <p className="text-lg md:text-[1.35rem] text-white/90 max-w-2xl mx-auto mb-12 leading-[1.8] font-light drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Pão de queijo artesanal com receita original e exclusiva — crocante por fora, macio por dentro, com o marcante sabor do queijo minas.
          </p>
          <a 
            href="#produtos"
            className="inline-flex items-center justify-center bg-bem-red text-white py-[18px] px-12 rounded-full font-bold text-[13px] tracking-[0.15em] uppercase shadow-[0_8px_32px_rgba(192,39,45,0.4)] transition-all duration-500 hover:-translate-y-1.5 hover:bg-bem-red-dark hover:shadow-[0_16px_48px_rgba(192,39,45,0.6)] backdrop-blur-sm"
          >
            Conheça nossos sabores
          </a>
        </div>
      </section>

      {/* 1. Produtos */}
      <section id="produtos" className="bg-bem-warm-white min-h-screen pt-[120px] pb-20">
        <div className="text-center px-5 pb-14">
            <h2 className="font-serif text-[clamp(1.8rem,4vw,2.8rem)] text-bem-red-dark mb-3.5">Nossos Produtos</h2>
            <div className="flex justify-center gap-2 mb-[40px]">
                <div className="w-12 h-1 bg-bem-gold rounded-full"></div>
            </div>
          <p className="text-bem-text-mid max-w-[650px] mx-auto mb-[40px] leading-relaxed font-light mt-4">
            Pão de queijo congelado <strong className="font-bold text-bem-brown-dark">Tradicional e Recheado</strong>. Escolha o seu sabor preferido:
          </p>
        </div>
        <div className="py-[10px] px-5 md:px-[40px] max-w-[1240px] mx-auto">
          {/* Promotional Banners */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mt-10 mb-20">
            {[
              { src: promoTemos, alt: "Temos Pão de Queijo Tradicional e Recheado" },
              { src: promoRecheado, alt: "Pão de Queijo Recheado" },
              { src: promoLactose, alt: "Linha Zero Lactose" },
              { src: promoPalito, alt: "Palito de Queijo" },
            ].map((img, index) => (
                  <div 
                key={index} 
                className="group relative bg-white rounded-[24px] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.06)] transition-all duration-500 border-4 border-white hover:-translate-y-2 hover:shadow-[0_20px_48px_rgba(100,20,20,0.12)] hover:border-bem-gold/20"
              >
                <div className="aspect-square bg-[#faf8f5] flex items-center justify-center p-0 relative">
                  <div className="absolute inset-0 bg-bem-brown-dark/0 group-hover:bg-bem-brown-dark/5 transition-colors duration-500 z-10 pointer-events-none"></div>
                  <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-full object-cover block transition-transform duration-700 ease-out group-hover:scale-105" />
                </div>
              </div>
            ))}
          </div>

          {/* Flavors Grid */}
          <div className="flex flex-col gap-[30px] mb-10">
            {categories.map((category, index) => (
              <div key={index} className="">
                <div className="text-center mb-6">
                  <h3 className="font-serif text-[clamp(1.5rem,3vw,2.2rem)] text-bem-brown-dark mb-2">
                    {category.title}
                  </h3>
                  {category.description && (
                    <p className="text-bem-text-mid max-w-[600px] mx-auto text-[0.95rem] md:text-[1.05rem] font-light">
                      {category.description}
                    </p>
                  )}
                </div>
              <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-[24px]">
                {category.items.map((p) => (
                  <div 
                    key={p.name} 
                    onClick={() => setLightboxImg({src: p.img, name: p.name})}
                    className="group bg-white rounded-[16px] overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition-all duration-500 cursor-pointer border border-black/5 hover:-translate-y-[8px] hover:border-bem-gold/30 hover:shadow-[0_20px_48px_rgba(100,20,20,0.12)]"
                  >
                    <div className="overflow-hidden bg-[#faf8f5] aspect-square flex items-center justify-center p-0 relative">
                      <div className="absolute inset-0 bg-bem-brown-dark/0 group-hover:bg-bem-brown-dark/5 transition-colors duration-500 z-10 pointer-events-none"></div>
                      <img src={p.img} alt={p.name} loading="lazy" className="w-full h-full object-cover block transition-transform duration-700 ease-out group-hover:scale-[1.08]" />
                    </div>
                    <div className="px-[16px] py-[16px] flex items-center justify-center font-bold text-[13px] text-white text-center bg-gradient-to-br from-bem-red-dark to-bem-red border-t border-bem-gold/40 tracking-[0.06em] min-h-[54px] transition-colors duration-500">
                      {p.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          </div>
        </div>
        
        {/* Embalagens */}
        <div className="py-[80px] px-5 md:px-[40px] mt-[40px] bg-white">
          <div className="text-center px-5 pb-10">
            <h2 className="font-serif text-[clamp(1.8rem,4vw,2.5rem)] text-bem-red-dark mb-3.5">Embalagens Disponíveis</h2>
            <div className="flex justify-center gap-2 mb-[40px]">
                <div className="w-12 h-1 bg-bem-gold rounded-full"></div>
            </div>
          </div>
          <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-1 gap-[50px] items-start">
            <div className="flex flex-col gap-[20px]">
              <div className="bg-gradient-to-br from-[#8f1a1f] to-[#4a1a1a] rounded-[16px] p-[26px_30px] text-white shadow-[0_8px_24px_rgba(100,20,20,0.12)] transition-all duration-500 hover:translate-x-2 border border-white/10 hover:border-bem-gold/30">
                <h3 className="font-serif text-bem-gold text-[1.2rem] mb-2 tracking-wide text-shadow-sm">🎉 Tamanho Festa</h3>
                <p className="text-[0.95rem] text-white/90 leading-[1.6]">Sacola <strong className="font-bold text-white">1 kg</strong> &nbsp;<span className="text-bem-gold/50">·</span>&nbsp; ~<strong className="font-bold text-white">40 unidades</strong></p>
                <div className="text-[0.8rem] text-white/60 mt-2 font-light italic">*Sob encomenda — retirar na fábrica</div>
              </div>
              <div className="bg-gradient-to-br from-[#8f1a1f] to-[#4a1a1a] rounded-[16px] p-[26px_30px] text-white shadow-[0_8px_24px_rgba(100,20,20,0.12)] transition-all duration-500 hover:translate-x-2 border border-white/10 hover:border-bem-gold/30">
                <h3 className="font-serif text-bem-gold text-[1.2rem] mb-2 tracking-wide text-shadow-sm">🥪 Tamanho Lanche</h3>
                <p className="text-[0.95rem] text-white/90 leading-[1.6]">Sacola <strong className="font-bold text-white">500 g</strong> &nbsp;<span className="text-bem-gold/50">·</span>&nbsp; ~<strong className="font-bold text-white">11 unidades</strong></p>
                <div className="text-[0.8rem] text-white/60 mt-2 font-light italic">*Pontos de venda / Revenda</div>
              </div>
              <div className="bg-gradient-to-br from-[#8f1a1f] to-[#4a1a1a] rounded-[16px] p-[26px_30px] text-white shadow-[0_8px_24px_rgba(100,20,20,0.12)] transition-all duration-500 hover:translate-x-2 border border-white/10 hover:border-bem-gold/30">
                <h3 className="font-serif text-bem-gold text-[1.2rem] mb-2 tracking-wide text-shadow-sm">🍽️ Tamanho Super Lanche</h3>
                <p className="text-[0.95rem] text-white/90 leading-[1.6]">Sacola <strong className="font-bold text-white">1 kg</strong> &nbsp;<span className="text-bem-gold/50">·</span>&nbsp; ~<strong className="font-bold text-white">14 unidades</strong></p>
                <div className="text-[0.8rem] text-white/60 mt-2 font-light italic">*Sob encomenda — retirar na fábrica</div>
              </div>
              <div className="bg-gradient-to-br from-[#2e0e0e] to-[#4a1a1a] rounded-[18px] p-8 mt-4 text-center border shadow-[0_8px_32px_rgba(46,14,14,0.3)] border-bem-gold/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-bem-gold/5 -translate-y-1/2 translate-x-1/2 rounded-full blur-[30px]"></div>
                <p className="text-white/85 leading-[1.9] text-[0.95rem] relative z-10">
                  <span className="text-lg">📱</span> Encomendas pelo WhatsApp<br/>
                  <strong className="text-bem-gold font-bold text-[1.1rem] tracking-wide inline-block my-1">(31) 9 8686-6067</strong><br/>
                  Segunda a Sexta &nbsp;<span className="text-bem-gold/50">·</span>&nbsp; 08:00 às 18:00<br/>
                  Iguaçú / Ipatinga – MG<br/>
                  <span className="text-[0.8rem] text-white/40 block mt-2">*Produto congelado</span>
                </p>
                <a href="https://api.whatsapp.com/send?phone=5531986866067&text=Ol%C3%A1%21%20Gostaria%20de%20fazer%20um%20pedido." target="_blank" rel="noreferrer" className="relative z-10 inline-flex items-center justify-center gap-2.5 bg-[#25d366] text-white py-3.5 px-8 rounded-full no-underline font-black text-[13px] tracking-[0.1em] uppercase mt-5 shadow-[0_8px_24px_rgba(37,211,102,0.25)] transition-all duration-500 hover:-translate-y-1 hover:bg-[#20ba59] hover:shadow-[0_12px_32px_rgba(37,211,102,0.4)]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Fazer Pedido
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Modo de Preparo */}
        <div className="py-[80px] px-5 md:px-[40px] mt-10">
          <h2 className="font-serif text-[2.2rem] text-bem-red-dark text-center tracking-tight mb-12">Modo de Preparo</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1100px] mx-auto">
            <div className="bg-white rounded-[24px] p-[40px] px-[46px] border border-black/5 shadow-[0_8px_32px_rgba(0,0,0,0.03)] text-center hover:-translate-y-2 hover:shadow-[0_16px_48px_rgba(0,0,0,0.06)] transition-all duration-500 relative flex flex-col items-center">
              <div className="text-[3.5rem] mb-5 drop-shadow-sm">🔌</div>
              <div className="inline-block bg-[#f8f5f0] text-bem-red-dark gap-2 rounded-full py-1.5 px-5 text-[11px] uppercase tracking-[0.1em] font-black mb-5 border border-bem-red/10">180°C · 30–40 min</div>
              <h3 className="font-serif font-bold text-bem-brown-dark mb-4 text-[1.4rem]">Forno Elétrico</h3>
              <p className="text-[1rem] text-bem-text-mid leading-[1.8] font-light">
                Aqueça o forno por 5 minutos a 180°C. Distribua os pães congelados em uma forma (sem untar), mantendo 2 cm entre eles. Asse por 30 a 40 minutos ou até ficarem dourados.
              </p>
            </div>
            <div className="bg-white rounded-[24px] p-[40px] px-[46px] border border-black/5 shadow-[0_8px_32px_rgba(0,0,0,0.03)] text-center hover:-translate-y-2 hover:shadow-[0_16px_48px_rgba(0,0,0,0.06)] transition-all duration-500 relative flex flex-col items-center overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[6px] bg-gradient-to-r from-bem-red-dark to-bem-red"></div>
              <div className="text-[3.5rem] mb-5 drop-shadow-sm mt-2">🔥</div>
              <div className="inline-block bg-[#f8f5f0] text-bem-red-dark gap-2 rounded-full py-1.5 px-5 text-[11px] uppercase tracking-[0.1em] font-black mb-5 border border-bem-red/10">180°C · 35–45 min</div>
              <h3 className="font-serif font-bold text-bem-brown-dark mb-4 text-[1.4rem]">Forno a Gás</h3>
              <p className="text-[1rem] text-bem-text-mid leading-[1.8] font-light">
                Aqueça o forno por 5 minutos a 180°C. Distribua os pães congelados em uma forma (sem untar), mantendo 2 cm entre eles. Asse por 35 a 45 minutos ou até ficarem dourados.
              </p>
            </div>
            <div className="bg-white rounded-[24px] p-[40px] px-[46px] border border-black/5 shadow-[0_8px_32px_rgba(0,0,0,0.03)] text-center hover:-translate-y-2 hover:shadow-[0_16px_48px_rgba(0,0,0,0.06)] transition-all duration-500 relative flex flex-col items-center">
              <div className="text-[3.5rem] mb-5 drop-shadow-sm">🌬️</div>
              <div className="inline-block bg-[#f8f5f0] text-bem-red-dark gap-2 rounded-full py-1.5 px-5 text-[11px] uppercase tracking-[0.1em] font-black mb-5 border border-bem-red/10">160°C · 15–20 min</div>
              <h3 className="font-serif font-bold text-bem-brown-dark mb-4 text-[1.4rem]">Air Fryer</h3>
              <p className="text-[1rem] text-bem-text-mid leading-[1.8] font-light">
                Aqueça a Air Fryer por 5 minutos a 160°C. Distribua os pães congelados no cesto, mantendo 2 cm entre eles. Asse por 15 a 20 minutos ou até ficarem dourados.
              </p>
            </div>
          </div>
        </div>

      </section>

      {/* 2. Onde encontrar */}
      <section id="onde-encontrar" className="pt-[120px] pb-[80px]">
        <div className="text-center px-5 pb-10">
            <h2 className="font-serif text-[clamp(1.8rem,4vw,2.8rem)] text-bem-red-dark mb-3.5">Onde Encontrar</h2>
            <div className="flex justify-center gap-2 mb-[40px]">
                <div className="w-12 h-1 bg-bem-gold rounded-full"></div>
            </div>
        </div>
        <div className="max-w-[1000px] mx-auto px-5 md:px-10">
          <div className="text-center mb-[50px]">
            <p className="text-bem-text-mid leading-[1.8] text-[1.15rem] max-w-[650px] mx-auto mb-[40px] font-light">
              Encontre o Pão de Queijo Bem Mineiro nas versões <strong className="font-bold text-bem-red-dark">Tradicional e Recheado</strong> nos melhores estabelecimentos da sua cidade.
            </p>
            <a href="https://api.whatsapp.com/send?phone=5531986866067" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2.5 bg-[#25d366] text-white py-4 px-10 rounded-full font-bold text-[14px] tracking-[0.08em] uppercase no-underline shadow-[0_8px_24px_rgba(37,211,102,0.25)] transition-all duration-500 hover:-translate-y-1 hover:bg-[#20ba59] hover:shadow-[0_12px_32px_rgba(37,211,102,0.35)]">
              Consultar pelo WhatsApp
            </a>
          </div>

          <div className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-6 mb-[60px]">
            {[
              { icon: '🥖', name: 'Padaria' },
              { icon: '🏨', name: 'Hotel' },
              { icon: '🍽️', name: 'Restaurante' },
              { icon: '🛒', name: 'Supermercado' },
              { icon: '☕', name: 'Cafeteria' },
              { icon: '🧺', name: 'Empório' },
            ].map((tipo, idx) => (
              <div key={idx} className="bg-white rounded-[22px] p-5 py-9 text-center border border-black/5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(100,20,20,0.08)] hover:border-bem-gold/30 group">
                <div className="text-[2.8rem] mb-4 group-hover:scale-110 transition-transform duration-500">{tipo.icon}</div>
                <h3 className="font-bold text-[15px] text-bem-brown-dark tracking-wide">{tipo.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Seja um ponto de venda */}
      <section id="seja-parceiro" className="bg-bem-brown-dark text-white pt-[120px] pb-[100px] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-bem-gold-dark via-bem-gold to-bem-gold-dark"></div>
        <div className="text-center px-5 pb-10">
            <h2 className="font-serif text-[clamp(1.8rem,4vw,2.8rem)] text-bem-gold mb-3.5 mt-4">Seja um Ponto de Venda</h2>
            <div className="flex justify-center gap-2 mb-[40px]">
                <div className="w-12 h-1 bg-bem-gold/40 rounded-full"></div>
            </div>
        </div>

        <div className="max-w-[800px] mx-auto px-5 md:px-10 flex flex-col md:items-center text-left md:text-center">
          <div className="mb-8">
            <h2 className="font-serif text-[2.2rem] text-white mb-[24px] tracking-tight">Por que revender?</h2>
            <p className="leading-[1.9] text-white/90 mb-10 font-light text-[1.1rem]">
              O Pão de Queijo Bem Mineiro é um produto artesanal de alta qualidade que conquista clientes pelo sabor marcante e pela variedade de recheios. Seja um parceiro e ofereça o melhor para seus clientes!
            </p>
            <ul className="list-none mb-[40px] p-0 space-y-5 text-left inline-block">
              {['Produto artesanal com receita exclusiva', 'Sem conservantes ou aromatizantes', 'Alta variedade de sabores e recheios'].map((benefit, i) => (
                <li key={i} className="flex items-center gap-4 text-white/95 text-[1.1rem] font-light">
                  <span className="text-bem-gold text-[1.2rem] drop-shadow-[0_2px_8px_rgba(212,168,67,0.5)]">✦</span> {benefit}
                </li>
              ))}
            </ul>
          </div>

          <a 
            href="https://api.whatsapp.com/send?phone=5531986866067" 
            target="_blank" 
            rel="noreferrer" 
            className="bg-bem-gold text-bem-brown-dark py-[18px] px-[42px] rounded-full font-bold uppercase shadow-[0_8px_32px_rgba(212,168,67,0.3)] hover:bg-white hover:-translate-y-1.5 transition-all duration-500 tracking-[0.06em] inline-block text-center text-[13px]"
          >
            Quero ser um Ponto de Venda
          </a>
        </div>
      </section>

      {/* 4. Produção */}
      <section id="producao" className="pt-[120px] pb-[100px]">
        <div className="text-center px-5 pb-10">
            <h2 className="font-serif text-[clamp(1.8rem,4vw,2.8rem)] text-bem-red-dark mb-3.5">Nossa Produção</h2>
            <div className="flex justify-center gap-2 mb-[40px]">
                <div className="w-12 h-1 bg-bem-gold rounded-full"></div>
            </div>
        </div>
        <div className="max-w-[1100px] mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[80px] items-center mb-[80px]">
            <div className="rounded-[24px] overflow-hidden shadow-[0_20px_60px_rgba(20,0,0,0.15)] relative group border-4 border-white">
              <img 
                src={regeneratedImage} 
                alt="Queijo curado" 
                className="w-full block h-[500px] object-cover transition-transform duration-[12s] ease-out group-hover:scale-110"
              />
            </div>
            <div className="space-y-6">
              <blockquote className="italic text-bem-gold-dark text-[1.5rem] font-light border-l-[6px] border-bem-gold pl-6 mb-10 leading-[1.6]">
                "A escolha dos ingredientes é e sempre será a nossa maior dedicação."
              </blockquote>
              <h2 className="font-serif text-[2.4rem] tracking-tight text-bem-brown-dark mb-4">Cuidado Artesanal</h2>
              <p className="leading-[1.9] text-bem-text-mid text-[1.1rem] font-light">
                Produzido em escala reduzida, com ingredientes selecionados, naturais e <strong className="font-bold text-bem-red-dark tracking-wide font-normal">sem adição de conservantes e aromatizantes</strong>.
              </p>
              <p className="leading-[1.9] text-bem-text-mid text-[1.1rem] font-light">
                Cada lote é preparado com atenção especial aos detalhes — desde a seleção do queijo minas até o empacotamento final, mantendo o sabor original de quando ensaiávamos a receita em nossa própria cozinha.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Sobre nós */}
      <section id="sobre" className="bg-bem-cream pt-[120px] pb-[100px]">
        <div className="text-center px-5 pb-6">
            <h2 className="font-serif text-[clamp(1.8rem,4vw,2.8rem)] text-bem-red-dark mb-3.5">Sobre Nós</h2>
            <div className="flex justify-center gap-2 mb-[40px]">
                <div className="w-12 h-1 bg-bem-gold rounded-full"></div>
            </div>
        </div>
        <div className="max-w-[1100px] mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[80px] items-center">
            <div className="space-y-7">
              <h2 className="font-serif text-[2.6rem] tracking-tight text-bem-red-dark mb-6">Nossa História</h2>
              <p className="leading-[1.9] text-bem-text-mid text-[1.1rem] font-light">
                O Pão de Queijo Bem Mineiro nasceu em <strong className="font-bold text-bem-red-dark font-normal">2005</strong>, com a iniciativa de sua idealizadora de criar um pão de queijo que tivesse muito queijo, para consumo da família.
              </p>
              <div className="border-l-[4px] border-bem-gold pl-6 py-2 my-8">
                <p className="leading-[1.8] text-bem-brown-dark text-[1.1rem] italic font-light">
                  Mantendo a receita original e exclusiva, o Bem Mineiro oferece hoje um pão de queijo diferenciado — crocante por fora e macio por dentro, com sabor marcante do queijo minas.
                </p>
              </div>
              <p className="leading-[1.9] text-bem-text-mid text-[1.1rem] font-light">
                Através do boca a boca foram surgindo as primeiras encomendas. A demanda cresceu, o espírito empreendedor aflorou e assim começamos a levar nosso sabor para a mesa de mais famílias e negócios.
              </p>
              
              <h2 className="font-serif text-[2.2rem] tracking-tight text-bem-red-dark mt-12 mb-6">Nossa Missão</h2>
              <p className="leading-[1.9] text-bem-text-mid text-[1.1rem] font-light">
                Produzir alimentos de qualidade com sabor e praticidade, proporcionando satisfação aos clientes, funcionários e fornecedores, assegurando a rentabilidade do negócio para perpetuação da empresa.
              </p>
            </div>
            <div className="rounded-[24px] overflow-hidden shadow-[0_20px_60px_rgba(20,0,0,0.12)] relative border-[6px] border-white group">
              <img 
                src={heroBg} 
                alt="Pão de Queijo Bem Mineiro" 
                className="w-full h-full object-cover block h-[550px] transition-transform duration-[15s] group-hover:scale-110"
              />
              <div className="absolute inset-0 border border-black/5 rounded-[18px] pointer-events-none z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Fale conosco */}
      <section id="contato" className="pt-[120px] pb-[120px]">
        <div className="text-center px-5 pb-10">
            <h2 className="font-serif text-[clamp(1.8rem,4vw,2.8rem)] text-bem-red-dark mb-3.5">Fale Conosco</h2>
            <div className="flex justify-center gap-2 mb-[40px]">
                <div className="w-12 h-1 bg-bem-gold rounded-full"></div>
            </div>
        </div>
        <div className="max-w-[850px] mx-auto px-5 md:px-10">
          <div className="bg-white rounded-[32px] p-[40px] md:p-[70px] shadow-[0_16px_60px_rgba(100,20,20,0.08)] border border-black/5">
            <h2 className="font-serif text-[2.6rem] text-bem-red-dark mb-10 tracking-tight text-center">Entre em contato</h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
              <a href="https://api.whatsapp.com/send?phone=5531986866067" target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center p-8 bg-[#fdfaf5] rounded-[24px] w-full text-center hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-500 hover:bg-white no-underline block hover:-translate-y-2 border border-black/5 hover:border-bem-gold/20">
                <div className="text-[2.6rem] mb-5">📞</div>
                <h3 className="font-bold text-bem-red-dark text-[1.05rem] mb-2 uppercase tracking-[0.08em]">WhatsApp</h3>
                <span className="text-bem-text-mid text-[1.2rem] font-light">(31) 9 8686-6067</span>
              </a>
              <a href="mailto:contato@bemmineiroalimentos.com.br" className="flex flex-col items-center justify-center p-8 bg-[#fdfaf5] rounded-[24px] w-full text-center hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-500 hover:bg-white no-underline block hover:-translate-y-2 border border-black/5 hover:border-bem-gold/20">
                <div className="text-[2.6rem] mb-5">📧</div>
                <h3 className="font-bold text-bem-red-dark text-[1.05rem] mb-2 uppercase tracking-[0.08em]">E-mail</h3>
                <span className="text-bem-text-mid text-[1.1rem] font-light">contato@bemmineiroalimentos.com.br</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImg && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-md z-[999] flex items-center justify-center p-5 cursor-pointer transition-all duration-500 animate-in fade-in"
          onClick={(e) => { if (e.target === e.currentTarget) setLightboxImg(null); }}
        >
          <div className="relative max-w-[500px] w-full animate-in zoom-in-95 duration-300 cursor-default">
            <button 
              onClick={() => setLightboxImg(null)}
              className="absolute -top-4 -right-4 bg-white text-bem-red border border-black/5 w-[38px] h-[38px] rounded-full flex items-center justify-center font-black cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:scale-105 hover:bg-gray-50 transition-all z-10"
              aria-label="Fechar"
            >
              ✕
            </button>
            <div className="bg-white p-2 rounded-[24px] shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
              <img 
                src={lightboxImg.src} 
                alt={lightboxImg.name} 
                referrerPolicy="no-referrer"
                className="w-full rounded-[18px] block pointer-events-none border border-black/5"
              />
              <div className="px-6 py-5">
                <div className="font-serif text-[1.6rem] text-bem-brown-dark text-center font-bold">
                  {lightboxImg.name}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
