import OrderCard from '@/components/OrderCard';
import { mockOrders } from '@/lib/mock';

export default function PedidosPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-100 mb-2">Pedidos em Aberto</h1>
        <p className="text-slate-400">Gerencie os pedidos ativos</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {mockOrders.map(order => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
}
