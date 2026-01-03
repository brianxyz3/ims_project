import React from 'react'
import { type LucideIcon } from 'lucide-react'


interface FeaturesCardProp {
  icon: LucideIcon;
  title: string;
  style: string;
  desc: string;
}

const FeaturesCard: React.FC<FeaturesCardProp> = ({icon, title, desc, style}) => {
  const Icon = icon;
  return (
    <div className="group h-full text-foreground border border-border/30 rounded-2xl bg-muted-foreground/10 p-8 hover:border-primary/50 hover:transition-all hover:duration-300 hover:shadow-lg dark:hover:shadow-glow">
      <div className={`size-12 mb-6 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform ${style}`}>
        <Icon className='size-7'/>
      </div>
      <h3 className="mb-3 text-xl font-bold">{title}</h3>    
      <p className="text-foreground/80 leading-relaxed">
        {desc}
      </p>
    </div>
  )
}

export default FeaturesCard