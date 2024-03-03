import { Outlet } from 'react-router-dom';
import MainNav from './Navigation/MainNav';
import AppLogo from './AppLogo';
import Search from './Search';
import UserNav from './Navigation/UserNav';
import { Link } from 'react-router-dom';
import { useMediaQuery } from '@/hooks/use-media-query';
import MobileNav from './Navigation/MobileNav';
import SideBar from './Navigation/SideBar';

function Layout() {
  const isDesktop = useMediaQuery('(min-width: 640px)');
  // const { } = useRouteLoaderData('root') as {
  // userName: string;
  // session: ISession;
  // };
  return (
    <>
      <div className='flex flex-col h-full'>
        <div className='border-b'>
          <div className='max-w-7xl mx-auto'>
            <div className='flex h-16 items-center px-4'>
              {!isDesktop ? (
                <MobileNav />
              ) : (
                <>
                  <Link to='/' className='hidden sm:flex items-center'>
                    <AppLogo height='26px' width='26px' />
                    <p className='hidden lg:block pl-2 font-black text-3xl'>
                      MY INVOICE
                    </p>
                  </Link>
                  <MainNav className='hidden sm:block mx-12' />
                </>
              )}
              <div className='ml-auto flex items-center space-x-4'>
                <Search />
                <UserNav />
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-grow-1 h-[calc(100vh-64px)]'>
          <SideBar isDesktop={isDesktop}/>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Layout;
