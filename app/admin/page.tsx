'use client';

import { DollarSign, ShoppingBag, Clock } from 'lucide-react';
import StatCard from '@/components/StatCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { stats, weeklySales } from '@/lib/mock';

export default function AdminDashboard() {
  const maxSales = Math.max(...weeklySales.map(d => d.sales));

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-100 mb-2">Dashboard</h1>
        <p className="text-slate-400">Visão geral das operações de hoje</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          title="Vendas Hoje"
          value={`R$ ${stats.salesToday.toFixed(2).replace('.', ',')}`}
          icon={DollarSign}
          iconColor="text-green-500"
        />
        <StatCard
          title="Pedidos Hoje"
          value={stats.ordersToday.toString()}
          icon={ShoppingBag}
          iconColor="text-blue-500"
        />
        <StatCard
          title="Tempo Médio"
          value={`${stats.avgTime} min`}
          icon={Clock}
          iconColor="text-orange-500"
        />
      </div>

      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-slate-100">Vendas da Semana</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] flex items-end justify-between gap-4">
            {weeklySales.map((day) => (
              <div key={day.day} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full bg-slate-700 rounded-t-lg relative" style={{ height: `${(day.sales / maxSales) * 250}px` }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-red-600 to-orange-500 rounded-t-lg" />
                </div>
                <span className="text-sm text-slate-400">{day.day}</span>
                <span className="text-xs text-slate-500">R$ {day.sales}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-slate-100">Produtos Mais Vendidos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {['X-Burger Artesanal', 'Pizza Calabresa', 'Batata Frita GG'].map((item, index) => (
                <div key={item} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-red-600 flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <span className="text-slate-200">{item}</span>
                  </div>
                  <span className="text-slate-400">{45 - index * 10} vendas</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-slate-100">Atividade Recente</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { time: '14:30', text: 'Novo pedido #001 recebido' },
                { time: '14:15', text: 'Pedido #002 saiu para entrega' },
                { time: '13:45', text: 'Pedido #003 foi entregue' },
              ].map((activity, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-red-500 mt-2" />
                  <div className="flex-1">
                    <p className="text-slate-200 text-sm">{activity.text}</p>
                    <p className="text-xs text-slate-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
