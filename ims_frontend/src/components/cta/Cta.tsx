import type React from "react";
import { Button } from "../ui/button"

const Cta: React.FC<{title:string}> = ({title}) => {
  return (
    
    <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center bg-primary/90 rounded-3xl p-12 md:p-16 relative overflow-hidden">

            {/* Decorative Circles */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
                <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-blue-900/20 blur-3xl"></div>
            </div>
            <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold text-background mb-6 tracking-tight">{title}</h2>
                <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">Join thousands of modern businesses that trust InvManager to manage their operations. Start your 14-day free trial today.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="bg-background/95 text-primary font-bold text-base shadow-lg hover:bg-background/80 hover:transition-colors">
                        Start Free Trial
                    </Button>
                    <Button size="lg" className="bg-transparent border border-white/30 text-white font-bold text-base hover:bg-white/10 hover:transition-colors">
                        Contact Sales
                    </Button>
                </div>
                
                <p className="mt-6 text-sm text-blue-200">No credit card required • Cancel anytime</p>
            </div>
        </div>
    </section>

  )
}

export default Cta;