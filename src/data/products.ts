import alhoPoro from '../assets/images/alho poro.PNG';
import calabresa from '../assets/images/pao de queijo calabresa (1).jpeg';
import palitoTradicional from '../assets/images/pao de queijo palito (4).jpeg';
import peitoPeru from '../assets/images/pao de queijo peito de peru.jpg';
import pernil from '../assets/images/pao de queijo recheio pernil.jpg';
import bacon from '../assets/images/pao de queijo sabor bacon.jpg';
import provolone from '../assets/images/provolone.jpg';
import carnePanela from '../assets/images/recheio de carne de panela.jpg';
import frango from '../assets/images/recheio de frango.jpg';
import goiabada from '../assets/images/recheio de goiabada.jpg';
import pizza from '../assets/images/recheio de pizza.jpg';
import tradicional from '../assets/images/tradicional (13).png';

export const BASE_URL = 'https://www.bemmineiroalimentos.com.br/wordpress/wp-content/files/bemmineiroalimentos.com.br';

export const products = [
  { name: 'Palito Tradicional',          img: palitoTradicional },
  { name: 'Sabor Alho Poró',             img: `${BASE_URL}/2021/12/whatsapp-image-2021-12-04-at-172247-1-1.jpeg` },
  { name: 'Sabor Ervas Finas',           img: `${BASE_URL}/2021/12/whatsapp-image-2021-12-04-at-172247.jpeg` },
  { name: 'Sabor Mussarela',             img: `${BASE_URL}/2021/12/whatsapp-image-2021-12-04-at-172246.jpeg` },
  { name: 'Carne de Panela',             img: carnePanela },
  { name: 'Pizza',                       img: pizza },
  { name: 'Goiabada',                    img: goiabada },
  { name: 'Provolone',                   img: provolone },
  { name: 'Bacon',                       img: bacon },
  { name: 'Pernil',                      img: pernil },
  { name: 'Peito de Perú c/ Cream Cheese', img: peitoPeru },
  { name: 'Calabresa',                   img: calabresa },
  { name: 'Alho Poró c/ Milho',          img: alhoPoro },
  { name: 'Tradicional',                 img: tradicional },
  { name: 'Frango',                      img: frango },
];

export const categories = [
  {
    title: 'Pão de Queijo Recheado',
    description: 'Ideal para café da manhã e lanche da tarde. Servir em recepções, coquetéis e também ser vendido em lanchonete e cafeteria. Embalagem: 500g, 1kg. NÃO CONTÉM GLÚTEN. CONTÉM LACTOSE.',
    items: [
      { name: 'Alho Poró c/ Milho', img: alhoPoro },
      { name: 'Bacon', img: bacon },
      { name: 'Calabresa', img: calabresa },
      { name: 'Carne de Panela', img: carnePanela },
      { name: 'Frango', img: frango },
      { name: 'Goiabada', img: goiabada },
      { name: 'Peito de Peru c/ Cream Cheese', img: peitoPeru },
      { name: 'Pernil', img: pernil },
      { name: 'Pizza', img: pizza },
      { name: 'Provolone', img: provolone },
    ]
  },
  {
    title: 'Palito de Queijo',
    description: 'Pcte 500gr - 20 unid. Uma versão prática e deliciosa para todas as horas. NÃO CONTÉM GLÚTEN.',
    items: [
      { name: 'Mussarela', img: `${BASE_URL}/2021/12/whatsapp-image-2021-12-04-at-172246.jpeg` },
      { name: 'Alho Poró', img: `${BASE_URL}/2021/12/whatsapp-image-2021-12-04-at-172247-1-1.jpeg` },
      { name: 'Ervas Finas', img: `${BASE_URL}/2021/12/whatsapp-image-2021-12-04-at-172247.jpeg` },
      { name: 'Tradicional', img: palitoTradicional }
    ]
  },
  {
    title: 'Linha Zero Lactose',
    description: 'Ideal para dietas com restrição de Lactose. Embalagem: 400g. NÃO CONTÉM GLÚTEN. SEM LACTOSE.',
    items: [
      { name: 'Frango Zero Lactose', img: frango }, 
      { name: 'Palito Zero Lactose', img: palitoTradicional }, 
      { name: 'Tradicional Zero Lactose', img: tradicional }
    ]
  },
  {
    title: 'Pão de Queijo Tradicional',
    description: 'A receita original que conquistou o Brasil. NÃO CONTÉM GLÚTEN. CONTÉM LACTOSE.',
    items: [
      { name: 'Tradicional', img: tradicional }
    ]
  }
];