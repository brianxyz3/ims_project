import { Outlet } from 'react-router-dom';
import { MainHeader } from '../components/header/MainHeader';
import MainFooter from '@/components/footer/MainFooter';
import ScrollRestoration from '@/utils/ScrollRestoration';



const MainLayout = () => {

  return (
    <div className="h-dvh bg-background">
      {/* Main Content */}
      <div className="flex-1 flex flex-col w-dvw h-dvh overflow-hidden">
        {/* Top Header */}
        <MainHeader />

        {/* Content Area */}
        <div id='main' className="flex-1 overflow-auto">
          <section>
            <Outlet />
            <ScrollRestoration/>
          </section>
          <MainFooter/>
        </div>
      </div>
    </div>
  );
};

export { MainLayout };
