import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ChevronFirstIcon, ChevronLastIcon } from 'lucide-react';
import SideBarItem from './SideBarItem';
import { navLinksData } from '@/data/navLinks';

const SideBar = ({ isDesktop }: { isDesktop: boolean }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const location = useLocation();

  return (
    <div
      className={cn(
        'top-0 bottom-0 border-r shadow-sm transition-transform',
        isDesktop && isExpanded ? 'w-64' : 'w-14'
      )}
    >
      <div className={`flex items-center border-b`}>
        <h4
          className={
            isDesktop && isExpanded ? 'block ml-4 text-sm lg:text-lg' : 'hidden'
          }
        >
          {location.pathname === '/'
            ? 'HOME'
            : location.pathname.toUpperCase().split('/')[1]}
        </h4>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={cn(
            'flex w-full p-2 rounded-md hover:bg-muted-foreground/10 transition-colors',
            isDesktop ? 'justify-end' : 'justify-center'
          )}
        >
          {isDesktop && isExpanded ? <ChevronFirstIcon /> : <ChevronLastIcon />}
        </button>
      </div>
      <ul>
        {navLinksData.map((item) => (
          <li key={item.title}>
            <SideBarItem
              icon={item.icon}
              isDesktop={isDesktop}
              isExpanded={isExpanded}
              title={item.title}
              link={item.link}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
