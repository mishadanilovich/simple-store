import Image from 'next/image';
import Link from 'next/link';
import { APP_NAME, ROUTES } from '@/lib/constants';
import Menu from './components/Menu';

const Header = () => {
  return (
    <header className='w-full border-b'>
      <div className='wrapper flex-between'>
        <div className='flex-start'>
          <Link href={ROUTES.HOME} className='flex-start'>
            <Image
              src='/images/logo.svg'
              alt={`${APP_NAME} logo`}
              height={48}
              width={48}
              priority
            />
            <span className='ml-3 hidden text-2xl font-bold lg:block'>
              {APP_NAME}
            </span>
          </Link>
        </div>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
