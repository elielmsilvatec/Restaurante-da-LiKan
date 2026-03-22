import { Video as LucideIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface CategoryCardProps {
  name: string;
  icon: LucideIcon;
  onClick?: () => void;
}

export default function CategoryCard({ name, icon: Icon, onClick }: CategoryCardProps) {
  return (
    <Card
      onClick={onClick}
      className="p-6 flex flex-col items-center gap-3 cursor-pointer hover:shadow-lg hover:scale-105 transition-all"
    >
      <div className="h-16 w-16 rounded-full bg-red-100 flex items-center justify-center">
        <Icon className="h-8 w-8 text-red-600" />
      </div>
      <h3 className="font-semibold text-center">{name}</h3>
    </Card>
  );
}
