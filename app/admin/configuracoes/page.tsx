'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';

export default function ConfiguracoesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-100 mb-2">Configurações</h1>
        <p className="text-slate-400">Gerencie as configurações do restaurante</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-slate-100">Informações do Restaurante</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="name" className="text-slate-300">Nome</Label>
              <Input
                id="name"
                defaultValue="Restaurante da Likah"
                className="bg-slate-700 border-slate-600 text-slate-100"
              />
            </div>
            <div>
              <Label htmlFor="phone" className="text-slate-300">Telefone</Label>
              <Input
                id="phone"
                defaultValue="(11) 99999-9999"
                className="bg-slate-700 border-slate-600 text-slate-100"
              />
            </div>
            <div>
              <Label htmlFor="address" className="text-slate-300">Endereço</Label>
              <Input
                id="address"
                defaultValue="Rua das Flores, 123"
                className="bg-slate-700 border-slate-600 text-slate-100"
              />
            </div>
            <Button className="w-full bg-red-600 hover:bg-red-700">
              Salvar Alterações
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-slate-100">Configurações de Entrega</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="delivery-fee" className="text-slate-300">Taxa de Entrega</Label>
              <Input
                id="delivery-fee"
                type="number"
                defaultValue="8.00"
                className="bg-slate-700 border-slate-600 text-slate-100"
              />
            </div>
            <div>
              <Label htmlFor="min-order" className="text-slate-300">Pedido Mínimo</Label>
              <Input
                id="min-order"
                type="number"
                defaultValue="25.00"
                className="bg-slate-700 border-slate-600 text-slate-100"
              />
            </div>
            <div>
              <Label htmlFor="prep-time" className="text-slate-300">Tempo de Preparo (min)</Label>
              <Input
                id="prep-time"
                type="number"
                defaultValue="35"
                className="bg-slate-700 border-slate-600 text-slate-100"
              />
            </div>
            <Button className="w-full bg-red-600 hover:bg-red-700">
              Salvar Alterações
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-slate-100">Operação</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-slate-200">Aceitar Novos Pedidos</p>
                <p className="text-sm text-slate-400">Ative para receber pedidos</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-slate-200">Modo Manutenção</p>
                <p className="text-sm text-slate-400">Desative o site temporariamente</p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-slate-200">Notificações Sonoras</p>
                <p className="text-sm text-slate-400">Som ao receber novo pedido</p>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-slate-100">Segurança</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="current-pass" className="text-slate-300">Senha Atual</Label>
              <Input
                id="current-pass"
                type="password"
                className="bg-slate-700 border-slate-600 text-slate-100"
              />
            </div>
            <div>
              <Label htmlFor="new-pass" className="text-slate-300">Nova Senha</Label>
              <Input
                id="new-pass"
                type="password"
                className="bg-slate-700 border-slate-600 text-slate-100"
              />
            </div>
            <div>
              <Label htmlFor="confirm-pass" className="text-slate-300">Confirmar Nova Senha</Label>
              <Input
                id="confirm-pass"
                type="password"
                className="bg-slate-700 border-slate-600 text-slate-100"
              />
            </div>
            <Button className="w-full bg-red-600 hover:bg-red-700">
              Alterar Senha
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
