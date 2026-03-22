export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'hamburgueres' | 'pizzas' | 'bebidas' | 'sobremesas';
  featured?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Customer {
  name: string;
  phone: string;
  address: string;
  complement?: string;
}

export interface Order {
  id: string;
  customer: Customer;
  items: CartItem[];
  total: number;
  status: 'novo' | 'em-preparo' | 'saiu-entrega' | 'entregue';
  paymentMethod: 'dinheiro' | 'cartao' | 'pix';
  time: string;
  date: string;
}

export interface Stats {
  salesToday: number;
  ordersToday: number;
  avgTime: number;
}

export interface WeeklySales {
  day: string;
  sales: number;
}
