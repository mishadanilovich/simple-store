import { EllipsisVertical } from 'lucide-react';
import { CartButton } from '@/components/shared/CartButton';
import { ModeToggle } from '@/components/shared/ModeToggle';
import { UserButton } from '@/components/shared/UserButton';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { MENU_TITLE } from './constants';

const Menu = () => (
  <div className='flex justify-end gap-3'>
    <nav className='hidden w-full max-w-xs gap-2 md:flex'>
      <ModeToggle />
      <CartButton />
      <UserButton />
    </nav>
    <nav className='flex align-middle gap-3 md:hidden'>
      <ModeToggle />
      <Sheet>
        <SheetTrigger className='align-middle'>
          <EllipsisVertical />
        </SheetTrigger>
        <SheetContent className='flex flex-col items-start'>
          <SheetTitle>{MENU_TITLE}</SheetTitle>
          <div className='flex w-full justify-between'>
            <UserButton />
            <CartButton />
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  </div>
);

export default Menu;
