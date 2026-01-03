import React, { useState } from 'react';
import { Bell, Settings, MoonStar, Sun } from 'lucide-react';
import { useTheme } from '@/context/themeContext';
import { Button } from '../ui/button';

interface TopHeaderProps {
  onSearch?: (query: string) => void;
  userInitials?: string;
}


const TopHeader: React.FC<TopHeaderProps> = ({ onSearch, userInitials = "JD" }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const {theme, handleThemeState} = useTheme();
  const [showNotis, setShowNotis] = useState<boolean>(false);



  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch?.(query);
  };

  
  const toggleShowNotis = () => setShowNotis(currState => !currState);

  return (
    <div className="flex relative items-center justify-between h-16 bg-background border-b border-border px-6 gap-4">
      {/* Left side - future content */}
      <div className="flex-1">
        {/* Search Bar */}
        {/* <div className="relative hidden md:block">
          <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search"
            className="pl-10 min-w-56 max-w-96 bg-muted/30 border-muted"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div> */}
      </div>

      {/* Right side - Search, Notifications, Avatar */}
      <div className="flex items-center gap-4">
        
        {/* Notification Icon */}
        <Button type='button' onClick={toggleShowNotis} title='notification' className="relative p-2 text-muted-foreground bg-transparent hover:text-foreground hover:bg-muted/50 rounded-lg hover:transition-colors">
          <Bell className="size-4 md:size-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-blue-500 rounded-full"></span>
        </Button>
        
        {/* Theme Icon */}
          <button
            onClick={() => {
              if(theme == "light") return handleThemeState("dark");
              handleThemeState("light");
            }}
            title="toggle theme" type="button" className="relative p-2 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg hover:transition-colors">
            <MoonStar className={`${theme !== "dark" && "opacity-0"} size-4 md:size-5 aspect-square duration-300 fixed`}/>
            <Sun className={`${theme == "dark" && "opacity-0"} size-4 md:size-5 aspect-square duration-300`}/>
          </button>
        
        {/* Settings Icon */}
        <button type='button' title='settings' className="relative p-2 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg hover:transition-colors">
          <Settings className="size-4 md:size-5" />
        </button>

        {/* User Avatar */}
        <Button className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-sm font-medium text-foreground hover:bg-muted/80 hover:transition-colors">
          {userInitials}
        </Button>
      </div>
      <div className={`${showNotis? "w-72" : "w-0"} overflow-hidden absolute flex items-end top-16 right-0 z-10 h-[calc(100dvh-6rem)] bg-card transition-[width] duration-300`}>
        show
      </div>
    </div>
  );
};

export { TopHeader };
