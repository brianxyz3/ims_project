import { TrendingUp, type LucideIcon } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import type React from 'react';
import { Link } from 'react-router-dom';

interface HeroProp {
    isHomePage?: boolean;
    heroTitle: string;
    heroPageTag?: string;
    heroText: string;
    Icon?: LucideIcon;
    img: {
        src: string;
        alt: string;
    };
    btn1: {
        text: string;
        navLink: string;
    },
    btn2: {
        text: string;
        navLink: string;
    },
}



const Hero: React.FC<HeroProp> = ({isHomePage=false, heroText, heroPageTag, heroTitle, img, Icon, btn1, btn2}) => {
  return (
    <section className="relative pt-12 pb-20 lg:pt-24 lg:pb-32 px-6">

        {/* Hero Background Decoration */}

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden pointer-events-none z-0">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[100px]"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[40%] rounded-full bg-blue-400/5 blur-[100px]"></div>
        </div>

        {/* Main Hero Content */}
        
        <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Hero Text */}

                <div className="flex flex-col gap-6 max-w-2xl">
                    {isHomePage ? 
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            <span className="text-primary text-xs font-semibold uppercase tracking-wide">New AI Features Available</span>
                        </div>
                        : <span className="text-primary font-bold tracking-wider text-sm uppercase">{heroPageTag}</span>
                    }
                    
                    {/* Hero Heading */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground leading-[1.1] tracking-tight">
                        {heroTitle}
                        { isHomePage &&
                            <>
                                <br className="hidden lg:block"/>
                                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-blue-400"> Maximize Profit.</span>
                            </>    
                        }
                    </h1>

                    <p className="text-lg text-foreground/90 leading-relaxed max-w-lg">
                        {heroText}
                    </p>
                    
                    <div className="flex flex-wrap gap-4 mt-2">
                        <Link to={btn1.navLink} className="h-12 px-8 flex items-center justify-center rounded-lg bg-primary text-white text-base font-bold shadow-glow hover:bg-blue-600 hover:transition-all">
                            {btn1.text}
                        </Link>
                        <Link to={btn2.navLink} className="h-12 px-8 flex items-center justify-center rounded-lg border border-gray-300 bg-muted text-foreground text-base font-bold hover:bg-gray-500/60 hover:border-border hover:transition-colors gap-2">
                            {Icon && <Icon/>}
                            {btn2.text}
                        </Link>
                    </div>
                    {isHomePage && 
                        <div className="flex items-center gap-4 mt-6 text-sm text-slate-500">
                            <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <Avatar>
                                    <AvatarImage
                                        src="https://github.com/maxleiter.png"
                                        alt="@maxleiter"
                                    />
                                    <AvatarFallback>LR</AvatarFallback>
                                </Avatar>
                                <Avatar>
                                    <AvatarImage
                                        src="https://github.com/evilrabbit.png"
                                        alt="@evilrabbit"
                                    />
                                    <AvatarFallback>ER</AvatarFallback>
                                </Avatar>
                            </div>
                            <p>Trusted by <span className="text-foreground font-bold">500+</span> logistics leaders</p>
                    
                        </div>
                    }
                </div>

                {/* Hero Image */}
                <div className="relative w-full aspect-square lg:aspect-4/3 rounded-2xl overflow-hidden shadow-2xl border border-border group">
                    <div className="absolute inset-0 bg-linear-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none"></div>
                    <div className="relative w-full h-full bg-center bg-cover bg-no-repeat transform group-hover:scale-105 transition-transform duration-700" >
                        <img src={img.src} alt={img.alt} className='h-full' />
                    </div>

                    {/* Floating Card 1 */}
                    {isHomePage && 
                        <div className="absolute bottom-6 left-6 right-6 md:right-auto md:w-80 p-4 bg-gray-800 backdrop-blur border border-border rounded-xl shadow-lg animate-[bounce_3s_infinite]">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="bg-green-900/80 p-1.5 rounded-lg">
                                        <TrendingUp className='text-green-600'/>
                                    </div>
                                    <div className="">
                                        <p className="text-xs text-white/70">Monthly Revenue</p>
                                        <p className="text-sm text-white font-semibold">$124,300</p>
                                    </div>
                                </div>
                                <div className="text-green-600 font-bold text-xs">+12.4%</div>
                            </div>

                            <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                                <div className="h-full bg-green-500 w-3/4 rounded-full"></div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero