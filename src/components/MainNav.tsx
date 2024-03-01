import { cn } from '@/lib/utils';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface IMobileProps extends React.AllHTMLAttributes<HTMLElement> {
  mobile?: boolean;
  handleClose?: () => void
}

const MainNav = ({ className, mobile, handleClose, ...props }: IMobileProps) => {
  const location = useLocation();
  return (
    <nav
      className={cn('flex items-center space-x-4 lg:space-x-6', className)}
      {...props}
    >
        <Link
          to='/'
          className={cn(
            'text-sm font-medium transition-colors hover:text-primary',
            location.pathname !== '/' ? 'text-muted-foreground' : '',
            mobile && 'text-2xl'
          )}
          onClick={handleClose}
        >
          Home
        </Link>
      <Link
        to='/invoices'
        className={cn(
          'text-sm font-medium transition-colors hover:text-primary',
          location.pathname !== '/invoices' ? 'text-muted-foreground' : '',
          mobile && 'text-2xl'
        )}
        onClick={handleClose}
      >
        Invoices
      </Link>
      <Link
        to='/clients'
        className={cn(
          'text-sm font-medium transition-colors hover:text-primary',
          location.pathname !== '/clients' ? 'text-muted-foreground' : '',
          mobile && 'text-2xl'
        )}
        onClick={handleClose}
      >
        Clients
      </Link>
    </nav>
  );
};

export default MainNav;
