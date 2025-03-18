import { IRequestResponse } from '@/types';

export const FormFields = {
  EMAIL: 'email',
  PASSWORD: 'password',
  CALLBACK_URL: 'callbackUrl',
};

export const defaultValues = {
  [FormFields.EMAIL]: 'user@example.com',
  [FormFields.PASSWORD]: '123456',
};

export const initialFormState: IRequestResponse = {
  success: false,
  message: '',
};

export const EMAIL_LABEL = 'Email';
export const PASSWORD_LABEL = 'Password';

export const SIGN_IN_BUTTON = 'Sign In';
export const PENDING_SIGN_IN_BUTTON = 'Signing In...';

export const SIGN_UP_LABEL = "Don't have an account?";
export const SIGN_UP_BUTTON = 'Sign Up';
