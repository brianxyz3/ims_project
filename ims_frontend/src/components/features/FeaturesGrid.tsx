import { ArrowLeftRight, ArrowRight, BellRing, Group, QrCode, Store, TrendingUp } from 'lucide-react'
import FeaturesCard from './FeaturesCard'
import { Button } from '../ui/button'

const items = [
    {
        icon: ArrowLeftRight,
        title: "Real-Time Sync",
        desc: "Instant updates across all your sales channels and warehouses. Never oversell again with automated reconcilliation.",
        style: "text-blue-900 bg-blue-300/60",
    },
    {
        icon: TrendingUp,
        title: "Predictive Analytics",
        desc: "AI-driven insights to forecast demand and prevent stockouts. Know exactly what to order and when.",
        style: "text-violet-900 bg-violet-300/60",
    },
    {
        icon: Store,
        title: "Multi-Channel Support",
        desc: "Seamless integration with Shopify, Amazon, and ERP systems. Manage your entire empire from one dashboard.",
        style: "text-yellow-900 bg-yellow-300/60",
    },
    {
        icon: QrCode,
        title: "Barcode Scanning",
        desc: "Mobile-ready scanning for faster picking, packing, and receiving. Reduce human error by up to 90%.",
        style: "text-green-900 bg-green-300/60",
    },
    {
        icon: BellRing,
        title: "Smart Alerts",
        desc: "Get notified instantly for low stock, expiring batches, or delayed shipments via SMS, Email, or Slack.",
        style: "text-red-900 bg-red-300/60",
    },
    {
        icon: Group,
        title: "Team Collaboration",
        desc: "Assign tasks, track user activity, and manage permissions. Keep your warehouse team in perfect sync.",
        style: "text-indigo-900 bg-indigo-300/60",
    },

]

const FeaturesGrid = () => {
  return (
    <section className="py-24 px-6 relative bg-background">
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
                <div className="max-w-2xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Everything you need to scale</h2>
                    <p className="text-lg text-foreground/70">Powerful tools designed to help you stay ahead of demand, optimize stock levels, and automate fulfillment.</p>
                </div>
            
                <Button className="shrink-0 h-12 px-6 bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors font-bold text-sm flex items-center gap-2">
                    Explore all features
                    <ArrowRight className="text-lg"/>
                </Button>
            </div>

            {/* Features Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    items.map((item, index) => (
                        <FeaturesCard key={index} style={item.style} icon={item.icon} title={item.title} desc={item.desc}/>
                    ))
                }
            </div>
        </div>
    </section> 

  )
}

export default FeaturesGrid;