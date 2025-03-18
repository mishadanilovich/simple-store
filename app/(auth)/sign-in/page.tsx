import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { FC } from 'react';
import { auth } from '@/auth';
import SignInForm from '@/components/forms/SignIn';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { APP_NAME, ROUTES } from '@/lib/constants';
import {
  METADATA_TITLE,
  SIGN_IN_DESCRIPTION,
  SIGN_IN_TITLE,
} from './constants';
import { IProps } from './types';

export const metadata: Metadata = {
  title: METADATA_TITLE,
};

const SignInPage: FC<IProps> = async ({ searchParams }) => {
  const { callbackUrl } = await searchParams;

  const session = await auth();
  if (session) return redirect(callbackUrl || ROUTES.HOME);

  return (
    <div className='w-full max-w-md mx-auto'>
      <Card>
        <CardHeader className='space-y-4'>
          <Link href={ROUTES.HOME} className='flex-center'>
            <Image
              src='/images/logo.svg'
              alt={`${APP_NAME} logo`}
              width={80}
              height={80}
              priority
            />
          </Link>
          <CardTitle className='text-center'>{SIGN_IN_TITLE}</CardTitle>
          <CardDescription className='text-center'>
            {SIGN_IN_DESCRIPTION}
          </CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <SignInForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default SignInPage;
