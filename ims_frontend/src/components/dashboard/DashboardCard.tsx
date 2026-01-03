import React from 'react';
import { Card } from '../ui/card';
import { cn } from '../../lib/utils';
import { Badge } from '../ui/badge';
import { MoveDown, MoveUp } from 'lucide-react';

interface DashboardCardProps {
  title: string;
  value: string | number;
  analysis?: number;
  trend: "up" | "down";
//   onClick?: () => void;
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  value,
  analysis,
  trend
}) => {
  return (
    <Card
      className={cn(
        "flex-0 min-w-44 p-5 max-w-110 gap-2 hover:shadow-lg hover:border-border/80 cursor-pointer hover:transition-all hover:duration-200",
        "border border-border/50 bg-linear-to-br from-background to-background/80"
      )}
    >
      <div className="flex items-start justify-between mb-1">
        <h3 className="text-base font-medium text-foreground truncate">{title}</h3>
        
      </div>

      <p className=" tracking-tight text-3xl md:text-4xl font-semibold">{value}</p>

      <div className="space-y-3">
        <div className="flex items-center">
          <Badge variant={trend} className="text-base">
            {trend === "up" ?
            <MoveUp/> : <MoveDown/>
            }
            {analysis}% 
          </Badge>
        </div>
      </div>
    </Card>
  );
};

export { DashboardCard };
