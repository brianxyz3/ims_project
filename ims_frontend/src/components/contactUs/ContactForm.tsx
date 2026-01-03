import { Form } from "react-router-dom"
import { Input } from "../ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Send } from "lucide-react";
import { Button } from "../ui/button";

const ContactForm = () => {
    const inputStyle = "w-full min-w-0 overflow-hidden rounded-lg text-foreground focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border focus:border-primary h-12 placeholder:text-slate-400 px-4 text-base font-normal leading-normal focus:transition-all";
  return (
    <>
    
    {/* Left Column: Form  */}
    <div className="lg:col-span-7 xl:col-span-8">
        <Form className="flex flex-col gap-6 bg-foreground/10 p-6 md:p-8 rounded-xl border border-border shadow-sm">
            <div className="flex flex-col md:flex-row gap-5">
                <div className="flex flex-col flex-1">
                    <label htmlFor="fullName" className="block text-foreground text-sm font-medium leading-normal pb-2">Full Name</label>
                    <Input 
                        id="fullName"
                        className={inputStyle}
                        placeholder="Enter your name"/>
                </div>
                <div className="flex flex-col flex-1">
                    <label htmlFor="email" className="block text-foreground text-sm font-medium leading-normal pb-2">Work Email</label>
                    <Input 
                        id="email" 
                        className={inputStyle}
                        placeholder="name@company.com"
                        type="email"/>
                </div>
            </div>
            <div className="flex flex-col w-full">
                <label htmlFor="issueType" className="block text-foreground text-sm font-medium leading-normal pb-2">Issue Type</label>
                <div className="relative">
                    <Select>
                        <SelectTrigger className="flex w-full min-w-0 flex-1 appearance-none overflow-hidden rounded-lg text-foreground focus:outline-0 focus:ring-2 focus:ring-primary/50 border focus:border-primary h-12 px-4 pr-10 text-base font-normal leading-normal focus:transition-all">
                            <SelectValue placeholder="Select a category"/>
                        </SelectTrigger>
                        <SelectContent>
                        <SelectItem value="tech">Technical Support</SelectItem>
                        <SelectItem value="billing">Billing &amp; Account</SelectItem>
                        <SelectItem value="feature">Feature Request</SelectItem>
                        <SelectItem value="other">Other Inquiry</SelectItem>
                        </SelectContent>
                    </Select>
                    
                </div>
            </div>
            <div className="flex flex-col w-full">
                <label htmlFor="message" className="block text-foreground text-sm font-medium leading-normal pb-2">Message</label>
                <textarea className="flex w-full min-w-0 flex-1 resize-y overflow-hidden rounded-lg text-foreground focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border bg-background focus:border-primary min-h-40 placeholder:text-slate-400 p-4 text-base font-normal leading-normal focus:transition-all" placeholder="Describe your issue or inquiry..."></textarea>
            </div>
            <div className="flex justify-end pt-2">
                <Button className="flex w-full md:w-auto items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3 text-white font-bold text-sm tracking-wide hover:bg-blue-600 active:scale-95 transition-all shadow-lg shadow-blue-500/20">
                    Send Message
                    <Send className="size-4.5"/>
                </Button>
            </div>
        </Form>
    </div>
</>
  )
}

export default ContactForm