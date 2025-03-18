'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { signUpWithCredentials } from '@/lib/actions/user';
import { ROUTES } from '@/lib/constants';
import {
  CONFIRM_PASSWORD_LABEL,
  defaultValues,
  EMAIL_LABEL,
  FormFields,
  initialFormState,
  NAME_LABEL,
  PASSWORD_LABEL,
  PENDING_SIGN_UP_BUTTON,
  SIGN_IN_BUTTON,
  SIGN_IN_LABEL,
  SIGN_UP_BUTTON,
} from './constants';

export const SignUpForm = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || ROUTES.HOME;

  const [formData, action] = useActionState(
    signUpWithCredentials,
    initialFormState
  );

  const SubmitButton = () => {
    const { pending } = useFormStatus();

    return (
      <Button className='w-full' disabled={pending}>
        {pending ? PENDING_SIGN_UP_BUTTON : SIGN_UP_BUTTON}
      </Button>
    );
  };

  return (
    <form action={action}>
      <input type='hidden' name={FormFields.CALLBACK_URL} value={callbackUrl} />
      <div className='space-y-4'>
        <div>
          <Label htmlFor={FormFields.NAME}>{NAME_LABEL}</Label>
          <Input
            id={FormFields.NAME}
            name={FormFields.NAME}
            type='text'
            required
            autoComplete='name'
            defaultValue={defaultValues[FormFields.NAME]}
          />
        </div>
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
        <div>
          <Label htmlFor={FormFields.CONFIRM_PASSWORD}>
            {CONFIRM_PASSWORD_LABEL}
          </Label>
          <Input
            id={FormFields.CONFIRM_PASSWORD}
            name={FormFields.CONFIRM_PASSWORD}
            type='password'
            required
            autoComplete='confirmPassword'
            defaultValue={defaultValues[FormFields.CONFIRM_PASSWORD]}
          />
        </div>
        <div>
          <SubmitButton />
        </div>

        {formData && !formData.success && (
          <div className='text-center text-destructive'>{formData.message}</div>
        )}

        <div className='text-sm text-center text-muted-foreground'>
          {SIGN_IN_LABEL}{' '}
          <Link href={ROUTES.SIGN_IN} target='_self' className='link'>
            {SIGN_IN_BUTTON}
          </Link>
        </div>
      </div>
    </form>
  );
};
