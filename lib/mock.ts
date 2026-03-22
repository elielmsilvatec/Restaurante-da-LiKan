import { Product, Order, Stats, WeeklySales } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'X-Burger Artesanal',
    description: 'Hambúrguer artesanal 180g, queijo cheddar, alface, tomate e molho especial',
    price: 35.90,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
    category: 'hamburgueres',
    featured: true,
  },
  {
    id: '2',
    name: 'Pizza Calabresa',
    description: 'Molho de tomate, mussarela, calabresa fatiada e cebola',
    price: 45.00,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop',
    category: 'pizzas',
    featured: true,
  },
  {
    id: '3',
    name: 'Refrigerante 2L',
    description: 'Refrigerante sabores variados 2 litros',
    price: 12.00,
    image: 'https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=400&h=300&fit=crop',
    category: 'bebidas',
    featured: true,
  },
  {
    id: '4',
    name: 'Batata Frita GG',
    description: 'Porção gigante de batatas fritas crocantes com cheddar e bacon',
    price: 28.90,
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop',
    category: 'hamburgueres',
    featured: true,
  },
  {
    id: '5',
    name: 'Milk Shake',
    description: 'Milk shake cremoso sabores: chocolate, morango ou baunilha',
    price: 18.00,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop',
    category: 'bebidas',
    featured: true,
  },
  {
    id: '6',
    name: 'Pudim',
    description: 'Pudim de leite condensado com calda de caramelo',
    price: 15.00,
    image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400&h=300&fit=crop',
    category: 'sobremesas',
    featured: true,
  },
  {
    id: '7',
    name: 'X-Bacon Especial',
    description: 'Hambúrguer 200g, bacon crocante, queijo e cebola caramelizada',
    price: 42.90,
    image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&h=300&fit=crop',
    category: 'hamburgueres',
  },
  {
    id: '8',
    name: 'Pizza Margherita',
    description: 'Molho de tomate, mussarela de búfala, manjericão fresco',
    price: 48.00,
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop',
    category: 'pizzas',
  },
];

export const mockOrders: Order[] = [
  {
    id: '#001',
    customer: {
      name: 'Maria Oliveira',
      phone: '(11) 98765-4321',
      address: 'Rua das Acácias, 456',
      complement: 'Casa 2',
    },
    items: [
      { product: products[0], quantity: 2 },
      { product: products[2], quantity: 1 },
    ],
    total: 83.80,
    status: 'novo',
    paymentMethod: 'pix',
    time: '14:30',
    date: '2024-03-22',
  },
  {
    id: '#002',
    customer: {
      name: 'Carlos Souza',
      phone: '(11) 97654-3210',
      address: 'Av. Paulista, 1000',
      complement: 'Apto 501',
    },
    items: [
      { product: products[1], quantity: 1 },
    ],
    total: 45.00,
    status: 'em-preparo',
    paymentMethod: 'cartao',
    time: '14:15',
    date: '2024-03-22',
  },
  {
    id: '#003',
    customer: {
      name: 'Ana Lima',
      phone: '(11) 96543-2109',
      address: 'Rua dos Jacarandás, 789',
      complement: 'Bloco B',
    },
    items: [
      { product: products[0], quantity: 2 },
      { product: products[3], quantity: 1 },
      { product: products[4], quantity: 1 },
    ],
    total: 118.70,
    status: 'saiu-entrega',
    paymentMethod: 'dinheiro',
    time: '13:45',
    date: '2024-03-22',
  },
];

export const stats: Stats = {
  salesToday: 1250.00,
  ordersToday: 15,
  avgTime: 35,
};

export const weeklySales: WeeklySales[] = [
  { day: 'Seg', sales: 850 },
  { day: 'Ter', sales: 1200 },
  { day: 'Qua', sales: 980 },
  { day: 'Qui', sales: 1450 },
  { day: 'Sex', sales: 1890 },
  { day: 'Sáb', sales: 2100 },
  { day: 'Dom', sales: 1650 },
];
