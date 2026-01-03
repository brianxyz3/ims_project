import { aboutHeroImg } from '@/assets/images'
import StaticBusinessStats from '@/components/banner/StaticBusinessStats'
import Leadership from '@/components/companyLeadership/Leadership'
import Cta from '@/components/cta/Cta'
import FeaturesCard from '@/components/features/FeaturesCard'
import Hero from '@/components/hero/Hero'
import Mission from '@/components/missionStatement/Mission'
import { Bot, MousePointerClick, TrendingUp } from 'lucide-react'


const items = [
    {
        icon: MousePointerClick,
        title: "Precision Tracking",
        desc: "Monitor stock levels instantly across all locations with zero latency. Say goodbye to overselling.",
        style: "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white",
    },
    {
        icon: Bot,
        title: "Smart Automation",
        desc: "Set reorder points and let our AI handle procurement automatically, reducing stockouts by 40%.",
        style: "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white",
    },
    {
        icon: TrendingUp,
        title: "Limitless Scale",
        desc: "Built on cloud infrastructure that grows as your inventory needs expand from one garage to global fulfillment.",
        style: "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white",
    },
]
const AboutPage = () => {
  return (
    <>
        <Hero
            heroTitle='Empowering Business Efficiency'
            heroText="We're building the operating system for modern commerce. InvManager provides the clarity and control you need to scale your operations without the chaos."
            heroPageTag='About InvManager'
            img={{
                src:aboutHeroImg,
                alt:"Abstract 3D visualization of logistics cubes and connections in blue and white"
            }}
            btn1={{text: "Start Free Trial", navLink: "/register"}}
            btn2={{text: "Contact Sales", navLink: "/contact"}}
        />
        <StaticBusinessStats/>
        <Mission/>

        {/* About Features Section */}
        <section className="w-full px-4 md:px-10 py-20 max-w-7xl mx-auto">
            <div className="flex flex-col gap-10 px-4">
                <div className="flex flex-col gap-4 text-center items-center">
                    <h2 className="text-foreground tracking-tight text-3xl md:text-4xl font-bold leading-tight">
                        Why Modern Brands Choose Us
                    </h2>
                    <p className="text-muted-foreground text-base md:text-lg font-normal leading-normal max-w-[720px]">
                        Our platform is engineered for the future of commerce, prioritizing speed, accuracy, and seamless integration.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
                {
                    items.map((item, index) => (
                        <FeaturesCard key={index} style={item.style} icon={item.icon} title={item.title} desc={item.desc}/>
                    ))
                }
            </div>
        </section>
        <Leadership/>
        <Cta title="Ready to optimize your inventory?"/>
    </>
  )
}

export default AboutPage;
