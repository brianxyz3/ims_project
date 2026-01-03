import { aboutMissionImg } from '@/assets/images'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const Mission = () => {
  return (
    <section className="w-full bg-background border-y border-border py-20">
        <div className="px-4 md:px-10 max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                <div className="flex-1 order-2 lg:order-1">
                    <div className="relative w-full aspect-video lg:aspect-square rounded-2xl overflow-hidden shadow-xl">
                        <div className="w-full h-full">
                            <img
                                className='w-full h-full bg-cover bg-center' src={aboutMissionImg} alt="Team collaborating on a dashboard in a modern office" />
                        </div>
                    </div>
                </div>

                <div className="flex-1 order-1 lg:order-2 flex flex-col gap-6">
                    <h2 className="text-foreground text-3xl md:text-4xl font-bold leading-tight">Driven by Clarity</h2>
                    
                    {/* Title Decorator */}
                    <div className="w-20 h-1 bg-primary rounded-full"></div>
                    <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                        <p>
                            I was founded with a single mission: to remove the friction from global supply chains. We saw businesses struggling with outdated spreadsheets and clunky legacy software, losing hours to manual data entry and losing money to stock discrepancies.
                        </p>
                        <p>
                            We believe that inventory management shouldn't be a headache—it should be a competitive advantage. By combining beautiful design with powerful automation, we help companies of all sizes regain control of their physical goods.
                        </p>
                    </div>

                    <div className="pt-4">
                        <Link to={"/"} className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                            Read our full founding story 
                            <ArrowRight className='size-3.5'/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>

  )
}

export default Mission