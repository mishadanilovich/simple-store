'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { signInWithCredentials } from '@/lib/actions/user';
import { ROUTES } from '@/lib/constants';
import {
  defaultValues,
  EMAIL_LABEL,
  FormFields,
  initialFormState,
  PASSWORD_LABEL,
  PENDING_SIGN_IN_BUTTON,
  SIGN_IN_BUTTON,
  SIGN_UP_BUTTON,
  SIGN_UP_LABEL,
} from './constants';

const SignInForm = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || ROUTES.HOME;

  const [formData, action] = useActionState(
    signInWithCredentials,
    initialFormState
  );

  const SubmitButton = () => {
    const { pending } = useFormStatus();

    return (
      <Button className='w-full' disabled={pending}>
        {pending ? PENDING_SIGN_IN_BUTTON : SIGN_IN_BUTTON}
      </Button>
    );
  };

  return (
    <form action={action}>
      <input type='hidden' name={FormFields.CALLBACK_URL} value={callbackUrl} />
      <div className='space-y-4'>
        <div>
          <Label htmlFor={FormFields.EMAIL}>{EMAIL_LABEL}</Label>
          <Input
            id={FormFields.EMAIL}
            name={FormFields.EMAIL}
            type='email'
            required
            autoComplete='email'
            defaultValue={defaultValues[FormFields.EMAIL]}
          />
        </div>
        <div>
          <Label htmlFor={FormFields.PASSWORD}>{PASSWORD_LABEL}</Label>
          <Input
            id={FormFields.PASSWORD}
            name={FormFields.PASSWORD}
            type='password'
            required
            autoComplete='password'
            defaultValue={defaultValues[FormFields.PASSWORD]}
          />
        </div>

        {formData && !formData.success && (
          <div className='text-center text-destructive'>{formData.message}</div>
        )}

        <div>
          <SubmitButton />
        </div>
        <div className='text-sm text-center text-muted-foreground'>
          {SIGN_UP_LABEL}{' '}
          <Link href={ROUTES.SIGN_UP} target='_self' className='link'>
            {SIGN_UP_BUTTON}
          </Link>
        </div>
      </div>
    </form>
  );
};

export default SignInForm;
