import { UserIcon } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';
import { auth } from '@/auth';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { signOutWithCredentials } from '@/lib/actions/user';
import { ROUTES } from '@/lib/constants';
import { EMPTY_NAME, SIGN_IN_BUTTON, SIGN_OUT_BUTTON } from './constants';

export const UserButton: FC = async () => {
  const session = await auth();

  if (!session) {
    return (
      <Button asChild>
        <Link href={ROUTES.SIGN_IN}>
          <UserIcon /> {SIGN_IN_BUTTON}
        </Link>
      </Button>
    );
  }

  const { user } = session;
  const { name: userName, email: userEmail } = user ?? {};
  const firstInitial = userName?.charAt(0).toUpperCase() ?? EMPTY_NAME;

  return (
    <div className='flex gap-2 items-center'>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className='flex items-center select-none'>
            <Button
              variant='ghost'
              className='rounded-full relative w-8 h-8 flex-items-center justify-center bg-gray-200'
            >
              {firstInitial}
            </Button>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-56' align='end' forceMount>
          <DropdownMenuLabel className='font-normal'>
            <div className='flex flex-col space-y-1'>
              <div className='text-sm font-medium leading-none'>{userName}</div>
              <div className='text-sm text-muted-foreground leading-none'>
                {userEmail}
              </div>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuItem>
            <form action={signOutWithCredentials} className='w-full'>
              <Button
                className='w-full py-3 px-2 h-4 justify-start'
                variant='ghost'
              >
                {SIGN_OUT_BUTTON}
              </Button>
            </form>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
