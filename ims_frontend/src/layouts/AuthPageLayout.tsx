import { Outlet } from 'react-router-dom';
// import ScrollRestoration from '@/utils/ScrollRestoration';

const AuthPageLayout = () => {
  return (
    <div className='relative lg:grid grid-cols-11 text-foreground bg-background h-dvh overflow-auto'>
      <section className="w-full px-10 lg:col-start-1 lg:col-span-5 py-20 flex flex-col overflow-x-hidden justify-center md:px-14 lg:px-20">

        <Outlet/>
        
      </section>


      <section className="hidden lg:block sticky top-0 lg:col-span-6 h-dvh">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaGUYwhZHLIdfIuygKeZapbBjc-Y-1td-nwyPq6bpl8Iqn4qwhe25d3ymQaJcEc8p01JyedKdPJLzJ-irL2PCVXibiu_Uz4pESZz2T7sYnSDuVGiScnLi3hwdailXBOq26uWcQ7-v9_58FiuVERLC8cTGB0-Nd_J-FKOMsruDWPUAdF5GsTvqdDVtDcPcNlB0UIQERO1RDPK5lyEjr6kPuXoqBztCspqvVJGeMD8AApcBRNsNyAc2IEnKQ-6fU6ysndr0ex1u07JM"
          alt=""
          className='h-full w-full'/>
        
        <div className="absolute inset-0 bg-linear-to-t from-background-dark/90 via-black/40 to-primary/20 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-linear-to-br from-primary/30 to-black/60"></div>
        <div className="absolute bottom-0 left-0 right-0 p-20 flex flex-col justify-end">
          <blockquote className="relative">
            <div className="relative z-10 max-w-lg">
              <div className="mb-4">
                <span className="inline-flex items-center rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-blue-200 ring-1 ring-inset ring-blue-400/30">
                  New Feature
                </span>
              </div>

              <p className="text-3xl font-bold leading-tight text-white mb-4">
                "The automated restocking feature saved us 20 hours a week."
              </p>

              <footer className="flex items-center gap-4">

                <div className="h-10 w-10 rounded-full bg-slate-700 overflow-hidden ring-2 ring-white/20">
                  <img 
                    className="h-full w-full object-cover" 
                    alt="Portrait of a smiling logistics manager" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4cDZtsEmMQAqnpOWAaaC3Kj3ZVveYAEkz7-CyzYH5cHZmmV3rRa4b2tkBZqmgMD49Vb7zVQhWVQBSFzsznof9yQVLYFwJnWRvMR4GP1r1pTZDu2gRwqcMCp87U0Ue-bKPJm3YdpcbN50Ex0tcGJaVjTEPCT-g8KbFXu2Qdv7rTCjcZByf-jc53qmPHVNafV02ILqqcSflQv6p2AiHjpQoerfv6RtECEQAbTNUyfmrqGq4Eat22AiQ3ZVZzZYcVOpk9n8-gjhgm-s"/>
                </div>
                <div className="text-sm">
                  <div className="font-semibold text-white">Alex Morgan</div>
                  <div className="text-slate-300">Logistics Manager at TechFlow</div>
                </div>
              </footer>
            </div>
          </blockquote>
        </div>

      </section>
    </div>
  )
}

export default AuthPageLayout