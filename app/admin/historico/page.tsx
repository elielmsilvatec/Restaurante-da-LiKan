import { Card } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

const historicOrders = [
  { id: '#015', customer: 'Pedro Santos', total: 92.50, date: '22/03/2024', time: '12:30' },
  { id: '#014', customer: 'Julia Alves', total: 67.00, date: '22/03/2024', time: '11:45' },
  { id: '#013', customer: 'Ricardo Mendes', total: 125.90, date: '21/03/2024', time: '20:15' },
  { id: '#012', customer: 'Camila Rocha', total: 54.00, date: '21/03/2024', time: '19:30' },
  { id: '#011', customer: 'Fernando Costa', total: 88.50, date: '21/03/2024', time: '18:45' },
];

export default function HistoricoPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-100 mb-2">Histórico de Pedidos</h1>
        <p className="text-slate-400">Visualize todos os pedidos já entregues</p>
      </div>

      <Card className="bg-slate-800 border-slate-700 overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="border-slate-700 hover:bg-slate-800">
              <TableHead className="text-slate-300">Pedido</TableHead>
              <TableHead className="text-slate-300">Cliente</TableHead>
              <TableHead className="text-slate-300">Data</TableHead>
              <TableHead className="text-slate-300">Horário</TableHead>
              <TableHead className="text-slate-300">Total</TableHead>
              <TableHead className="text-slate-300">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {historicOrders.map(order => (
              <TableRow key={order.id} className="border-slate-700 hover:bg-slate-700/50">
                <TableCell className="font-medium text-slate-200">{order.id}</TableCell>
                <TableCell className="text-slate-300">{order.customer}</TableCell>
                <TableCell className="text-slate-300">{order.date}</TableCell>
                <TableCell className="text-slate-300">{order.time}</TableCell>
                <TableCell className="text-slate-200 font-semibold">
                  R$ {order.total.toFixed(2).replace('.', ',')}
                </TableCell>
                <TableCell>
                  <Badge className="bg-green-600">Entregue</Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
