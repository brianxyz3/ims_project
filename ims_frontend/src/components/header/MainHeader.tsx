import { useState } from 'react';
import { MoonStar, Sun, X } from 'lucide-react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useTheme } from '@/context/themeContext';
import { Button } from '../ui/button';



const navItems = [
  {label: "About"},
  {label: "FAQ"},
  {label: "Contact"}
]

const MainHeader = () => {

  const {handleThemeState, theme} = useTheme()
  const [isShowNavBar, setIsShowNavBar] = useState<boolean>(false);

  const navigate = useNavigate()
    
  const toggleNavBar = () => {
    setIsShowNavBar(prevState => !prevState)
  };
  

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-solid border-border bg-background backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to={"/"} className="flex items-center gap-3">
          <div className={`duration-300 min-w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold`}>
            I
          </div>
          <h1 className="text-primary text-lg font-bold tracking-tight">InvManager</h1>
        </Link>

        {/* Desktop View Nav Bar */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) =>(
            <NavLink
              key={index} 
              to={"/" + item.label.toLowerCase()}
              className={({ isActive }) =>
                cn(
                  "w-fit truncate flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                  isActive
                    ? "bg-blue-600/20 text-blue-400 border border-blue-600/30"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
              >
              <span>{item.label}</span>
            </NavLink>
          ))}
        </div>

        <div className="reltaive flex items-center gap-3">
          {/* Theme Icon */}
          <button
            onClick={() => {
              if(theme == "light") return handleThemeState("dark");
              handleThemeState("light");
            }}
            title="toggle theme" type="button" className="relative p-2 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors">
            <MoonStar className={`${theme !== "dark" && "opacity-0"} size-5 md:size-7 aspect-square duration-300 fixed`}/>
            <Sun className={`${theme == "dark" && "opacity-0"} size-5 md:size-7 aspect-square duration-300`}/>
          </button>

          <Button onClick={()=> (navigate("login"))} className="hidden md:flex items-center justify-center bg-transparent rounded-lg text-primary text-sm font-bold hover:bg-gray-200 transition-colors">
            Log In
          </Button>

          <Button onClick={()=> (navigate("register"))} className="hidden md:flex items-center justify-center rounded-lg bg-primary text-white text-sm font-bold shadow-lg shadow-primary/25 hover:bg-blue-600 transition-all">
            Get Started
          </Button>

          {/* Mobile Toggle Nav Bar Button */}
          <button type='button' title='toggleNavbar' className={`fixed right-20 duration-500 flex p-[3px] size-8 justify-center items-center md:hidden bg-background border border-transparent rounded-md ${ !isShowNavBar && "hover:bg-gray-400 hover:border-[rgb(250,250,215)]"} `}
            onClick={toggleNavBar}>
            <div className={`w-fit relative flex flex-col items-center gap-1 duration-500 ${isShowNavBar ? "" : ""}`}>
              <div className={`absolute top-1 overflow-hidden bg-linear-to-b from-primary/80 via-primary to-primary ${isShowNavBar ? "w-38 -translate-x-20 h-51.5" : "w-0 h-0"} duration-500`}>

                <div>
                  <div className={`${isShowNavBar ? "opacity-100" : "opacity-0"} p-1 ml-auto mt-1 text-foreground w-fit hover:bg-background duration-300 rounded-bl-lg rounded-tl-lg`}><X /></div>

                  {/* Mobile View Nav Bar */}
                  <div className={`${isShowNavBar ? "opacity-100" : "opacity-0"} delay-500 duration-300 flex flex-col md:hidden items-center gap-2`}>
                    {navItems.map((item, index) =>(
                      <NavLink
                        key={index} 
                        to={"/" + item.label.toLowerCase()}
                        className={({ isActive }) =>
                          cn(
                            "w-full justify-center truncate flex md:hidden items-center px-4 py-3 text-sm font-medium transition-colors",
                            isActive
                              ? "bg-blue-600/20 text-background border border-blue-600/30"
                              : "text-foreground hover:bg-muted/50"
                          )}
                        >
                        <span>{item.label}</span>
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>

              {/* Toggle Nav Bar Button Decorator */}
              <div className={`h-1 bg-blue-700 rounded-lg ${isShowNavBar ? "w-44 -translate-x-20" : "w-6"} duration-500`}></div>
              <div className={`h-1 bg-blue-700 rounded-lg ${isShowNavBar ? "w-0 translate-x-44" : "w-6"} duration-500`}></div>
              <div className={`h-1 bg-blue-700 rounded-lg ${isShowNavBar ? "w-44 -translate-x-20 translate-y-48" : "w-6"} delay-initial duration-500`}></div>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export { MainHeader };
