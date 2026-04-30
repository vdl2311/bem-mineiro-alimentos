import React from 'react';

export default function PageBanner({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="bg-gradient-to-br from-bem-brown text-center to-bem-red-dark py-14 px-10 border-b border-bem-gold/30 relative overflow-hidden shadow-inner">
      <div className="absolute inset-0 bg-pattern-overlay mix-blend-overlay"></div>
      <h1 className="font-serif text-[clamp(1.8rem,4vw,3rem)] text-bem-gold relative z-10">{title}</h1>
      <p className="text-white/75 mt-2.5 text-base relative z-10">{subtitle}</p>
    </div>
  );
}
