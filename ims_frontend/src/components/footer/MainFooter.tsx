import { Link } from 'react-router-dom'
import { Link2, Mail, Share2 } from 'lucide-react'
import type { LinkOrTextWithIconItem, TextItem } from '@/types/linkOrTextWithIconItem'


const footerLinks: LinkOrTextWithIconItem[] = [
    {icon: Link2, text: "/"},
    {icon: Share2, text: "/"},
    {icon: Mail, text: "/"},
]

const footerSiteMapLinks: Record<string, TextItem[]> = {
    Product: [
        {text: "Features", link: "/features"},
        {text: "Pricing", link: "/pricing"},
        {text: "Integration", link: "/integration"},
        {text: "Channel Logs", link: "/logs"},
        {text: "Doc", link: "/doc"},
    ],
    Company: [
        {text: "About Us", link: "/about"},
        {text: "Careers", link: "/careers"},
        {text: "Blog", link: "/blog"},
        {text: "Contact", link: "/contact"},
        {text: "Partners", link: "/partners"},
    ],
    Resources: [
        {text: "Community", link: "/community"},
        {text: "Help Center", link: "/help"},
        {text: "Webinars", link: "/webinars"},
        {text: "Status", link: "/status"},
    ],
}

const legalLinks: TextItem[] = [
    {text: "Privacy Policy", link: "privacy"},
    {text: "Terms Of Service", link: "tos"},
    {text: "Cookie Settings", link: "cookie"},
]

const MainFooter = () => {
  return (

    <footer className="bg-background border-t border-border pt-16 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
                <div className="col-span-2 lg:col-span-2">
                    <div className="flex items-center gap-2 mb-6">
                        <div className={`duration-300 min-w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold`}>
                        I
                        </div>
                        <span className="text-xl font-bold text-foreground">InvManager</span>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-sm">
                        The modern standard for inventory management. Helping businesses scale with confidence, one SKU at a time.
                    </p>
                    
                    <div className="flex gap-4">
                        {footerLinks.map((item, index) => (<Link key={index} className="text-muted-foreground hover:text-primary transition-colors" to={item.text}><item.icon/></Link>))}
                    </div>
                </div>

                {Object.entries(footerSiteMapLinks).map(([key, valueArr], index) => (
                    <div key={index}>
                        <h4 className="font-bold text-foreground mb-6">{key}</h4>
                        
                        <ul className="flex flex-col gap-3 text-sm text-slate-600">
                            {valueArr.map((value, idx) => (<li key={index + "." + idx}><Link className="hover:text-primary transition-colors" to={value.link}>{value.text}</Link></li>))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-xs text-slate-500">© 2024 InvManager Inc. All rights reserved.</p>
                <div className="flex gap-6 text-xs text-slate-500">
                    {legalLinks.map((link, index) => (
                        <Link key={index} className="hover:text-foreground transition-colors" to={link.link}>{link.text}</Link>
                    ))}
                </div>
            </div>
        </div>
    </footer>
  )
}

export default MainFooter