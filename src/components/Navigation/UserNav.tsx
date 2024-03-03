import { Form, useRouteLoaderData } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { ISession } from '@/lib/utils';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

const UserNav = () => {
  const { session } = useRouteLoaderData('root') as { session: ISession };
  const userInitials = `${session.firstName[0]}${session.lastName[0]}`;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' className='relative h-8 w-8 rounded-full'>
          <Avatar className='h-8 w-8'>
            <AvatarImage />
            <AvatarFallback>{userInitials}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56' align='end' forceMount>
        <DropdownMenuLabel className='font-normal'>
            <div className='flex flex-col space-y-1'>
                <p className='text-sm font-medium leading-none'>{session.firstName} {session.lastName}</p>
                <p className='text-xs leading-none text-muted-foreground'>example@example.lt</p>
            </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator/>
        <DropdownMenuGroup>
            <DropdownMenuItem>
                <Link className='w-full' to='/profile'>Profile</Link>
            </DropdownMenuItem>
        <DropdownMenuSeparator/>
        <DropdownMenuItem>
            <Form action='/logout' className='w-full'>
                <Button variant='ghost' type='submit' className='pl-0 w-full justify-start'>Logout</Button>
            </Form>
        </DropdownMenuItem>
        </DropdownMenuGroup>
        
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserNav;
