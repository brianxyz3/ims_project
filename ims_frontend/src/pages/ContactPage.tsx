import ContactForm from '@/components/contactUs/ContactForm'
import { ArrowRight, Mail, MapPin, PhoneCall, type LucideIcon } from 'lucide-react'
import type React from 'react'
import { Link } from 'react-router-dom'

const contactDetails = [
    {title: "Email Us", icon: Mail, contact: "support@ims-pro.com"},
    {title: "Call Us", icon: PhoneCall, contact: "+234 8011229900"},
]

const faqs = [
    {text: "How do I reset my API key?", link: "/"},
    {text: "Exporting monthly reports", link: "/"},
    {text: "Managing user permissions", link: "/"},
]

const ContactPage = () => {
  return (
    <main className="flex-1 flex flex-col items-center py-10 px-4 md:px-10 lg:px-40">
        <div className="w-full max-w-5xl flex flex-col gap-10">
            <div className="flex flex-col gap-3">
                <h1 className="text-foreground text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">How can we help?</h1>
                <p className="text-muted-foreground text-base md:text-lg font-normal leading-normal max-w-2xl">
                    Have a question about your inventory or need technical assistance? Fill out the form below and our team will get back to you. We usually respond within 2 hours.
                </p>
            </div>
        
            {/* Content Grid  */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                <ContactForm/>
                            
                <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-6">
                    {/* Contact Cards  */}
                    <div className="flex flex-col gap-4">
                        {contactDetails.map((contact, index) => (
                            <ContactCard key={index} Icon={contact.icon} title={contact.title} contact={contact.contact}/>
                        ))}
                        
                        <div className="group flex flex-col gap-3 p-4 rounded-xl bg-foreground/5 border border-border hover:transition-all hover:border-primary/50">
                            <ContactCard Icon={MapPin} title='Visit Us' contact='Ikorodu, Lagos Nigeria' />
                            
                            <div className="h-32 w-full rounded-lg overflow-hidden relative mt-1 bg-foreground/10">
                                {/* Placeholder for map  */}
                                <img alt="map style background representing location in New York City" className="w-full h-full object-cover opacity-80" data-location="New York" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD45N5oZ_3vJ3_eSDbb7Y12x_7dzby56y__bf4ky-oijHLNJGmDZUuh-8_e_3alxfEI6tRX9UMXDYtnDAg0bE29S19FoEwUKMBw0Qc9CMXr7DfN_OJOnCzaXzvx4x9KGpIaN0kG0m23MyBIw643M7hZul9jADHj47jyH16xXEGGLhjowCOPaGraSuiWr_ZjaoszFPlGJ5PsVoGZKwpq1jwvZvOO80SENHQuhuqwZ4-l5jrSu6VZQciFM3CHRT2X--hF7r9ivKmv5HI"/>
                                <div className="absolute inset-0 bg-primary/10"></div>
                            </div>
                        </div>
                    </div>
                    
                    {/* FAQ Links  */}
                    <div className="p-5 rounded-xl bg-foreground/10 border border-border/80">
                        <h3 className="text-foreground font-bold text-sm mb-4">Frequently Asked Questions</h3>
                        <ul className="flex flex-col gap-3">
                            {faqs.map((faq, index) => (
                                <li key={index}>
                                    <Link to={faq.link} className="flex items-center justify-between text-muted-foreground hover:text-primary text-sm hover:transition-colors group">
                                        <span>{faq.text}</span>
                                        <ArrowRight  className="size-4 opacity-0 group-hover:opacity-100 group-hover:transition-opacity"/>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
                        
        </div>
    </main>
  )
}


const ContactCard: React.FC<{Icon: LucideIcon; title: string; contact: string}> = ({Icon, title, contact}) => {
    return (
        <div className="group flex items-center gap-4 p-4 rounded-xl bg-foreground/5 border border-border hover:transition-all hover:border-primary/50 cursor-pointer">
            <div className="size-10 rounded-full bg-background flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Icon/>
            </div>
            <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{title}</p>
                <p className="text-sm font-medium text-foreground">{contact}</p>
            </div>
        </div>
    )
}

export default ContactPage