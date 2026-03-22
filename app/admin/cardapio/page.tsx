'use client';

import { Plus, CreditCard as Edit, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
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
import { products } from '@/lib/mock';
import Image from 'next/image';

const categoryLabels = {
  hamburgueres: 'Hambúrgueres',
  pizzas: 'Pizzas',
  bebidas: 'Bebidas',
  sobremesas: 'Sobremesas',
};

export default function CardapioPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-100 mb-2">Cardápio</h1>
          <p className="text-slate-400">Gerencie os produtos do cardápio</p>
        </div>
        <Button className="bg-red-600 hover:bg-red-700">
          <Plus className="h-4 w-4 mr-2" />
          Novo Item
        </Button>
      </div>

      <Card className="bg-slate-800 border-slate-700 overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="border-slate-700 hover:bg-slate-800">
              <TableHead className="text-slate-300">Imagem</TableHead>
              <TableHead className="text-slate-300">Nome</TableHead>
              <TableHead className="text-slate-300">Categoria</TableHead>
              <TableHead className="text-slate-300">Preço</TableHead>
              <TableHead className="text-slate-300">Destaque</TableHead>
              <TableHead className="text-slate-300 text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map(product => (
              <TableRow key={product.id} className="border-slate-700 hover:bg-slate-700/50">
                <TableCell>
                  <div className="relative h-12 w-12 rounded overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                </TableCell>
                <TableCell className="font-medium text-slate-200">
                  {product.name}
                </TableCell>
                <TableCell className="text-slate-300">
                  <Badge variant="outline" className="border-slate-600 text-slate-300">
                    {categoryLabels[product.category]}
                  </Badge>
                </TableCell>
                <TableCell className="text-slate-200 font-semibold">
                  R$ {product.price.toFixed(2).replace('.', ',')}
                </TableCell>
                <TableCell>
                  {product.featured ? (
                    <Badge className="bg-green-600">Sim</Badge>
                  ) : (
                    <Badge variant="outline" className="border-slate-600 text-slate-400">Não</Badge>
                  )}
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="icon" className="text-slate-400 hover:text-slate-100">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-slate-400 hover:text-red-500">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
