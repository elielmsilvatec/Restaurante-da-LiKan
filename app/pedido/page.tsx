'use client';

import { useState } from 'react';
import { Check, ArrowRight, ShoppingBag } from 'lucide-react';
import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import CartItem from '@/components/CartItem';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { products } from '@/lib/mock';
import { Product, CartItem as CartItemType } from '@/types';

export default function PedidoPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [currentStep, setCurrentStep] = useState(1);
  const [cart, setCart] = useState<CartItemType[]>([
    { product: products[0], quantity: 2 },
    { product: products[2], quantity: 1 },
  ]);

  const filteredProducts =
    selectedCategory === 'todos'
      ? products
      : products.filter(p => p.category === selectedCategory);

  const total = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const handleAddToCart = (product: Product) => {
    const existing = cart.find(item => item.product.id === product.id);
    if (existing) {
      setCart(
        cart.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { product, quantity: 1 }]);
    }
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    setCart(
      cart.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemove = (productId: string) => {
    setCart(cart.filter(item => item.product.id !== productId));
  };

  if (currentStep === 4) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
          <Card className="max-w-md w-full p-8 text-center">
            <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Pedido Confirmado!</h1>
            <p className="text-xl text-gray-600 mb-4">Pedido #001</p>
            <p className="text-gray-700 mb-6">
              Seu pedido foi recebido com sucesso e está sendo preparado.
            </p>
            <div className="bg-orange-50 rounded-lg p-4 mb-6">
              <p className="text-sm text-gray-600">Tempo estimado de entrega</p>
              <p className="text-2xl font-bold text-orange-600">45 minutos</p>
            </div>
            <Button
              onClick={() => (window.location.href = '/')}
              className="w-full bg-red-600 hover:bg-red-700"
            >
              Voltar ao Início
            </Button>
          </Card>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {currentStep === 1 && (
              <>
                <h1 className="text-3xl font-bold mb-6">Cardápio</h1>

                <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-6">
                  <TabsList className="grid w-full grid-cols-5">
                    <TabsTrigger value="todos">Todos</TabsTrigger>
                    <TabsTrigger value="hamburgueres">Hambúrgueres</TabsTrigger>
                    <TabsTrigger value="pizzas">Pizzas</TabsTrigger>
                    <TabsTrigger value="bebidas">Bebidas</TabsTrigger>
                    <TabsTrigger value="sobremesas">Sobremesas</TabsTrigger>
                  </TabsList>
                </Tabs>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredProducts.map(product => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onAdd={handleAddToCart}
                    />
                  ))}
                </div>
              </>
            )}

            {currentStep === 2 && (
              <>
                <h1 className="text-3xl font-bold mb-6">Dados de Entrega</h1>
                <Card className="p-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Nome Completo</Label>
                      <Input id="name" defaultValue="João Silva" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Telefone</Label>
                      <Input id="phone" defaultValue="(11) 99999-9999" />
                    </div>
                    <div>
                      <Label htmlFor="address">Endereço</Label>
                      <Input id="address" defaultValue="Rua das Flores, 123" />
                    </div>
                    <div>
                      <Label htmlFor="complement">Complemento</Label>
                      <Input id="complement" defaultValue="Apto 45" />
                    </div>
                  </div>
                </Card>
              </>
            )}

            {currentStep === 3 && (
              <>
                <h1 className="text-3xl font-bold mb-6">Forma de Pagamento</h1>
                <Card className="p-6">
                  <RadioGroup defaultValue="pix">
                    <div className="flex items-center space-x-2 p-4 border rounded-lg mb-3 hover:bg-gray-50">
                      <RadioGroupItem value="dinheiro" id="dinheiro" />
                      <Label htmlFor="dinheiro" className="flex-1 cursor-pointer">
                        Dinheiro
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-4 border rounded-lg mb-3 hover:bg-gray-50">
                      <RadioGroupItem value="cartao" id="cartao" />
                      <Label htmlFor="cartao" className="flex-1 cursor-pointer">
                        Cartão de Crédito/Débito
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-gray-50">
                      <RadioGroupItem value="pix" id="pix" />
                      <Label htmlFor="pix" className="flex-1 cursor-pointer">
                        PIX
                      </Label>
                    </div>
                  </RadioGroup>
                </Card>
              </>
            )}
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-20 p-6">
              <div className="flex items-center gap-2 mb-4">
                <ShoppingBag className="h-5 w-5 text-red-600" />
                <h2 className="text-xl font-bold">Seu Pedido</h2>
              </div>

              {cart.length === 0 ? (
                <p className="text-gray-500 text-center py-8">
                  Carrinho vazio
                </p>
              ) : (
                <>
                  <div className="space-y-2 max-h-[400px] overflow-y-auto mb-4">
                    {cart.map(item => (
                      <CartItem
                        key={item.product.id}
                        item={item}
                        onUpdateQuantity={handleUpdateQuantity}
                        onRemove={handleRemove}
                      />
                    ))}
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg font-semibold">Total:</span>
                      <span className="text-2xl font-bold text-red-600">
                        R$ {total.toFixed(2).replace('.', ',')}
                      </span>
                    </div>

                    {currentStep === 1 && (
                      <Button
                        onClick={() => setCurrentStep(2)}
                        className="w-full bg-red-600 hover:bg-red-700"
                        disabled={cart.length === 0}
                      >
                        Continuar
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    )}

                    {currentStep === 2 && (
                      <div className="space-y-2">
                        <Button
                          onClick={() => setCurrentStep(3)}
                          className="w-full bg-red-600 hover:bg-red-700"
                        >
                          Continuar
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button
                          onClick={() => setCurrentStep(1)}
                          variant="outline"
                          className="w-full"
                        >
                          Voltar
                        </Button>
                      </div>
                    )}

                    {currentStep === 3 && (
                      <div className="space-y-2">
                        <Button
                          onClick={() => setCurrentStep(4)}
                          className="w-full bg-red-600 hover:bg-red-700"
                        >
                          Finalizar Pedido
                          <Check className="ml-2 h-4 w-4" />
                        </Button>
                        <Button
                          onClick={() => setCurrentStep(2)}
                          variant="outline"
                          className="w-full"
                        >
                          Voltar
                        </Button>
                      </div>
                    )}
                  </div>
                </>
              )}

              <div className="mt-6 pt-4 border-t">
                <div className="flex justify-between text-sm mb-2">
                  <span className={currentStep >= 1 ? 'text-red-600 font-semibold' : 'text-gray-400'}>
                    1. Carrinho
                  </span>
                  <span className={currentStep >= 2 ? 'text-red-600 font-semibold' : 'text-gray-400'}>
                    2. Entrega
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className={currentStep >= 3 ? 'text-red-600 font-semibold' : 'text-gray-400'}>
                    3. Pagamento
                  </span>
                  <span className={currentStep >= 4 ? 'text-red-600 font-semibold' : 'text-gray-400'}>
                    4. Confirmação
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
