import { Diamond, Globe, Package, Rocket, Zap, type LucideIcon } from 'lucide-react';
import Partners from './Partners';
import type { LinkOrTextWithIconItem } from '@/types/linkOrTextWithIconItem';



const Banner = () => {
    
  const dummyItems: LinkOrTextWithIconItem[] = [
    {icon: Diamond, text: "Acme Corp"},
    {icon: Zap, text: "FastLogistics"},
    {icon: Package, text: "BoxDrop"},
    {icon: Globe, text: "GlobeTrade"},
    {icon: Rocket, text: "SkyHigh"},
  ] 

  return (
    <div className="w-full border-y border-border bg-background py-10">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm font-semibold text-slate-500 mb-8 uppercase tracking-wider">Powering the world's fastest supply chains</p>

        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 transition-all duration-500">
          {/* Placeholder Logos using Text for demo purposes, assume SVGs in real prod. To be changed  */}
          
        {dummyItems.map((partner, index) => (
          <Partners key={index} icon={partner.icon} text={partner.text}/>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Banner;