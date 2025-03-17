'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { APP_NAME, ROUTES } from '@/lib/constants';

const NotFoundPage = () => (
  <div className='flex min-h-screen flex-col items-center justify-center'>
    <Image
      src='/images/logo.svg'
      alt={`${APP_NAME} logo`}
      width={48}
      height={48}
      priority
    />
    <div className='w-1/3 rounded-lg p-6 text-center shadow-md'>
      <h1 className='mb-4 text-3xl font-bold'>Not Found</h1>
      <p className='text-destructive'>Could not find requested page</p>
      <Button variant='outline' className='ml-2 mt-4' asChild>
        <Link href={ROUTES.HOME}>Back To Homepage</Link>
      </Button>
    </div>
  </div>
);

export default NotFoundPage;
