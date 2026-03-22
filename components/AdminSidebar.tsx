'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { UtensilsCrossed, LayoutDashboard, ClipboardList, History, Menu, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';

const menuItems = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/pedidos', label: 'Pedidos em Aberto', icon: ClipboardList },
  { href: '/admin/historico', label: 'Histórico', icon: History },
  { href: '/admin/cardapio', label: 'Cardápio', icon: Menu },
  { href: '/admin/configuracoes', label: 'Configurações', icon: Settings },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-slate-900 text-slate-100 min-h-screen p-6 hidden md:block">
      <div className="flex items-center gap-2 mb-8">
        <UtensilsCrossed className="h-8 w-8 text-red-500" />
        <div>
          <h1 className="font-bold text-lg">Admin Likah</h1>
          <p className="text-xs text-slate-400">Painel de Controle</p>
        </div>
      </div>

      <nav className="space-y-2">
        {menuItems.map(item => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 px-4 py-3 rounded-lg transition-colors',
                isActive
                  ? 'bg-red-600 text-white'
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              )}
            >
              <Icon className="h-5 w-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
