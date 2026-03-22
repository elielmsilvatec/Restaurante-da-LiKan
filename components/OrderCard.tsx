import { Clock, MapPin, Phone, CreditCard } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Order } from '@/types';

interface OrderCardProps {
  order: Order;
}

const statusConfig = {
  'novo': { label: 'Novo', variant: 'destructive' as const },
  'em-preparo': { label: 'Em Preparo', variant: 'default' as const },
  'saiu-entrega': { label: 'Saiu para Entrega', variant: 'secondary' as const },
  'entregue': { label: 'Entregue', variant: 'outline' as const },
};

const paymentLabels = {
  'dinheiro': 'Dinheiro',
  'cartao': 'Cartão',
  'pix': 'PIX',
};

export default function OrderCard({ order }: OrderCardProps) {
  const statusInfo = statusConfig[order.status];

  return (
    <Card className="bg-slate-800 border-slate-700">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h3 className="text-xl font-bold text-slate-100">{order.id}</h3>
            <Badge variant={statusInfo.variant}>{statusInfo.label}</Badge>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <Clock className="h-4 w-4" />
            <span className="text-sm">{order.time}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <p className="text-slate-100 font-semibold">{order.customer.name}</p>
            <div className="flex items-center gap-2 text-slate-400 text-sm mt-1">
              <Phone className="h-4 w-4" />
              <span>{order.customer.phone}</span>
            </div>
            <div className="flex items-start gap-2 text-slate-400 text-sm mt-1">
              <MapPin className="h-4 w-4 mt-0.5" />
              <span>
                {order.customer.address}
                {order.customer.complement && ` - ${order.customer.complement}`}
              </span>
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-sm mt-1">
              <CreditCard className="h-4 w-4" />
              <span>{paymentLabels[order.paymentMethod]}</span>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-4">
            <p className="text-sm text-slate-400 mb-2">Itens do pedido:</p>
            <ul className="space-y-1">
              {order.items.map((item, index) => (
                <li key={index} className="text-slate-300 text-sm">
                  {item.quantity}x {item.product.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-slate-700">
            <span className="text-lg font-bold text-slate-100">
              R$ {order.total.toFixed(2).replace('.', ',')}
            </span>
            <div className="flex gap-2">
              {order.status === 'novo' && (
                <Button size="sm" className="bg-green-600 hover:bg-green-700">
                  Aceitar
                </Button>
              )}
              {order.status === 'em-preparo' && (
                <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
                  Pronto
                </Button>
              )}
              {order.status === 'saiu-entrega' && (
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  Entregue
                </Button>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
