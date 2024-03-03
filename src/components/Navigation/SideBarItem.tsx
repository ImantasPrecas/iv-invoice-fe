import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ISideBarItemProps {
  isDesktop: boolean;
  isExpanded: boolean;
  icon: LucideIcon;
  title: string;
  link: string;
}

const SideBarItem = ({
  isDesktop,
  isExpanded,
  icon: Icon,
  title,
  link,
}: ISideBarItemProps) => {
  return (
    <Link
      to={link}
      className={cn(
        `flex items-center py-2 px-4 cursor-pointer transition-colors hover:text-primary`,
        location.pathname !== link ? 'text-muted-foreground' : ''
      )}
    >
      <Icon height={24} width={24} />
      <span
        className={
          isDesktop && isExpanded
            ? 'text-sm ml-6 hover:underline underline-offset-2'
            : 'hidden'
        }
      >
        {title}
      </span>
    </Link>
  );
};

export default SideBarItem;
