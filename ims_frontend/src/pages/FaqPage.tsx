import { Button } from '@/components/ui/button'
import { ArrowDownRight, HandHeart, Search } from 'lucide-react'
import React from 'react'


const FaqPage = () => {
  return (
    <div className="w-full px-2 max-w-5xl mx-auto mt-20 space-y-8">
        {/* Hero Section  */}
        <div className="text-center space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">Frequently Asked Questions</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Find answers to common questions about managing your inventory, billing, and reports.</p>
        </div>

        {/* Search Bar  */}
        <div className="relative w-11/12 max-w-2xl mx-auto">
            <div className="relative flex items-center w-full h-14 rounded-xl bg-foreground/5 shadow-sm ring-1 ring-slate-700 focus-within:ring-2 focus-within:ring-primary transition-shadow overflow-hidden">
                <div className="flex items-center justify-center pl-4 pr-2">
                    <Search className='size-6 text-primary'/>
                </div>
        
                <input className="w-full pl-2 h-full bg-transparent border-none focus:ring-primary text-base text-foreground placeholder:text-slate-400 focus:ring-0" placeholder="Search for 'exporting reports' or 'adding SKUs'..."/>
                <div className="pr-2 ml-1 hidden sm:block">
                    <kbd className="inline-flex items-center border border-border rounded px-2 text-xs font-sans font-medium text-foreground">⌘K</kbd>
                </div>
            </div>
        </div>

        {/* Category Tabs  */}
        <div className="w-full overflow-x-auto pb-2">
            <div className="flex sm:justify-center min-w-max gap-8 border-b border-border/80 px-4">
                <a className="pb-3 border-b-2 border-primary text-primary font-medium text-sm" href="#">General</a>
                <a className="pb-3 border-b-2 border-transparent text-muted-foreground hover:text-foreground font-medium text-sm hover:transition-colors" href="#">Products &amp; Stock</a>
                <a className="pb-3 border-b-2 border-transparent text-muted-foreground hover:text-foreground font-medium text-sm hover:transition-colors" href="#">Orders</a>
                <a className="pb-3 border-b-2 border-transparent text-muted-foreground hover:text-foreground font-medium text-sm hover:transition-colors" href="#">Account &amp; Billing</a>
            </div>
        </div>

        {/* FAQ Accordion List  */}
        <div className="space-y-4 w-11/12 mx-auto">
            {/* FAQ Item 1 */}
            <FaqAccordion title='How do I bulk import products via CSV?' isOpen>
                <>
                    <p className="mb-3">To bulk import products, go to the <strong>Inventory</strong> tab and click on the "Import" button in the top right corner. You can download our template CSV file to ensure your data is formatted correctly.</p>
                
                    <ul className="list-disc list-inside space-y-1 mb-3 ml-2">
                        <li>Ensure SKU codes are unique.</li>
                        <li>Do not remove header rows.</li>
                        <li>Save the file as .CSV before uploading.</li>
                    </ul>
                    <a className="inline-flex items-center text-sm font-medium text-primary hover:text-blue-400" href="#">
                        Download Template
                        <span className="material-symbols-outlined text-[16px] ml-1">download</span>
                    </a>
                </>
            </FaqAccordion>

            {/* FAQ Item 2  */}
            <FaqAccordion title='Can I set up low-stock alerts?'>
                <p>Yes, you can set custom low-stock thresholds for each product. Navigate to the product detail page and edit the "Reorder Point" field. You will receive an email notification when stock falls below this level.</p>
            </FaqAccordion>

            {/* FAQ Item 3  */}
            <FaqAccordion title='How do I generate a year-end inventory report?' >
                <p className="mb-2">Go to the <strong>Reports</strong> section and select "Inventory Valuation".</p>
                <p>Use the date picker to select the fiscal year range. Once generated, you can export the report as a PDF or Excel file for your accounting needs.</p>
            </FaqAccordion>

            {/* FAQ Item 4  */}
            <FaqAccordion title='How do I integrate with Shopify?' >
                <p>Integration is available on the Pro plan and above. Visit <strong>Settings &gt; Integrations</strong>, select Shopify, and paste your store URL. You will be redirected to Shopify to authorize the connection.</p>
            </FaqAccordion>

            {/* FAQ Item 5  */}
            <FaqAccordion title='What happens if I downgrade my plan?' >
                <p>If you downgrade, you will retain access to your current plan features until the end of your billing cycle. After that, features limited to the higher tier (like API access or advanced reporting) will be locked.</p>
            </FaqAccordion>

        </div>
        
        {/* "Still Need Help?" Call To Action Card  */}
        <div className="max-w-11/12 mx-auto my-12 rounded-2xl bg-linear-to-br from-background via-foreground/20 to-foreground/60 p-8 text-center border border-border shadow-lg">
            <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-primary/30">
                <HandHeart className='text-primary size-7'/>
            </div>
            
            <h3 className="mb-2 text-xl font-bold text-foreground">Still have questions?</h3>
            <p className="mb-6 text-muted-foreground">Can't find the answer you're looking for? Please chat to our friendly team.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 hover:transition-colors">
                    Get in touch
                </Button>
                <Button size="lg" className="inline-flex items-center justify-center rounded-lg bg-slate-800 px-6 py-2.5 text-sm font-semibold text-white ring-1 ring-inset ring-slate-600 hover:bg-slate-800/80 hover:transition-colors">
                    Documentation
                </Button>
            </div>
        </div>
    </div>
  )
}

const FaqAccordion: React.FC<{title: string; isOpen?: boolean; children: React.ReactNode}> = ({title, isOpen= false, children}) => {
    return (
        <details className="rounded-xl ring-1 ring-border p-1" open={isOpen}>
            <summary className="flex cursor-pointer items-center justify-between gap-4 p-4 font-medium text-foreground hover:bg-primary/5 rounded-lg hover:transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                <span className="text-base font-semibold">{title}</span>
                <ArrowDownRight className="text-muted-foreground"/>
            </summary>

            <div className="px-4 pb-4 pt-0 text-muted-foreground leading-relaxed">
                {children}
            </div>
        </details>
    )
}

export default FaqPage