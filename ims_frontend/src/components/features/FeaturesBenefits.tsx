import { dashboard_black, dashboard_white } from '@/assets/images'
import { useTheme } from '@/context/themeContext'
import { Check } from 'lucide-react'

const benefits = [
    {
        title: "Live Inventory Tracking",
        desc: "See stock movements in real-time as they happen across all locations.",
    },
    {
        title: "Automated Reordering",
        desc: "Set par levels and let the system generate PO's for approval automatically.",
    },
    {
        title: "Batch & Expiry Tracking",
        desc: "First-in, First-out(FIFO) management to reduce spoilage and waste.",
    },
]

const stats = [
    {title: "Total Stock Value", text: "$842,000", style: "text-foreground"},
    {title: "Low Stock Items", text: "14", style: "text-red-400"},
]

const FeaturesBenefits = () => {
    const {theme} =useTheme();
    return (
        <section className="py-24 px-6 bg-background overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <div className="order-2 lg:order-1">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground/90 mb-6">Gain complete visibility over your operations</h2>
                        <div className="flex flex-col gap-6">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                                        <Check className='size-4'/>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-foreground">{benefit.title}</h3>
                                        <p className="mt-2 text-foreground/80">{benefit.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Image Content */}
                    <div className="order-1 lg:order-2 relative">
                    
                        {/* Decorative elements */}
                        <div className="absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full bg-blue-500/20 blur-[80px]"></div>
                        
                        <div className="relative rounded-xl border border-border/80 bg-background shadow-2xl overflow-hidden aspect-video">
                            {/* Mock UI Header */}
                            <div className="h-10 border-b border-border/80 flex items-center px-4 gap-2 bg-background">
                                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                            </div>

                            {/* Mock UI Body */}
                            <div className="p-0 h-full w-full bg-cover bg-center" >
                                <img src={theme === "light"? dashboard_white : dashboard_black} alt="Screenshot of the analytics dashboard displaying graphs and data tables on a monitor" />

                                <div className="absolute inset-0 bg-linear-to-t from-foreground/90 via-transparent to-transparent"></div>

                                {/* Overlay Stats */}
                                <div className="absolute bottom-6 left-6 right-6 flex gap-4">
                                    {stats.map((stat, index) => (
                                        <div key={index} className="bg-background p-4 rounded-lg shadow-lg border border-gray-100 flex-1">
                                            <div className="text-xs text-slate-500 mb-1">{stat.title}</div>
                                            <div className={`${stat.style} text-lg font-bold`}>{stat.text}</div>
                                        </div>
                                    ))}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturesBenefits;