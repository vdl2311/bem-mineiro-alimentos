export const BASE_URL = 'https://bemmineiroalimentos.com.br/wordpress/wp-content/files/bemmineiroalimentos.com.br';

export const products = [
  { name: 'Palito Tradicional',          img: `${BASE_URL}/2022/03/pao-de-queijo-palito-4.webp` },
  { name: 'Sabor Alho Poró',             img: `${BASE_URL}/2021/12/whatsapp-image-2021-12-04-at-172247-1-1.jpeg` },
  { name: 'Sabor Ervas Finas',           img: `${BASE_URL}/2021/12/whatsapp-image-2021-12-04-at-172247.jpeg` },
  { name: 'Sabor Mussarela',             img: `${BASE_URL}/2021/12/whatsapp-image-2021-12-04-at-172246.jpeg` },
  { name: 'Carne de Panela',             img: `${BASE_URL}/2022/03/recheio-de-carne-de-panela-8.webp` },
  { name: 'Pizza',                       img: `${BASE_URL}/2022/03/recheio-de-pizza-12.webp` },
  { name: 'Goiabada',                    img: `${BASE_URL}/2022/03/recheio-de-goiabada-11.webp` },
  { name: 'Provolone',                   img: `${BASE_URL}/2022/03/provolone-8.webp` },
  { name: 'Bacon',                       img: `${BASE_URL}/2022/03/pao-de-queijo-sabor-bacon-7.webp` },
  { name: 'Pernil',                      img: `${BASE_URL}/2022/03/pao-de-queijo-recheio-pernil.webp` },
  { name: 'Peito de Perú c/ Cream Cheese', img: `${BASE_URL}/2022/03/pao-de-queijo-peito-de-peru.webp` },
  { name: 'Calabresa',                   img: `${BASE_URL}/2022/03/pao-de-queijo-calabresa-1.webp` },
  { name: 'Alho Poró c/ Milho',          img: `${BASE_URL}/2022/03/alho-poro-2.webp` },
  { name: 'Tradicional',                 img: `${BASE_URL}/2022/03/tradicional-13.webp` },
  { name: 'Frango',                      img: `${BASE_URL}/2022/03/recheio-de-frango-10.webp` },
];

export const categories = [
  {
    title: 'Pão de Queijo Recheado',
    description: 'Ideal para café da manhã e lanche da tarde. Servir em recepções, coquetéis e também ser vendido em lanchonete e cafeteria. Embalagem: 500g, 1kg. NÃO CONTÉM GLÚTEN. CONTÉM LACTOSE.',
    items: [
      { name: 'Alho Poró c/ Milho', img: `${BASE_URL}/2022/03/alho-poro-2.webp` },
      { name: 'Bacon', img: `${BASE_URL}/2022/03/pao-de-queijo-sabor-bacon-7.webp` },
      { name: 'Calabresa', img: `${BASE_URL}/2022/03/pao-de-queijo-calabresa-1.webp` },
      { name: 'Carne de Panela', img: `${BASE_URL}/2022/03/recheio-de-carne-de-panela-8.webp` },
      { name: 'Frango', img: `${BASE_URL}/2022/03/recheio-de-frango-10.webp` },
      { name: 'Goiabada', img: `${BASE_URL}/2022/03/recheio-de-goiabada-11.webp` },
      { name: 'Peito de Peru c/ Cream Cheese', img: `${BASE_URL}/2022/03/pao-de-queijo-peito-de-peru.webp` },
      { name: 'Pernil', img: `${BASE_URL}/2022/03/pao-de-queijo-recheio-pernil.webp` },
      { name: 'Pizza', img: `${BASE_URL}/2022/03/recheio-de-pizza-12.webp` },
      { name: 'Provolone', img: `${BASE_URL}/2022/03/provolone-8.webp` },
    ]
  },
  {
    title: 'Palito de Queijo',
    description: 'Pcte 500gr - 20 unid. Uma versão prática e deliciosa para todas as horas. NÃO CONTÉM GLÚTEN.',
    items: [
      { name: 'Mussarela', img: `${BASE_URL}/2021/12/whatsapp-image-2021-12-04-at-172246.jpeg` },
      { name: 'Alho Poró', img: `${BASE_URL}/2021/12/whatsapp-image-2021-12-04-at-172247-1-1.jpeg` },
      { name: 'Ervas Finas', img: `${BASE_URL}/2021/12/whatsapp-image-2021-12-04-at-172247.jpeg` },
      { name: 'Tradicional', img: `${BASE_URL}/2022/03/pao-de-queijo-palito-4.webp` }
    ]
  },
  {
    title: 'Linha Zero Lactose',
    description: 'Ideal para dietas com restrição de Lactose. Embalagem: 400g. NÃO CONTÉM GLÚTEN. SEM LACTOSE.',
    items: [
      { name: 'Frango Zero Lactose', img: `${BASE_URL}/2022/03/recheio-de-frango-10.webp` }, // using existing
      { name: 'Palito Zero Lactose', img: `${BASE_URL}/2022/03/pao-de-queijo-palito-4.webp` }, // using existing
      { name: 'Tradicional Zero Lactose', img: `${BASE_URL}/2022/03/tradicional-13.webp` } // using existing
    ]
  },
  {
    title: 'Pão de Queijo Tradicional',
    description: 'A receita original que conquistou o Brasil. NÃO CONTÉM GLÚTEN. CONTÉM LACTOSE.',
    items: [
      { name: 'Tradicional', img: `${BASE_URL}/2022/03/tradicional-13.webp` }
    ]
  }
];