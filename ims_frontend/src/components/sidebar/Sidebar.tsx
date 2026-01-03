import React, { useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import { LayoutGrid, Box, ReceiptText, Users, BarChart3, Contact2, Van } from 'lucide-react';
import { cn } from '../../lib/utils';
import { NavLink } from 'react-router-dom';

interface NavItem {
  icon: LucideIcon;
  label: string;
  active?: boolean;
}

interface SidebarProps {
  adminUser?: {
    name: string;
    email: string;
    initials: string;
  };
}

const navItems = [
    { icon: LayoutGrid, label: 'Dashboard'},
    { icon: Box, label: 'Inventory'},
    { icon: ReceiptText, label: 'Stock Transactions'},
    { icon: Users, label: 'Staff'},
    // { icon: Contact2, label: 'Customers - coming soon'},
    { icon: Van, label: 'Suppliers'},
    { icon: BarChart3, label: 'Reports'},
  ];

const Sidebar: React.FC<SidebarProps> = ({ adminUser }) => {
  const [isShowNavBar, setIsShowNavBar] = useState<boolean>(false);


  const toggleNavBar = () => {
    setIsShowNavBar(prevState => !prevState)
  };

  const showNavBar = () => {
    if(innerWidth > 768) setIsShowNavBar(true);
  }

  const hideNavBar = () => {
    if(innerWidth > 768) setIsShowNavBar(false);
  }


  return (
    <div
     onMouseEnter={() => showNavBar()}
     onMouseLeave={() => hideNavBar()}
     className={`${isShowNavBar? "w-64" : "w-20 md:w-24"} fixed top-0 lg:relative z-50 flex overflow-hidden landscape:overflow-auto flex-col h-dvh transition-[width] duration-300 bg-background border-r border-border py-4 px-2 md:px-4`}>
      {/* Logo Section */}
      
      <div className="flex items-center gap-2 mb-8 pb-4 border-b border-border">
        <div className={`${isShowNavBar ? "ml-0" : "ml-4"} duration-300 min-w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold`}>
          I
        </div>
        <span className={`text-lg ${isShowNavBar ? "block" : "hidden"} font-semibold text-foreground`}>InvManager</span>
      </div>

      <button type='button' title='toggleNavbar' className={`duration-500 flex p-[3px] size-8 justify-center items-center md:hidden bg-background ml-3.5 mb-3 hover:bg-gray-700 border border-transparent rounded-md hover:border-[rgb(250,250,215)] ${isShowNavBar ? "rotate-180 ml-48" : "-rotate-180"}`}
        onClick={toggleNavBar}>
        <div className={`w-full flex flex-col ${isShowNavBar ? "mr-1" : "gap-1"}`}>
          <div className={`w-6 h-1 bg-blue-700 rounded-lg ${isShowNavBar && "w-7 -rotate-45 origin-center"}`}></div>
          <div className={`w-6 h-1 bg-blue-700 rounded-lg ${isShowNavBar && "w-7 rotate-45 origin-center -mt-1"}`}></div>
          <div className={`w-6 h-1 bg-blue-700 rounded-lg ${isShowNavBar && "hidden"}`}></div>
        </div>
      </button>
      

      {/* Navigation Items */}
      <nav className="flex-1 space-y-2 overflow-hidden">
        {navItems.map((item, index) => (
          <NavItemComponent
            isShowNavBar={isShowNavBar}
            key={index}
            item={item}
          />
        ))}
      </nav>

      {/* Admin Section */}
      {adminUser && (
        <div className="border-t border-border pt-4">
          <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 cursor-pointer">
            <div className="min-w-10 h-10 rounded-full bg-muted flex items-center justify-center text-sm font-medium text-foreground">
              {adminUser.initials}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">{adminUser.name}</p>
              <p className="text-xs text-muted-foreground truncate">{adminUser.email}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

interface NavItemComponentProps {
  item: NavItem;
  isShowNavBar: boolean;
}


const NavItemComponent: React.FC<NavItemComponentProps> = ({ item, isShowNavBar }) => {
  const Icon = item.icon;
  return (
    <NavLink
      to={item.label.replace(" ", "-").toLowerCase()}
      className={({ isActive }) =>
        cn(
          "w-full truncate flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
          isActive
            ? "bg-blue-600/20 text-blue-400 border border-blue-600/30"
            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
        )
      }
    >
      <Icon className={`${isShowNavBar ? "size-5" : "size-6 md:size-7"} duration-300 shrink-0`} />
      <span className={`${isShowNavBar ? "block" : "hidden"} `}>{item.label}</span>
    </NavLink>
  );
};

export { Sidebar };
