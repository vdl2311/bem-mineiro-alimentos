import React, { useState } from 'react';
import { products, BASE_URL } from '../data/products';

export default function Home() {
  const [showToastVenda, setShowToastVenda] = useState(false);
  const [showToastContato, setShowToastContato] = useState(false);

  const handleSubmitVenda = (e: React.FormEvent) => {
    e.preventDefault();
    setShowToastVenda(true);
    setTimeout(() => setShowToastVenda(false), 3500);
  };

  const handleSubmitContato = (e: React.FormEvent) => {
    e.preventDefault();
    setShowToastContato(true);
    setTimeout(() => setShowToastContato(false), 3500);
  };

  return (
    <div className="animate-fade-in-up">
      {/* Hero Section */}
      <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-bem-brown-dark/70 mix-blend-multiply z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-bem-brown-dark via-transparent to-black/50 z-10"></div>
        <div 
          className="absolute inset-0 bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url('https://bemmineiroalimentos.com.br/wordpress/wp-content/files/bemmineiroalimentos.com.br/2021/02/pao-de-queijo-palito-4.jpeg')` }}
        ></div>
        
        {/* Top/Bottom Borders */}
        <div className="absolute left-0 right-0 top-0 h-1 bg-bem-gold/80 z-20"></div>
        <div className="absolute left-0 right-0 bottom-0 h-1 bg-bem-gold/80 z-20"></div>
        
        <div className="relative z-20 text-center text-white py-16 px-6 max-w-4xl mx-auto">
          <h1 className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] font-black text-white leading-tight tracking-[0.02em] mb-6 drop-shadow-lg">
            Vai Bem Com <span className="text-bem-gold">Seu Dia!</span>
          </h1>
          <p className="text-lg md:text-xl text-white/95 max-w-2xl mx-auto mb-10 leading-relaxed font-light drop-shadow">
            Pão de queijo artesanal com receita original e exclusiva — crocante por fora, macio por dentro, com o marcante sabor do queijo minas.
          </p>
          <a 
            href="#produtos"
            className="inline-flex items-center justify-center bg-bem-red text-white py-4 px-10 rounded-full font-bold text-[14px] tracking-[0.1em] uppercase shadow-[0_8px_30px_rgba(192,39,45,0.4)] transition-all duration-300 hover:-translate-y-1 hover:bg-bem-red-dark hover:shadow-[0_12px_40px_rgba(192,39,45,0.6)]"
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
            Pão de queijo congelado <strong className="font-bold text-bem-brown-dark">Tradicional e Recheado</strong> — disponível em diferentes tamanhos para todos os momentos.
          </p>
        </div>

        <div className="py-[10px] px-5 md:px-[40px] max-w-[1200px] mx-auto">
          <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-[30px]">
            {products.map((p) => (
              <div key={p.name} className="bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 cursor-pointer border border-transparent hover:-translate-y-[7px] hover:shadow-[0_15px_40px_rgba(0,0,0,0.1)] group">
                <div className="overflow-hidden bg-gray-50 aspect-square flex items-center justify-center p-6 relative">
                  <div className="absolute inset-0 bg-bem-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img src={p.img} alt={p.name} loading="lazy" className="w-full h-full object-contain block transition-transform duration-500 group-hover:scale-110 drop-shadow-md" />
                </div>
                <div className="p-5 font-bold text-[14.5px] text-bem-brown-dark text-center bg-white border-t border-gray-50 tracking-[0.03em]">
                  {p.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modo de Preparo */}
        <div className="py-[80px] px-5 md:px-[40px] mt-10">
          <h2 className="font-serif text-[2.2rem] text-bem-red-dark text-center tracking-tight mb-12">Modo de Preparo</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1100px] mx-auto">
            <div className="bg-white rounded-[24px] p-[40px] border border-gray-100 shadow-lg text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="text-[3rem] mb-4">🔌</div>
              <div className="inline-block bg-bem-red text-white gap-2 rounded-full py-1 px-4 text-[12px] uppercase tracking-wide font-bold mb-4">180°C · 30–40 min</div>
              <h3 className="font-serif font-bold text-bem-brown-dark mb-3 text-[1.2rem]">Forno Elétrico</h3>
              <p className="text-[0.95rem] text-bem-text-mid leading-relaxed">
                Aqueça o forno por 5 minutos a 180°C. Distribua os pães congelados em uma forma (sem untar), mantendo 2 cm entre eles. Asse por 30 a 40 minutos ou até ficarem dourados.
              </p>
            </div>
            <div className="bg-white rounded-[24px] p-[40px] border border-gray-100 shadow-lg text-center hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-bem-red"></div>
              <div className="text-[3rem] mb-4">🔥</div>
              <div className="inline-block bg-bem-red text-white gap-2 rounded-full py-1 px-4 text-[12px] uppercase tracking-wide font-bold mb-4">180°C · 35–45 min</div>
              <h3 className="font-serif font-bold text-bem-brown-dark mb-3 text-[1.2rem]">Forno a Gás</h3>
              <p className="text-[0.95rem] text-bem-text-mid leading-relaxed">
                Aqueça o forno por 5 minutos a 180°C. Distribua os pães congelados em uma forma (sem untar), mantendo 2 cm entre eles. Asse por 35 a 45 minutos ou até ficarem dourados.
              </p>
            </div>
            <div className="bg-white rounded-[24px] p-[40px] border border-gray-100 shadow-lg text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="text-[3rem] mb-4">🌬️</div>
              <div className="inline-block bg-bem-red text-white gap-2 rounded-full py-1 px-4 text-[12px] uppercase tracking-wide font-bold mb-4">160°C · 15–20 min</div>
              <h3 className="font-serif font-bold text-bem-brown-dark mb-3 text-[1.2rem]">Air Fryer</h3>
              <p className="text-[0.95rem] text-bem-text-mid leading-relaxed">
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
            <p className="text-bem-text-mid leading-relaxed text-[1.1rem] max-w-[650px] mx-auto mb-[34px] font-light">
              Encontre o Pão de Queijo Bem Mineiro nas versões <strong className="font-bold text-bem-brown-dark">Tradicional e Recheado</strong> nos melhores estabelecimentos da sua cidade.
            </p>
            <a href="https://api.whatsapp.com/send?phone=5531986866067" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2.5 bg-[#25d366] text-white py-4 px-10 rounded-full font-bold text-[14px] tracking-[0.08em] uppercase no-underline shadow-[0_8px_30px_rgba(37,211,102,0.3)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#20ba59]">
              Consultar pelo WhatsApp
            </a>
          </div>

          <div className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-5 mb-[60px]">
            {[
              { icon: '🥖', name: 'Padaria' },
              { icon: '🏨', name: 'Hotel' },
              { icon: '🍽️', name: 'Restaurante' },
              { icon: '🛒', name: 'Supermercado' },
              { icon: '☕', name: 'Cafeteria' },
              { icon: '🧺', name: 'Empório' },
            ].map((tipo, idx) => (
              <div key={idx} className="bg-white rounded-[20px] p-4 py-8 text-center border border-gray-100 shadow-sm transition-transform hover:-translate-y-1">
                <div className="text-[2.6rem] mb-3">{tipo.icon}</div>
                <h3 className="font-bold text-[14px] text-bem-brown-dark">{tipo.name}</h3>
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
        {showToastVenda && (
          <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-[#20ba59] text-white py-3.5 px-7 rounded-full font-bold text-[14px] border-2 border-white/20 shadow-[0_4px_20px_rgba(0,0,0,0.3)] z-[999]">
            ✅ Cadastro enviado com sucesso!
          </div>
        )}

        <div className="max-w-[1000px] mx-auto px-5 md:px-10 grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-[60px] items-start">
          <div>
            <h2 className="font-serif text-[2rem] text-white mb-[20px] tracking-tight">Por que revender?</h2>
            <p className="leading-[1.9] text-white/80 mb-8 font-light text-[1.05rem]">
              O Pão de Queijo Bem Mineiro é um produto artesanal de alta qualidade que conquista clientes pelo sabor marcante e pela variedade de recheios. Seja um parceiro e ofereça o melhor para seus clientes!
            </p>
            <ul className="list-none mb-[28px] p-0 space-y-4">
              {['Produto artesanal com receita exclusiva', 'Sem conservantes ou aromatizantes', 'Alta variedade de sabores e recheios'].map((benefit, i) => (
                <li key={i} className="flex items-center gap-3 text-white/90 text-[1.05rem]">
                  <span className="text-bem-gold text-[1.4rem]">✦</span> {benefit}
                </li>
              ))}
            </ul>
          </div>

          <form onSubmit={handleSubmitVenda} className="bg-white/10 backdrop-blur-md rounded-[24px] p-[40px] shadow-2xl border border-white/10 text-bem-text-dark">
            <h2 className="font-serif text-[1.7rem] tracking-tight text-white mb-[24px] text-center">Inicie seu Cadastro</h2>
            <div className="mb-4">
              <input type="text" placeholder="Nome do seu negócio" required className="w-full py-[15px] px-[20px] rounded-[12px] bg-white/90 outline-none focus:ring-2 focus:ring-bem-gold border border-transparent shadow-inner" />
            </div>
            <div className="mb-6">
              <input type="tel" placeholder="Seu WhatsApp" required className="w-full py-[15px] px-[20px] rounded-[12px] bg-white/90 outline-none focus:ring-2 focus:ring-bem-gold border border-transparent shadow-inner" />
            </div>
            <button type="submit" className="bg-bem-gold text-bem-brown-dark py-[16px] w-full rounded-full font-bold uppercase shadow-lg hover:bg-white hover:-translate-y-1 transition-all tracking-[0.05em]">
              Quero ser um Ponto de Venda
            </button>
          </form>
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
        <div className="max-w-[1000px] mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] items-center mb-[80px]">
            <div className="rounded-3xl overflow-hidden shadow-2xl relative group">
              <img 
                src="https://bemmineiroalimentos.com.br/wordpress/wp-content/files/bemmineiroalimentos.com.br/2021/02/queijo-curado.jpg" 
                alt="Queijo curado" 
                className="w-full block h-[450px] object-cover transition-transform duration-[10s] group-hover:scale-105"
              />
            </div>
            <div className="space-y-6">
              <blockquote className="italic text-bem-gold-dark text-[1.4rem] font-light border-l-4 border-bem-gold pl-6 mb-8 leading-relaxed">
                "A escolha dos ingredientes é e sempre será a nossa maior dedicação."
              </blockquote>
              <h2 className="font-serif text-[2.2rem] tracking-tight text-bem-red-dark mb-4">Cuidado Artesanal</h2>
              <p className="leading-relaxed text-bem-text-mid text-[1.05rem]">
                Produzido em escala reduzida, com ingredientes selecionados, naturais e <strong className="font-bold text-bem-red tracking-wide">sem adição de conservantes e aromatizantes</strong>.
              </p>
              <p className="leading-relaxed text-bem-text-mid text-[1.05rem]">
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
        <div className="max-w-[1000px] mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] md:gap-[80px] items-center">
            <div className="space-y-6">
              <h2 className="font-serif text-[2.5rem] tracking-tight text-bem-red-dark mb-4">Nossa História</h2>
              <p className="leading-relaxed text-bem-text-mid text-[1.05rem]">
                O Pão de Queijo Bem Mineiro nasceu em <strong className="font-bold text-bem-red">2005</strong>, com a iniciativa de sua idealizadora de criar um pão de queijo que tivesse muito queijo, para consumo da família.
              </p>
              <p className="leading-relaxed text-bem-text-mid text-[1.05rem] border-l-[3px] border-bem-gold pl-5 italic my-6 bg-white/50 py-3 pr-3 text-bem-brown-dark rounded-r-[8px]">
                Mantendo a receita original e exclusiva, o Bem Mineiro oferece hoje um pão de queijo diferenciado — crocante por fora e macio por dentro, com sabor marcante do queijo minas.
              </p>
              <p className="leading-relaxed text-bem-text-mid text-[1.05rem]">
                Através do boca a boca foram surgindo as primeiras encomendas. A demanda cresceu, o espírito empreendedor aflorou e assim começamos a levar nosso sabor para a mesa de mais famílias e negócios.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl relative">
              <img 
                src="https://bemmineiroalimentos.com.br/wordpress/wp-content/files/bemmineiroalimentos.com.br/2021/02/pao-de-queijo-palito-4.jpeg" 
                alt="Pão de Queijo Bem Mineiro" 
                className="w-full h-full object-cover block h-[500px]"
              />
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
        {showToastContato && (
          <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-bem-red-dark text-white py-3.5 px-7 rounded-full font-bold text-[14px] border-2 border-bem-gold shadow-[0_4px_20px_rgba(0,0,0,0.3)] z-[999]">
            ✅ Mensagem enviada com sucesso!
          </div>
        )}
        <div className="max-w-[1000px] mx-auto px-5 md:px-10 grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-[60px]">
          <div>
            <h2 className="font-serif text-[2.2rem] text-bem-red-dark mb-8 tracking-tight">Entre em contato</h2>
            <div className="flex items-start gap-4 mb-6 p-6 bg-white rounded-[20px] border border-gray-100 shadow-sm">
              <div className="text-[1.8rem] shrink-0 mt-0.5">📞</div>
              <div>
                <h3 className="font-bold text-bem-red-dark text-[0.95rem] mb-1.5 uppercase tracking-[0.05em]">Telefone / WhatsApp</h3>
                <a href="https://api.whatsapp.com/send?phone=5531986866067" target="_blank" rel="noreferrer" className="text-bem-text-mid text-[1.05rem] no-underline hover:text-bem-red">(31) 9 8686-6067</a>
              </div>
            </div>
            <div className="flex items-start gap-4 mb-6 p-6 bg-white rounded-[20px] border border-gray-100 shadow-sm">
              <div className="text-[1.8rem] shrink-0 mt-0.5">📧</div>
              <div>
                <h3 className="font-bold text-bem-red-dark text-[0.95rem] mb-1.5 uppercase tracking-[0.05em]">E-mail</h3>
                <a href="mailto:contato@bemmineiroalimentos.com.br" className="text-bem-text-mid text-[1.05rem] no-underline hover:text-bem-red">contato@bemmineiroalimentos.com.br</a>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmitContato} className="bg-white rounded-[24px] p-[40px] md:p-[50px] shadow-xl border border-gray-100">
            <h2 className="font-serif text-[1.8rem] tracking-tight text-bem-red-dark mb-[24px]">Envie uma Mensagem</h2>
            <div className="mb-5">
              <input type="text" placeholder="Seu nome" required className="w-full py-[15px] px-[20px] border border-gray-200 rounded-[12px] bg-gray-50 outline-none focus:border-bem-red focus:bg-white" />
            </div>
            <div className="mb-5">
              <input type="email" placeholder="Seu email" required className="w-full py-[15px] px-[20px] border border-gray-200 rounded-[12px] bg-gray-50 outline-none focus:border-bem-red focus:bg-white" />
            </div>
            <div className="mb-6">
              <textarea placeholder="Como podemos ajudar?" required className="w-full py-[15px] px-[20px] border border-gray-200 rounded-[12px] bg-gray-50 outline-none focus:border-bem-red focus:bg-white h-[120px] resize-y"></textarea>
            </div>
            <button type="submit" className="bg-bem-red text-white py-[16px] px-[40px] rounded-[12px] font-bold w-full hover:-translate-y-1 hover:shadow-lg transition-transform">
              Enviar Mensagem
            </button>
          </form>
        </div>
      </section>

    </div>
  );
}
