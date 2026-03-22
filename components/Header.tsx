'use client';

import Link from 'next/link';
import { UtensilsCrossed, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="border-b bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-red-600">
            <UtensilsCrossed className="h-6 w-6" />
            <span>Restaurante da Likah</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/#cardapio" className="text-gray-700 hover:text-red-600 transition-colors">
              Cardápio
            </Link>
            <Link href="/#sobre" className="text-gray-700 hover:text-red-600 transition-colors">
              Sobre
            </Link>
            <Link href="/#contato" className="text-gray-700 hover:text-red-600 transition-colors">
              Contato
            </Link>
          </nav>

          <Link href="/pedido">
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Fazer Pedido
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
