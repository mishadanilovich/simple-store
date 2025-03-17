import { EllipsisVertical, UserIcon } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { ROUTES } from '@/lib/constants';
import CartButton from '../CartButton';
import ModeToggle from '../ModeToggle';
import { MENU_TITLE } from './constants';

const Menu = () => (
  <div className='flex justify-end gap-3'>
    <nav className='hidden w-full max-w-xs gap-1 md:flex'>
      <ModeToggle />
      <CartButton />
      <Button asChild>
        <Link href={ROUTES.SIGN_IN}>
          <UserIcon /> Sign In
        </Link>
      </Button>
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
            <Button asChild>
              <Link href={ROUTES.SIGN_IN}>
                <UserIcon /> Sign In
              </Link>
            </Button>
            <CartButton />
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  </div>
);

export default Menu;
