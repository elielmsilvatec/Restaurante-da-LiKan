'use client';

import Link from 'next/link';
import { Beef, Pizza, Coffee, Cake } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CategoryCard from '@/components/CategoryCard';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { products } from '@/lib/mock';

export default function Home() {
  const featuredProducts = products.filter(p => p.featured);

  return (
    <>
      <Header />

      <section className="relative h-[600px] flex items-center justify-center text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600&h=900&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Sabor que conquista
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Os melhores hambúrgueres e pizzas artesanais da região
          </p>
          <Link href="/pedido">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-lg px-8 py-6">
              Ver Cardápio
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Categorias</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <CategoryCard name="Hambúrgueres" icon={Beef} />
            <CategoryCard name="Pizzas" icon={Pizza} />
            <CategoryCard name="Bebidas" icon={Coffee} />
            <CategoryCard name="Sobremesas" icon={Cake} />
          </div>
        </div>
      </section>

      <section id="cardapio" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Produtos em Destaque</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/pedido">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                Ver Cardápio Completo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section id="sobre" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Sobre Nós</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              O Restaurante da Likah nasceu da paixão por criar experiências gastronômicas únicas.
              Nossos hambúrgueres artesanais são preparados com ingredientes selecionados e muito amor.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Cada pizza é feita com massa fresca e coberturas de primeira qualidade.
              Venha nos visitar e descubra por que somos o favorito da região!
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
