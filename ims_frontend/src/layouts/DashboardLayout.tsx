import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/sidebar/Sidebar';
import { TopHeader } from '../components/header/TopHeader';
import ScrollRestoration from '@/utils/ScrollRestoration';



const DashboardLayout = () => {

  const adminUser = {
    name: 'Admin User',
    email: 'admin@example.com',
    initials: 'AU',
  };

  return (
    <div className="flex h-dvh bg-background">
      {/* Sidebar */}
      <Sidebar adminUser={adminUser} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col ml-20 w-[calc(100dvw-80px)] md:ml-[88px] md:w-[calc(100dvw-88px)] lg:ml-0 lg:w-dvw h-dvh overflow-hidden">
        {/* Top Header */}
        <TopHeader userInitials="JD" />

        {/* Content Area */}
        <main id='main' className="flex-1 overflow-auto">
          <div className="p-6">
            <Outlet />
          </div>
        </main>
      </div>
      <ScrollRestoration/>
    </div>
  );
};

export { DashboardLayout };
