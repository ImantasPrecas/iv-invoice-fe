import { Drawer, DrawerContent, DrawerTrigger } from './ui/drawer';
import { Cross1Icon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import MainNav from './MainNav';
import { useState } from 'react';

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleClose = () => {
        setIsOpen(false)
    }
  return (
    <Drawer open={isOpen} onClose={handleClose}  direction='left'>
      <DrawerTrigger>
        <HamburgerMenuIcon className='h-8 w-8' onClick={()=> setIsOpen(true)}/>
      </DrawerTrigger>
      <DrawerContent className='w-96 h-full'>
        <div className='relative w-full '>
            <Cross1Icon className='absolute h-8 w-8 mt-0 mr-0 right-4 cursor-pointer' onClick={handleClose}/>
          <MainNav handleClose={handleClose} className='absolute flex flex-col w-full space-y-6 top-10' mobile/>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileNav;
